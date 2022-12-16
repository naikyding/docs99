# GSAP scrollTrigger 滾動觸發器

## 說明

`滾動動作` 可以指定「觸發元素」在某些動作時，「指定元素」執行播放動畫或播放方式。

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP-scrollTrigger 滾動觸發" src="https://codepen.io/naiky/embed/GRGebKX" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/GRGebKX">
  GSAP-scrollTrigger 滾動觸發</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**基本補間動畫**

當動畫設置後，就會直接播放，這不符合大部分需求。

```js
gsap.to('.logo', {
  druation: 3,
  xPercent: 200,
})
```

設置 `scrollTrigger` 可以使「滾動」到特定位置時播放動畫，像是這樣:

```js {4}
gsap.to('.logo', {
  duration: 3,
  xPercent: 200,
  scrollTrigger: '.logo-play', // 當 '.logo-play' 區塊進入畫面才播放
})
```

## 安裝

一般 GSAP 是不包含 `scrollTrigger` 這個套件，在使用前必須要先引入或安裝。

- CDN

  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
  ```

  在操作 `GSAP` 檔案中 `.js`，使用套件功能。

  ```js
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
  ```

- npm

  ```js
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)
  ```

## 基本操作

如同設置 [Tween 補間動畫] 方法一樣，只是增加了 `scrollTrigger` 屬性，將其設置上一個「觸發元素」。
當「觸發元素」 `進入` 畫面時，就會播放這個「補間動畫」。

```js {2}
gsap.to('.play-element', {
  scrollTrigger: '.target-element',
  duration: 3,
  xPercent: 1000,
  rotation: 360,
})
```

## 客製化設置

如同設置 [Tween 補間動畫] 方法一樣，增加了 `scrollTrigger` 屬性，改為 `物件` 可以讓我們客製化更多設置。

```js {2-5}
gsap.to('.play-element', {
  scrollTrigger: {
    trigger: '.target-element', // 觸發動畫的元素
    toggleActions: 'play pause resume reverse', // 觸發播放方式
  },
  duration: 3,
  xPercent: 1000,
  rotation: 360,
})
```

- `trigger` 觸發元素
- `toggleActions` 觸發執行動作。 (`'向下進入執行 向下離開執行 向上進入執行 向上離開執行'`)

  **可以設置的動作:**
  |動作| 說明|
  |-|-|
  | `play` | 播放 |
  | `pause` | 暫停 |
  | `resume` | 恢復動作 |
  | `reverse` | 倒轉播放 |
  | `restart` | 重新開始播放 |
  | `reset` | 重置 |
  | `complete` | 到完成位置 |
  | `none` | 無動作 |

## scrub 依滾動方向播放

如同設置 [Tween 補間動畫] 方法一樣，增加了 `scrollTrigger` 屬性，改為 `物件` 其中設置 `scrub: true` 可以依滾動方向播放。

```js {4}
gsap.to('.play-element', {
  scrollTrigger: {
    trigger: '.target-element',
    scrub: true, // 依滾動 播放/倒帶 (druation triggerActions 將無效)
  },
  xPercent: 1000,
  rotation: 360,
})
```

- `scrub: true` 開啟依滾動播放模式。
- `scrub: 1` 播放緩衝時間: 指的是需要 `1秒` 的時間趕上「滾動」結束。

:::tip 提醒
`scrub: true` 開啟，就會依滾動方向來播放，而 `druation` 與 `toggleActions` 就沒有作用了。
:::

## start end 客制觸發位置

`scrollTrigger` 大部分的觸發方法，都是以 `目標元素` 「進入」與「離開」畫面來觸發動畫發放，若有不符合播放的時機可以使用這個方法來調整。

實際的作法是在 `scrollTrigger` 物件中，加入 `start`、`end` 屬性來客制化觸發的位置，而 `markers: true` 則可以看到觸發的標示 (建議打開)。

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP-scrollTrigger start and end 客制開始與結束" src="https://codepen.io/naiky/embed/dyKEvNw?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/dyKEvNw">
  GSAP-scrollTrigger start and end 客制開始與結束</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**無客製化**

```js {6-9}
gsap.to('.play-element', {
  duration: 10,
  rotation: 720,
  xPercent: 1000,

  scrollTrigger: {
    trigger: '.target-elemnt',
    toggleActions: 'play pause reverse reset',
  },
})
```

### 客製化觸發位置

```js {9-10}
gsap.to('.play-element', {
  duration: 10,
  rotation: 720,
  xPercent: 1000,

  scrollTrigger: {
    trigger: '.target-elemnt',
    toggleActions: 'play pause reverse reset',
    start: 'top center', // 起始點 位置
    end: '20 10%', // 結束點 位置
    markers: true, // 顯示觸發位置
  },
})
```

### 說明

`start` 為 scrollTrigger 的 「起始點」，`end` 則為 scrollTrigger 的 「結束點」。

#### `start: '[觸發元素] [整個視窗]'`

值為兩個字串以 `空格` 區隔，第一個字串為「觸發元素」要提供觸發的位置、第二個字串為「視窗」提供觸發的位置。

![](/Javascript/img/gsap-scrollTrigger-start-end.png)

**value:**

- `top`: 位置在「上」
- `bottom`: 位置在「下」
- `center`: 位置在「中」
- 數字: 為 `px` 像素 (與 `top` 的相對位置)
- `n%`: 百分比 (與 `top` 的相對位置)

### `endTrigger` 客製化 `end` 觸發位置

一般而言，都是使用屬性 `trigger` 來設置「觸發元素」的 `start`、`end`，若希望別的「元素」可以作為 `end` 的觸發，可以使用屬性 `endTrigger`來達成。

```js {7}
gsap.to('.play-element', {
  xPercent: 1000,
  duration: 3,
  scrollTrigger: {
    markers: true,
    trigger: '.target-1', // start 所在的 觸發元素
    endTrigger: '.target-2', // end 所在的 觸發元素
    scrub: true,
  },
})
```

## 「時間軸」加上滾動觸發

[Timeline 時間軸]內部新增 `物件` 來設置 `scrollTrigger` 相關參數，這個 `timeline` 就會依「滾動觸發」設置來執行動畫了。

:::tip 提醒
相同的，內部的 `duration` 就無作用了，因為會依滾動方向來播放。
:::

```js {2-6}
const timeline = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: '.target-element',
    scrub: true,
  },
})

