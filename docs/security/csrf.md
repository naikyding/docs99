# CSRF 跨站偽造請求

CSRF (Cross-site request forgery) 跨站偽造請求，**駭客** 利用使用者在 **A 網** 已驗証的身份，在使用者進入 **第三網 (駭客架設)** 時，發起對 **A 網** 隱藏式的請求指令 **達成指定目的**，而非透過 **使用者** 的意願。
![creativegroundtech](/security/img/cross-site-request-forgery.webp)

> 圖片出處：creativegroundtech

1. 登入 **銀行網**
2. (成功) 取得使用者認證資料
3. 駭客發送 `釣魚網站` 或 `惡意連結` 給使用者
4. 使用者到 **駭客網站** 不知情下，送出了到 **銀行網** 的指令請求
5. 銀行依 2 取得的身份驗証，成功執行請求。

## 攻擊方式

### GET

### POST

### JSON 傳送

## 防禦方式

### 前端

### 後端

### 瀏覽器

## Reference

- [讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)
- [全端勇士之路 Node.js 基礎學習-CSRF 篇](https://hsiangfeng.github.io/nodejs/20190704/2336420619/)
- [imperva - Cross site request forgery (CSRF) attack](https://www.imperva.com/learn/application-security/csrf-cross-site-request-forgery/)
