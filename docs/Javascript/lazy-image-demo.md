# [實作] 懶加載圖片 Lazy image

## 說明

圖片懶加載的核心技術是 [IntersectionObserver 元素進入畫面判斷]，主要是透過元素進入畫面時，執行 `callback` 再加載圖片。

![](/Javascript/img/lazy-image-demo.gif)

**好處**

- 提升效能
- 首屏加載速度

## 操作說明

假設目標元素是 `<img class="lazy-img">` 初始的 `src` 會設置一個共同的默認圖片，而其屬性 `data-src` 設置真實的圖片位置，當目標元素可以被看見，就將 `data-src` 資料寫入 `src` 供載入圖片。

:::details HTML

```html {4-5}
<div class="container">
  <img
    class="lazy-img"
    src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
    data-src="https://picsum.photos/id/111/200/300"
  />
  <img
    class="lazy-img"
    src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
    data-src="https://picsum.photos/id/222/200/300"
  />
  <img
    class="lazy-img"
    src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
    data-src="https://picsum.photos/id/221/200/300"
  />
  <img
    class="lazy-img"
    src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
    data-src="https://picsum.photos/id/444/200/300"
  />
  <img
    class="lazy-img"
    src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
    data-src="https://picsum.photos/id/555/200/300"
  />
  <img
    class="lazy-img"
    src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
    data-src="https://picsum.photos/id/666/200/300"
  />
</div>
```

:::

**js**

```js {5,8,14,21,28}
// 將監聽的對象
const lazyImgAry = document.querySelectorAll('.lazy-img')

// 監體實體
const ob = new IntersectionObserver(targetEvent)

// 觸發的函式
function targetEvent(enterTarget, ob) {
  console.log('target')
  console.log(enterTarget)

  enterTarget.forEach((targetImg) => {
    // targetImg 目標元素是否進入畫面
    if (targetImg.isIntersecting) {
      const targetEl = targetImg.target
      // attribute `data-src`內容 寫入 img src
      targetEl.src = targetEl.dataset.src
      targetEl.removeAttribute('data-src')

      // 移除監聽
      ob.unobserve(targetEl)
    }
  })
}

lazyImgAry.forEach((imgItem) => {
  // 把元素加入監聽
  ob.observe(imgItem)
})
```

<iframe src="https://codesandbox.io/embed/lazy-image-bupp12?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="lazy image"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

:::details 完整 DEMO

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      img {
        padding: 1rem 0;
        height: 400px;
        width: 100%;
        object-fit: cover;
      }
    </style>
    <title>Lazy Image</title>
  </head>
  <body>
    <h1>Lazy Image</h1>

    <div class="container">
      <img
        class="lazy-img"
        src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
        data-src="https://picsum.photos/id/111/200/300"
      />
      <img
        class="lazy-img"
        src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
        data-src="https://picsum.photos/id/222/200/300"
      />
      <img
        class="lazy-img"
        src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
        data-src="https://picsum.photos/id/221/200/300"
      />
      <img
        class="lazy-img"
        src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
        data-src="https://picsum.photos/id/444/200/300"
      />
      <img
        class="lazy-img"
        src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
        data-src="https://picsum.photos/id/555/200/300"
      />
      <img
        class="lazy-img"
        src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
        data-src="https://picsum.photos/id/666/200/300"
      />
    </div>
    <script>
      // 進入畫面  api
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      const ob = new IntersectionObserver(targetEvent)
      const lazyImgAry = document.querySelectorAll('.lazy-img')
      function targetEvent(enterTarget, ob) {
        console.log('target')
        console.log(enterTarget)

        enterTarget.forEach((targetImg) => {
          // 是否進入畫面
          if (targetImg.isIntersecting) {
            const targetEl = targetImg.target
            // attribute `data-src`內容 寫入 img src
            targetEl.src = targetEl.dataset.src
            targetEl.removeAttribute('data-src')

            // 移除監聽
            ob.unobserve(targetEl)
          }
        })
      }

      lazyImgAry.forEach((imgItem) => {
        // 把元素加入監聽
        ob.observe(imgItem)
      })
    </script>
  </body>
</html>
```

:::

## Reference

[intersection observer api]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
[intersectionobserver 元素進入畫面判斷]: /Javascript/intersectionObserver

- [Intersection Observer API]
- [IntersectionObserver 元素進入畫面判斷]
- [Image Lazy Loading Using Browser’s Intersection Observer API ](https://medium.com/fasal-engineering/image-lazy-loading-using-browsers-intersection-observer-api-a-step-by-step-guide-with-examples-b1a867614e8)
- [認識 Intersection Observer API：實作 Lazy Loading 和 Infinite Scroll](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E8%AA%8D%E8%AD%98-intersection-observer-api-%E5%AF%A6%E4%BD%9C-lazy-loading-%E5%92%8C-infinite-scroll-c8d434ad218c)
- [IntersectionObserver：上篇 – 基本介紹及使用](https://www.letswrite.tw/intersection-oserver-basic/)
