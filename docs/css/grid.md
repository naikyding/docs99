# Grid 網格系統


## 說明
Grid 是一個基於網格的「二度空間」 (x, y) 佈局系統，是專門為了處理 layout 所誕生的功能，它對於瀏覽器有很好的支援度。與 [Flex 彈性盒子] 有很類似的功能，但可以對佈局有更彈性的控制力。

![](/css/img/grid-flow.png)
[圖片出處](https://www.freecodecamp.org/news/how-to-use-css-grid-layout/)

## Grid 術語
在開始編寫 `css` 之前，可以先了解網格相關的術語，更好理解當中的操作。

:::details

### Grid container 網格容器
容器 `.container` 也就是網格系統的父層，也就是編寫 `display: grid;` 的地方。

[👉css 屬性](#容器-grid-container-屬性)

```html {1,5}
<div class="container">
  <div class="item item-1"> </div>
  <div class="item item-2"> </div>
  <div class="item item-3"> </div>
</div>
```

### Grid item 網格項目
網格系統容器「下一層」子層 `.item` 就是網格的項目，`.sub-item` 不算是。

```html {2-3,5-6}
<div class="container">
  <div class="item"> </div>
  <div class="item">
    <p class="sub-item"> </p>
  </div>
  <div class="item"> </div>
</div>
```

### Grid Line 網格線
型成網格結構的分割線 (如圖黃線)，水平、垂直在網格項目的任一側。

<img src="https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-line.svg" width="300px">

### Grid Cell 網格單元
網格線之間的空間，稱為「網格單元」，下圖就是 row 網格線 `1`、`2`， column `2`、`3` 之間的網格單元。

<img src="https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-cell.svg" width="300px">

### Grid Track 網格軌道
「2條」平行網格線之間的空間，可以是 `row` 或 `column`，下面就是 rwo `2`、`3` 之間的網格軌道。

<img src="https://css-tricks.com/wp-content/uploads/2021/08/terms-grid-track.svg" width="300px">

### Grid Area 網格區域
由「4條」網格線包圍的空間，下面就是由 row `1`、`3`  column `1` `3` 之間的網格區塊。

<img src="https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-area.svg" width="300px">

:::

## 容器 Grid container 屬性
網格系統的「最上級」父層容器。

### 🔴 display (必填屬性)
這是必填屬性，在 Grid 容器上設置，網格系統才會生效。

:::details
- `grid` block 區塊容器
- `inline-grid` inline 行內容哈

```css
.container {
  display: grid;
}
```
:::

### 🟢 grid-template-rows | columns 分割網格
藉由此設置來定義 [Grid Track 網格軌道](#grid-track-網格軌道) 的空間，可以是「指定尺吋」或者「按比例」分割，可以混合設置。

可使用設置值: `20%`、`20px`、`2fr`、`auto`、`repeat(n, size)`

:::tip
- 「`fr` 按比例」: 剩餘空間等於 `fr` 數字總合，再按 `fr` 設置數字分配空間。
- 「repeat(`幾個空間`, `空間尺吋`)」 可以使用這個方式來設置多個「重覆」的空間。
:::

<style>
.grid {
  display: grid;
  background: white;
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
.grid-justify-start {
  grid-template: repeat(3, auto) / repeat(3, auto);
  justify-items: stretch;
  gap: 1px;
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
</style>

⭐ **grid-template-rows:** (橫割)

```css
/* 指定軌道尺吋 */
.container {
  grid-template-rows: 30px 60px 90px;
```

<div class="container grid-container grid grid-rows-custom">
  <div class="grid-item content-center row-line border-radius-none">1 (30px)</div>
  <div class="grid-item content-center row-line border-radius-none">2 (60px)</div>
  <div class="grid-item content-center row-line border-radius-none">3 (90px)</div>
</div>

**命名網格線**

在「網格軌道」尺吋之間，可以用 `[]` 設置「網格線」的名稱。

```css
.container {
  grid-template-rows: [first] 30px [line2] 60px [line3] 90px [end];
}
```

⭐ **grid-template-columns:** (直割)

```css
.container {
  /* 按比例分配 */
  grid-template-columns: 4fr 8fr 2fr; 
}
```

<div class="container grid-container grid grid-cols-custom">
  <div class="grid-item content-center col-line border-radius-none">1 (4fr)</div>
  <div class="grid-item content-center col-line border-radius-none">2(8fr)</div>
  <div class="grid-item content-center col-line border-radius-none">3(2fr)</div>
  <div class="grid-item content-center col-line border-radius-none">4(4fr)</div>
  <div class="grid-item content-center col-line border-radius-none">5(8fr)</div>
</div>

**命名網格線**

在「網格軌道」尺吋之間，可以用 `[]` 設置「網格線」的名稱。

```css
.container {
  grid-template-columns: [first] 4fr [line2] 8fr [line3] 2fr [end]; 
}
```

:::warning 注意
當混合單位設置，會先切割 `30px`空間，剩除空間才會按 `5fr` `2fr` 比例分配。
```css
.container {
  grid-template-rows: 30px 5fr 2fr;
}
```
:::

⭐ **grid-template:** (縮寫)

可以同時設置 `grid-template-rows`、`grid-template-columns`，是更潔簡的寫法。
:::info 語法:
grid-template: `<grid-template-rows>` / `<grid-template-columns>`;
:::

```css
.container {
  grid-template: 
}
```

### 🟢 grid-template-areas 網格區域定義
語法可以視覺化的定義「網格區域」中的指定「網格單元」，使用 `.` 來表示空白的「網格單元」，`none` 來表示無定義「網格單元」。

<div class="container grid-container grid grid-template">
  <div class="grid-item content-center pink area-item-1">Header</div>
  <div class="grid-item content-center orange area-item-2">Main</div>
  <div class="grid-item content-center light-green area-item-3">Footer</div>
  <div class="grid-item content-center light-blue area-item-4">Sidebar</div>
</div>

- 「網格項目」指定「網格單元」名稱
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

- 「網格區域」定義 `grid-template-areas`

  使用「空白」來間隔要定義的「網格單元」名稱。

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

  |none|header|header|.|
  |:-:|:-:|:-:|:-:|
  |sidebar|main|main|main|
  |footer|footer|footer|.|


### Gap 「網格線」寬度設置
- `row-gap: <size>` (橫)
- `column-gap: <size>` (直)
- `gap: <row-gap> <column-gap>` (縮寫)


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

### 網格單元 `水平` 對齊模式 justify-items
**value:**
- `start` 左
- `end` 右
- `center` 水平置中
- `stretch` 水平填滿

**網格單元內容「靠左對齊」** `justify-items: start;`
```css {4}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  justify-items: start;
}
```

<div class="grid container grid-justify-start black">
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box content-center light-green all-center">1</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box content-center light-green all-center">2</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box content-center light-green all-center">3</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box content-center light-green all-center">4</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box content-center light-green all-center">5</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box content-center light-green all-center">6</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box content-center light-green all-center">7</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box content-center light-green all-center">8</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box content-center light-green all-center">9</div>
  </div>
</div>

**網格單元內容「靠右對齊」** `justify-items: end;`
```css {4}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  justify-items: end;
}
```

<div class="grid container grid-justify-start black">
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-end content-center light-green all-center">1</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-end content-center light-green all-center">2</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-end content-center light-green all-center">3</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-end content-center light-green all-center">4</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-end content-center light-green all-center">5</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-end content-center light-green all-center">6</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-end content-center light-green all-center">7</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-end content-center light-green all-center">8</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-end content-center light-green all-center">9</div>
  </div>
</div>

**網格單元內容「水平置中」** `justify-items: center;`
```css {4}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  justify-items: center;
}
```

<div class="grid container grid-justify-start black">
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-center content-center light-green all-center">1</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-center content-center light-green all-center">2</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-center content-center light-green all-center">3</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-center content-center light-green all-center">4</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-center content-center light-green all-center">5</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-center content-center light-green all-center">6</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-center content-center light-green all-center">7</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-center content-center light-green all-center">8</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-center content-center light-green all-center">9</div>
  </div>
</div>

**網格單元內容「水平拉伸」** `justify-items: stretch;`
```css {4}
.container {
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  justify-items: stretch;
}
```

<div class="grid container grid-justify-start black">
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-stretch content-center light-green all-center">1</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-stretch content-center light-green all-center">2</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-stretch content-center light-green all-center">3</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-stretch content-center light-green all-center">4</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-stretch content-center light-green all-center">5</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-stretch content-center light-green all-center">6</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-stretch content-center light-green all-center">7</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-stretch content-center light-green all-center">8</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="justify-box-stretch content-center light-green all-center">9</div>
  </div>
</div>

### 網格單元 `垂直` 對齊模式 align-items
**value:**
- `start` 左
- `end` 右
- `center` 水平置中
- `stretch` 水平填滿

**網格單元內容「向上對齊」** `align-items: start;`
```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, auto);
  align-items: start;
}
```

<div class="grid container grid-align-demo black">
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-start content-center light-green all-center">1</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-start content-center light-green all-center">2</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-start content-center light-green all-center">3</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-start content-center light-green all-center">4</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-start content-center light-green all-center">5</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-start content-center light-green all-center">6</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-start content-center light-green all-center">7</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-start content-center light-green all-center">8</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-start content-center light-green all-center">9</div>
  </div>
</div>

**網格單元內容「向下對齊」** `align-items: end;`
```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, auto);
  align-items: end;
}
```

<div class="grid container grid-align-demo black">
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-end content-center light-green all-center">1</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-end content-center light-green all-center">2</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-end content-center light-green all-center">3</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-end content-center light-green all-center">4</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-end content-center light-green all-center">5</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-end content-center light-green all-center">6</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-end content-center light-green all-center">7</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-end content-center light-green all-center">8</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-end content-center light-green all-center">9</div>
  </div>
</div>

**網格單元內容「垂直置中」** `align-items: center;`
```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, auto);
  align-items: center;
}
```

<div class="grid container grid-align-demo black">
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-center content-center light-green all-center">1</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-center content-center light-green all-center">2</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-center content-center light-green all-center">3</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-center content-center light-green all-center">4</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-center content-center light-green all-center">5</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-center content-center light-green all-center">6</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-center content-center light-green all-center">7</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-center content-center light-green all-center">8</div>
  </div>
  <div class="grid-item relative white border-radius-none">
    <div class="align-box-center content-center light-green all-center">9</div>
  </div>
</div>

**網格單元內容「垂直拉伸」** `align-items: stretch;`
```css {4}
.container {
  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, auto);
  align-items: stretch;
}
```

<div class="grid container grid-align-demo black">
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

## 項目 Grid item 屬性


## Reference
[Flex 彈性盒子]: /css/flex
- [Gap MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap)
- [[Day17] Grid 基本認識](https://ithelp.ithome.com.tw/articles/10247574)
- [gap Demo](https://css-tricks.com/almanac/properties/g/gap/)
- [How to Use CSS Grid Layout – Grid Properties Explained with Examples](https://www.freecodecamp.org/news/how-to-use-css-grid-layout/)
- [Day 6 : HTML - 網頁排版超強神器part_2，CSS grid到底是什麼？](https://ithelp.ithome.com.tw/articles/10268087)
- [一文搞懂grid布局 和 flex 布局及其区别](https://juejin.cn/post/6940627375537258527)
- [CSS Grid @Lynn's TechBlog](https://clhuang224.github.io/TechBlog/2020/03/07/20200307-css-grid/?fbclid=IwAR1FVou6krHUbZG5utHiCxwsafMzTUr7lQWmjDG04B6Gkc66sbzLQrtJe9c)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)