# [前端] 產生 Apple 登入按鈕

## 說明
可以使用 Apple 提供的 SDK 函式庫方法，在前端生成登入按鈕，進而取得使用者的 `id_token` 交給後端來驗證處理。

## 流程

### 1️⃣ 建立 apple 憑證

取得 `clientID` 與 Apple API 授權操作。

### 2️⃣ 載入 apple 函式庫

若為 vue 可以在 `public/index.html` 載入

```jsx
<script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
```

### 3️⃣ 顯示 apple 登入按鈕

- Javascript 方法
    
    [操作指南](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/configuring_your_webpage_for_sign_in_with_apple) 
    
    `javascript` 的配置方法會覆蓋 `meta` 的 apple 配置，
    
    ```html
    <!-- 載入 apple 函式庫 (public/index.html) -->
    <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
    ```
    
    ```html
    <template>
    	<!-- 渲染按鈕元素 -->
    	<div id="appleid-signin"></div>
    </template>
    ```
    
    ```jsx
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
- Html 方法
    
    ```jsx
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
            <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div>
            <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
        </body>
    </html>
    ```
    
    <aside>
    ✏️ `appleid-signin-redirect-uri` 必須是有 domain，不可以是 IP 位址或 `[localhost](http://localhost)`
    
    </aside>
    
- 按鈕調整

### 4️⃣ 響應處理

- redirectUrl 重定向
    
    若有設置 `[redirectURI](https://developer.apple.com/documentation/sign_in_with_apple/clientconfigi/3230952-redirecturi)` ，當點擊登入授權後，會發起 http POST 到設置的重定向網址，資料會在 `body` 內。
    
    - **響應 body**
        
        `code`
        
        A single-use authentication code that expires after five minutes. To learn how to validate this code to obtain user tokens, see [Generate and validate tokens](https://developer.apple.com/documentation/sign_in_with_apple/generate_and_validate_tokens).
        
        `id_token`
        
        A JSON web token (JWT) containing the user’s identification information. For more information, see [Retrieve the user’s information from Apple ID servers](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_rest_api/authenticating_users_with_sign_in_with_apple#3383773).
        
        `state`
        
        An arbitrary string passed by the `[init](https://developer.apple.com/documentation/sign_in_with_apple/authi/3230945-init)` function, representing the current state of the authorization request. This value is also used to mitigate cross-site request forgery attacks, by comparing against the state value contained in the authorization response.
        
        `user`
        
        A JSON string containing the data requested in the `[scope](https://developer.apple.com/documentation/sign_in_with_apple/clientconfigi/3230955-scope)` property. The returned data is in the following format:
        
        `{ "name": { "firstName": string, "lastName": string }, "email": string }`
        
- callback 事件監聽
    
    若是使用 popup 授權方法，apple 會將事件放在 dom 之中，使用者操作授檢視窗後，你需要監聽指定的物件模型來得到使用者操作授權的結果。
    
    ```jsx
    // 若授權成功
    document.addEventListener('AppleIDSignInOnSuccess', (event) => {
        // Handle successful response.
        console.log(event.detail.data);
    });
    
    // 若授權失敗
    document.addEventListener('AppleIDSignInOnFailure', (event) => {
         // Handle error.
         console.log(event.detail.error);
    });
    ```
    
    - **響應 body**
        
        資料可以由 `event.detail.authorization` 取得。
        
        ```jsx
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