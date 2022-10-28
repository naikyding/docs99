# Grid Container 網格容器屬性

<style>
.grid {
  display: grid;
  background: white;
}
.grid-item-rows-cols-1 {
  grid-template: 
  [row-line-2] 90px [row-line-3]
  /
  [col-line-1] 90px [col-line-2] 60px [col-line-3] 60px [col-line-4] 90px [col-line-5] auto [col-line-6] 60px [col-line-end] ;
}
.grid-item-rows-cols {
  grid-template: 
  [row-line-1] 30px [row-line-2] 90px [row-line-3] 90px [row-line-4] 60px [row-line-end]
  /
  [col-line-1] 90px [col-line-2] 60px [col-line-3] 60px [col-line-4] 90px [col-line-5] auto [col-line-6] 60px [col-line-end] ;
}
.auto-row {
  grid-auto-rows: 90px;
}
.bg-base {
  background: var(--vp-c-brand);
}
.outside-border {
  border: 1px dashed var(--vp-c-brand);
}
.gap-1 {
  gap: 1px;
}
.grid-item-container {
  display: grid;
}
.rounded-none {
  border-radius: 0;
}
.rounded {
  border-radius: 8px;
}
.grid-template-row-col-custom {
  grid-template: 30px 30px / 60px 60px; 
  gap: 1px;
}
.grid-auto-row-col {
  grid-auto-columns: 90px;
  grid-auto-rows: 120px;
}
.rounded {
  border-radius: 8px;
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
.p-relative {
  position: relative;
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
.item-box {
  width: 30px;
  height: 100%;
}
.grid-custom-row-col {
  grid-row: 4 / 5;
  grid-column: 7 / 8;
}
.grid-custom-row-col-1 {
  grid-row: 3 / 4;
  grid-column: 6 / 7;
}

.border-lightgreen-dashed {
  border: 1px dashed lightgreen;
}
.grid-rows-custom {
  grid-template-rows: 30px 60px 90px;
}
.grid-cols-custom {
  grid-template-columns: 4fr 8fr 2fr; 
}
.grid-item {
  color: white;
  background: lightgreen;
  border-radius: 8px;
  padding: 1rem;
}
.pa-0 {
  padding: 0;
}
.row-line {
  border-top: 1px dashed #2e2e2e;
  border-bottom: 1px dashed #4e4e4e;
}
.col-line {
  border-left: 1px dashed #2e2e2e;
  border-right: 1px dashed #4e4e4e;
}
.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-container {
  border: 1px solid #2e2e2e;
}

.border-radius-none {
  border-radius: 0;
}

.light-green {
  background: lightgreen;
}
.light-blue {
  background: lightblue;
}
.pink {
  background: pink;
}
.orange {
  background: orange;
}
.black {
  background: black;
}
.white {
  background: white;
}
.black--text {
  color: black;
}
/* grid-template-areas */
.area-container {
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(4, auto);
  grid-template-areas: 
    "none header header ."
    "sidebar main main main"
    "footer footer footer .";
}

.area-item-1 {
  grid-area: header;
}
.area-item-2 {
  grid-area: main;
}
.area-item-3 {
  grid-area: footer;
}
.area-item-4 {
  grid-area: sidebar;
}

.grid-template {
  grid-template: repeat(3, auto) / repeat(4, auto);
  grid-template-areas: 
  "none header header . "
  "sidebar main main main"
  "footer footer footer .";
}

.grid-gap-demo {
  grid-template: repeat(3, auto) / repeat(3, auto);
  gap: 10px 50px;
  /* row-gap: 10px;
  column-gap: 50px; */
}
.relative {
  position: relative;
}
.justify-box {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50px;
  border-radius: 8px;
}
.justify-box-end {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50px;
  border-radius: 8px;
}
.justify-box-center {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -25px;
  height: 100%;
  width: 50px;
  border-radius: 8px;
}
.justify-box-stretch {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
}
.w-50 {
  width: 50px;
}
.h-30 {
  height: 30px;
}
.grid-justify-start {
  grid-template: repeat(3, auto) / repeat(3, auto);
  justify-items: stretch;
  gap: 1px;
}
.w-100 {
  width: 100%;
}
.grid-justify-items-center {
  justify-items: center;
}

.grid-justify-custom {
  grid-template: repeat(3, 100px) / repeat(3, auto);
  /* justify-items: stretch; */
  align-items: start;
}

.align-box-start {
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  border-radius: 8px;
}
.align-box-end {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  border-radius: 8px;
}
.align-box-center {
  position: absolute;
  top: 50%;
  margin-top: -25px;
  left: 0;
  height: 50px;
  width: 100%;
  border-radius: 8px;
}
.align-box-stretch {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px;
}
.align-start {
  align-items: start;
}
.grid-align-demo {
  grid-template: repeat(3, 100px) / repeat(3, auto);
  gap: 1px;
}
/* justify-content */
.justify-content-demo {
  grid-template: repeat(3, 100px) / repeat(3, 100px);
  justify-content: space-evenly;
}


.border-lightgreen {
  border: 1px solid lightgreen;
}
.bg-none {
  background: none;
}

.custom-content-demo {
  height: 300px;
  grid-template: repeat(3, 80px) / repeat(3, 80px);
  gap: 1px;
}
.custom-content-algin-demo {
  height: 350px;
  grid-template: repeat(3, 80px) / repeat(3, 80px);
  gap: 1px;
}

.justify-content-start {
  justify-content: start;
}
.justify-content-end {
  justify-content: end;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-space-between {
  justify-content: space-between;
}
.justify-content-space-around {
  justify-content: space-around;
}
.justify-content-space-evenly {
  justify-content: space-evenly;
}
.align-content-start {
  align-content: start;
}
.align-content-center {
  align-content: center;
}
.align-content-end {
  align-content: end;
}
.align-content-space-between {
  align-content: space-between;
}
.align-content-space-around {
  align-content: space-around;
}
.align-content-space-evenly {
  align-content: space-evenly;
}

.grid-auto-flow-row {
  grid-auto-flow: row;
}
.grid-auto-flow-column {
  grid-auto-flow: column;
}
.grid-template-areas {
  grid-template-areas:
  '. header header header header .'
  'sidebar sidebar main main main main'
  'sidebar sidebar . . . . '
  'footer footer footer footer footer footer'
  ;
}
</style>


:::info ⚡ 快速進入
- [Grid 網格系統](/css/grid)
- [Grid Item \[網格項目\] 屬性設置](/css/grid-item)
:::


:::tip 提醒
操作前，建議先了解 [Grid 網格系統](/css/grid) 及相關術語。
:::

## 🔴 display (必填屬性)
這個屬性宣告，會將元素建立為 [網格容器](/css/grid#grid-container-網格容器) ，它「直接子層」都會變成 [網格項目]。

**value:**
- `grid` block 區塊容器
- `inline-grid` inline 行內容器

```css
.container {
  display: grid;
}
```
## 🔪 網格水平分割 grid-template-rows
藉由此設置來定義容器中「水平」 [Grid Track 網格軌道](/css/grid#grid-track-網格軌道) 空間，可以是「指定尺吋」或者「按比例」分割，可以混合設置。[👉 尺吋設置方法](#🟢-grid-template-分割網格)

<div class="container grid-container grid grid-rows-custom">
  <div class="grid-item content-center row-line border-radius-none">1 (30px)</div>
  <div class="grid-item content-center row-line border-radius-none">2 (60px)</div>
  <div class="grid-item content-center row-line border-radius-none">3 (90px)</div>
</div>

```css
/* 指定軌道尺吋 */
.container {
  grid-template-rows: 30px 60px 90px;
}
```
[👉 尺吋設置方法](#🟢-grid-template-分割網格)

### 命名網格線

在「網格軌道」尺吋之間，可以用 `[]` 設置「網格線」的名稱。

```css
.container {
  grid-template-rows: [first] 30px [line2] 60px [line3] 90px [end];
}
```

## 🔪 網格垂直分割 grid-template-columns 
藉由此設置來定義容器中「垂直」 [Grid Track 網格軌道](/css/grid#grid-track-網格軌道) 空間，可以是「指定尺吋」或者「按比例」分割，可以混合設置。[👉 尺吋設置方法](#🟢-grid-template-分割網格)

<div class="container grid-container grid grid-cols-custom">
  <div class="grid-item content-center col-line border-radius-none">1 (4fr)</div>
  <div class="grid-item content-center col-line border-radius-none">2(8fr)</div>
  <div class="grid-item content-center col-line border-radius-none">3(2fr)</div>
  <div class="grid-item content-center col-line border-radius-none">4(4fr)</div>
  <div class="grid-item content-center col-line border-radius-none">5(8fr)</div>
</div>

```css
.container {
  /* 按比例分配 */
  grid-template-columns: 4fr 8fr 2fr; 
}
```

### 命名網格線

在「網格軌道」尺吋之間，可以用 `[]` 設置「網格線」的名稱。

```css
.container {
  grid-template-columns: [first] 4fr [line2] 8fr [line3] 2fr [end]; 
}
```


## 🟢 分割網格 grid-template (簡寫)
藉由此設置來定義容器中「垂直」、「水平」 [Grid Track 網格軌道](/css/grid#grid-track-網格軌道) 的空間，可以是「指定尺吋」或者「按比例」分割，可以混合設置。

可以同時設置「水平」、「垂直」網格 `grid-template-rows`、`grid-template-columns` 的寫法。
```css {3}
.container {
  display: grid;
  grid-template: <grid-template-rows> / <grid-template-columns>;
}
```

### 尺吋設置方法

可使用設置值: `20%`、`20px`、`2fr`、`auto`、`repeat(n, size)`

:::tip
- 「`fr` 按比例」: 剩餘空間等於 `fr` 數字總合，再按 `fr` 設置數字分配空間。
- 「repeat(`幾個空間`, `空間尺吋`)」 可以使用這個方式來設置多個「重覆」的空間。
:::

:::warning 注意
當混合單位設置，會先切割 `30px`空間，剩除空間才會按 `5fr` `2fr` 比例分配。
```css
.container {
  grid-template-rows: 30px 5fr 2fr;
}
```
:::

## 📍 [網格區域]定義 grid-template-areas
語法可以視覺化的定義「網格區域」中的指定 [網格單元](/css/grid#grid-cell-網格單元)，使用 `.` 來表示空白的「網格單元」，`none` 來表示無定義。

<div class="container grid-container grid grid-template">
  <div class="grid-item content-center pink area-item-1">Header</div>
  <div class="grid-item content-center orange area-item-2">Main</div>
  <div class="grid-item content-center light-green area-item-3">Footer</div>
  <div class="grid-item content-center light-blue area-item-4">Sidebar</div>
</div>


<div class="grid-item-container grid-item-rows-cols gap-1 outside-border grid-template-areas">
  <div class="green content-center rounded header">Header</div>
  <div class="blue content-center rounded main">Main</div>
  <div class="pink content-center rounded sidebar">Sidebar</div>
  <div class="orange content-center rounded footer">Footer</div>
</div>

### 1️⃣ 指定網格單元名稱
為 [網格項目](/css/grid#grid-item-網格項目) 指定 [網格單元](/css/grid#grid-cell-網格單元) 名稱
```css
.item-1 {
  grid-area: header;
}
.item-2 {
  grid-area: main;
}
.item-3 {
  grid-area: footer;
}
.item-4 {
  grid-area: sidebar;
}
```

### 2️⃣ 「網格區域」定義 `grid-template-areas`
定義 [網格區塊](/css/grid#grid-area-網格區域) 中，所有 [網格單元](/css/grid#grid-cell-網格單元) 的配置。
(使用「空白」間隔)

```css {5-8}
.container {
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(4, auto);
  grid-template-areas: 
    "none header header ."
    "sidebar main main main"
    "footer footer footer .";
}
```

**[網格單元](/css/grid#grid-cell-網格單元) 會是這樣配置:**

|none|header|header|.|
|:-:|:-:|:-:|:-:|
|sidebar|main|main|main|
|footer|footer|footer|.|


## 📏 [網格線]寬度 Gap
設置 [網格線](/css/grid#grid-line-網格線) 的寬度，通常用來定義 [網格單元](/css/grid#grid-cell-網格單元) 的間距。

<div class="grid container grid-gap-demo">
  <div class="grid-item content-center">1</div>
  <div class="grid-item content-center">2</div>
  <div class="grid-item content-center">3</div>
  <div class="grid-item content-center">4</div>
  <div class="grid-item content-center">5</div>
  <div class="grid-item content-center">6</div>
  <div class="grid-item content-center">7</div>
  <div class="grid-item content-center">8</div>
  <div class="grid-item content-center">9</div>
</div>

- `row-gap: <size>` (水平)
- `column-gap: <size>` (垂直)
- `gap: <row-gap> <column-gap>` (縮寫)

### Demo

```css {5-6}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);

  row-gap: 10px;     /* 網格線 (橫) 寬度 */
  column-gap: 50px;  /* 網格線 (直) 寬度 */

  gap: 10px 50px;   /* 簡寫 <row-gap> <column-gap> */
}
```

:::warning 注意
`gap` 若無完善設置，如 `gap: 10px;`，就會自動調整全部「相同」的寬度。
:::

:::danger 舊語法再不再支持
`grid-row-gap`、`grid-column-gap` 有 `grid` 前綴的寫法，在  Chrome 68+, Safari 11.2 Release 50+, and Opera 54+ 已不再支持了，請使用無前綴的寫法。
::: 

## ➡️ [網格單元]水平對齊 justify-items
可以決定 [網格單元] 內容的「水平」對齊方式。

**value:**
- `start` 靠左對齊
- `end` 靠右對齊
- `center` 水平置中
- `stretch` 水平撐滿 (默認值)

### 靠左對齊 `justify-items: start;`

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 auto-row outside-border">
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">6</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">7</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">8</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">9</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">10</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">11</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box content-center orange rounded">12</div>
  </div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  justify-items: start;
}
```
### 靠右對齊 `justify-items: end;`

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 auto-row outside-border">
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">6</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">7</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">8</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">9</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">10</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">11</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 right-0">12</div>
  </div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  justify-items: end;
}
```
### 水平置中 `justify-items: center;`

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 auto-row outside-border">
  <div class="white--text p-relative black">
    <div class="item-box rounded orange content-center p-absolute top-0 left-50 ml--15">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-50 ml--15">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-50 ml--15">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-50 ml--15">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-50 ml--15">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-50 ml--15">6</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded orange content-center p-absolute top-0 left-50 ml--15">7</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-50 ml--15">8</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-50 ml--15">9</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-50 ml--15">10</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-50 ml--15">11</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-50 ml--15">12</div>
  </div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  justify-items: center;
}
```
### 水平撐滿 `justify-items: stretch;`

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border auto-row">
  <div class="white--text p-relative black">
    <div class="item-box rounded orange content-center p-absolute top-0 left-0 w-100">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">6</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded orange content-center p-absolute top-0 left-0 w-100">7</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">8</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">9</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">10</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">11</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">12</div>
  </div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  justify-items: stretch;
}
```
## ⬇️ [網格單元]垂直對齊 align-items
可以決定 [網格單元] 內容的「垂直」對齊方式。

**value:**
- `start` 靠上對齊
- `end` 靠下對齊
- `center` 垂直置中
- `stretch` 垂置撐滿 (默認值)

### 向上對齊 `align-items: start;`

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 auto-row outside-border">
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">6</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">7</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">8</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">9</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">10</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">11</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange w-100 h-30">12</div>
  </div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, auto);
  align-items: start;
}
```

### 向下對齊 `align-items: end;`

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1  auto-row outside-border">
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">6</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">7</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">8</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">9</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">10</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">11</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute h-30 w-100 bottom-0 right-0">12</div>
  </div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, auto);
  align-items: end;
}
```

**網格單元內容「垂直置中」** `align-items: center;`

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border auto-row">
  <div class="white--text p-relative black">
    <div class="item-box rounded orange content-center p-absolute w-100 h-30 top-50 mt--15">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute w-100 h-30 top-50 mt--15">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute w-100 h-30 top-50 mt--15">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute w-100 h-30 top-50 mt--15">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute w-100 h-30 top-50 mt--15">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute w-100 h-30 top-50 mt--15">6</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded orange content-center p-absolute w-100 h-30 top-50 mt--15">7</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute w-100 h-30 top-50 mt--15">8</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute w-100 h-30 top-50 mt--15">9</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute w-100 h-30 top-50 mt--15">10</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute w-100 h-30 top-50 mt--15">11</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute w-100 h-30 top-50 mt--15">12</div>
  </div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, auto);
  align-items: center;
}
```

**網格單元內容「垂直拉伸」** `align-items: stretch;`

<div class="grid-item-container grid-item-rows-cols-1 bg-base gap-1 outside-border auto-row">
  <div class="white--text p-relative black">
    <div class="item-box rounded orange content-center p-absolute top-0 left-0 w-100">1</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">2</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">3</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">4</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">5</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">6</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded orange content-center p-absolute top-0 left-0 w-100">7</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">8</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">9</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">10</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">11</div>
  </div>
  <div class="white--text p-relative black">
    <div class="item-box rounded content-center orange p-absolute top-0 left-0 w-100">12</div>
  </div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, auto);
  align-items: stretch;
}
```

## 🟢 [網格單元]對齊模式(縮寫) place-items
同時設置 `align-items` 與 `justify-items` 的縮寫。

**value:**
- `<align-items> <justify-items>`

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, auto);
  place-items: center center; /* place-items: center; */
}
```

## ➡️ [網格容器]水平對齊 justify-content
某些時候，分割的 [網格單元] 總數是「小於」 [網格容器]，可以輕鬆使用這個方法，來調整 [網格容器] 內容 [網格單元] 的水平對齊方式。

**value:**
- `start` 靠左對齊 (默認值)
- `end` 靠右對齊
- `center` 水平置中
- `space-between` 水平分散
- `space-around` 左、右 1/2，中間均分空間
- `space-evenly` 環繞均分所有空間

### 靠左對齊 `justify-content: start;`

<div class="grid container custom-content-demo justify-content-start border-lightgreen-dashed bg-none">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 80px) / repeat(3, 80px);
  justify-content: start;
}
```

### 靠右對齊 `justify-content: end;`

<div class="grid container custom-content-demo justify-content-end border-lightgreen-dashed bg-none">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 80px) / repeat(3, 80px);
  justify-content: end;
}
```

### 水平置中 `justify-content: center;`

<div class="grid container custom-content-demo justify-content-center border-lightgreen-dashed bg-none">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 80px) / repeat(3, 80px);
  justify-content: center;
}
```

### 水平分散 `justify-content: space-between;`

<div class="grid container custom-content-demo justify-content-space-between border-lightgreen-dashed bg-none">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 80px) / repeat(3, 80px);
  justify-content: space-between;
}
```

### 左右 1/2，中間均分 `justify-content: space-around;`

<div class="grid container custom-content-demo justify-content-space-around border-lightgreen-dashed bg-none">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 80px) / repeat(3, 80px);
  justify-content: space-around;
}
```

### 所有空間均分分散 `justify-content: space-evenly;`

<div class="grid container custom-content-demo justify-content-space-evenly bg-none border-lightgreen-dashed">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 80px) / repeat(3, 80px);
  justify-content: space-evenly;
}
```

## ⬇️ [網格容器]垂直對齊 align-content
某些時候，分割的 [網格單元] 總數是「小於」 [網格容器]，可以輕鬆使用這個方法，來調整 [網格容器] 內容 [網格單元] 的垂直對齊方式。

**value:**
- `start` 靠上對齊 (默認值)
- `end` 靠下對齊
- `center` 垂直置中
- `space-between` 垂直分散
- `space-around` 上、下 1/2，中間均分空間
- `space-evenly` 垂直均分所有空間

### 靠上對齊 `align-content: start;`

<div class="grid container custom-content-algin-demo bg-none border-lightgreen-dashed align-content-start">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, 100px);
  align-content: start;
}
```

