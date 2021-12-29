# Pure Function 純粹函式

[副作用 Side Effects]:/Javascript/side-effects

純粹函式 (`Pure Function`) 是 [Functional Programming 函式程式設計](/Javascript/functional-programming) 中的核心元素，**純粹函式** 可以讓你的 **功能** 更容易抽離、替換和方便測試，這是因為它不會受到外部環境影響，也不影響外部環境。
```js
function plus(height, width) {
  return height + width
}
```
:::tip 簡單說
在 **函式** 中相同的 `輸入` ，永遠得到相同的 `輸出`，且不會產生 [副作用 Side Effects]。
:::
## 核心條件
- 相同 **輸入** (傳入值)，一定會有相同的 **輸出** (回傳值)
- 不產生 [副作用 Side Effects]
- 不依賴外部狀態

## 純粹與不純粹

`javascript` 中陣列方法 `slice` 、 `splice` 是很經典的代表方法。`slice` 是**不會影響到原有的來源陣列**，而  `splice` 每次操作 **都會變動到來源的陣列**。

```js
let ary = [1, 2, 3, 4, 5, 6, 7]
```
**純粹** 
```js
ary.slice(0, 3) // [1, 2, 3]
ary.slice(0, 3) // [1, 2, 3]
ary.slice(0, 3) // [1, 2, 3]
```

**不純粹**
```js
ary.splice(0, 3) // [1, 2, 3]
ary.splice(0, 3) // [4, 5, 6]
ary.splice(0, 3) // [7]
```

## 寫一個純粹函式
原生的陣列處理 `push` 本身就不是純粹的函式，可以藉由以下的改寫，變成 **純粹函式**。

```js {10-12}
let data = [1, 2, 3, 4, 5, 6, 7]

/**
 * 在陣列新增項目
 * @date 2021-12-29
 * @param {number} addItem 欲新增的值
 * @param {array} originData 來源的陣列
 * @returns {array} 新增後的陣列
 */
function purePush(addItem, originData) {
  return [...originData, addItem]
}
```
可以看到 `console.log(data)` 還是來源陣列的內容，而 `resData` 已經是符合我們需求的陣列，且 `purePush(9, data)` 相同的輸入永遠是相同的輸出。
```js
const resData = purePush(9, data)
console.log(resData) // [1, 2, 3, 4, 5, 6, 7, 9]
console.log(data)    // [1, 2, 3, 4, 5, 6, 7]
```

:::tip 純粹函式工具
[其它純粹方法改寫](https://gist.github.com/bendc/9b05735dfa6966859025)
:::

## 純粹的好處
- 有利重構
- 方便測試
- 容易與其它函式組合
- 函式封閉與固定，覆用度高


## Reference
- [純粹的好，Pure Function 知道
](https://medium.com/frochu/%E7%B4%94%E7%B2%B9%E7%9A%84%E5%A5%BD-pure-function-%E7%9F%A5%E9%81%93-574d5c0d7819)
- [Day 12: ES6篇: Side Effects(副作用)與Pure Functions(純粹函式)](https://ithelp.ithome.com.tw/articles/10185780)
- [第 3 章：Pure Function－單純的幸福](https://jigsawye.gitbooks.io/mostly-adequate-guide/content/ch3.html)
- [JS 原力覺醒 Day18 - Functional Programming](https://ithelp.ithome.com.tw/articles/10224130)