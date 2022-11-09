const express = require('express')
const app = express()
const port = 7777

const { WebSocketServer } = require('ws')

const wsServer = new WebSocketServer({ port })

wsServer.on('connection', (ws) => {
  console.log(`${new Date().getTime()}: 客戶端已連線`)

  ws.send(JSON.stringify({ id: 1, name: 'Naiky' }))
  ws.on('close', (code) => {
    console.log('client closed ws')
    console.log(code)
  })

  ws.on('message', (message) => {
    console.log(`onMessage: ${message}`)
    ws.send('服務端已收到數據!')
  })
})