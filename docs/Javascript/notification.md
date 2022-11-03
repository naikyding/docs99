# Notification 推播信息

:::warning 操作前注意
- 目前在 `行動裝置` 上，會有「支援度」問題，ios 基本上不支持 [Can i use](https://caniuse.com/notifications)
- 確認 os 「通知中心」已 `開啟` 「允許通知」，否則無反應。
  :::details 示意圖
  ![](/Javascript/img/notification_web.png)

- 確認網站在 `瀏覽器` 通知設定，若為 `封鎖` 狀態，將無法收到通知。
  :::details 示意圖
  ![](/Javascript/img/notification_browser_setting.png)

:::

<style>
.base-button {
  background: var(--vp-c-brand-dark);
  color: white;
  padding: .3rem 1rem;
  border-radius: 8px;
}
</style>

<script>
  export default {
    mounted() {
      const notificationBtn = document.querySelector('.notification-btn')

      notificationBtn.addEventListener('click', async() => {
        const permissionStatus = await Notification.requestPermission()

        if(permissionStatus === 'granted') {
          const notification1 = new Notification('推播通知標題', {
            body: 'yo, 你已經成功推播這個通知了!',
            data: {name: 'naiky'},
            icon: '/document.svg',
            // tag: 'hello'
          })

          notification1.addEventListener('show', (e) => {
            console.log(e)
          })

        } else if(permissionStatus === 'denied') {
          new Notification('不同意!')

        }
      })
    }
  }
</script>

<button class="base-button notification-btn">Notification</button>

## 推播許可詢問 `Notification.requestPermission`
![](/Javascript/img/notification_permission.png)

詢問 `客戶端` 是否同意接受「推播通知」，這是一個 [Promise](/Javascript/promise) 方法，也可以直接使用回調函式，只會詢問一次，之後會回傳 `value` 值。

**value:**
- `granted` 允許推播通知
- `denied` 拒絕推播通知
- `default` 關閉互動視窗 (短時間內，關閉太多次會變「拒絕」)

### 非同步方法 async await

```js {2-3}
notificationPermissionBtn.addEventListener('click', async() => {
  const permissionStatus = await Notification.requestPermission()
  console.log(permissionStatus)
})
```

### 回調函式方法 callback
Notification.requestPermission(`(允許狀態) => { … }`)

```js
Notification.requestPermission((permissionStatus) => {
  console.log(permissionStatus)
})
```

## 建立推播通知 `new Notification()`
`Notification` 是一個 [建構函式](/Javascript/constructor)，要發送推播通知，需要建立一個 `Notification` 實例來進行操作。

:::info 語法:
#### new Notification(`title`, `options`)
:::

**參數:**
- `title` 通知標題文字
- `option` 選項設置 ([更多設置](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification#parameters))
  - `body` 通知內容文字
  - `icon` 通知圖像

**監聽事件:**
- `close` 使用者 `主動關閉` 「推播通知」觸發
- `show` 顯示「推播通知」時觸發
- `click` 使用者 `點擊` 「推播通知」視窗時觸發
- `error` 無法啟動「推播通知」時觸發
### 發送基本通知
![](/Javascript/img/notification_title.png)

```js
new Notification('這是推播通知的標題')
```

### 發送含內容通知

![](/Javascript/img/notification_body_icon.png)

```js {2-3}
new Notification('推播通知標題', {
  icon: '../public/document.svg',
  body: 'yo, 你已經成功推播這個通知了!'
})
```

### 數據傳遞通知
可以在「推播通知」內塞入 `數據` 資料，「推播通知」本身看不到 `數據` 的顯示，但可以透過對 `Notification` 的 「監聽事件」，來取到 「推播通知」內的所有資料。

![](/Javascript/img/notification_body_icon.png)

**當「推播通知」 `顯示` 時， `console` 通知內容的資料。**

```js {4,7-9}
const notification = new Notification('推播通知標題', {
  icon: '../public/document.svg',
  body: 'yo, 你已經成功推播這個通知了!',
  data: { name: 'naiky' }
})

notification.addEventListener('show', (event) => {
  console.log(event.target.data) //  { name: 'naiky' }
})
```

## Reference
- [Notification @MDN](https://developer.mozilla.org/en-US/docs/Web/API/Notification)
- [那些被忽略但很好用的 Web API / Notification](https://ithelp.ithome.com.tw/articles/10281329)