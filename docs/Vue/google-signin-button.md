# [前端] 產生 Google 登入按鈕

## 說明
Google 第三方登入，通常有兩種作法: 
- **後端主控:**

  「前端」轉址到後端，「後端」與 google 互動完；轉址回前端，「前端」由 url 取得 token 來驗證使用者。

- **前端 + 後端:**

  「前端」取得 google `id_token` 後，打 api 傳給「後端」驗證身份後回傳資料。
  這個方法是載入 `google` 提供的函式庫方法，再藉此生成「登入」按鈕及相關操作。

## 流程

以下流程為「前端」依 `google` 提供 SDK 取得 `id_token` 的方式，再傳給「後端」的作法。

### 1️⃣ 申請 Google Oauth2 ClientID [🔗](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiC5N3gkfD5AhWdwYsBHZWPC7oQFnoECAcQAQ&url=https%3A%2F%2Fconsole.cloud.google.com%2F%3Fhl%3Dzh-TW&usg=AOvVaw0RuyBPGutNP0dN_EgZVQoy)

### 2️⃣ Google 帳戶登入指南 [🔗](https://developers.google.com/identity/gsi/web?hl=zh-tw)

### 3️⃣ client 端載入 google sdk 方法

若是使用 vue cli 可以寫在 `public/index.html` 的 `<head>` 內，或者動態載入 `<script>`。 

```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

### 4️⃣ 顯示 google 登入按鈕

在設置好 `clientID` 、載入 `<script>` 後，就可以在選擇在 `html` 或 `javascript` 在頁面上顯示按鈕。**建議選擇一種作法!**

:::details Html 方法:

```html
<script src="https://accounts.google.com/gsi/client" async defer></script>

<!-- 初始化 google 登入 -->
<div id="g_id_onload"
	data-client_id="YOUR_GOOGLE_CLIENT_ID"
  data-login_uri="https://your.domain/your_login_endpoint"
  data-auto_prompt="false">
</div>

<!-- 渲染按鈕 -->
<div class="g_id_signin"
	data-type="standard"
	data-size="large"
	data-theme="outline"
	data-text="sign_in_with"
	data-shape="rectangular"
	data-logo_alignment="left">
</div>
```

:::danger 注意
若是使用 `redirectUrl`，只能使用這個方法。
:::


:::details Javascript 方法:
若有 `callback` 函式，這是推薦的方法。

javascript:
```js {4-9,12-18}
export default {
	mounted() {
    // 初始化 google 登入功能
    window.google.accounts.id.initialize({
      client_id:
        "12661710117-eg057jq34cqfpnv76c3ktrh7lvqb76sa.apps.googleusercontent.com",
      callback: this.handleCredentialResponse,
      auto_select: false,
    });

    // 渲染登入按鈕
    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInBtn"),
      { theme: "outline", size: "large" } // customization attributes
    );
    // 顯示 google ONE TAP 登入對話框
    // window.google.accounts.id.prompt(); // also display the One Tap dialog
	},

	methods: {
		// 回調函式
		handleCredentialResponse(data) {
      console.log(data);
    },
	}
}
```
html:
```html{3}
<template>
	<!-- google 渲染按鈕 -->
	<div id="googleSignInBtn" />
</template>
```
:::tip 提示
  - 使用這個方法，必須要在 `javascirpt` 設置 `callback` 回調函式，彈窗模式不支援重新導向功能。
  - 需要設置 `<div id="googleSignInBtn" />` 給 `javascript` 指定來渲染按鈕。
:::

:::tip 提示
Javascript 方法，使用 `popup` 顯示，只能回傳 `callback` ；要轉址的話，只能使用 `html` 的 **[`login_uri`](https://developers.google.com/identity/gsi/web/reference/js-reference#login_uri) 方法。**
:::

## Demo
<iframe src="https://codesandbox.io/embed/web-google-signin-button-xian-shi-deng-ru-an-niu-s9kxcn?fontsize=14&hidenavigation=1&theme=dark"
   style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
   title="[Web] Google SignIn button 顯示登入按鈕"
   allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
   sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Reference
- [操作指南](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)
- [使用 `javacript` 操作的說明](https://developers.google.com/identity/gsi/web/reference/js-reference)
- [使用 `html` 操作的說明](https://developers.google.com/identity/gsi/web/reference/html-reference)
- [按鈕程式產生器](https://developers.google.com/identity/gsi/web/tools/configurator)
- [Google 的第三方登入 (web 前端實作)](https://dwatow.github.io/2021/06-15-google-sign-in-oauth/)
:::details Google SignIn Flow
  [Google Sign-In for server-side apps | Google Sign-In for Websites | Google Developers](https://developers.google.com/identity/sign-in/web/server-side-flow?hl=en)
:::
:::details Google One Tap 提示框 (圖)
  ![](/Vue/img/google-auth-one-tap.png)
:::
:::details 過期套件
  - [https://github.com/guruahn/vue-google-oauth2](https://github.com/guruahn/vue-google-oauth2)
  - [vue-google-oauth2-front-sample](https://stupefied-darwin-da9533.netlify.app/)
  - [vue-google-signin-button](https://www.npmjs.com/package/vue-google-signin-button)
:::