# 解構賦值

可以將 **陣列**、**物件** 內容解開且同時賦與一個獨立的變數。

## 陣列解構

```js
const [a, b] = [1, 2]
console.log(a, b) // 1 2
```

**解構剩餘的值**

```js
const [a, b, ...other] = [1, 2, 3, 4, 5, 6]
console.log(other) // [3, 4, 5, 6]
```

:::danger 錯誤
當使用 `...` 解構最後的所有項目時，不可以同時再加上 `,`，這樣會產生語法錯誤。 `...` 只可以放在最後。
:::

**宣告後解構**

```js
let a, b
;[a, b] = [1, 2]

console.log(a, b) // 1 2
```

**解構預設值**

若「值」為 `undefined` 時，會以 **預設值** 為指定內容。

```js {2}
const ary = [1]
const [a = 6, b = 9] = ary // 指定預設置
console.log(a, b) // 1 9
```

**變數交換**

一般要做到這樣，就先將「值」暫存在其它地方，但這個作法不用。

```js
let a = 1
let b = 2
```

```js
;[b, a] = [a, b]
console.lgo(a, b) // 2 1
```

**忽略某些值**

```js {2}
let ary = [1, 2, 3]
const [, , c] = ary // 只取第三位

console.log(c) // 3
```

## 物件解構

```js
const { id, name } = { id: 1, name: 'naiky' }
console.log(id, name) // 1 'naiky'
```

## Reference

- [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
