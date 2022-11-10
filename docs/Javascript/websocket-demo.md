# Websocket 基礎操作

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

可以透過 `socket.readyState` 來查看當前 `socket` 這個實例的連線狀態。

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

操作 `.send()` 對 `服務端`傳送數據，如果要傳送 `json` 格式的話，建議字串化再傳送 `JSON.stringify()`，服務端再解回 json。

```js
socket.send('要傳送到服務端的數據')

// 傳送 json
socket.send(JSON.stringify({ id: 1, name: 'naiky' }))
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

當 `客戶端` 連線時，會觸發 `.on('connection')` 這個事件，可以在 `第二參數` 帶入一個想要執行的 `callback` 函式，而 `callback` 會帶入這個連線 `ws` 的實體，後續也是針對這個
`ws` 連線的實體來進行其它操作。

```js
websocketServer.on('connection', (ws) => {
  console.log('客戶端已建立連線!')
})
```

### 當前連線數量

可以透過 `wsServer._server._connections` 來取得當前的連線總數量。

```js {3}
wsServer.on('connection', (ws) => {
  ws.send('客戶端已經連線')
  ws.send(`當前連線數量: ${wsServer._server._connections}`)
})
```

## 中斷連線

可以使用 `ws.on('close')` 來監聽連線是否被 `客戶端` 中斷連線。而 `callback` 函式會帶有 `code` 關閉連線的代碼 [客戶端關閉連線](/Javascript/websocket-demo#關閉-websocket-連線) 。

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

當 `客戶端` 有傳送數據時， `服務端` 可以由 `ws.on('message')` 觸發相關的事件，而數據會在 `callback` 的參數當中。

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

:::tip 提醒
若 `客戶端` 傳送 json 格式，建議 `JSON.stringify` 化傳送，`服務端` 再 `JSON.parse()` 轉換回 json，不然為 buffer 資料。

![](/Javascript/img/websocket-send-data.png)
:::

## 傳送資料

使用 `ws.send()` 來傳送數據到 `客戶端`。

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

:::tip 提醒
若要傳送 `json`，建議 `JSON.stringify` 後，再送出。
:::

## 所有連線傳送數據

上面的傳送數據方式，只會針對「單一」連線的 `客戶端` 做數據傳送。
使用以下的方法 `服務端` 可以同時傳送數據給「所有」連線的 `客戶端`。 ([ws 廣播](https://github.com/websockets/ws#server-broadcast))

- `wsServer.clients` 所有客戶端

  當 `服務端` 收到數據，同時傳送給「所有」 `客戶端` 其收到的數據。

```js {10-13}
const { WebSocketServer } = require('ws')
const wsServer = new WebSocketServer({ port: 7777 })

wsServer.on('connection', (ws) => {
  ws.send('客戶端已經連線')

  ws.on('message', (data) => {
    console.log(`這是客戶端傳送的資料: ${data}`)

    wsServer.clients.forEach((client) => {
      // client 是每個連線的實體
      client.send(`服務端接收到資料: ${data}`)
    })
  })
})
```

## 客戶端驗證

避免 `ws` 服務被盜連與攻擊，當 `客戶端` 是「合法」身份，才可以進行連線與數據傳輸。

:::warning 注意
`Websocket` 不可以自定請求的 `headers`。
:::

**Client**

`url` 帶有 `query` 的 `access_token` 請求。

```js
const socket = new WebSocket(`ws://localhost:7777?access_token=${token}`)
```

**Server**

根據 `客戶端` 請求的 url 參數 `access_token` 來進行驗證，「通過」才可以連線。

- Websocket 服務器加上 `客戶端` 驗證 `verifyClient` 函式。
- 設置驗證函式 `clientVerify`，函式會自帶請求的相關資料 `info`。
  - 解析請求 url 參數 `access_token` 進行驗證。
  - 「通過」 `return true`
  - 「拒絕」 `return false`

```js
// 解析 url 工具
const url = require('url')
const { WebsocketServer } = require('ws')

// 加入客戶端驗證功能 verifyClient
const wsServer = new WebsocketServer({ port: 7777, verifyClient: clientVerify })

// 驗證功能
function clientVerify(info) {
  const { access_token } = url.parse(info.req.url, true).query
  return access_token === 'AAAAAA'
}
```

:::warning 提醒
若 `客戶端` 身份驗證失敗，被拒絕連線，會出現 (下圖)，無法對 `ws` 發送、接收數據。
![](/Javascript/img/websocket-connection-fail.png)
:::

## Reference

- [ws: a Node.js WebSocket library](https://www.npmjs.com/package/ws)
- [製作 WebSocket 客戶端應用程式](https://developer.mozilla.org/zh-TW/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [JavaScript | WebSocket 讓前後端沒有距離](https://medium.com/enjoy-life-enjoy-coding/javascript-websocket-%E8%AE%93%E5%89%8D%E5%BE%8C%E7%AB%AF%E6%B2%92%E6%9C%89%E8%B7%9D%E9%9B%A2-34536c333e1b)
- [WebSocket info](https://zh.javascript.info/websocket)
- [Vue 项目使用 WebSocket 技术](https://juejin.cn/post/6982078455722557448)
