# 誰是 this ?

:::tip 簡單說
- 誰調用 (宣告) 了，包含 `this` 的函式，誰是就 `this` !

- `this` 值，由 **呼叫** 的函式來決定。
- `this` 代表目前執行的環境。
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

物件內 **函式** 的 `this` 會指向 物件 **本身**，下面的例子 `this` 就是分別為呼叫函式的物件 `person1` 與 `person2`。

```js {1-3,7,12}
function getGender() {
  return this.gender
}

let person1 = {
  gender: 'male',
  getGender: getGender
}

let person2 = {
  gender: 'female',
  getGender: getGender
}

person1.getGender() // male (this === person1)
person2.getGender() // female (this === person2)
```



## Reference
- [鐵人賽：JavaScript 的 this 到底是誰？
](https://wcc723.github.io/javascript/2017/12/12/javascript-this/)
- [What's THIS in JavaScript ?](https://kuro.tw/posts/2017/10/12/What-is-THIS-in-JavaScript-%E4%B8%8A/)
- [[WIKI]: this](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/this)
- [淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂](https://blog.techbridge.cc/2019/02/23/javascript-this/)