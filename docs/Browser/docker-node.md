# 容器化 Node JS APP

## 設置開發環境
在工作目錄中，執行以下的設置

- 初始化專案
  ```bash
  npm init
  ```

- 安裝 express
  ```bash
  npm i express
  ```

## 寫一個服務

**app.js**

在 `localhost:7777` 提供一個 app 服務，當進入首頁時會顯示 `Express App`。
```js
const express = require('express')
const app = express()
const port = process.env.PORT || 7777

app.get('/', (req, res, next) => {
  res.end('Express App')
})

app.listen(port, () => {
  console.log('Server Start!')
})
```

**package.json**

新增一個啟動服務的指令。
```json {8}
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

## docker 配置
在工作目錄下，新增一個 `Dockerfile` 檔案，`docker` 會依據這個檔案提供的配置，來執行打包 image。
```docker
FROM node:16
# 設置 image 環境

# Create app directory 
# 在容器中創建應用程式的工作目錄
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

# 復制套件管理檔到工作目錄
COPY package*.json ./

# 安裝應用程式相依套件工具 (如果正式環境，請使用 npm ci)
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# 復制應用程式代碼源到 docker image 中
COPY . .

# 應用程式在容器中綁定的端口
EXPOSE 7777

# 在容器中運行的指令，通常使用來啟動應用程式
CMD [ "npm", "run", "start" ]

# Reference: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
```

:::warning 注意埠號
這是容器啟動後的埠號，必須與 app 啟動服務的埠號相同，不然沒有無法映射到你的 app 服務。
`EXPOSE 7777` === `app.listen(port)`
:::

## 打包 image
以當前 `.` 的 `Dockerfile` 檔案為依據，打包一個 image (映像檔)。

```bash
# docker build . -t [自定義 image 名稱]
docker build . -t naikyding/express-app
```

## 啟動 container
以打包的 image 啟動一個容器，就可以在本地端 `localhost:3000` 看到服務。

```bash
# docker run -p [本地端口]:[容器端口] -d [自定義 image 名稱]
docker run -p 3000:7777 -d naikyding/express-app
```

- `-p` 本地端口與容器端口映射
- `-d` 在背景獨立運行容器

## Reference
- [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)