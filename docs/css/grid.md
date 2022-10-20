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
這是必填屬性，網格系統才會生效。
:::details
- `grid` block 區塊容器
- `inline-grid` inline 行內容哈

```css
.container {
  display: grid;
}
```
:::

### 分割網格

<style>
.grid {
  display: grid;
  background: white;
}
.grid-rows-auto {
   grid-template-rows: auto;
}
.item {
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
.grid-cols-1fr {
  grid-template-columns: 1fr 5fr 3fr 10fr 5fr; 
}
</style>

- `grid-template-rows` 橫割
  
  <div class="container grid-container grid grid-rows-auto">
    <div class="item content-center row-line">1</div>
    <div class="item content-center row-line">2</div>
    <div class="item content-center row-line">3</div>
  </div>

- `grid-template-columns` 直割

  <div class="container grid-container grid grid-cols-1fr">
    <div class="item content-center col-line">1</div>
    <div class="item content-center col-line">2</div>
    <div class="item content-center col-line">3</div>
    <div class="item content-center col-line">4</div>
    <div class="item content-center col-line">5</div>
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