### 靠下對齊 `align-content: end;`

<div class="grid container custom-content-algin-demo bg-none border-lightgreen-dashed align-content-end">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, 100px);
  align-content: end;
}
```

### 垂直置中 `align-content: center;`

<div class="grid container custom-content-algin-demo bg-none border-lightgreen-dashed align-content-center">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, 100px);
  align-content: center;
}
```

### 垂直分散 `align-content: space-between;`

<div class="grid container custom-content-algin-demo bg-none border-lightgreen-dashed align-content-space-between">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, 100px);
  align-content: space-between;
}
```

### 上、下 1/2，中間空間均分 `align-content: space-around;`

<div class="grid container custom-content-algin-demo bg-none border-lightgreen-dashed align-content-space-around">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, 100px);
  align-content: space-around;
}
```

### 垂直均分所有空間 `align-content: space-evenly;`

<div class="grid container custom-content-algin-demo bg-none border-lightgreen-dashed align-content-space-evenly">
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text">Grid</div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
  <div class="grid-item content-center white border-radius-none black--text"></div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, 100px);
  align-content: space-evenly;
}
```

## 🟢 [網格容器]對齊模式(縮寫) `place-content`
```css
.container {
  place-content: <align-content> / <justify-content>;
}
```

## 🔒 自動生成網格尺吋定義 grid-auto-*
當 [網格單元] 指定的位置，超出原本定義 [網格容器] 分割網格的數量時，Grid 系統會自動生成[網格單元]來補足中間的空隙，而自動生成的 [網格單元] 尺吋是「自動」分配的。

可以使用下面的方式為自動生成的 [網格單元] 定義尺吋:
-  `grid-auto-rows` 指定「高度」
-  `grid-auto-columns` 指定「寬度」
### 說明
[網格容器] 定義了分割四格的網格，若 [網格項目] 也只有四個，其尺吋都會符合定義值。

```css {3}
.container {
  display: grid;
  grid-template: 30px 30px / 60px 60px;
}
```

<div class="grid container grid-template-row-col-custom bg-none border-lightgreen-dashed align-content-start" style="height: 100px">
  <div class="grid-item content-center white border-radius-none pa-0 black--text">30*60</div>
  <div class="grid-item content-center white border-radius-none pa-0 black--text">30*60</div>
  <div class="grid-item content-center white border-radius-none pa-0 black--text">30*60</div>
  <div class="grid-item content-center white border-radius-none pa-0 black--text">30*60</div>
</div>

當指定位置的 [網格單元]，超出了原先在 [網格容器] 分割的網格區域時，就會自動生成的 [網格單元] 尺吋是「自動」分配的。

```css
.item-1 {
  grid-row: 3 / 4;
  grid-column: 6 / 7;
}
.item-2 {
  grid-row: 4 / 5;
  grid-column: 7 / 8;
}
```

<div class="grid container grid-template-row-col-custom bg-none border-lightgreen-dashed align-content-start">
  <div class="grid-item content-center white border-radius-none pa-0 black--text">30*60</div>
  <div class="grid-item content-center white border-radius-none pa-0 black--text">30*60</div>
  <div class="grid-item content-center pa-0 pink">自動分配</div>
  <div class="grid-item content-center pa-0 pink">自動分配</div>

  <div class="grid-item content-center pa-0 grid-custom-row-col-1 pink">item-1</div>
  <div class="grid-item content-center pa-0 grid-custom-row-col pink">item-2</div>
</div>

### 為生成網格定義尺吋
當設置了 `grid-auto-rows`、`grid-auto-columns`，網格就會此來自動生成。

```css {4-5}
.container {
  display: grid;
  grid-template: 30px 30px / 60px 60px;
  grid-auto-rows: 90px;     // 定義高度
  grid-auto-columns: 120px; // 定義寬度
}
```

<div class="container grid grid-template-row-col-custom grid-auto-row-col bg-none border-lightgreen-dashed">
  <div class="grid-item content-center pa-0">30*60</div>
  <div class="grid-item content-center pa-0">30*60</div>
  <div class="grid-item content-center pa-0 pink">30*90</div>
  <div class="grid-item content-center pa-0 pink">30*90</div>

  <div class="grid-item content-center pa-0 grid-custom-row-col-1 pink">120*90</div>
  <div class="grid-item content-center pa-0 grid-custom-row-col pink">120*90</div>
</div>

:::warning 注意
但原先定義的尺吋，在「行」「例」上還是會影響到部分的區塊單一邊長度；不在影響的區塊就可以完整的顯示指定的尺吋。
:::

## 🧑‍🦯 [網格項目] 分配方向 grid-auto-flow
這是關係到 [網格項目] 怎麼被分配到 [網格單元] 上，一般默認都是水平方向往右排列 (`row`)，滿了就跳下一行。但，也可以透過這個設置來改變分配方向。

**value:**
- `row` 水平方向 (默認)
- `row dense` 緊密水平方向
- `column` 垂直方向
- `column dense` 緊密垂直方向

### ➡️ 水平方向 row

<div class="grid container grid-align-demo black grid-auto-flow-row">
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">1</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">2</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">3</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">4</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">5</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">6</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">7</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">8</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">9</div>
  </div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  grid-auto-flow: row;
}
```
### ⬇️ 垂直方向 column

