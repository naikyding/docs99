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

**宣告後解構**

```js
let a, b
;[a, b] = [1, 2]

console.log(a, b) // 1 2
```

**解構預設值**

```js
const ary = [1]
const [a = 6, b = 9] = ary
console.log(a, b) // 1 9
```

**變數交換**

```js
let a = 1
let b = 2
```

```js
;[b, a] = [a, b]
console.lgo(a, b) // 2 1
```

## 物件解構

```js
const { id, name } = { id: 1, name: 'naiky' }
console.log(id, name) // 1 'naiky'
```

## Reference

- [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
