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
.h-150 {
  height: 150px;
}

.align-start {
  align-items: flex-start;
}
.align-end {
  align-items: flex-end;
}
.align-center {
  align-items: center;
}
.align-stretch {
  align-items: stretch;
}
.align-baseline {
  align-items: baseline;
}
.align-self-start {
  align-self: 
}
.pt-3 {
  padding-top: 3rem;
}
.pb-3 {
  padding-bottom: 3rem;
}
.py-2 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.w-150 {
  width: 150px;
}
.pt-4 {
  padding-top: 4rem;
}
.h-250 {
  height: 250px;
}
.relative {
  position: relative;
}
.baseline::before {
  content: '';
  position: absolute;
  border: 1px dashed red;
  width: 34px;
  top: 50%;
  left: 50%;
  margin-left: -17px;
  z-index: 9;
}
.self-start {
  align-self: flex-start;
}
.self-end {
  align-self: flex-end;
}
.self-center {
  align-self: center;
}
.self-stretch {
  align-self: stretch;
}
.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrap {
  flex-wrap: wrap;
}
.nowrap {
  flex-wrap: nowrap;
}
.wrap-reverse {
  flex-wrap: wrap-reverse;
}
</style>

## 說明
可以彈性的適應不同裝置尺吋，去填補空間或在「一度空間」中，客製化調整排版。

![](/css/img/flexbox.png)
[圖片出處]

## 容器屬性
可以在「容器」屬性設置，來調整「項目」們的排版。

**結構**

```html {1,6}
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
- `row` 水平主軸，由左開始 **(預設值)**
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

下列以 [水平主軸，由左開始 `flex-direction: row;`](/css/flex#水平主軸，由左開始-row) 為例子顯示:

**value:**
- `flex-start` 靠左 **(預設值)**
- `flex-end` 靠右
- `center` 置中
- `space-between` 分散
- `space-around` 分散 (左、右 1/2，其它均分空間)
- `space-evenly` 均分所有空間

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

:::tip 提醒
[justify-content MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
`flex-start`、 `flex-end` 寫做 `start` 、 `end` 也是不影響。
:::

## 次軸對齊方式 align-items

定義了 [資料流 flex-direction](/css/flex#➡%EF%B8%8F⬅%EF%B8%8F⬇%EF%B8%8F⬆%EF%B8%8F-flex-direction-資料流) 同時決定了「主軸」，與「主軸」垂直的方向就為「次軸」，而 `align-items` 可以為其定義對齊方向。

下列以 [水平主軸，由左開始 `flex-direction: row;`](/css/flex#水平主軸，由左開始-row) 為例子顯示:

**value:**
- `stretch` 拉撐 **(預設)**
- `flex-start` 靠上
- `flex-end` 靠下
- `center` 置中
- `baseline` 靠上，內容對齊

### 拉撐 `stretch`

<div class="flex-container border-dashed flex h-150">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css {3}
.flex-container {
  display: flex;
  align-items: stretch;
}
```

### 靠上 `start`

<div class="flex-container border-dashed flex h-150 align-start">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css {3}
.flex-container {
  display: flex;
  align-items: flex-start;
}
```

### 靠下 `end`

<div class="flex-container border-dashed flex h-150 align-end">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css {3}
.flex-container {
  display: flex;
  align-items: flex-end;
}
```

### 置中 `center` 

<div class="flex-container border-dashed flex h-150 align-center">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center">4</div>
</div>

```css {3}
.flex-container {
  display: flex;
  align-items: center;
}
```

### 靠上，內容對齊 `baseline`
「項目」靠上，再以「最高項目」為基準，所有「項目」的文字內容向它對齊。

<div class="flex-container border-dashed flex align-baseline h-250">
  <div class="flex-item green pa-1 rounded text-center pt-3">
    <span class="relative baseline">1</span>
  </div>
  <div class="flex-item blue pa-1 rounded text-center pb-3">
    <span class="relative baseline">2</span>
  </div>
  <div class="flex-item orange pa-1 rounded text-center">
    <span class="relative baseline">3</span>
  </div>
  <div class="flex-item pink pa-1 rounded text-center pt-4">
    <div class="relative baseline" style="display: flex; justify-content: center align-items: center;">4</div>
  </div>
</div>

```css {3}
.flex-container {
  display: flex;
  align-items: baseline;
}
```


## 換行設置 flex-wrap
當使用 `flex` 模式，所有「項目」就會被撐滿在「容器」之中，無視「項目」的寬度，只會被塞在一行裡。但可以透過這個屬性，恢復「項目」原有的寬度、超過 `自動` 換行。

**value:**
- `nowrap` 不換行 **(預設值)
- `wrap` 換行
- `wrap-reverse` 主軸反轉換行

### 不換行 `nowrap`

<div class="flex-container border-dashed flex h-250">
  <div class="flex-item green content-center rounded w-150">1</div>
  <div class="flex-item blue content-center rounded w-150">2</div>
  <div class="flex-item orange content-center rounded w-150">3</div>
  <div class="flex-item pink content-center rounded w-150">4</div>
  <div class="flex-item green content-center rounded w-150">5</div>
  <div class="flex-item blue content-center rounded w-150">6</div>
  <div class="flex-item orange content-center rounded w-150">7</div>
  <div class="flex-item pink content-center rounded w-150">8</div>
