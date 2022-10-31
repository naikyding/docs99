# Flexbox 彈性盒子

<style scope>
.pink {
  background: pink;
}
.green {
  background: lightgreen;
}
.blue {
  background: lightblue;
}
.orange {
  background: orange;
}
.flex {
  display: flex;
}
.bg-base {
  background: var(--vp-c-brand);
}
.pa-1 {
  padding: 1rem;
}
.rounded {
  border-radius: 8px;
}
.border-dashed {
  border: 1px dashed var(--vp-c-brand);
}
.text-center {
  text-align: center;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-around {
  justify-content: space-around;
}
.justify-evenly {
  justify-content: space-evenly;
}
.justify-between {
  justify-content: space-between;
}
</style>

## 說明
可以彈性的適應不同裝置尺吋，去填補空間或在「一度空間」中，客製化調整排版。

![](/css/img/flexbox.png)
[圖片出處]

## 容器屬性
可以在「容器」屬性設置，來調整「項目」們的排版。

**結構**

```html
<div class="flex-container border-dashed">
  <div class="flex-item bg-base pa-1 rounded text-center">1</div>
  <div class="flex-item bg-base pa-1 rounded text-center">2</div>
  <div class="flex-item bg-base pa-1 rounded text-center">3</div>
  <div class="flex-item bg-base pa-1 rounded text-center">4</div>
</div>
```
## 🔴 使用「彈性盒子」模式 (必填)
在容器 (父層) 定義 `display: flex;` 使用 `flexbox` 排版，啟動後 「項目」的 `block` 就會變的不佔據區塊，而可以被自由調整排版。

### 一般狀態

<div class="flex-container border-dashed">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

### 使用彈性盒子模式

<div class="flex-container border-dashed flex">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css
.flex-container {
  display: flex;
}
```

## ➡️⬅️⬇️⬆️  flex-direction 資料流
可以定義「容器」 內 「項目」排序流向的 `主軸` 與 `方向`。

**value**:
- `row` 水平主軸，由左開始 **(默認)**
- `row-reverse` 水平主軸，反轉 (由右開始)
- `column` 垂直主軸，由「頂部」開始
- `column-reverse` 垂置主軸，反轉 (由「底部」開始)

### 水平主軸，由左開始 `row`

<div class="flex-container border-dashed flex">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
  <div class="flex-item pa-1 rounded text-center">資料流 →</div>
</div>

```css {3}
.flex-container {
  display: flex;
  flex-direction: row;
}
```

### 水平主軸，反轉 (由右開始) `row-reverse`

<div class="flex-container border-dashed flex flex-row-reverse">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
  <div class="flex-item pa-1 rounded text-center">← 資料流</div>
</div>

```css {3}
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}
```
### 垂直主軸，由「頂部」開始 `column`

<div class="flex-container border-dashed flex flex-col">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
  <div class="flex-item pa-1 rounded text-center">資料流 ↓</div>
</div>

```css {3}
.flex-container {
  display: flex;
  flex-direction: column;
}
```

### 垂置主軸，反轉 (由「底部」開始) `column-reverse`

<div class="flex-container border-dashed flex flex-col-reverse">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
  <div class="flex-item pa-1 rounded text-center">資料流 ↑</div>
</div>

```css {3}
.flex-container {
  display: flex;
  flex-direction: column-reverse;
}
```

## 主軸對齊方式 justify-content
當定義了 [資料流 flex-direction](/css/flex#➡%EF%B8%8F⬅%EF%B8%8F⬇%EF%B8%8F⬆%EF%B8%8F-flex-direction-資料流) 同時決定了「主軸」，而可以藉由 `justify-content` 來對這個「主軸」做對齊方式的設置。

**value:**
- `flex-start` 靠左
- `flex-end` 靠右
- `center` 置中
- `space-between` 分散
- `space-around` 分散 (左、右 1/2，其它均分空間)
- `space-evenly` 均分所有空間

下列以 [水平主軸，由左開始 `flex-direction: row;`](/css/flex#水平主軸，由左開始-row) 為例子顯顯示:

### 靠左 `flex-start` 

<div class="flex-container border-dashed flex">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css {3}
.flex-container {
  display: flex;
  justify-content: flex-start;
}
```

### 靠右 `flex-end`

<div class="flex-container border-dashed flex justify-end">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css {3}
.flex-container {
  display: flex;
  justify-content: flex-end;
}
```

### 置中 `center`

<div class="flex-container border-dashed flex justify-center">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css {3}
.flex-container {
  display: flex;
  justify-content: center;
}
```

###  分散 `space-between`

<div class="flex-container border-dashed flex justify-between">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css {3}
.flex-container {
  display: flex;
  justify-content: space-between;
}
```

###  分散 (左、右 1/2，其它均分空間) `space-around`

<div class="flex-container border-dashed flex justify-around">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css {3}
.flex-container {
  display: flex;
  justify-content: space-around;
}
```

###  均分所有空間 `space-evenly`

<div class="flex-container border-dashed flex justify-evenly">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css {3}
.flex-container {
  display: flex;
  justify-content: space-evenly;
}
```

## 次軸對齊方式 align-items


## 項目屬性

## Reference
[圖片出處]: https://codeburst.io/flexbox-building-a-navigation-part-2-2-6cc58b9d4173
- [CSS_Flexible_Box_Layout MDN](https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [深入解析 CSS Flexbox](https://www.oxxostudio.tw/articles/201501/css-flexbox.html)
- [Get started with Flexbox.](https://dev.to/virensuthar/get-started-with-flexbox-3in5)
- [CSS | 所以我說那個版能不能好切一點？ - Flex 基本用法](https://medium.com/enjoy-life-enjoy-coding/css-%E6%89%80%E4%BB%A5%E6%88%91%E8%AA%AA%E9%82%A3%E5%80%8B%E7%89%88%E8%83%BD%E4%B8%8D%E8%83%BD%E5%A5%BD%E5%88%87%E4%B8%80%E9%BB%9E-flex-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-e68cc2906995)