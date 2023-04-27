# IntersectionObserver 元素進入畫面判斷

:::tip 簡單說
透過 `IntersectionObserver` 建立含 `callback` 的實例，當指定的 `dom` (target) 進入到可視的畫面時，就會執行 `callback` 事件。
:::

:::danger 注意

- 初始化會執行一次 `callback`，必須判斷是否進入畫面中 `isIntersecting`。
- IE 不支持

:::

## 說明

用來確認你設置的 **目標** 是否進入當前的可視範圍。
過去，大多數人都是使用 `scroll` 監聽滾動事件，來達到這個效果，但這樣的作法非常耗效能 (每次滾動即執行)。 `IntersectionObserver` 就可以很簡單的完成這件事情。

### 常用情境：

- 頁面無限滾動
- 實作 Lazy loading (懶加載)

## 語法

```jsx
const IntersectionObserver = new IntersectionObserver(callback[, option])
```

- `IntersectionObserver` 監聽實例

#### callback(`entries`, `observer`)

- `entries` 監聽對象們 (陣列)
  - `time` 觸發的時間 (時間戳記)
  - `target` 監聽的 dom
  - `isIntersecting` 目標是否可見 (判斷 進入 or 離開)
  - `intersectionRatio` 完全不可見時 === 0
- `observer` 監聽實例

## 使用

### Sep1 建立監聽器實例 && 執行

```js
const io = new IntersectionObserver(todo)

// 當目標進入畫面時執行 (初始化會觸發一次)
function todo(entries) {
  console.log(entries)
}
```

### Step2 設定監聽目標

```js
const el = document.querySelector('#test')
io.observe(el)
```

### 觸發事件 (當目標進入畫面時)

會有兩次觸發事件：1 進入畫面、2 離開畫面
![由此可見，我們可以依 `isIntersecting` 來判斷是進入還是離開元素。](./img/intersectionObserver.png)
:::tip
我們可以依 `isIntersecting` 來判斷是進入還是離開元素。
:::

### 例子

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li id="test">目標物件</li>
</ul>
```

```js
const io = new IntersectionObserver((enter) => {
  console.log(enter)
})

io.observe(document.querySelector('#test'))
```

### 移除監聽

```js
observer.unobserve(el)
```

## Reference

- [Day18 探索 Browser API（中）- MutationObserver、IntersectionObserver - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10217810)

- [掘金](https://juejin.cn/post/7028744289890861063)
- [Image Lazy Loading Using Browser’s Intersection Observer API — A Step by Step Guide with Examples](https://medium.com/fasal-engineering/image-lazy-loading-using-browsers-intersection-observer-api-a-step-by-step-guide-with-examples-b1a867614e8)