timeline
  .to('.play-element', {
    duration: 3,
    xPercent: 400,
  })
  .to('.play-element', {
    duration: 3,
    yPercent: 400,
  })
  .to('.play-element', {
    duration: 3,
    xPercent: 0,
  })
  .to('.play-element', {
    duration: 3,
    yPercent: 0,
  })
```

## 「關鍵幀」加上滾動觸發

直接在內部設置 `scrollTrigger: { ... }`，[Keyframes 關鍵幀]的動畫就會依「滾動觸發」設置來播放了。

```js {2-5}
gsap.to('.play-element', {
  scrollTrigger: {
    trigger: '.target-element',
    scrub: true,
  },
  keyframes: [
    { duration: 2, x: 100 },
    { duration: 2, y: 100 },
    { duration: 2, x: 0 },
    { duration: 2, y: 0 },
  ],
})
```

## ScrollTrigger.create 滾動觸發實例

雖然「關鍵幀」、「時間軸」 都可以加入 `滾動觸發器` 來操作動畫，但創建一個 `滾動觸發` 實例，可以更靈活的針對 `回調` 函式的觸發來做更多的事。

```js {6-9,11-19}
ScrollTrigger.create({
  // --- 滾動觸發設置 --- //
  animation: tween, // 指定動畫
  trigger: '.target-element', // 觸發元素

  // 當 start 與 end 觸發時執行
  onToggle: (self) => {
    console.log(self.isActive) // 是否執行動畫狀態中 `true` || `false`
  },

  // 每次 scrollTrigger 發生變化 (滾動) 時執行
  onUpdate: (self) => {
    console.log(`
    動畫執行: 
    播放進度 (0 ~ 1): ${self.progress}
    滾動方向 (+n ~ -n): ${self.direction}
    滾動速度 (像素/秒): ${self.getVelocity()}
    `)
  },
})
```

**屬性:**

- **`animation` 指定動畫:**
  可以是 [tween 補間動畫] 或 [timeline 時間軸]

- **`onToggle: self => { ... }` 當 `start` 與 `end` 觸發時執行:**
  `self.isActive` 判斷是否執行動畫中 ( `true` || `false` )。

- **`onUpdate: self => { ... }` 每次 `scrollTrigger` 發生變化時，都會執行:**

  - **`self.progress` 顯示執行進度:** (`0 ~ 1`)， `1` 表示到「終點」 / `0` 表示在「起點」。
  - **`self.direction` 顯示滾動方向:** 正轉: `1`、反轉: `-1`
  - **`self.getVelocity()` 滾動速度 (像素/秒):** 正轉為 `正數`，反轉為 `負數`。

### 時間軸 + 滾動觸發實例

```js {3,22}
const timeline = gsap.timeline()

