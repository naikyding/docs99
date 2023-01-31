# HTTP 請求壓縮

:::tip 簡單說
`服務端` 透過壓縮文件資料，以減少傳輸到 `客戶端` 的時間，來提升網頁加載速度。
:::

## 說明
HTTP 壓縮是 `網頁伺服器` 與 `瀏覽器` 之間改進傳輸速度的方法，進入網頁時 `網頁伺服器` 是傳送「已壓縮」的文件資料供相容的 `瀏覽器` 下載使用；不支緩的壓縮方法，`瀏覽器` 就會下載未壓縮的文件資料。

### 瀏覽器支援壓縮格式

瀏覽器接受壓縮方式，可以在請求頭部看到 (如下)。常見的格式有 `gzip` 、 `Brotli (br)` 和 `deflate`。

![](/Browser/img/http-compression.png)

### 流程圖
`瀏覽器` 要正確將文件資料解壓縮，必須通過與 `網頁伺服器` 的通信來確認格式。

- `客戶端` 在請求時透過頭部的 `Accept-Encoding` 告訴 `服務端` 它支援相容的壓縮格式。

- `服務端` 回傳文件資料時，透過頭部的 `Content-Encoding` 告訴 `客戶端` 資料的壓縮格式。

![](/Browser/img/HTTP-compression-fllow.png)
[圖片出處](https://kadiska.com/using-http-compression-to-improve-web-performance/)

:::warning 壓縮方式
HTTP 中有兩種壓縮方式:
- `Transfer-Encoding` 較低層級，部分瀏覽器不支援。
- `Content-Encoding` 較高層級，廣範支援。 ✅
:::

## Reference
- [Using HTTP compression to improve web performance](https://kadiska.com/using-http-compression-to-improve-web-performance/)
- [HTTP壓縮 WIKI](https://zh.wikipedia.org/zh-tw/HTTP%E5%8E%8B%E7%BC%A9)