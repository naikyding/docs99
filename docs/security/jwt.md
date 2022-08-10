# JWT 身份驗證機制

:::tip 簡單說
「JWT」就是 `用戶端` 請求資源的通行證。
:::

<details>
  <summary>流程圖解</summary>

  ![](/security/img/jwt-flow.jpg)

</details>




## 說明
JWT (JSON WEB TOKEN) 基於 [RFC 7519](https://tools.ietf.org/html/rfc7519) 規範，定義了一種 `json object` 透過加密技術產生的「簽章」， `服務端` 與 `客戶端` 藉由這個「簽章」身份驗證與取得信任。

`服務端` 在驗證 `用戶端` 後，會發予一個「JWT」token。 `用戶端`  在與 `服務端` 請求任何資源時，都需要帶上這個「JWT」token，供 `服務端` 做身份的驗證，只要「有效」就可以獲取資源。

![](/security/img/jwt-oauth.png)

## 技術
![](/security/img/jwt-json.png)
JWT 是由 `.` 將字串分割為三個部分 `xxxxx.yyyyy.zzzzz` :
- **Header 聲明** `json`

  - JWT 解密的演算法
  - 簽章類型
    ```json
    {
    	alg: 'HS256',
    	type: 'JWT'
    }
    ```

- **Payload 傳遞資料** `json`

  ```json
  {
  	exp: '過期時間',
  	iat: 'JWT 簽發時間',
  	// 簽章要傳遞的資料...
  	// role: '權限角色'
  }
  ```

- **Verify** **Signature 簽章驗證**

  說明創建簽章的方式，必須由 `header` 加上 `.` 加上 `payload` 加上 `secret` ，再使用指定的演算法來加密，以下面的例子就是使用 `HMAC SHA256` 演算法創建 JWT 的。
  
  ```json
  HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret)
  ```
  
  主要可以辨視 JWT 有沒有被修改過，可以驗證 JWT 是否合法。

## 流程

- `客戶端` 登入成功， `服務端` 發送「JWT」
- `客戶端` 存放「JWT」
- `客戶端` 向 `服務端` 請求資源時，在 `header` 標頭寫上 JWT
  ```jsx
  Authorization: <Bearer> <JWT TOKEN>
  ```

- `服務端` 驗證 `header` 標頭 JWT
  - 成功: 返回「請求資源」
  - 失敗: 通知「驗證失敗」

:::tip 為什麼要加 Bearer ?
HTTP 認證標頭「Authorization」的寫法，必須要在 token 前加上 type，基於 [RCF6750](https://datatracker.ietf.org/doc/html/rfc6750) 規範，而JWT 是搭配 `Bearer` 型態。
:::

## 好處
- **無狀態** JWT 不在 `服務端` 儲存數據。
- **廣展性佳** 當 `服務端` 分布式部署情況下，不需要像 `session` 方式，做多機數據共享。

## 壞處
- **安全性** 不可放敏感資料在 JWT Token。
- **一次性** 當 payload 資料修改，就必須重簽章 JWT Token。

## Reference

- [JWT.IO](https://jwt.io/)

- [JWT(JSON Web Token) - 原理介紹](https://medium.com/%E4%BC%81%E9%B5%9D%E4%B9%9F%E6%87%82%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88/jwt-json-web-token-%E5%8E%9F%E7%90%86%E4%BB%8B%E7%B4%B9-74abfafad7ba)

- [是誰在敲打我窗？什麼是 JWT ？](https://5xruby.tw/posts/what-is-jwt)

- [JWT.IO - JSON Web Tokens Introduction](https://jwt.io/introduction)

- [Bearer 說明](https://ithelp.ithome.com.tw/articles/10197166#:~:text=Error%20%E9%8C%AF%E8%AA%A4%E8%A8%8A%E6%81%AF-,JWT%20%E5%92%8C%20Bearer%20Token%20%E7%9A%84%E9%97%9C%E4%BF%82,%E5%B0%B1%E4%B8%8D%E5%A4%9A%E8%B4%85%E8%BF%B0%EF%BC%8C%E6%9C%AC%E7%AF%87%E5%8F%AA%E6%9C%83%E8%AA%AA%E6%98%8E%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95%E8%B7%9F%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85%E3%80%82,-Authentication%20schemes%EF%BC%9A)

- [Day 19 - 二周目 - 帳密認証與JWT (JSON Web Token)傳遞](https://ithelp.ithome.com.tw/articles/10203292)