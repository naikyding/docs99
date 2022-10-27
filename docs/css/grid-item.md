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
.green {
  background: lightgreen;
}
.grey {
  background: blue;
  opacity: .5;
}
.grid-area-custom-with-grid-areas {
  grid-area: 2 / 2 / 4 / 6;
}
.red {
  background: red;
}
.rounded {
  border-radius: 8px;
}
.white--text {
  color: white;
}
.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 30px;
  height: 100%;
}
.w-100 {
  width: 100%;
}
.h-30 {
  height: 30px;
}
.p-absolute {
  position: absolute;
}
.top-50 {
  top: 50%;
}
.mt--15 {
  margin-top: -15px;
}
.ml--15 {
  margin-left: -15px;
}
.top-0 {
  top: 0;
}
.left-0 {
  left: 0;
}
.right-0 {
  right: 0;
}
.bottom-0 {
  bottom: 0;
}
.left-50 {
  left: 50%;
}

.grid-item-rows-cols {
  grid-template: 
  [row-line-1] 30px [row-line-2] 90px [row-line-3] 90px [row-line-4] 60px [row-line-end]
  /
  [col-line-1] 90px [col-line-2] 60px [col-line-3] 60px [col-line-4] 90px [col-line-5] auto [col-line-6] 60px [col-line-end] ;
}
.grid-item-rows-cols-1 {
  grid-template: 
  [row-line-2] 90px [row-line-3]
  /
  [col-line-1] 90px [col-line-2] 60px [col-line-3] 60px [col-line-4] 90px [col-line-5] auto [col-line-6] 60px [col-line-end] ;
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
.blue {
  background: lightblue;
}
.pink {
  background: pink;
}
.yellow {
  background: yellow;
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
.grid-area-custom {
  grid-area: 
    2 /
    col-line-3 /
    4 /
    col-line-6;
}

/* grid-areas */
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.sidebar {
  grid-area: sidebar;
}
.footer {
  grid-area: footer;
}
.grid-template-areas {
  grid-template-areas:
  '. header header header header .'
  'sidebar sidebar main main main main'
  'sidebar sidebar . . . . '
  'footer footer footer footer footer footer'
  ;
}

/* justify-self */
.justify-self-start {
  justify-self: start;
}
.justify-self-end {
  justify-self: end;
}
.justify-self-center {
  justify-self: center;
}
.justify-self-stretch {
  justify-self: stretch;
}

/* align-self */
.align-self-start {
  align-self: start;
}
.align-self-end {
  align-self: end;
}
.align-self-center {
  align-self: center;
}
.align-self-stretch {
  align-self: stretch;
}
</style>

:::info ⚡ 快速進入
- [Grid 網格系統](/css/grid)
- [Grid Container \[網格容器\] 屬性設置](/css/grid-container) 
:::

## ➡️ 水平 [網格線] 定義 [網格區域] grid-row-*
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

## ⬇️ 垂直 [網格線] 定義 [網格區域] grid-column-*
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

### 水平、垂直定義 [網格區域] 
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

## 🟢 定義 [網格區域] (縮寫) grid-row | column

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


```css {2-3}
.item {
  grid-row: 2 / 4;
  grid-column: 3 / 6;

  /* 相等 */
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 6;
}
```

## 🌟 [網格項目]命名 && [網格區域]終極縮寫 grid-area

### [網格項目] 命名
對 [網格項目] 命名，供 [`grid-template-areas`](/css/grid-container#📍-網格區域-定義-grid-template-areas) 定義排版位置。

<div class="grid-item-container grid-item-rows-cols gap-1 outside-border grid-template-areas">
  <div class="green content-center rounded header">Header</div>
  <div class="blue content-center rounded main">Main</div>
  <div class="pink content-center rounded sidebar">Sidebar</div>
  <div class="orange content-center rounded footer">Footer</div>
</div>

**1️⃣ [網格項目] 命名**

```css
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.sidebar {
  grid-area: sidebar;
}
.footer {
  grid-area: footer;
}
```
**2️⃣ [網格容器] `grid-template-areas` 指定排版位置**
```css
.container {
  grid-template-areas:
  '. header header header header .'
  'sidebar sidebar main main main main'
  'sidebar sidebar . . . . '
  'footer footer footer footer footer footer'
  ;
}
```
:::tip 提醒
- 若 [網格項目] 沒有指定位置，就會被排在「最前面」空白的 [網格單元]。
- 若 [網格單元] 位置重覆被指定「不同的」 [網格項目]，[網格項目] 設置 `grid-area` 會在 [網格容器] 設置 `grid-template-areas` 的「上層」。

<div class="grid-item-container grid-item-rows-cols gap-1 outside-border grid-template-areas">
  <div class="green content-center rounded header">Header</div>
  <div class="blue content-center rounded main">Main</div>
  <div class="pink content-center rounded sidebar">Sidebar</div>
  <div class="orange content-center rounded footer">Footer</div>
  <div class="red content-center white--text">無指定</div>
  <div class="grey content-center white--text grid-area-custom-with-grid-areas">grid-area</div>
</div>
:::

### [網格區域]終極縮寫
可以一次將 `grid-row`、`grid-column` 都設置進去。

:::info 語法
grid-area: `<grid-row-start>` / `<grid-column-start>` / `<grid-row-end>` / `<grid-column-end>` ;
:::
<div class="grid-item-container grid-item-rows-cols bg-base gap-1 outside-border">
  <div class="black content-center white--text"></div>
  <div class="black content-center white--text"></div>
  <div class="orange content-center white--text p-relative grid-area-custom">item</div>
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

```css {2}
.item {
  grid-area: 2 / col-line-3 / 4 / col-line-6;

  /* 相等 */
  grid-row: 2 / 4;
  grid-column: col-line-3 / col-line-6;
}
```

## ➡️ ⬇️ [網格單元] 對齊方式
針對 [網格單元] 來定義內容的對齊方式，影響到 [網格項目] 的顯示的位置。

### 水平對齊 justify-self
- **靠左 `justify-self: start;`**
- **靠右 `justify-self: end;`**
- **水平置中 `justify-self: center;`**
- **水平撐滿 `justify-self: stretch;`** (默認值)

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border">
  <div class="white--text p-relative black">
    <div class="box content-center orange">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange">6</div>
  </div>
</div>

```css
.item {
  justify-self: start;
}
```

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border">
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 right-0">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 right-0">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 right-0">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 right-0">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 right-0">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 right-0">6</div>
  </div>
</div>

```css
.item {
  justify-self: end;
}
```

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border">
  <div class="white--text p-relative black">
    <div class="box orange content-center p-absolute top-0 left-50 ml--15">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-50 ml--15">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-50 ml--15">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-50 ml--15">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-50 ml--15">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-50 ml--15">6</div>
  </div>
</div>

```css
.item {
  justify-self: center;
}
```

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border">
  <div class="white--text p-relative black">
    <div class="box orange content-center p-absolute top-0 left-0 w-100">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-0 w-100">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-0 w-100">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-0 w-100">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-0 w-100">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-0 w-100">6</div>
  </div>
</div>

```css
.item {
  justify-self: stretch;
}
```

### 垂直對齊 align-self
- **靠上 `align-self: start;`**
- **靠下 `align-self: end;`**
- **垂直置中 `align-self: center;`**
- **垂直撐滿 `align-self: stretch;`** (默認值)

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border">
  <div class="white--text p-relative black">
    <div class="box content-center orange w-100 h-30">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange w-100 h-30">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange w-100 h-30">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange w-100 h-30">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange w-100 h-30">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange w-100 h-30">6</div>
  </div>
</div>

```css
.item {
  align-self: start;
}
```

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border">
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute h-30 w-100 bottom-0 right-0">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute h-30 w-100 bottom-0 right-0">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute h-30 w-100 bottom-0 right-0">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute h-30 w-100 bottom-0 right-0">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute h-30 w-100 bottom-0 right-0">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute h-30 w-100 bottom-0 right-0">6</div>
  </div>
</div>

```css
.item {
  align-self: end;
}
```

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border">
  <div class="white--text p-relative black">
    <div class="box orange content-center p-absolute w-100 h-30 top-50 mt--15">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute w-100 h-30 top-50 mt--15">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute w-100 h-30 top-50 mt--15">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute w-100 h-30 top-50 mt--15">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute w-100 h-30 top-50 mt--15">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute w-100 h-30 top-50 mt--15">6</div>
  </div>
</div>

```css
.item {
  align-self: center;
}
```

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border">
  <div class="white--text p-relative black">
    <div class="box orange content-center p-absolute top-0 left-0 w-100">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-0 w-100">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-0 w-100">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-0 w-100">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-0 w-100">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="box content-center orange p-absolute top-0 left-0 w-100">6</div>
  </div>
</div>

```css
.item {
  align-self: stretch;
}
```

<div class="d-none grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border">
  <div class="orange justify-self-end align-self-center content-center white--text">item</div>
  <div class="orange justify-self-end align-self-center content-center white--text">item</div>
  <div class="orange justify-self-end align-self-center content-center white--text">item</div>
  <div class="orange justify-self-end align-self-center content-center white--text">item</div>
  <div class="orange justify-self-end align-self-center content-center white--text">item</div>
  <div class="orange justify-self-end align-self-center content-center white--text">item</div>
</div>

## 🟢 [網格單元] 對齊方式 (縮寫) place-self

:::info 語法
#### place-self: `<align-self>` / `<justify-self>`
:::

```css {2}
.item {
  place-self: center / end;

  /* 相等 */
  justify-self: end;
  align-self: center;
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