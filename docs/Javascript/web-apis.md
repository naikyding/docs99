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