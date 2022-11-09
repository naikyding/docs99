# Websocket Demo

## 🧑‍💻 Client

## 建立 websocket 連線

創建一個 `Websocket` 的實例，就會建立連線，之後可以對其進行操作。

```js
const socket = new Websocket('ws://example.com')
```

## 關閉 websocket 連線

實體 `.close()` 直接對 `websocket` 連線做關閉。 (會觸發 `onclose`)

:::info 語法
.close(`[code]`, `[reason]`)

- `code` 代碼
- `reason` 原因

這會在 `onclose` 的 `closeEvent` 中，可以查看。
:::

```js
socket.close()
```

## 連線狀態

可以透過 `socket.readyState` 來查看當前 `socket` 的連線狀態。

**value:**

- `0` 連線尚未建立
- `1` 通信中
- `2` 連線關閉中
- `3` 連線中斷

```js {1,5gi}
socket.readyState // 1

socket.close() // 關閉連線

socket.readyState // 3
```

## 傳送數據

操作 `.send()` 對 `服務端`傳送數據。

```js
socket.send('要傳送到服務端的數據')
```

**可以在 `network/ws` 查看到傳送信息。**
![](/Javascript/img/websocket-network.png)

## 監聽事件

當 `socket` 被建立時，會有四個事件可以監聽，當觸發時可以指定執行的函式:

- `onopen` 連線已建立
- `onmessage` 當接收到數據
- `onerror` 發生錯誤
- `onclose` 關閉連線

### 連線已建立

```js
socket.onopen = () => {
  console.log('ws 連線已經建立')
}
```

### 當接收到數據

連線已建立時 `服務端` 只要有數據傳送就會觸發這個事件執行，`服務端`傳送的數據會在 `messageEvent.data`。

```js
socket.onmessage = (messageEvent) => {
  console.log(`這是服務端傳送的資料: ${messageEvent.data}`)
}
```

### 發生錯誤

```js
socket.onerror = (error) => {
  console.log(`Websocket 發生錯誤 => ${error}`)
}
```

### 關閉連線

當服務中斷或關閉時，會觸發這個事件，當通 `closeEvent.code` 會是 `1006`。

```js
socket.onclose = (closeEvent) => {
  console.log(`ws 關閉連線`)
  console.log(closeEvent.code) // 服務端沒有開啟 or 中斷服務，通常 code 為 1006
}
```

## 🖥 Server

以 `nodejs` 為例示範程式。

## 安裝 ws 套件

開發環境設置後，安裝 nodejs 針對 websocket 的工具庫。

```bash
npm i ws
```

## 啟動服務

籍由 `WebSocketServer` 創建實例，來啟動一個服務 ([更多方式](https://www.npmjs.com/package/ws))。之後也是使用這個實例來進行其它操作。

**啟動一個 `ws://localhost:7777` 的服務。**

```js
const { WebSocketServer } = require('ws')
const websocketServer = new WebSocketServer({ port: 7777 })
```

## 連線事件

當 `客戶端` 連線時，會觸發 `.on('connection')` 這個事件，可以在 `第二參數` 帶入一個想要執行的 `callback` 函式，而 `callback` 會帶入 `ws` 的實體，方便後續操作。

```js
websocketServer.on('connection', (ws) => {
  console.log('客戶端已建立連線!')
})
```

## 中斷連線

可以使用 `.on('close')` 來監聽連線是否被 `客戶端` 中斷連線。而 `callback` 函式會帶有 `code` 關閉連線的代碼 [客戶端關閉連線](/Javascript/websocket-demo#關閉-websocket-連線) 。

```js {4-7}
websocketServer.on('connection', (ws) => {
  console.log('客戶端已建立連線!')

  ws.on('close', (code) => {
    console.log(`客戶端中斷連線!`)
    console.log(code) // 1000 client: websocket.close(1000, '結束連線')
  })
})
```

## 接收數據

當 `客戶端` 有傳送數據時， `服務端` 可以由 `.on('message')` 觸發相關的事件，而數據會在 `callback` 的參數當中。

```js {9-11}
wsServer.on('connection', (ws) => {
  console.log(`${new Date().getTime()}: 客戶端已連線`)

  ws.on('close', (code) => {
    console.log('client closed ws')
    console.log(code)
  })

  ws.on('message', (data) => {
    console.log(`這是客戶端傳送的數據: ${data}`)
  })
})
```

## 傳送資料

使用 `.send()` 來傳送數據到 `客戶端`。

```js {12}
wsServer.on('connection', (ws) => {
  console.log(`${new Date().getTime()}: 客戶端已連線`)

  ws.on('close', (code) => {
    console.log('client closed ws')
    console.log(code)
  })

  ws.on('message', (data) => {
    console.log(`這是客戶端傳送的數據: ${data}`)

    ws.send('服務端已收到你的數據')
  })
})
```

## Reference

- [ws: a Node.js WebSocket library](https://www.npmjs.com/package/ws)
- [製作 WebSocket 客戶端應用程式](https://developer.mozilla.org/zh-TW/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [JavaScript | WebSocket 讓前後端沒有距離](https://medium.com/enjoy-life-enjoy-coding/javascript-websocket-%E8%AE%93%E5%89%8D%E5%BE%8C%E7%AB%AF%E6%B2%92%E6%9C%89%E8%B7%9D%E9%9B%A2-34536c333e1b)
- [WebSocket info](https://zh.javascript.info/websocket)
