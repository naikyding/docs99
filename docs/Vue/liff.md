# LIFF 應用程式

## 說明
LINE Front-end Framework (LIFF) 是 LINE 提供的前端應用程式框架，可以在 LINE 內運行網頁 APP，藉由 LIFF 應用程式來取得 LINE 相關的用戶資訊以便後續的操作。

## 流程
-  [LINE Develop console] 創建「LINE Login」頻道且新增「LIFF」服務，取得 `LIFF ID`。
-  專案加上 [LIFF SDK]，`liff` 將會被掛載在 `window.liff`。
    ```html
    <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
    ```
- 使用「LIFF ID」操作 [LIFF 相關 API]

## 開發工具
### **[NGROK]** 將本機 url 變成「外部」可以連結

:::details 顯示內容
  **本地方法**
  ```bash
  ngrok http 8000
  ```
  **容器方法**
  ```docker
  docker run -it -e NGROK_AUTHTOKEN=<Token> ngrok/ngrok http 8080
  ```

  :::warning 注意
  - [NGROK] 登入後可以取得個人 `token`
  - [NGROK] 免費帳號，本地 url 無法使用 `ssl`，且 `vue` 開發服務器要充許外部使用。

    **vue.config.js**
    ```js {2}
    devServer: {
      disableHostCheck: true,  // 開發服務器允許外部使用
  	// https: {
      //   key:
      //     process.env.NODE_ENV === 'development'
      //       ? fs.readFileSync(path.join(__dirname, '/localhost-key.pem'))
      //       : '',
      //   cert:
      //     process.env.NODE_ENV === 'development'
      //       ? fs.readFileSync(path.join(__dirname, '/localhost.pem'))
      //       : '',
      // },
    }
    ```
:::
### **[vConsole]** 手機端 debug 工具

:::details 顯示內容
  **安裝**
  ```bash
  npm i vconsole
  ```

  **使用**
  ```js
  import VConsole from 'vconsole'

  const vConsole = new VConsole({ theme: 'dark' }) // 啟動

  vConsole.destroy() // 移除
  ```
:::
## 常用 API

### LIFF 初始化 `liff.init`
在初始化之後，才能進行後續的其它 API 操作。

```js
// Using a Promise object
liff
  .init({
    liffId: "123456-abcedfg", // Use own liffId
  })
  .then(() => {
    // Start to use liff's api
  })
  .catch((err) => {
    // Error happens during initialization
    console.log(err.code, err.message);
  });

// Using a callback
liff.init({ liffId: "123456-abcedfg" }, successCallback, errorCallback);
```

:::tip 提醒
初始化也關係到網址「重新導向」的議題，如果有這樣的困擾，就把初始化放在「最入口」端先執行。
:::

### 是否在 LIFF 瀏覽器 `liff.isInClient`
用來判斷當前的 LIFF APP 是否在 LIFF 瀏覽器開啟的狀態。

```js
liff.isInClient()
```

### 是否登入 LINE `liff.isLoggedIn`
判斷當下是否已經 LINE 登入的狀態。

```js
if (liff.isLoggedIn()) {
  // The user can use an API that requires an access token, such as liff.getProfile().
}
```

### 登入 LINE `liff.login`
在外部瀏覽器或 LINE 內部瀏覽器執行登入的功能。

```js
if (!liff.isLoggedIn()) {
  liff.login()
}
```

:::warning 注意
不能在 LIFF 瀏覽器內，使用 `liff.login`，因為 `liff.init` 時，它就會自動執行了。
:::

### 取得使用者 ID Token `liff.getIDToken`
可以由這個方法，取得當前用戶的 JWT 令牌， `後端` 再由這個令牌取得使用者的相關資料。

```js {6}
liff
  .init({
    liffId: "123456-abcedfg", // Use own liffId
  })
  .then(() => {
    const idToken = liff.getIDToken();
    console.log(idToken); // print raw idToken object
  });
```

### 取得當前用戶基本資料 `liff.getProfile`


```js
liff
  .getProfile()
  .then((profile) => {
    const name = profile.displayName;
  })
  .catch((err) => {
    console.log("error", err);
  });
```

**profile value:**
```json
{
  "userId": "U4af4980629...",
  "displayName": "Brown",
  "pictureUrl": "https://profile.line-scdn.net/abcdefghijklmn",
  "statusMessage": "Hello, LINE!"
}
```

## Reference
[NGROK]: https://ngrok.com/
[vConsole]: https://www.npmjs.com/package/vconsole/v/3.15.0
[LIFF 相關 API]: https://developers.line.biz/en/reference/liff/
[LIFF SDK]: https://developers.line.biz/en/docs/liff/versioning-policy/#:~:text=%23-,LIFF%20SDK%20(sdk.js)%20update%20policy,-Since%20the%20LIFF
[LINE Develop console]: https://developers.line.biz/console/
- [LINE Front-end Framework (LIFF)](https://developers.line.biz/en/docs/liff/overview/)
- [LINE Develop console]
- [LIFF 相關 API]
- [您需要了解有關新 LIFF URL 的所有資訊](https://engineering.linecorp.com/zh-hant/blog/new-liff-url-infomation/)
- [LINE LIFF v2 的 replace 模式即將被移除及建議程式寫法](https://taichunmin.idv.tw/blog/2021-01-19-line-liff-v2-replace-deprecated.html)
- [LINE經營進階篇｜line liff應用、liff教學及如何從 line developer 建立 Line LIFF](https://www.ezpretty.com.tw/blog/inner?id=43&title=LINE%E7%B6%93%E7%87%9F%E9%80%B2%E9%9A%8E%E7%AF%87%EF%BD%9Cline%20liff%E6%87%89%E7%94%A8%E3%80%81liff%E6%95%99%E5%AD%B8%E5%8F%8A%E5%A6%82%E4%BD%95%E5%BE%9E%20line%20developer%20%E5%BB%BA%E7%AB%8B%20Line%20LIFF)