timeline
  .to('.box', {
    duration: 3,
    xPercent: 300,
  })
  .to('.box', {
    duration: 3,
    yPercent: 300,
  })
  .to('.box', {
    duration: 3,
    xPercent: 0,
  })
  .to('.box', {
    duration: 3,
    yPercent: 0,
  })

ScrollTrigger.create({
  animation: timeline,
  trigger: 'section:nth-child(2)',
  scrub: true,
  markers: true,
  onToggle: (self) => {},
  onUpdate: (self) => {},
})
```

### 補間動畫 + 滾動觸發實例

```js {1,23}
const tween = gsap.to('.box', {
  keyframes: [
    {
      duration: 3,
      xPercent: 300,
    },
    {
      duration: 3,
      yPercent: 300,
    },
    {
      duration: 3,
      xPercent: 0,
    },
    {
      duration: 3,
      yPercent: 0,
    },
  ],
})

ScrollTrigger.create({
  animation: tween,
  trigger: 'section:nth-child(2)',
  scrub: true,
  markers: true,
  onToggle: (self) => {},
  onUpdate: (self) => {},
})
```

## pin 動畫元素固定

一般而言，動畫元素會隨著滾動消失在畫面中，而 `pin` 屬性，可以將滾動播放的「動畫元素」固定在原本位置上，不受滾動影響，直到「觸發元素」離開畫面。

```js {10}
gsap.to('.play-element', {
  xPercent: 1000,
  yPercent: 0,
  duration: 3,
  scrollTrigger: {
    // markers: true,
    trigger: '.target-element-1',
    endTrigger: '.target-element-2',
    scrub: true,
    pin: true,
  },
})
```

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP scrollTrigger pinning basic" src="https://codepen.io/naiky/embed/vYrqYxW" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/vYrqYxW">
  GSAP scrollTrigger pinning basic</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**設置方式:**

- `pin: true` 動畫元素「固定」
- `pin: '.target-element'` 「指定固定」動畫元素

### DEMO 滾動 slider

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP-scrollTrigger slider demo" src="https://codepen.io/naiky/embed/vYrqaJe" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/vYrqaJe">
  GSAP-scrollTrigger slider demo</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Reference

[timeline 時間軸]: /Javascript/gsap-timeline
[keyframes 關鍵幀]: /Javascript/gsap-keyframes
[tween 補間動畫]: /Javascript/gsap-tween

- [GSAP INSTALL](https://greensock.com/docs/v3/Installation)
- [GSAP ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP 實作滾動視差與動畫](https://sleet-berry-8a9.notion.site/GSAP-ddc5d9cf73b94b6fa16bd0d6a637482b)
