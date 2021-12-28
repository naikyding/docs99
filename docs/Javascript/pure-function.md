# Pure Function 純粹函式

純粹函式 (`Pure Function`) 是 [Functional Programming 函式程式設計](/JavaScript/functional-programming) 中的核心元素，**純粹函式** 可以讓你的 **功能** 更容易抽離、替換和方便測試，這是因為它不會受到外部環境影響，也不影響外部環境。
```js
function plus(height, width) {
  return height + width
}
```
:::tip 簡單說
在 **函式** 中相同的 `輸入` ，永遠得到相同的 `輸出`，且不會產生 **[副作用 `Side Effect`](/JavaScript/side-effects)**。
> **輸入** 指的是函式的 **參數**，而 **輸出** 就是 **回傳值**。
:::

## 判斷是否純粹 Pure
> 核心: 相同的輸入，永遠相同輸出

`javascript` 中陣列方法 `slice` 、 `splice` 是很經典的代表方法。`slice` 是不會影響到原有的來源陣列，而  `splice` 每次操作，都會調整到來源的陣列。

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

## 好處
- 有利重構
- 方便測試
- 容易與其它函式組合


## Reference
- [純粹的好，Pure Function 知道
](https://medium.com/frochu/%E7%B4%94%E7%B2%B9%E7%9A%84%E5%A5%BD-pure-function-%E7%9F%A5%E9%81%93-574d5c0d7819)
- [Day 12: ES6篇: Side Effects(副作用)與Pure Functions(純粹函式)](https://ithelp.ithome.com.tw/articles/10185780)
- [第 3 章：Pure Function－單純的幸福](https://jigsawye.gitbooks.io/mostly-adequate-guide/content/ch3.html)
- [JS 原力覺醒 Day18 - Functional Programming](https://ithelp.ithome.com.tw/articles/10224130)