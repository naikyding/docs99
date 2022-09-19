# 客製化開發伺服器網域

## 說明
某些情境下基於安全性原則，不允許在本機 `localhost` 且一定要有 `domain` 才可以操作第三方 API，這時候就需要這個方法。

## 流程
### 1️⃣ 寫入本機 `hosts` 檔案
Mac OS `hosts` 檔案的位置: `/etc/hosts`

::: details 使用 vi 指令進入文件
  ```bash
  sudo vi /etc/hosts
  ```
  輸入密碼後，可以看到檔案內容。
  ![](/Vue/img/hosts-file.png)
:::

:::details 點擊 「`i`」 編輯文件模式
  在文件底部，輸入 
  ```bash
  127.0.0.1   custom.domain.local # custom.domain.local 是你要客製的 domain 名稱
  ```

  ![](/Vue/img/edit-hosts-file.png)

  `esc` 離開編輯模式，輸入 `:wq` 存檔且離開。
:::

:::tip 說明
`hosts` 檔案 (主機表) 以表的型式，儲存了「主機名」與「IP」的對照關係，`hosts` 檔案優先順序比 DNS 查詢更高，所以有客製化的需求，可以由此檔案來編寫。
:::

### 2️⃣ 設置 `vue.config.js`
- 設置 `vue.config.js` 檔案
  ```js {3}
  module.exports = {
    devServer: {
      host: 'custom.domain.local' // custom.domain.local 是你要客製的 domain 名稱 (與 hosts 配置相同)
    }
  }
  ```

- 重新啟動服務
  ```bash
  npm run dev # npm run server
  ```

## Reference
- [linux环境下/etc/hosts文件详解](https://www.jianshu.com/p/476a92a39b45)
- [Hosts檔案 wiki](https://zh.wikipedia.org/zh-tw/Hosts%E6%96%87%E4%BB%B6)