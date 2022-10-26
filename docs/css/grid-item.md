# Grid Item 網格項目屬性

<style scope>
.grid-item-container {
  display: grid;
}
.d-none {
  display: none;
}
.gap-1 {
  gap: 1px;
}
.white--text {
  color: white;
}
.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-item-rows-cols {
  grid-template: 
  [row-line-1] 30px [row-line-2] 90px [row-line-3] 90px [row-line-4] 60px [row-line-end]
  /
  [col-line-1] 90px [col-line-2] 60px [col-line-3] 60px [col-line-4] 90px [col-line-5] auto [col-line-6] 60px [col-line-end] ;
}
.grid-item-box {
  
}
.bg-base {
  background: var(--vp-c-brand);
}
.outside-border {
  border: 1px dashed var(--vp-c-brand);
}
.orange {
  background: orange;
}
.white {
  background: white;
}
.black {
  background: #2e2e2e;
}
.bg-none {
  background: none;
}
.p-relative {
  position: relative;
}
.grid-row-start {
  grid-row-start: span row-line-2;
  /* grid-row-start: row-line-2; */
}
.grid-row-start::before {
  position: absolute;
  content: '<- start';
  top: -13px;
  right: -55px;
  text-shadow: 0 0 5px black;
}
.grid-row-end {
  grid-row-end: 4;
}
.grid-row-start::after {
  position: absolute;
  content: '<- end';
  bottom: -13px;
  right: -49px;
  text-shadow: 0 0 5px black;
  z-index: 99;
}
.grid-col-start {
  grid-column-start: span col-line-3;
}
.grid-col-end {
  grid-column-end: col-line-6;
}
.grid-col-start::before {
  position: absolute;
  content: '↑ start';
  bottom: -20px;
  left: -8px;
  text-shadow: 0 0 5px black;
}
.grid-col-start::after {
  position: absolute;
  content: '↑ end';
  bottom: -20px;
  right: -42px;
  text-shadow: 0 0 5px black;
}
.grid-row-column {
  grid-row: 2 / 4;
  grid-column: 3 / 6;
}
</style>

:::info ⚡ 快速進入
- [Grid 網格系統](/css/grid)
- [Grid Container \[網格容器\] 屬性設置](/css/grid-container) 
:::

## ➡️ [網格區域] 水平 [網格線] 定義 grid-row-*
可以透過 `grid-row-start:`、`grid-row-end:` 水平[網格線] 區間來定義，[網格項目] 的 [網格區域] 位置。

- #### `grid-row-start:` 起點
- #### `grid-row-end:` 終點

<div class="grid-item-container grid-item-rows-cols bg-base gap-1 outside-border">
  <div class="black content-center white--text"></div>
  <div class="orange content-center grid-row-start grid-row-end white--text p-relative">item</div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
</div>

**value:**
- `line` 
  - @number: 第幾條 [網格線]
  - @string: [網格線] 名稱
- `span <跨越數量>`
- `span <跨越到的網格線名稱>`
- `auto`

<div class="d-none grid-item-container grid-item-rows-cols bg-base gap-1 outside-border">
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
  <div class="black content-center white--text">item</div>
</div>

### Demo
將 [網格項目] 位置，定義在水平 [網格線] 第 `2` 條 ~ 第 `4` 條之間。下面顯示各種不同方式的寫法。

<div class="grid-item-container grid-item-rows-cols  gap-1 outside-border">
  <div class="orange grid-row-start grid-row-end content-center p-relative">item</div>
</div>

```css {3-6}
.container {
  display: grid;
  grid-template: 
  [row-line-1] 30px [row-line-2] 90px [row-line-3] 90px [row-line-4] 60px [row-line-end] 
  /
  [col-line-1] 90px [col-line-2] 60px [col-line-3] 60px [col-line-4] 90px [col-line-5] auto [col-line-6] 60px [col-line-end] ;
}
```

**1️⃣ 指定網格線** (第幾條)
```css {2-3}
.item {
  grid-row-start: 2;
  grid-row-end: 4;
}
```

**2️⃣ 指定網格線名稱**
```css {2-3}
.item {
  grid-row-start: row-line-2;
  grid-row-end: row-line-4;
}
```

**3️⃣ 指定跨越格數**

從 [網格線]名稱 `row-line-2`，向下跨越 `2` 格。
```css {3}
.item {
  grid-row-start: row-line-2;
  grid-row-end: span 2;
}
```

**4️⃣ 指定跨越名稱**

