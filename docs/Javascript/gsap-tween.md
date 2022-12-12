# GSAP Tween 補間動畫

藉由設置「結束」 or 「開始」的特效，來讓 `gsap` 自動去補足其中的影格動畫。

## 指定「最終」特效 `gsap.to()`

為 `目標元素` 指定「最終」的特效，`gsap` 會補足「原始」變化到「最終」特效當中的影格。

:::info 語法
gsap.to(`target`, { `vars` })

- `target` 目標元素，使用 css 選擇器
- `vars` 動畫參數設置
  :::

```js
gsap.to(
  '#logo', // 目標元素
  {
    duration: 2, // 動畫時間 2 秒鐘
    x: '200px', // 橫向移動 200px
  }
)
```

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP Tween .to()" src="https://codepen.io/naiky/embed/eYKENmy?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/eYKENmy">
  GSAP Tween .to()</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 指定「開始」特效 `gsap.from()`

為 `目標元素` 指定「開始」的特效，`gsap` 會補足「開始」變化到「原本」特效當中的影格。

:::info 語法
gsap.from(`target`, { `vars` })

- `target` 目標元素，使用 css 選擇器
- `vars` 動畫參數設置
  :::

```js
gsap.from(
  '#logo', // 目標元素
  {
    duration: 2, // 動畫時間 2 秒鐘
    scale: 2, // 放大 2 倍
    ease: 'back', // 動畫特效
  }
)
```

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP" src="https://codepen.io/naiky/embed/zYNyOXP?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/zYNyOXP">
  GSAP</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 指定「開始」到「最終」位置 `gsap.fromTo()`

為 `目標元素` 指定「開始」、「最終」的特效，`gsap` 會補足「開始」變化到「最終」特效當中的影格。

:::info 語法
gsap.fromTo(`target`, { `fromVars` }, { `toVars` })

- `target` 目標元素，使用 css 選擇器
- `fromVars` 「開始」動畫參數設置
- `toVars` 「最終」動畫參數設置
  :::

```js {5,9-13}
gsap.fromTo(
  '#logo', // 目標元素
  {
    // 開始特效
    opacity: 0,
  },
  {
    // 最終特效
    duration: 3, // 動畫時間 3 秒鐘
    opacity: 1, // 可見
    x: '300px', // 橫向移動位置
    ease: 'back', // 動畫效果
    repeat: -1, // 重播: 無限
  }
)
```

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP Tween .fromTo()" src="https://codepen.io/naiky/embed/zYadGBa?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/zYadGBa">
  GSAP Tween .fromTo()</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 動畫操作方法

可以藉由動畫操作方法，對 `目標元素` 實體，進行任意的操作。

**方法:**

- `.play()` 播放
- `.pause()` 暫停
- `.reverse()` 倒轉
- `.restart()` 重新開始

