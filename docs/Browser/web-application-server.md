# Web Server 與 Application Server

## Web Server 網頁伺服器
僅提供「靜態」網頁相關服務的伺服器，接收 `http` 請求，然後提供「已準備好的」的響應給客戶端，另可以處理服務器的「負載均衡」、「代理」。

<img src="/Browser/img/web-server.svg" style="background: white; padding: 1rem">

### 代表
- Apache
- Nginx

## Application Server 應用程式伺服器
由 `程式語言` 啟動的伺服器，負責「商業邏輯」、「資料庫存取」，通常在  [Web Server 網頁伺服器]  之後，可以依 `請求`的需求，「動態」客製化的提供客戶端資料。

透過 [Web Server 網頁伺服器] 來與「應用程式伺服器」進行溝通。
![](/Browser/img/Web_Server_vs_App_Server_Diagram-1.png)
[圖片出處](https://www.webopedia.com/servers/web-server-vs-application-server/)

- 客戶端在 [Web Server 網頁伺服器] 發起 `http` 請求
- [Web Server 網頁伺服器] 對 [Application Server 應用程式伺服器] 請求「動態」內容
- [Application Server 應用程式伺服器] 在伺服器對 `資料庫` 請求數據資料，整理資料後返回給 [Web Server 網頁伺服器]
- [Web Server 網頁伺服器] 把最終的響應內容，渲染到畫面

### 代表
- Node JS
- Golang
- Python
- Deno
...

## 結論
[Web Server 網頁伺服器] 與 [Application Server 應用程式伺服器] 一起工作，並具有相似的功能，但 [Web Server 網頁伺服器] 只提供 `http` 、 `https` 的請求，它提供 `靜態` 內容，而 [Application Server 應用程式伺服器] 提供 web `動態` 的內容。

大多數的網站服務，都需要 [Web Server 網頁伺服器] 與 [Application Server 應用程式伺服器] 來協作交付對應的 `動態` 內容。
## Reference
[Web Server 網頁伺服器]: #web-server-網頁伺服器
[Application Server 應用程式伺服器]: #application-server-應用程式伺服器
- [淺談 Web Server and Application Server](https://vicxu.medium.com/web-server-and-application-server-5a6d9c940eff)
- [[基礎觀念系列] Web Server & Nginx — (1)](https://medium.com/starbugs/web-server-nginx-1-cf5188459108)
- [MDN](https://developer.mozilla.org/zh-TW/docs/Learn/Common_questions/What_is_a_web_server)
- [What Is an Application Server?](https://www.serverwatch.com/guides/application-server/)
- [Web Servers Vs Application Servers: What’s The Difference?](https://www.webopedia.com/servers/web-server-vs-application-server/)