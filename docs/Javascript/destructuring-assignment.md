# 解構賦值

可以將 **陣列**、**物件** 內容解開且同時賦與一個獨立的變數。

## 基本解構

```js
const [a, b] = [1, 2]
console.log(a, b) // 1 2

const { id, name } = { id: 1, name: 'naiky' }
console.log(id, name) // 1 'naiky'
```

**解構剩餘的值**

```js
const [a, b, ...other] = [1, 2, 3, 4, 5, 6]
console.log(other) // [3, 4, 5, 6]
```

## Reference

- [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