</div>

```css {3}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}
```

```css
.item {
  width: 150px;
}
```

### 換行 `wrap`

<div class="flex-container border-dashed flex h-250 wrap">
  <div class="flex-item green content-center rounded w-150">1</div>
  <div class="flex-item blue content-center rounded w-150">2</div>
  <div class="flex-item orange content-center rounded w-150">3</div>
  <div class="flex-item pink content-center rounded w-150">4</div>
  <div class="flex-item green content-center rounded w-150">5</div>
  <div class="flex-item blue content-center rounded w-150">6</div>
  <div class="flex-item orange content-center rounded w-150">7</div>
  <div class="flex-item pink content-center rounded w-150">8</div>
</div>

```css {3}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

```css
.item {
  width: 150px;
}
```

### 主軸反轉換行 `wrap-reverse`

<div class="flex-container border-dashed flex h-250 wrap-reverse">
  <div class="flex-item green content-center rounded w-150">1</div>
  <div class="flex-item blue content-center rounded w-150">2</div>
  <div class="flex-item orange content-center rounded w-150">3</div>
  <div class="flex-item pink content-center rounded w-150">4</div>
  <div class="flex-item green content-center rounded w-150">5</div>
  <div class="flex-item blue content-center rounded w-150">6</div>
  <div class="flex-item orange content-center rounded w-150">7</div>
  <div class="flex-item pink content-center rounded w-150">8</div>
</div>

```css {3}
.flex-container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

```css
.item {
  width: 150px;
}
```

## 項目屬性
可以在「項目」設置相關屬性，來調整排版。

```html {2-5}
<div class="flex-container border-dashed">
  <div class="flex-item bg-base pa-1 rounded text-center">1</div>
  <div class="flex-item bg-base pa-1 rounded text-center">2</div>
  <div class="flex-item bg-base pa-1 rounded text-center">3</div>
  <div class="flex-item bg-base pa-1 rounded text-center">4</div>
</div>
```

## 次軸對齊方式 align-self
藉由 `align-self` 直接對「項目」調整 `次軸` 對齊方式，優先權會大於在「容器」調整的 [次軸對齊方式 align-items](/css/flex#次軸對齊方式-align-items)。

**value:**
- `stretch` 拉撐 (預設值，若`align-items` 無特別設置)
- `flex-start` 靠上
- `flex-end` 靠下
- `center` 置中
- `baseline` 對齊 `align-items` 內容

### 拉撐 `stretch`

<div class="flex-container border-dashed flex h-150 align-center">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center self-stretch content-center">self</div>
</div>

```css
.flex-container {
  display: flex;
  align-items: center;
}
```

```css {2}
.self {
  align-self: stretch;
}
```

### 靠上 `flex-start`

<div class="flex-container border-dashed flex h-150 align-center">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center self-start content-center">self</div>
</div>

```css
.flex-container {
  display: flex;
  align-items: center;
}
```

```css {2}
.self {
  align-self: start;
}
```

### 靠下 `flex-end`

<div class="flex-container border-dashed flex h-150 align-center">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center self-end content-center">self</div>
</div>

```css
.flex-container {
  display: flex;
  align-items: center;
}
```

```css {2}
.self {
  align-self: end;
}
```

### 置中 `center`

<div class="flex-container border-dashed flex h-150">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center self-center content-center">self</div>
</div>

```css
.flex-container {
  display: flex;
}
```

```css {2}
.self {
  align-self: center;
}
```

### 對齊 `align-items` 內容 `baseline`

<div class="flex-container border-dashed flex h-150 align-center">
  <div class="flex-item green pa-1 rounded text-center">1</div>
  <div class="flex-item blue pa-1 rounded text-center">2</div>
  <div class="flex-item orange pa-1 rounded text-center">3</div>
  <div class="flex-item pink pa-1 rounded text-center self-baseline content-center">self</div>
</div>

```css
.flex-container {
  display: flex;
  align-items: center;
}
```

```css {2}
.self {
  align-self: baseline;
}
```

## Reference
[圖片出處]: https://codeburst.io/flexbox-building-a-navigation-part-2-2-6cc58b9d4173
- [CSS_Flexible_Box_Layout MDN](https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [深入解析 CSS Flexbox](https://www.oxxostudio.tw/articles/201501/css-flexbox.html)
- [Get started with Flexbox.](https://dev.to/virensuthar/get-started-with-flexbox-3in5)
- [CSS | 所以我說那個版能不能好切一點？ - Flex 基本用法](https://medium.com/enjoy-life-enjoy-coding/css-%E6%89%80%E4%BB%A5%E6%88%91%E8%AA%AA%E9%82%A3%E5%80%8B%E7%89%88%E8%83%BD%E4%B8%8D%E8%83%BD%E5%A5%BD%E5%88%87%E4%B8%80%E9%BB%9E-flex-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-e68cc2906995)
- [六角學院-flex 基礎教學](https://w3c.hexschool.com/category/flexbasic)