<div class="grid container grid-align-demo black grid-auto-flow-column">
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">1</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">2</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">3</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">4</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">5</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">6</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">7</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">8</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-stretch content-center light-green all-center">9</div>
  </div>
</div>

```css {4}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  grid-auto-flow: column;
}
```

## 🟡 網格配置 grid (縮寫)
可以針對以下的所有屬性進行配置，這是一個很簡化的寫法。
- `grid-template-areas`
- `grid-template-rows`
- `grid-template-columns`
- `grid-auto-rows`
- `grid-auto-columns`
- `grid-auto-flow`

### 分割網格
配置方式與 `grid-template:` 完全相同。

**value:**  `<grid-template-rows> / <grid-template-columns>` 

```css {3}
.container {
  display: grid;
  grid: 20px 40px 80px / 30px 60px 90px;

  /* 完全相同👇 */
  grid-template: 20px 40px 80px / 30px 60px 90px; 

  /* 完全相同👇 */
  grid-template-rows: 20px 40px 80px;
  grid-template-columns: 30px 60px 90px; 
}
```

### 分配方向 && 分割網格
除了分割網格，還同時可以設置 [網格項目] 分配方向，`auto-flow` 寫的位置決定它的方向。

- **分配方向 row**
  
  `auto-flow [dense] <grid-template-rows> / <grid-template-columns>` 
  ```css {3}
  .container {
    display: grid;
    grid: auto-flow repeat(3, auto) / 20px 40px 80px;
    
    /* 完全相同👇 */
    grid-auto-flow: row;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 20px 40px 80px;
  }
  ```

