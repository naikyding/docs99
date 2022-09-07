# [前端] 產生 Apple 登入按鈕

:::tip 操作必備:
- 合法操作 API 的 `clientID`
- 設置合法操作 API 網域 (不可為 IP、localhost)
- 設置合法 `redirectUrl` (不可為 IP、localhost)
:::

## 說明
可以使用 Apple 提供的 SDK 函式庫方法，在前端生成登入按鈕，進而取得使用者的 `id_token` 交給後端來驗證處理。

## 流程
### 1️⃣ 建立 Apple 憑證
取得 `clientID` 與 Apple API 授權操作。 ( [加入 Apple 開發者計劃](/Browser/register-apple-dev) )

### 2️⃣ 載入 apple 函式庫

若為 vue 可以在 `public/index.html` 載入，或動態載入 `<script />`

```html
<script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
```

### 3️⃣ 顯示 apple 登入按鈕

:::details Javascript 方法
  [操作指南](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/configuring_your_webpage_for_sign_in_with_apple) 

  ```html
  <!-- 載入 apple 函式庫 (public/index.html) -->
  <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
  ```

  **template** 
  需要設有 `id="appleid-signin"` 供 SDK 涵式庫渲染按鈕。
  ```html
  <template>
    <!-- 渲染按鈕元素 -->
    <div id="appleid-signin"></div>
  </template>
  ```

  **javascript**

  Apple 登入功能必須要初始化，才會產生按鈕。
  ```html{10-17}
  <script>
  export default {
    mounted() {
      // 初始化 apple 登入按鈕功能
      this.appleAuthInit()
    },
  
    methods: {
      appleAuthInit() {
        window.AppleID.auth.init({
            clientId: "com.gioco.apple.login",
            scope: "name email",
            redirectURI: "[REDIRECT_URI]",
            state: "[STATE]",
            nonce: "[NONCE]",
            usePopup: true,
        });
      }
    }
  };
  </script>
  ```

  **說明** [官方說明](https://www.notion.so/ada6ee57fb2a4f22b955513369e130dd)

  - `clientId` 操作 apple 的授權
  - `scope` 請求資料的範圍，多個範圍以空格分開 `"scope=name email"`  [🔗](https://developer.apple.com/documentation/sign_in_with_apple/clientconfigi/3230955-scope)
  - `redirectURI` 授權後的重定向的 url (不可為 ip 、 localhost)
  - `state` 請求當前的狀態
  - `nonce` 在請求前結束前，不可再次請次，避免被多次請求
  - `usePopup` 是否使用彈窗模式

:::danger 注意
  `javascript` 的配置方法會覆蓋 `meta` 的 apple 配置。
:::

::: details html 方法
  - 載入 SDK script
  - meta Apple 設置
  - 渲染按鈕設置

  ```html{3-8,11-16}
  <html>
      <head>
          <meta name="appleid-signin-client-id" content="[CLIENT_ID]">
          <meta name="appleid-signin-scope" content="[SCOPES]">
          <meta name="appleid-signin-redirect-uri" content="[REDIRECT_URI]">
          <meta name="appleid-signin-state" content="[STATE]">
          <meta name="appleid-signin-nonce" content="[NONCE]">
          <meta name="appleid-signin-use-popup" content="true">
      </head>
      <body>
          <div 
            id="appleid-signin" 
            data-color="black" 
            data-border="true" 
            data-type="sign in"
          />
          <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
      </body>
  </html>
  ```
    
  :::tip 提示
  ✏️ `appleid-signin-redirect-uri` 必須是有 domain，不可以是 IP 位址或 `[localhost](http://localhost)`
:::

### 4️⃣ 響應處理
有兩種方式，再依設置的方式來處理響應資料，大多是 **監聽事件** 來獲取 `id_token`。


:::details ✅ callback 事件監聽
  若是使用 popup 授權方法，apple 會將事件放在 dom 之中，使用者操作授檢視窗後，你需要監聽指定的物件模型來得到使用者操作授權的結果。

  ```js
  // 若授權成功
  document.addEventListener('AppleIDSignInOnSuccess', (event) => {
    // Handle successful response.
    console.log(event.detail.authorization.id_token)
  })

  // 若授權失敗
  document.addEventListener('AppleIDSignInOnFailure', (event) => {
    // Handle error.
    console.log(event.detail.error);
  })
  ```

  **響應 body**:

  資料可以由 `event.detail.authorization` 取得。
  
  ```json
  {
    "authorization": {
      "code": "[CODE]",
      "id_token": "[ID_TOKEN]",
      "state": "[STATE]"
    },
    "user": {
      "email": "[EMAIL]",
      "name": {
        "firstName": "[FIRST_NAME]",
        "lastName": "[LAST_NAME]"
      }
    }
  }
  ```
:::

:::details redirectUrl 重定向
  若有設置 [redirectURI](https://developer.apple.com/documentation/sign_in_with_apple/clientconfigi/3230952-redirecturi) ，當點擊登入授權後，會發起 http POST 到設置的重定向網址，資料會在 `body` 內。

  **響應 body:**

  - `code`

    A single-use authentication code that expires after five minutes. To learn how to validate this code to obtain user tokens, see [Generate and validate tokens](https://developer.apple.com/documentation/sign_in_with_apple/generate_and_validate_tokens).
  
- `id_token`

  A JSON web token (JWT) containing the user’s identification information. For more information, see [Retrieve the user’s information from Apple ID servers](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api/authenticating_users_with_sign_in_with_apple#3383773).
  
- `state`

  An arbitrary string passed by the [init](https://developer.apple.com/documentation/sign_in_with_apple/authi/3230945-init) function, representing the current state of the authorization request. This value is also used to mitigate cross-site request forgery attacks, by comparing against the state value contained in the authorization response.
  
- `user`

  A JSON string containing the data requested in the [scope](https://developer.apple.com/documentation/sign_in_with_apple/clientconfigi/3230955-scope) property. The returned data is in the following format:

  ```json
  { "name": { "firstName": string, "lastName": string }, "email": string }
  ```
:::

## DEMO

<iframe src="https://codesandbox.io/embed/web-apple-signin-button-5vecbc?fontsize=14&hidenavigation=1&theme=dark"
 style="width:100%; height:180px; border:0; border-radius: 4px; overflow:hidden;"
 title="[web] apple-signin-button"
 allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
 sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

:::details CODE
```html
<script>
export default {
  mounted() {
    window.AppleID.auth.init({
      clientId: "com.xxxx.xxxx.login",
      scope: "name email",
      redirectURI: "[REDIRECT_URI]",
      usePopup: true,
    })
  },
}
</script>

<template>
  <div style="display: flex; justify-content: center">
    <div id="appleid-signin" data-mode="logo-only" data-width="300px"></div>
  </div>
</template>
```
:::

## Reference
- [Apple SignIn Button CI 規範](https://developer.apple.com/design/human-interface-guidelines/technologies/sign-in-with-apple/buttons/)
- [Apple SignIn Button 風格配置說明](https://developer.apple.com/documentation/sign_in_with_apple/displaying_sign_in_with_apple_buttons_on_the_web)
- [Apple SignIn Button 顯示方法指南](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/configuring_your_webpage_for_sign_in_with_apple)
- [Apple SignIn Button 生成按鈕線上工具](https://appleid.apple.com/signinwithapple/button)
- [Sign in with Apple 說明頁](https://developer.apple.com/sign-in-with-apple/) 
- [web端接入apple Sign in流程](https://blog.xiaomo.info/2020/webAppleSignIn/)
- [Sign with in Apple，网站配置 Apple 登录](https://doofox.cn/sign-with-in-apple.html)
- [教你在 Node.js 项目中接入 Sign with Apple 第三方登录 - 掘金](https://juejin.cn/post/6844903976278704142)
- [[Vue] Vue 串接 Apple 第三方登入 @Hazel](https://22mm-docusaurus.vercel.app/docs/Vue/oauth-apple)