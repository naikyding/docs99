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

### 🟢 grid-template-* 分割網格
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
</style>

⭐ **grid-template-rows:** (橫割)

```css
/* 指定軌道尺吋 */
.container {
  grid-template-rows: 30px 60px 90px;
}
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
.item {
  grid-template-rows: 30px 5fr 2fr;
}
```
:::

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