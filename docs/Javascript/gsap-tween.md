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
gsap.to('#logo', // 目標元素
  { 
    duration: 2, // 動畫時間 2 秒鐘
    x: '200px'   // 橫向移動 200px
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
gsap.from('#logo',  // 目標元素
  { 
    duration: 2,    // 動畫時間 2 秒鐘
    scale: 2,       // 放大 2 倍
    ease: 'back',   // 動畫特效
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

```js {3,6-9}
gsap.fromTo('#logo', // 目標元素
  {                  // 開始特效
    opacity: 0,
  },
  {                  // 最終特效
    duration: 3,     // 動畫時間 3 秒鐘
    opacity: 1,      // 可見
    x: '300px',      // 橫向移動位置
    ease: 'back'     // 動畫效果
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
const logo = gsap.fromTo('#logo',
  { 
    opacity: 0, 
    x: -400
  }, 
  {
    opacity: 1,
    x: 400,
    rotation: 720,
    duration: 4
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
以下是在 `Vars` 中，常見的設置 [更詳細，可參考](https://greensock.com/docs/v3/GSAP/Tween#Parameters:~:text=(listed%20below).-,Special%20Properties,-Add%20any%20of)

**設置類**

|屬性 | 說明 |
|-|-|
|`duration`| 動畫時間 (以「秒」為單位)，默認 `0.5` | 
|`ease`| 動畫「播放過程樣式」，默認 `power1.out` [參考更多](https://greensock.com/docs/v3/Eases) | 
|`paused`| 動畫創建後，是否「暫停」，默認 `false` | 
|`delay`| 動畫播放前的「延遲時間」 (以秒為單位) | 
|`repeat`| 動畫「重播次數」，默認 `0` 只播 1 次、`-1` 無限播放、`1` 會播 2 次 | 
|`stagger`| 「交錯播放」。如果有多個 `目標元素` 可以交錯啟動播放。`stagger: 0.1` 每個元素啟動播放的間隔是 0.1 秒| 

**特效類**

|屬性 | 說明 |
|-|-|
|`x`| 橫向位移，等於 `transform: translateX()` | 
|`y`| 直向位移，等於 `transform: translateY()` | 
|`rotation`| 旋轉，等於 `transform: rotate()` | 
|`opacity`| 透明度 | 

### 函式設置
除了可以直接設置屬性的「值」，也可以使用「函式」方法

```js

```

### 亂數設置

**亂數 `-100` 到 `100` 範圍，隨機產生**
```js
gsap.to(
  '.logo',
  { x: 'random(-100, 100)' }
)
```

```js
gsap.to(
  '.logo',
  { x: 'random([0, 50, 100])' }
)
```
## Reference
- [GSAP Tween](https://greensock.com/docs/v3/GSAP/Tween)
- [GSAP3 - 專門處理動畫與特效的 JS 套件](https://chupai.github.io/posts/200229_gsap3/)