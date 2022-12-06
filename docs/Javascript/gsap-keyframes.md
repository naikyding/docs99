# GSAP Keyframes 關鍵幀

## 說明

當使用 [GSAP Timeline 時間軸]，會編寫很多重複性的代碼 (如下)，當有這種情況時，[GSAP Keyframes 關鍵幀] 可以更有效率的「簡化」你的程式寫法。

**timeline 寫法**

```js {3-6}
const timeLine = gsap.timeline({ repeat: -1 })
timeLine
  .to(fristLogo, { duration: 2, x: 100 }) // 步驟 1
  .to(fristLogo, { duration: 2, y: 100 }) // 步驟 2
  .to(fristLogo, { duration: 2, x: 0 }) // 步驟 3
  .to(fristLogo, { duration: 2, y: 0 }) // 步驟 4
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
  ],
})
```

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP Keyframes 關鍵幀" src="https://codepen.io/naiky/embed/OJEEKpL" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/OJEEKpL">
  GSAP Keyframes 關鍵幀</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 物件方法

在 `option` 中設置 `keyframes: []`，使用 `物件` 寫下每個步驟的特效，也可以針對每個步驟做特別的設置。

```js {4-11}
gsap.to(secondLogo, {
  repeat: -1,
  rotate: 360,
  keyframes: [
    { duration: 2, x: 100 }, // 步驟 1
    {
      duration: 2,
      y: 100,
      onComplete: () => {
        // 步驟 2
        console.log('Y 到 100px 了')
      },
    },
    { duration: 2, x: 0, ease: 'back' }, // 步驟 3
    { duration: 2, y: 0 }, // 步驟 4
  ],
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
    '25%': { x: 100, y: 0 }, // 步驟 1
    '50%': { y: 100, x: 100 }, // 步驟 2
    '75%': { x: 0, y: 100 }, // 步驟 3
    '100%': { y: 0, x: 0 }, // 步驟 4
  },
})
```

:::warning 注意
每個「百分比」關鍵幀都是 `絕對位置` ，與上一幀位置無關。
:::

## 陣列方法

`keyframes` 本身為物件，以 `陣列` 方法設置動畫。`陣列` 中每個「值」都是一 `幀`。

```js {2-5}
gsap.to(forLogo, {
  keyframes: {
    x: [0, 100, 100, 0, 0],
    y: [0, 0, 100, 100, 0],
  },
  repeat: -1,
  duration: 4,
  easeEach: 'power1.out', // 每個移動線性
  // ease: 'power1', // 總移動線性設置
})
```

:::tip 提示
為 `絕對位置` 需要從 `第一幀` 就開始設置。
:::

:::tip 提示

- `ease` 是針對「整個」動畫效果做設置。
- `easeEach` 是針對「個別」幀的效果來設置。
  :::

## Reference

[gsap keyframes 關鍵幀]: /Javascript/gsap-keyframes
[gsap timeline 時間軸]: /Javascript/gsap-timeline

- [Understanding GSAP Keyframes](https://greensock.com/understanding-keyframes/)
- [GSAP ease](https://greensock.com/docs/v3/Eases)
