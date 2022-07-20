# Cookie

[http]: http.md
[https]: https.md
[互動式網路應用]: https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F

由於 [HTTP] 本身是無狀態的，`服務端` 根本不知道使用者上次做了什麼事，這嚴重影響到 [互動式網路應用] 的實現。
常見的例子，就是使用者在購物網站，買了 `產品a` 、`產品b` ，但在結帳時，因為 **無狀態** 而 `服務端` 根本不知道使用者買什麼東西。
而 `Cookie` 就是為了繞開這個 **無狀態** 而生的技術，讓 `服務端` 可以藉由取得 **請求** 的 `Coookie` 來取得保存在 `客戶端` 的資料。

## 特性

- 無法跨站取得 (`domain` 但不完全可信)
- 會保存在瀏覽器上
- 大小 4kb
- 可設定刪除時間

## 常用場景

- **會員登入**

  藉由 `Cookie` 的 `id`，在 `服務端` 取得 `session` 資料。

- **購物車**

## 缺點

- `Cookie` 會跟著每次 **請求** 附加上去，所以會增加傳輸流量。
- 在 [HTTP] 時 `Cookie` 是明文傳輸，這會有安全性的問題，必須使用 [HTTPS] 來避免。
- 容量 4kb 對於復雜的資料保存是不足的。

## 安全性

雖然指定 `domain` 與 `path` 的屬性，需要符合條件 **服務器** 才可以取得 `cookie` 資料，但[規範](https://greenbytes.de/tech/webdav/draft-ietf-httpstate-cookie-04.html#rfc.section.4.1.2.3)也有提到不能依賴 `path` 屬性來保證安全。

> Although seemingly useful for isolating cookies between different paths within a given host, the Path attribute cannot be relied upon for security.

```
test_id=1111111; domain=google.com; path=/
```

假設 **cookie** 的屬性為 `Path=/` `Domain=google.com`，則在 `drive.google.com`、`mail.google.com` 都可以 `http` 取得 **cookie** 資料。

- **[XSS 跨站腳本攻擊](/security/xss)**
- **[CSRF 偽造請求功](/security/csrf)**

## Reference

- [簡介 Cookie](https://ithelp.ithome.com.tw/articles/10217955)
- [WIKI](https://zh.wikipedia.org/wiki/Cookie)
