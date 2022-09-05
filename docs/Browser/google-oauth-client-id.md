# 申請 Google OAuth 2.0 憑證

## 說明
Google 的所有 API 都是使用 OAuth 2.0 來進行驗證與操作授權，想要操作 Google API 就必須要先申請授權的憑證。
申請 Google OAuth 2.0 憑證後，之後與 Google API 互動，都是使用建立的 `clientID` 與 `clientSecret` 來驗証操作的權限。

## 流程
### 1️⃣ [Google API Console] 建立專案
:::details 圖解
- GCP 首頁
  ![](/Browser/img/gcp-1.png)
- 點擊專案名稱 -> 「新增專案」
  ![](/Browser/img/gcp-2.png)
- 建立「無機構」專案
  ![](/Browser/img/gcp-3.png)
- 切換到新建立的專案 docs99
  ![](/Browser/img/gcp-4.png)
  ![](/Browser/img/gcp-5.png)
:::

### 2️⃣ 建立「Oauth 同意畫面」
在建立憑證之前，必須要先有「Oauth 同意畫面」，不然無法建立憑證。
:::details 圖解
- 選擇「外部」user type 的形式
  ![](/Browser/img/gcp-6.png)
- 填寫應用程式名稱(這會被拿來做為顯示的名稱)、開發者資訊
  ![](/Browser/img/gcp-7.png)
- 新增一個自已的測試帳號
  ![](/Browser/img/gcp-8.png)
- 其它「儲存與同意」
  ![](/Browser/img/gcp-9.png)
:::

### 3️⃣ 建立憑證
:::details 圖解
- 點擊「憑證」選單
  ![](/Browser/img/gcp-oauth-1.png)
- 「建立憑證」 -> 「Oauth 用戶端 ID」
  ![](/Browser/img/gcp-oauth-2.png)
- 基礎設置
  - 應用程式類型: 網路應用程式。
  - 名稱: 在憑證頁面顯示的名稱。
  - 已授權的 Javascript 來源: 操作這個 google api 的網址要設上去，不然無法操作。
  - 已授權的重新導向 URL: 若 google api 操作後會轉址，需要設置上去，不然無法成功導向。
  ![](/Browser/img/gcp-oauth-3.png)
- 建立憑證完成
  ![](/Browser/img/gcp-oauth-4.png)
- 若要調整憑證設定
  ![](/Browser/img/gcp-oauth-5.png)

:::

## Reference
[Google API Console]:https://console.developers.google.com/
- [使用 OAuth 2.0 存取 Google API](https://developers.google.com/identity/protocols/oauth2)
- [Google API Console]
- [[筆記] 認識 OAuth 2.0：一次了解各角色、各類型流程的差異](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-%E8%AA%8D%E8%AD%98-oauth-2-0-%E4%B8%80%E6%AC%A1%E4%BA%86%E8%A7%A3%E5%90%84%E8%A7%92%E8%89%B2-%E5%90%84%E9%A1%9E%E5%9E%8B%E6%B5%81%E7%A8%8B%E7%9A%84%E5%B7%AE%E7%95%B0-c42da83a6015)