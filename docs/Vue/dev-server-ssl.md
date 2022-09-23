# 本地端開發機 https

## 說明
某些時候使用第三方服務，基於安全性會要求必須是 `https` 才允許 「請求」，這樣就可以使用到這個方法。

## 流程
### 1️⃣ 安裝套件
```bash
brew install mkcert
brew install nss # if you use Firefox
```

### 2️⃣ 產生憑證
`mkcert [你想要的網址]`

```bash
mkcert -install 
mkcert localhost # 假設你要產生 localhost 憑證
```

這時會產生以 `localhost` 為域名的憑證，會在專案最外層產生：
- `localhost-key.pem`
- `localhost.pem`

### 3️⃣ 專案開發機設置
在 `vue.config.js` 內新增方法，如下：(意思就是將為 `server` 內的兩個檔案視為憑證)
```js {11-20}
const path = require('path')
const fs = require('fs')

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },

    https: {
      key:
        process.env.NODE_ENV === 'development'
          ? fs.readFileSync(`${__dirname}/localhost-key.pem`)
          : '',
      cert:
        process.env.NODE_ENV === 'development'
          ? fs.readFileSync(`${__dirname}/localhost.pem`)
          : '',
    },
  },
}
```

## Reference
- [[推薦] 快速產生本地端開發用SSL憑證工具-mkcert](https://xenby.com/b/205-%E6%8E%A8%E8%96%A6-%E5%BF%AB%E9%80%9F%E7%94%A2%E7%94%9F%E6%9C%AC%E5%9C%B0%E7%AB%AF%E9%96%8B%E7%99%BC%E7%94%A8ssl%E6%86%91%E8%AD%89%E5%B7%A5%E5%85%B7-mkcert)
- [Mkcert - 在 localhost 掛 HTTPS 神器](https://w3c.hexschool.com/blog/cd7b449b)
- [Nuxt 本地端加載 HTTPS](https://medium.com/@jedy05097952/nuxt-%E6%9C%AC%E5%9C%B0%E7%AB%AF%E5%8A%A0%E8%BC%89-https-516668bf103)