```js
const logo = gsap.fromTo(
  '#logo',
  {
    opacity: 0,
    x: -400,
  },
  {
    opacity: 1,
    x: 400,
    rotation: 720,
    duration: 4,
  }
)

document.querySelector('#play').onclick = () => logo.play()
document.querySelector('#reverse').onclick = () => logo.reverse()
document.querySelector('#pause').onclick = () => logo.pause()
document.querySelector('#restart').onclick = () => logo.restart()
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/naiky/embed/wvgRymb?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/wvgRymb">
  Untitled</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 常用動畫參數設置

以下是在 `Vars` 中，常見的設置 [更詳細，可參考](<https://greensock.com/docs/v3/GSAP/Tween#Parameters:~:text=(listed%20below).-,Special%20Properties,-Add%20any%20of>)

**設置類**

| 屬性       | 說明                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| `duration` | 動畫時間 (以「秒」為單位)，默認 `0.5`                                                                |
| `ease`     | 動畫「播放過程樣式」，默認 `power1.out` [參考更多](https://greensock.com/docs/v3/Eases)              |
| `paused`   | 動畫創建後，是否「暫停」，默認 `false`                                                               |
| `delay`    | 動畫播放前的「延遲時間」 (以秒為單位)                                                                |
| `repeat`   | 動畫「重播次數」，默認 `0` 只播 1 次、`-1` 無限播放、`1` 會播 2 次                                   |
| `stagger`  | 「交錯播放」。如果有多個 `目標元素` 可以交錯啟動播放。`stagger: 0.1` 每個元素啟動播放的間隔是 0.1 秒 |
| `onStart`  | 函式，動畫開始前執行 |
| `onComplete`  | 函式，動畫完成後執行 |

**特效類**

| 屬性              | 說明                                     |
| ----------------- | ---------------------------------------- |
| `x`               | 橫向位移，等於 `transform: translateX()` |
| `y`               | 直向位移，等於 `transform: translateY()` |
| `rotation`        | 旋轉，等於 `transform: rotate()`         |
| `opacity`         | 透明度                                   |
| `scale`           | 放大 / 縮小                              |
| `transformOrigin` | 定位 `"0% 100%"`                         |

## 動態設置值

除了可以直接設置屬性的「值」，也可以使用「隨機」、「函式」方法。

<iframe height="600" style="width: 100%;" scrolling="no" title="GSAP function and random value setup" src="https://codepen.io/naiky/embed/rNKzqNG?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/rNKzqNG">
  GSAP function and random value setup</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 亂數方法

亂數範圍: `-100` 到 `100` 隨機產生

```js {2}
gsap.to('.logo', {
  x: 'random(-100, 100)',
})
```

指定亂數: `0` 或 `50` 或 `100` 隨機產生

```js {2}
gsap.to('.logo', {
  x: 'random([0, 50, 100])',
})
```

### 函式方法

函式方法會有三個參數帶入，再依需求參考使用，而最後必須要 `return` 作為設置值。

```js {2-7}
gsap.to('.logo', {
  x: function (index, target, targets) {
    console.log(`目標元素索引: ${index}`)
    console.log(`目標元素: ${target}`)
    console.log(`目標元素群: ${targets}`)

    return (index + 1) * 100
  },
})
```

- `index` 目標元素的索引值

  > 假設，有多個 `.logo` 元素，第一個 `目標元素` 索引值就是 `0`、第二個 `1` ...以此類推。

- `target` 目標索引元素

  > 操作的 `目標索引` 元素本身。

- `targets` 目標索引群

  > 陣列存放所有 `目標元素`。

## 跑馬無限播放
- 容器 `overflow: hidden;`
- 文字設置「不換行」
- 橫移一半就結束 `xPercent: -50`
- 無限播放

<iframe height="400" style="width: 100%;" scrolling="no" title="GSAP 文字無限輪播" src="https://codepen.io/naiky/embed/MWXdjov" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/MWXdjov">
  GSAP 文字無限輪播</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::details DEMO CODE

**js**
```js
const liEl = document.querySelectorAll('li')

gsap.to(liEl, {
  xPercent: -50,  // 移動 -50%
  duration: 10,   // 時間
  ease: "none",   // 無特效播放 
  repeat: -1     // 無限播放
})
```

**html**
```html
<div class="container">
  <ul class="loop-area">
  <li>
    <sapn> GSAP GSAP GSAP GSAP GSAP GSAP GSAP </span>
     <sapn> GSAP GSAP GSAP GSAP GSAP GSAP GSAP</span>
   </li>
  <li>
    <sapn> GSAP GSAP GSAP GSAP GSAP GSAP GSAP </span>
     <sapn> GSAP GSAP GSAP GSAP GSAP GSAP GSAP</span>
   </li>
  <li>
    <sapn> GSAP GSAP GSAP GSAP GSAP GSAP GSAP </span>
     <sapn> GSAP GSAP GSAP GSAP GSAP GSAP GSAP</span>
   </li>
</ul>  
</div>

```

**css**
```css
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.container {
  height: 100vh;
  overflow: hidden;
  max-width: 100%;
}

.loop-area {
  display: inline-block;            /* 強化無限播放，視覺 */
  font-family: "Dela Gothic One";
  font-size: 4.5rem;
  color: transparent;               /* 透明字體 */
  -webkit-text-stroke: 1px #2e2e2e; /* 字體邊框樣式 */
  white-space:nowrap;               /* 文字不換行 */
}

li > span {
   display: inline-block;           /* 強化無限播放，視覺 */
}
```
:::

## Reference

- [GSAP Tween](https://greensock.com/docs/v3/GSAP/Tween)
- [GSAP3 - 專門處理動畫與特效的 JS 套件](https://chupai.github.io/posts/200229_gsap3/)
- [GSAP實作滾動視差與動畫](https://sleet-berry-8a9.notion.site/GSAP-ddc5d9cf73b94b6fa16bd0d6a637482b)