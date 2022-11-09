# Websocket 客戶端、服務端雙向通訊與持久連線

<!--
![](/Javascript/img/ws-HTTP-Connection.png)
[圖片出處](https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/)
 -->

## 說明

`websocket` 是一種通訊協定，可以在單次連線後，進行 `客戶端` 與 `服務端` 「雙向」資料交換的持久互動，直到某一端「取消」後才會中斷連線。
是以 `ws://` or `wss://` 前綴來表示連結 (相當於 `http` or `https`)。

<img style="background: white; padding: 1rem; border-radius: 8px;" src="/Javascript/img/websocket-flow.png" alt="websocket-flow" />

[圖片出處](https://www.pubnub.com/blog/websockets-vs-rest-api-understanding-the-difference/)

- header 請求 `ws` 連線
  ```text {4,8-11}
  Accept-Encoding: gzip, deflate, br
  Accept-Language: zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6
  Cache-Control: no-cache
  Connection: Upgrade
  Host: 127.0.0.1:5500
  Origin: http://127.0.0.1:5500
  Pragma: no-cache
  Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
  Sec-WebSocket-Key: KxhPJfqwFTS7p8TuRzGS0Q==
  Sec-WebSocket-Version: 13
  Upgrade: websocket
  User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.35
  ```
- 收到 `服務端` status code `101` 後，建立連線
  ```text
  Status Code: 101 Switching Protocols
  ---
  Connection: Upgrade
  Sec-WebSocket-Accept: k0fM/Fr+HNR8EEjZ8nIwhqlVcBw=
  Upgrade: websocket
  ```
- TCP/IP 雙向互動
- 一方「取消」後中斷。

## 常用場景:

- **即時應用:** 即時價格顯示、即時數據顯示的網站應用。
- **遊戲應用:** ui 必須要不斷刷顯示數據。
- **聊天室:** 方便與使用者即時通信互動。

:::tip 提醒
如果只有「一次」加載資料需求，就不需要使用到 `websocket` 了。
:::

## 與 http 比較

| websocket                                                                                                                | http                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 是一種「雙向」的通訊協議，在一次連線後可以與 `服務端` 保持連線與雙向互動，直到 `客戶端` 或 `服務端` 取消，才會終止連線。 | 建立在 [TCP 傳輸控制協定](/Browser/tcp) 之上，使用 http 請求方法創建連線，在收到 `響應` 後「關閉」連線。 |
| 建立在即時數據應用的服務上，可以在通道上持續獲得數據                                                                     | 通常藉由 http 無狀態，單向獲得數據                                                                       |
| `websocket` 連線速度比 `http` 快。                                                                                       | 請求方式簡單、無狀態，應用單純                                                                           |

## 實務應用

[Websocket Demo](/Javascript/websocket-demo)

## Reference

- [What is web socket and how it is different from the HTTP?](https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/)
- [JavaScript | WebSocket 讓前後端沒有距離](https://medium.com/enjoy-life-enjoy-coding/javascript-websocket-%E8%AE%93%E5%89%8D%E5%BE%8C%E7%AB%AF%E6%B2%92%E6%9C%89%E8%B7%9D%E9%9B%A2-34536c333e1b)
- [WebSocket WIKI](https://zh.wikipedia.org/zh-tw/WebSocket)
- [製作 WebSocket 客戶端應用程式](https://developer.mozilla.org/zh-TW/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [WebSockets vs REST: Understanding the Difference](https://www.pubnub.com/blog/websockets-vs-rest-api-understanding-the-difference/)
- [(Video) WebSockets in 100 Seconds & Beyond with Socket.io](https://www.youtube.com/watch?v=1BfCnjr_Vjg&t=174s)
- [(Video) How to use WebSockets - JavaScript Tutorial For Beginners](https://www.youtube.com/watch?v=FduLSXEHLng)
- [WebSocket JS INFO](https://zh.javascript.info/websocket)
