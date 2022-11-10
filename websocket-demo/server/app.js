// const express = require('express')
// const app = express()
// const port = 7777

// const { WebSocketServer } = require('ws')

// const wsServer = new WebSocketServer({ port })

// wsServer.on('connection', (ws) => {
//   console.log(`${new Date().getTime()}: 客戶端已連線`)
//   ws.send(JSON.stringify(wsServer._server._connections))

//   ws.send(JSON.stringify({ id: 1, name: 'Naiky' }))
//   ws.on('close', (code) => {
//     console.log('client closed ws')
//     console.log(code)
//   })

//   ws.on('message', (message) => {
//     console.log(`onMessage: ${message}`)

//     wsServer.clients.forEach(client => {
//       client.send(`服務端收到了數據: ${message}`)
//     })
//   })
// })
const { WebSocketServer } = require('ws')
const url = require('url')
const wsServer = new WebSocketServer({ port: 7777, verifyClient })

function verifyClient(info) {
  const { access_token } = url.parse(info.req.url, true).query
  return access_token === 'AAAAAA'
}


wsServer.on('connection', (ws) => {
  ws.send('客戶端已經連線')
  ws.send(`當前連線數量: ${wsServer._server._connections}`)

  ws.on('message', (data) => {
    console.log(`這是客戶端傳送的資料:`)
    console.log(data)
    ws.send(JSON.stringify(JSON.parse(data)))
    // ws.send(JSON.stringify(wsServer))
    // console.log(wsServer)

    wsServer.clients.forEach((client) => {
      client.send(`服務端接收到資料: ${data}`)
    })
  })
})