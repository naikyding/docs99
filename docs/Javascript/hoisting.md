# Hoisting 提升

對於過去的印象，程式是一行一行向下執行，但 `Javascript` 會在程式執行之前，將 **函式宣告**、**變數宣告** 先放進 `記憶體`裡面，這樣是為了讓程式在宣告 **函式** 或 **變數** 之前，就可以使用，不會發生 **錯誤**；實質上**宣告**會被提升到最前面，但 **賦值** 還是在原位。

:::tip 簡單說
`hoisting 提升` 就是，程式執行之前 `Javascript` 會將 **宣告** 放到所有 `程式` 之前。

- **宣告** 會提升，**賦值** 沒有
- **函式** 、 **變數** 宣告都會提升
- **函式參數** 在**函式** 內部也是一種宣告
  :::

## 宣告提升

**執行未宣告的變數** 將會發生錯誤

```js
console.log(a)
// Uncaught ReferenceError: a is not defined
```

**宣告之前執行** **宣告**位置提升，但**賦值** 位置不變

```js {6}
console.log(a)
var a = 1
// undefined

// --- 程式解讀 ---
var a // hoisting
console.log(a)
a = 1
```

:::warning
`hoisting` 提升的是 **宣告**，而不是 **初始化** (賦值) 。
:::

**宣告函式前執行**

```js
sayHello()

function sayHello() {
  console.log('Hello')
}

// Hello
```

## 提升優先順序

### `函數參數`與`宣告變數`

###

`函式參數` 默認的行為，是會在 **函式** 中，宣告且賦值，再接續執行後續程式。

```js
function sayHello(name) {
  console.log(`Hello ${name}`)

  var name = 'In side'
}

sayHello('Out side') // Hello Out side
```

**`hoisting` 之後**

```js
function sayHello(name) {
  var name = 'Out side' // 呼叫函式
  var name // 提升

  console.log(`Hello ${name}`)

  name = 'In side'
}

sayHello('Out side') // Hello Out side
```

### 函式與變數

**函式**的宣告順序高於 **變數**

```js
console.log(a)

var a = 1
function a() {}

// ƒ a() {}
```

## let 與 const

`let`、`const` 是存在區塊的 **區塊變數**，它們一樣會在區塊內 `hoisting 提升` 置頂，只是在宣告之前，都會讓其 **封閉作用** ，存在 **時間死區 (Temporal Dead Zone)**。在宣告之前就操作，就會出現 **ReferenceError**。

```js
console.log(aa)
let aa
// Uncaught ReferenceError: abc is not defined

console.log(bb)
const bb
// Uncaught SyntaxError: Missing initializer in const declaration
```

:::tip 變數宣告
`let`、`const` 較 **嚴格** 在宣告前都無法使用，會 **Error**。
`var` 在宣告前使用，只會 `undefined`，而不會 **Error**，這也就是自 **ES6** 後，希望開發使用 `let` `const` **為宣告方式**。
:::

## Reference

- [MDN 提升（Hoisting）](https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting)
- [JS 原力覺醒 Day06 - 提升 Hoisting](https://ithelp.ithome.com.tw/articles/10218457)
- [我知道你懂 hoisting，可是你了解到多深？ @TechBridge 技術共筆部落格](https://blog.techbridge.cc/2018/11/10/javascript-hoisting/)
- [YDKJS (Scope) : Hoisting ？ let 會 Hoist 嗎 ?](https://ithelp.ithome.com.tw/articles/10225604)
- [w3c JavaScript Hoisting](https://www.w3schools.com/js/js_hoisting.asp)
- [變數提升（Hoisting）與暫時死區（TDZ）](https://ithelp.ithome.com.tw/m/articles/10219518)
