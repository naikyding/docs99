# 誰是 this ?

:::tip 簡單說
誰調用 (宣告) 了，包含 `this` 的函式，誰是就 `this` !

`this` 值，由 **呼叫** 的函式來決定。
:::

```js

```

## 全域環境
在 **全域** 環境下執行，`this` 等於 **全域物件** (`this === window`)

```js
// 在網路瀏覽器中，window 物件也是全域物件
console.log(this === window) // true

// 全域變數 a 賦值
var a = 123 // this.a = 123 一樣意思
console.log(window.a) // 123
```

## 函式環境
誰呼叫 `函式` ，誰就決定了 `this` !

```js
function sayThis() {
  return this
}
```

**瀏覽器 / Node**
- `this` 就是 `window` (全域物件)
- `this` 就是 `global` (全域物件/對象)

```js
// 瀏覽器
sayThis() // window

// node
sayThis() // global
```

**物件呼叫**

物件內的 `this` 會指向 物件 **本身**

```js {6}
function add() {
  return this.a + this.b
}

let obj = { a: 3, b: 5}
obj.add = add // 物件 呼叫 add 函式 (this === obj)

obj.add() // 8
```



## Reference
- [鐵人賽：JavaScript 的 this 到底是誰？
](https://wcc723.github.io/javascript/2017/12/12/javascript-this/)
- [[WIKI]: this](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/this)