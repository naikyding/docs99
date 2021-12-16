# CSRF 跨站偽造請求

CSRF (Cross-site request forgery) 跨站偽造請求，**駭客** 利用使用者在 **A 網** 已驗証的身份，在使用者進入 **第三網 (駭客架設)** 時，發起對 **A 網** 隱藏式的請求指令 **達成指定目的**，而非透過 **使用者** 的意願。
![creativegroundtech](/security/img/cross-site-request-forgery.webp)

> 圖片出處：creativegroundtech

1. 登入 **銀行網**
2. (成功) 取得使用者認證資料
3. 駭客發送 `釣魚網站` 或 `惡意連結` 給使用者
4. 使用者到 **駭客網站** 不知情下，送出了到 **銀行網** 的指令請求
5. 銀行依 2 取得的身份驗証，成功執行請求。

:::tip 瀏覽器機制
當發出 **請求** 給某個網域，其網域關聯的 `cookie` 也會一起被帶上 **請求** 之中，所以駭客就是利用 `cookie`中已驗證的身份，發動攻擊。
:::

## 攻擊方式

### GET

假設後台的 **刪除** 功能，可以直接以 `/delete?id=3` 來刪除 `id=3`的項目。理論上，使用者必須先驗證過個人資料，且在後台操作才會執行 **刪除**。

```html
<a href="/delete?id=3"> 刪除 </a>
```

<table>
  <tr>
    <td>標題</td>
    <td>更新時間</td>
    <td>操作</td>
  </tr>
  <tr>
    <td>這是資料</td>
    <td>2021-12-15</td>
    <td><button>刪除</button></td>

  </tr>
</table>

#### 駭客行為

在使用者已登入過後台的情況下，對你發送 **釣魚網站** 、 **惡意連結**，在惡意網站內或連結中，寫入下面內容 (假設 後台 網址：`https://www.admin.com`)：

- **被動**

  進入網站後 「點擊」 執行 **請求**

  ```html
  <a href="https://www.admin.com/delete?id=3">開始測驗</a>
  ```

  <a>開始測驗</a>

  當你點下時，就是到了 `https://www.admin.com` 且送出了 **DELETE** 指令，刪除了某個東西。

- **主動**

  進入網站時，就 **自動送出請求**

  ```html
  <img src="https://www.admin.com/delete?id=3" width="0" height="0" />
  <a href="/test">開始測驗</a>
  ```

  將 `<img>` 設為 **隱藏**，當網站進入後，就會請求 `url`，在不知情下就被攻擊了。

### POST

如果**刪除功能** 是 ` POST`，駭客也可以使用 `<form>` 來主動提交表單，這是藉由 `<iframe>` 來隱藏 `<form>` 的表單顯示。[stackoverflow](https://stackoverflow.com/questions/17940811/example-of-silently-submitting-a-post-form-csrf)

```html {1,3,4,8,13}
<iframe style="display:none" name="csrf-frame"></iframe>
<form
  method="POST"
  action="https://www.admin.com/delete"
  target="csrf-frame"
  id="csrf-form"
>
  <input type="hidden" name="id" value="3" />
  <input type="submit" value="submit" />
</form>

<script>
  document.getElementById('csrf-form').submit()
</script>
```

> 當進入網站，就送出表單。

### JSON 傳送

常見與後端溝通的 `json` ，也是有機會被攻擊，主要是透過 **字元** 組合達到指定的 `json` 樣式。

```html {4}
<form
  action="https://small-min.blog.com/delete"
  method="post"
  enctype="text/plain"
>
  <input name='{"id":3, "ignore_me":"' value='test"}' type="hidden" />
  <input type="submit" value="delete!" />
</form>
```

會產生這樣的 **請求** body

```js
{
  "id": 3,
  "ignore_me": "=test"
}
```

:::tip 提醒
但這個攻擊，是發生在 **Content-Type:** `text/plain` 的情況下，如果 **服務端** 有限定類型，是可以避免這個部分。
:::

## 防禦方式

### 使用者

一般來說 **CSRF** 都是發生在使用者己經登入的狀態，才能發動偽造的請求。如果真的要避免，就是使用完網站就登出，這樣是可以避免，但不是很符合人性。

### 前端

- **圖形化驗證**

  在操作頁加上 **圖形化驗証** ，「驗証成功」才可以請求操作，增加了發送請求的難度。

- **Cookie SameSite 同源設置**

  在設置 `cookie` 時，加上 `SameSite=Strict` 會將 Cookie 限制在的 **同源** (當下設置 cookie 的 `domain` 才可以取得) 情況下使用。

  :::tip 提醒
  `SameSite` 的設置，還會影響寫入!!
  :::

### 後端

- **檢查 Referer**

  `request` 的 `Referer` 可以看到發出請求的來源網址，**服務端** 可以由這位部分來判斷是不是合法的 `domain`。

- **隱藏的 `CSRF TOKEN` 欄位**

  在 `<form>` 表單裡，安插一個 **隱藏**的 `_csrf` 欄位，而這個欄位的值就是由 **服務端** 所提供的「金鑰 `token`」，每次提交 **請求** 時，都會核對這個欄位的「值」是否與 **服務端** `session` 的 `token` 相符。
  且每次進都都會重新產生「金鑰」。

  ```html {3}
  <form action="https://small-min.blog.com/delete" method="POST">
    <input type="hidden" name="id" value="3" />
    <input type="hidden" name="_csrf" value="1Zad3aedfaZdadfw" />
    <input type="submit" value="送出" />
  </form>
  ```

  :::tip 提示
  `express` 針對 `CSRF` 防範的工具 「 [csurf](https://github.com/expressjs/csurf) 」，就是使用這個作法。
  :::

  :::warning 注意
  若你的 **服務端**，沒有限制發請求的 `domain`，還是有可能被駭客拿到這個 `token`。
  :::

## 結論

其實最主要的防範方式，還是要 **CSRF 驗証機製** 加上 **請求來源** 來把關，更多層的機制「傷害」可以越低。

## Reference

- [讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)
- [全端勇士之路 Node.js 基礎學習-CSRF 篇](https://hsiangfeng.github.io/nodejs/20190704/2336420619/)
- [imperva - Cross site request forgery (CSRF) attack](https://www.imperva.com/learn/application-security/csrf-cross-site-request-forgery/)
- [Referer WIKI](https://zh.wikipedia.org/wiki/HTTP%E5%8F%83%E7%85%A7%E4%BD%8D%E5%9D%80)
- [SameSite Cookie，防止 CSRF 攻击](https://www.cnblogs.com/ziyunfei/p/5637945.html)
- [[Day 26] Cookies - SameSite Attribute](https://ithelp.ithome.com.tw/articles/10251288)
- [網站安全 🔒 再探同源政策，談 SameSite 設定對 Cookie 的影響與注意事項](https://medium.com/%E7%A8%8B%E5%BC%8F%E7%8C%BF%E5%90%83%E9%A6%99%E8%95%89/%E5%86%8D%E6%8E%A2%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-%E8%AB%87-samesite-%E8%A8%AD%E5%AE%9A%E5%B0%8D-cookie-%E7%9A%84%E5%BD%B1%E9%9F%BF%E8%88%87%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85-6195d10d4441)
