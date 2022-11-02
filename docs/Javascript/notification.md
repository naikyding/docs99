# Notification 推播信息

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
          console.log(111)
          new Notification('同意!', {
            body: '這是內容'
          })
        } else if(permissionStatus === 'denied') {
          new Notification('不同意!')
          console.log(0)
        }
      })
    }
  }
</script>

<button class="base-button notification-btn">Notification</button>

## API

### 推播許可詢問 `Notification.requestPermission`

詢問 `客戶端` 是否同意接受「推播通知」，這是一個 [Promise](/Javascript/promise) 方法，也可以直接使用回調函式，只會詢問一次，之後會回傳 `value` 值。

:::details 示意圖
![](/Javascript/img/notification.png)
:::

**value:**
- `granted` 允許推播通知
- `denied` 拒絕推播通知
- `default` 關閉互動視窗 (短時間內，關閉太多次會變「拒絕」)

```js {3-4,8-10}
// async await 方法
notificationPermissionBtn.addEventListener('click', async() => {
  const permissionStatus = await Notification.requestPermission()
  console.log(permissionStatus)
})

// callback 回調函式
Notification.requestPermission((permissionStatus) => {
  console.log(permissionStatus)
})
```

## Reference
- [Notification @MDN](https://developer.mozilla.org/en-US/docs/Web/API/Notification)