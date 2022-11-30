# LIFF 

## 說明
LINE Front-end Framework (LIFF) 是 LINE 提供的前端應用程式框架，可以在 LINE 內運行網頁 APP，藉由 LIFF 應用程式來取得 LINE 相關的用戶資訊以便後續的操作。

## 流程
-  [LINE Develop console] 創建「LINE Login」頻道且新增「LIFF」服務，取得 `LIFF ID`。
-  專案加上 [LIFF SDK]
    ```html
    <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
    ```
- 使用「LIFF ID」操作 [LIFF 相關 API]

## 開發工具
### **[NGROK]** 將本機 url 變成「外部」可以連結

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


## Reference
[NGROK]: https://ngrok.com/
[vConsole]: https://www.npmjs.com/package/vconsole/v/3.15.0
[LIFF 相關 API]: https://developers.line.biz/en/reference/liff/
[LIFF SDK]: https://developers.line.biz/en/docs/liff/versioning-policy/#:~:text=%23-,LIFF%20SDK%20(sdk.js)%20update%20policy,-Since%20the%20LIFF
[LINE Develop console]: https://developers.line.biz/console/
- [LINE Front-end Framework (LIFF)](https://developers.line.biz/en/docs/liff/overview/)