- **分配方向 column**
  
  `<grid-template-rows> / auto-flow [dense] <grid-template-columns>` 

  ```css {3}
  .container {
    display: grid;
    grid: repeat(3, auto) / auto-flow dense 20px 40px 80px;
    
    /* 完全相同👇 */
    grid-auto-flow: column dense;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 20px 40px 80px;
  }
  ```

## Reference
[Flex 彈性盒子]: /css/flex
[網格單元]: /css/grid#grid-cell-網格單元
[網格容器]: /css/grid#grid-container-網格容器
[網格項目]: /css/grid#grid-item-網格項目
- [Gap MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap)
- [[Day17] Grid 基本認識](https://ithelp.ithome.com.tw/articles/10247574)
- [gap Demo](https://css-tricks.com/almanac/properties/g/gap/)
- [How to Use CSS Grid Layout – Grid Properties Explained with Examples](https://www.freecodecamp.org/news/how-to-use-css-grid-layout/)
- [Day 6 : HTML - 網頁排版超強神器part_2，CSS grid到底是什麼？](https://ithelp.ithome.com.tw/articles/10268087)
- [一文搞懂grid布局 和 flex 布局及其区别](https://juejin.cn/post/6940627375537258527)
- [CSS Grid @Lynn's TechBlog](https://clhuang224.github.io/TechBlog/2020/03/07/20200307-css-grid/?fbclid=IwAR1FVou6krHUbZG5utHiCxwsafMzTUr7lQWmjDG04B6Gkc66sbzLQrtJe9c)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)