從第 `4` 條 [網格線] ，向上跨到 `row-line-2` [網格線]。

```css {2}
.item {
  grid-row-start: span row-line-2;
  grid-row-end: 4;
}
```

## ⬇️ [網格區域] 垂直 [網格線] 定義 grid-column-*
透過垂直的 `grid-column-start`、`grid-column-end` [網格線]，來定義 [網格項目] 的 [網格區域] 位置。

- #### `grid-column-start` 起點
- #### `grid-column-end` 終點

<div class="grid-item-container grid-item-rows-cols bg-base gap-1 outside-border">
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="orange content-center grid-col-start grid-col-end white--text p-relative">item</div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
</div>

**value:**
- `line` 
  - @number: 第幾條 [網格線]
  - @string: [網格線] 名稱
- `span <跨越數量>`
- `span <跨越到的網格線名稱>`
- `auto`

### Demo
將 [網格項目] 位置，定義在水平 [網格線] 第 `3` 條 ~ 第 `6` 條之間。下面顯示各種不同方式的寫法。

<div class="grid-item-container grid-item-rows-cols gap-1 outside-border">
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="orange content-center grid-col-start grid-col-end white--text p-relative">item</div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
  <div class="content-center white--text"></div>
</div>

```css {3-6}
.container {
  display: grid;
  grid-template: 
  [row-line-1] 30px [row-line-2] 90px [row-line-3] 90px [row-line-4] 60px [row-line-end] 
  /
  [col-line-1] 90px [col-line-2] 60px [col-line-3] 60px [col-line-4] 90px [col-line-5] auto [col-line-6] 60px [col-line-end] ;
}
```

**1️⃣ 指定網格線** (第幾條)
```css
.item {
  grid-column-start: 3;
  grid-column-end: 6;
}
```

**2️⃣ 指定網格線名稱**
```css
.item {
  grid-column-start: col-line-3;
  grid-column-end: col-line-6;
}
```

**3️⃣ 指定跨越格數**

起點是第 `3` 條 [網格線]，跨 `3` 格到終點。
```css {3}
.item {
  grid-column-start: 3;
  grid-column-end: span 3;
}
```

**4️⃣ 指定跨越到的網格名稱**

終點是 [網格線] `col-line-6`，跨越到 [網格線] `col-line-3`。
```css {2}
.item {
  grid-column-start: span col-line-3;
  grid-column-end: col-line-6;
}
```

### 二維 [網格區域] 定義位置
定義水平 [網格線] 第 `2`、`4` 條、垂直[網格線] 第`3`、`6`條 之間的 [網格項目]。

<div class="grid-item-container grid-item-rows-cols bg-base gap-1 outside-border">
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="orange content-center white--text p-relative grid-row-column">item</div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
</div>

```css
.item {
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 6;
}
```

## 🟢 [網格區域] 定義 (縮寫) grid-row | column

- #### grid-row: `<grid-row-start> / <grid-row-end>`
- #### grid-column: `<grid-column-start> / <grid-column-end>`

<div class="grid-item-container grid-item-rows-cols bg-base gap-1 outside-border">
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="orange content-center white--text p-relative grid-row-column">item</div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
</div>


```css
.item {
  grid-row: 2 / 4;
  grid-column: 3 / 6;
}
```

## Reference
[Flex 彈性盒子]: /css/flex
[網格單元]: /css/grid#grid-cell-網格單元
[網格容器]: /css/grid#grid-container-網格容器
[網格項目]: /css/grid#grid-item-網格項目
[網格線]: /css/grid#grid-line-網格線
[網格區域]: /css/grid#grid-area-網格區域
- [Gap MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap)
- [[Day17] Grid 基本認識](https://ithelp.ithome.com.tw/articles/10247574)
- [gap Demo](https://css-tricks.com/almanac/properties/g/gap/)
- [How to Use CSS Grid Layout – Grid Properties Explained with Examples](https://www.freecodecamp.org/news/how-to-use-css-grid-layout/)
- [Day 6 : HTML - 網頁排版超強神器part_2，CSS grid到底是什麼？](https://ithelp.ithome.com.tw/articles/10268087)
- [一文搞懂grid布局 和 flex 布局及其区别](https://juejin.cn/post/6940627375537258527)
- [CSS Grid @Lynn's TechBlog](https://clhuang224.github.io/TechBlog/2020/03/07/20200307-css-grid/?fbclid=IwAR1FVou6krHUbZG5utHiCxwsafMzTUr7lQWmjDG04B6Gkc66sbzLQrtJe9c)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)