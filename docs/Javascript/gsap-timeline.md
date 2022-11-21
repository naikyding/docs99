# GSAP Timeline 時間軸

## 說明

在 GSAP 中 `Timeline` 是一個強大的時間排序工具，可以充當 [GSAP Tween 補間動畫] ，作為 `時間軸` 是「有效率」、「精確的」控制時間特效的作法。

**不使用 `timeline`**

可以對 `指定元素` 一步步的控制「每一幀」的特效，但必須要加上之前特效秒數的加總。當多幀時，就會非常麻煩，且要重復寫上 `delay` 時間，以避免特效重疊。

```js
gsap.to('.item', { x: 100, duration: 2 })
gsap.to('.item', { y: 100, duration: 2, delay: 2 }) // delay == 前一個動畫的秒數
gsap.to('.item', { x: 0, duration: 2, delay: 4 }) // delay == 前二個動畫的秒數加總
```

**使用 `timeline`**

只需要為 `指定元素` 「依序」的加上特效，它就會按這個順序「向下執行」，不會與上一個特效時間交疊。

```js
const timelineItem = gsap.timeline()

timelineItem.to('.item', { x: 100, duration: 2 }) // 執行1
timelineItem.to('.item', { y: 100, duration: 2 }) // 執行2
timelineItem.to('.item', { x: 0, duration: 2 }) // 執行3
```

## Reference

[gsap tween 補間動畫]: /Javascript/gasp-tween

- [GSAP TimeLine](https://greensock.com/docs/v3/GSAP/Timeline)
