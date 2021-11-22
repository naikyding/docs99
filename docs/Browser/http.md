# HTTP

全名為 [超文本傳輸協定（HyperText Transfer Protocol](https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE))，用來規範 `客戶端` 與 `服務端` 之間的傳輸協定，所有的 `WWW` 檔案都必須遵守這個標準。

## 無狀態協議

`服務端` 不保存 `客戶端` 過來的任何資料，每次的 **請求** 發送都是無差別的，`服務端` 的需求，每次 **請求** 都要發送一次；但後續為了實現保持狀態的功能，在 HTTP/1.1 引入了 `cookie` 技術，

`HTTP` 本身是**無狀態協議**，這是為了更快處理大量數據傳輸。

:::tip
 - 優點：每次請求不保存資料，`服務端` 不會造成不必要的佔用。
 - 缺點：每次請求都會有大量的重復數據傳輸。
:::

:::tip 有狀態
在 `服務端` 保留之前請求的資料，用來處理 現在 (當前) 的請求。(比如：`session` )
:::

## 請求方法

|方法|描述|
|:-:|-|
| GET | 取得資料 |
| POST | 新增資源 (提交指定資源的實體，讓 `服務端` 處理，通常會改變 `服務端` 的狀態) |
| PATCH | 指定資源的部分修改 |
| PUT | 替換資源 |
| DELETE | 刪除指定資源 |

:::tip PUT 與 PATCH 的差別
- PUT 是替換掉 **整筆資料**
- PATCH 是修改 **部分** 的欄位
:::

## 狀態碼
使用數字格式來告之 `客戶端` 請求的結果，會顯示於回應後的 `Status Code`，分為五種：
- **1xx 資訊回應**
  - `100 Continue` 目前為止的一切完好，用戶端應該繼續完成請求，或當請求已經完成的狀態下應忽略此訊息。
- **2xx 成功回應**
  - `200 OK` 請求成功
  - `201 Created` 請求成功，且新的資料被創建，通常用於 `POST`、`PUT` 方法
- **3xx 重定向**
  - `301 Moved Permanently` 請求資源的 URL 被永久改變，未來 `用戶端` 使用此 URL 應導向回應的指定 URL。

- **4xx `客戶端` 錯誤**
  - `400 Bad Request` 錯誤的請求內容，`服務端` 無法理解請求。
  - `401 Unauthorized` 請求未授權，是可以再通過驗証通過 (`服務端` 不知道使用者身份)。
  - `403 Forbidden` 請求被拒絕，用戶端無訪問權限，不同於 `401` 是 `服務端` 知道用戶的身份。
  - `404 Not Found` 找不到請求的資源
- **5xx `服務端`錯誤** 
  - `500 Internal Server Error` `服務端` 執行請求時發生錯誤。 

## Reference
- [HTTP 指南](https://halfrost.com/http/)
- [HTTP 狀態碼](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status)
- [使用 Laravel 打造 RESTful API系列 第 8 篇](https://ithelp.ithome.com.tw/articles/10217459)