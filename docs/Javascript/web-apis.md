# Web APIs
紀錄少見但很有用的原生 Web API

## 頁面能見度 `document.visibilityState`
判斷目前網頁的能見度，當頁面 `可見` 或 `不可見` 時，做出相對應的事件。常見在頁面「不可見」時停止播放媒體，而「可見」後繼續播放，或其它應用方式。

- 監聽頁面能見度
  ```js
  document.addEventListener('visibilitychange', () => {
    // 當頁面能見度變化時
  })
  ```
- 判斷當前能見度
  ```js
  const visible = document.visibilityState
  console.log(visible) 
  ```
  - 可見 `visible`
  - 不可見 `hidden`
    - 最小化視窗
    - 切換桌面
    - 切換頁籤

:::details Demo
**html**
```html
<video id="video" controls>
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" type="video/mp4" />
</video>
```

**script**
```js
const videoEl = document.querySelector('video')

document.addEventListener('visibilitychange', () => {
  const documentVisible = document.visibilityState

  if(documentVisible === 'hidden') {JQ
    console.log(`目前不可見 (${new Date()})`)
    videoEl.pause()
  }
  else if(documentVisible === 'visible') {
    console.log(`目前可見 (${new Date()})`)
    videoEl.play()
  }
})
```
:::

### Reference
- [Page Visibility API 教程 @阮一峰](http://www.ruanyifeng.com/blog/2018/10/page_visibility_api.html)
- [JavaScript APIs You Don’t Know About](https://www.smashingmagazine.com/2022/09/javascript-api-guide/#page-visibility-api)

## 分享功能 `navigator.share`
Web Share API 的 `navigator.share()` 是一個 `promise` 方法，可以調用來分享網頁、連結、數據...。

👇 試試看
<button id="share-button" style="border: 1px solid lightblue; padding: .1rem 1rem; border-radius: 4px; display: flex; align-items: center; ">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
  </svg>
  <span style="margin-left: .4rem; ">分享頁面</span>
</button>

<script>
  export default {
    data: () => ({
      shareData: {
        title: 'docs99 Web Share API 分享功能',
        url: window.location.href,
        text: '這是來自 docs99 的 navigator.share 功能的分享內文。'
      }
    }),

    mounted() {
      document.querySelector('#share-button').addEventListener('click', () => this.sharePage(this.shareData))
    },

    methods: {
      async sharePage(shareData) {
        try {
          await navigator.share(shareData)
        } catch(errors) {
          alert(errors)
        }
      }
    }
  }
</script>

:::warning 注意
**這個方法必須是使用 UI 互動 (比如: 點擊) 來執行事件，不可以直接調用!**
:::

### Reference
- [支援度](https://caniuse.com/web-share)
- [navigator.share NDM](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)

