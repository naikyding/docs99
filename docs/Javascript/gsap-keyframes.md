# GSAP Keyframes 關鍵幀

## 說明
當使用 [GSAP Timeline 時間軸]，會編寫很多重複性的代碼 (如下)，當有這種情況時，[GSAP Keyframes 關鍵幀] 可以更有效率的「簡化」你的程式寫法。

**timeline 寫法**

```js {3-6}
const timeLine = gsap.timeline({ repeat: -1 })
timeLine
  .to(fristLogo, { duration: 2, x: 100 }) // 步驟 1
  .to(fristLogo, { duration: 2, y: 100 }) // 步驟 2
  .to(fristLogo, { duration: 2, x: 0 })   // 步驟 3
  .to(fristLogo, { duration: 2, y: 0 })   // 步驟 4
```

**keyframes 寫法**
```js {3-8}
gsap.to(secondLogo, {
  repeat: -1,
  keyframes: [
    { duration: 2, x: 100 },
    { duration: 2, y: 100 },
    { duration: 2, x: 0 },
    { duration: 2, y: 0 },
  ]
})
```

## 物件方法
在 `option` 中設置 `keyframes: []`，使用 `物件` 寫下每個步驟的特效，也可以針對每個步驟做特別的設置。

```js {4-11}
gsap.to(secondLogo, {
  repeat: -1,
  rotate: 360,
  keyframes: [
    { duration: 2, x: 100 },                   // 步驟 1
    { duration: 2, y: 100, onComplete: () => { // 步驟 2
      console.log('Y 到 100px 了')
    }},                                        
    { duration: 2, x: 0, ease: 'back' },       // 步驟 3
    { duration: 2, y: 0 },                     // 步驟 4
  ]
})
```

:::tip 提醒
特效會依「上一步驟」位置，接續向「下一步驟」特效執行。
:::

## 百分比方法
以 `keyframes: {}` ，使用 `物件` 「索引」寫入關鍵幀的百分比，而「值」寫入特效設置。


```js {4-9}
gsap.to(thirdLogo, {
  duration: 8,
  rotate: 360,
  keyframes: {
    '25%': { x: 100, y:0 },    // 步驟 1
    '50%': { y: 100, x: 100 }, // 步驟 2
    '75%': { x: 0, y: 100 },   // 步驟 3
    '100%': { y: 0, x: 0 },    // 步驟 4
  }
})
```

:::warning 注意
每個「百分比」關鍵幀都是 `絕對位置` ，與上一幀位置無關。
:::
## 陣列方法



## Reference
[GSAP Keyframes 關鍵幀]: /Javascript/gsap-keyframes
[GSAP Timeline 時間軸]: /Javascript/gsap-timeline
- [Understanding GSAP Keyframes](https://greensock.com/understanding-keyframes/)
