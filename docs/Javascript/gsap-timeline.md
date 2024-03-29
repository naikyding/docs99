# GSAP Timeline 時間軸

:::tip 提示
可以使用這個方法，制作重復性的動畫。
:::

## 說明

在 GSAP 中 `Timeline` 是一個強大的時間排序工具，可以充當 [GSAP Tween 補間動畫] ，作為 `時間軸` 是「有效率」、「精確的」控制時間特效的作法。

**不使用 `timeline`**

可以對 `指定元素` 一步步的控制「每一幀」的特效，但必須要加上之前特效秒數的加總。當多幀時，就會非常麻煩，且要重復寫上 `delay` 時間，以避免特效重疊。

```js
gsap.to('.item', { x: 100, duration: 2 })
gsap.to('.item', { y: 100, duration: 2, delay: 2 }) // delay == 前一個動畫的秒數
gsap.to('.item', { x: 0, duration: 2, delay: 4 }) // delay == 前二個動畫的秒數加總
```

## 操作 timeline

只需要為 `指定元素` 「依序」的加上特效，它就會按這個順序「向下執行」，不會與上一個特效時間交疊。

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP Timeline 時間軸" src="https://codepen.io/naiky/embed/MWXrZRN?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/MWXrZRN">
  GSAP Timeline 時間軸</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 創建時間軸實體

新增一個「時間軸」實體，也可以針對這個「時間軸」設置相關參數。

```js
const timelineItem = gsap.timeline({ repeat: -1 })
```

### 操作時間軸特效

對「時間軸」加入每個階段的步驟，它會依序向下執行不會 `交疊`。

```js
timelineItem.to('.item', { x: 100, duration: 2 }) // 步驟 1
timelineItem.to('.item', { y: 100, duration: 2 }) // 步驟 2
timelineItem.to('.item', { x: 0, duration: 2 }) // 步驟 3
timelineItem.to('.item', { y: 0, duration: 2 }) // 步驟 4

// 鏈式串接方法
timelineItem
  .to(timeLineItem, { x: 100, duration: 2 }) // 步驟 1
  .to(timeLineItem, { y: 100, duration: 2 }) // 步驟 2
  .to(timeLineItem, { x: 0, duration: 2 }) // 步驟 3
  .to(timeLineItem, { y: 0, duration: 2 }) // 步驟 4
```

## 非線性播放
上面的操作「時間軸」都是按著順序連結播放，如果動畫比較複雜且不同步播放的話，可以使用這個方式，來指定不同的播放時機 [參考](https://greensock.com/docs/v3/GSAP/Timeline#:~:text=Positioning%20animations%20in%20a%20timeline)。

<iframe height="250" style="width: 100%;" scrolling="no" title="GSAP-timeline 同步播放 &quot;&lt;&quot;" src="https://codepen.io/naiky/embed/WNyBRbP" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/WNyBRbP">
  GSAP-timeline 同步播放 &quot;&lt;&quot;</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 一般模式
就是依「時間軸」的順序， `greenBall` 播放完成後，`pinkBall` 接著播放。

```js
const timeline = gsap.time()

timeline.to(greenBall, {
  xPercent: 500,
  duration: 4,
  ease: 'none'
})

timeline.to(pinkBall, {
  xPercent: 500,
  duration: 2,
  ease: 'none'
})
```

### 指定放放時機
- **`'<'` 播放時機: `上一個動畫` 的「起點」。** (與上一個動畫「同時」播放)
- **`'>'` 播放時機: `上一個動畫` 的「終點」。** (預設值)
- **`'<1'` 播放時機: `上一個動畫` 「播放後 `1` 秒」 播放。**
- **`'>1'` 播放時機: `上一個動畫` 「播放完成 `1` 秒」 播放。** 

**與上個動畫「同時」播放**

```js {13}
const timeline = gsap.time()

timeline.to(greenBall, {
  xPercent: 500,
  duration: 4,
  ease: 'none'
})

timeline.to(pinkBall, {
  xPercent: 500,
  duration: 2,
  ease: 'none'
}, '<')
```

**上個動畫播放 `2秒` 後播放**

```js {13}
const timeline = gsap.time()

timeline.to(greenBall, {
  xPercent: 500,
  duration: 4,
  ease: 'none'
})

timeline.to(pinkBall, {
  xPercent: 500,
  duration: 2,
  ease: 'none'
}, '<2')
```

**上個動畫播放完成 `1秒` 後播放**

```js {13}
const timeline = gsap.time()

timeline.to(greenBall, {
  xPercent: 500,
  duration: 4,
  ease: 'none'
})

timeline.to(pinkBall, {
  xPercent: 500,
  duration: 2,
  ease: 'none'
}, '>1')
```

## Reference

[gsap tween 補間動畫]: /Javascript/gsap-tween

- [GSAP TimeLine](https://greensock.com/docs/v3/GSAP/Timeline)
