# Grid 網格系統

:::info ⚡ 快速進入

- [Grid Container [網格容器] 屬性設置](/css/grid-container)
- [Grid Item [網格項目] 屬性設置](/css/grid-item)
  :::

## 說明

Grid 是一個基於網格的「二度空間」 (x, y) 佈局系統，是專門為了處理 layout 所誕生的功能，它對於瀏覽器有很好的支援度。與 [Flex 彈性盒子] 有很類似的功能，但可以對佈局有更彈性的控制力。

在開始編寫 `css` 之前，可以先了解 Grid 相關的術語，更好理解當中的操作。

![](/css/img/grid-flow.png)
[圖片出處](https://www.freecodecamp.org/news/how-to-use-css-grid-layout/)

## Grid container 網格容器

容器 `.container` 也就是網格系統的父層，也就是編寫 `display: grid;` 的地方。

[👉css 屬性](#容器-grid-container-屬性)

```html {1,5}
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```

## Grid item 網格項目

網格系統容器「下一層」子層 `.item` 就是網格的項目，`.sub-item` 不算是。

```html {2-3,5-6}
<div class="container">
  <div class="item"></div>
  <div class="item">
    <p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>
```

## Grid Line 網格線

型成網格結構的分割線 (如圖黃線)，水平、垂直在網格項目的任一側。

<img src="https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-line.svg" width="300px">

[圖片出處](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Grid Cell 網格單元

網格線之間的空間，稱為「網格單元」，下圖就是 row 網格線 `1`、`2`， column `2`、`3` 之間的網格單元。

<img src="https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-cell.svg" width="300px">

[圖片出處](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Grid Track 網格軌道

「2 條」平行網格線之間的空間，可以是 `row` 或 `column`，下面就是 rwo `2`、`3` 之間的網格軌道。

<img src="https://css-tricks.com/wp-content/uploads/2021/08/terms-grid-track.svg" width="300px">

[圖片出處](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Grid Area 網格區域

由「4 條」網格線包圍的空間，下面就是由 row `1`、`3` column `1` `3` 之間的網格區塊。

<img src="https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-area.svg" width="300px">

[圖片出處](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 屬性設置

- [Grid Container 網格容器](/css/grid-container)
- [Grid Item 網格項目](/css/grid-item)

## Reference

[flex 彈性盒子]: /css/flex

- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Gap MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap)
- [格線佈局的基本概念 MDN](https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Grid Online Demo](https://css-tricks.com/almanac/properties/g/gap/)
- [一文搞懂 grid 布局 和 flex 布局及其区别](https://juejin.cn/post/6940627375537258527)
- [CSS Grid @Lynn's TechBlog](https://clhuang224.github.io/TechBlog/2020/03/07/20200307-css-grid/?fbclid=IwAR1FVou6krHUbZG5utHiCxwsafMzTUr7lQWmjDG04B6Gkc66sbzLQrtJe9c)
- [Grid 小遊戲](https://codingfantasy.com/games/css-grid-attack/play?mode=medium&love=true)
- [Getting Started with GSAP](https://greensock.com/get-started/)
- [GSAP Learning center](https://greensock.com/learning/)
