# 誰是 this ?

:::tip 簡單說
- 誰調用了包含 `this` 的函式，誰是就 `this` !
- 呼叫 **函式** 的環境，就是 `this`
:::

## 全域環境
在 **全域** 環境下 `this` 等於 **全域物件** (`this === window`)

```js
// 在網路瀏覽器中，window 物件也是全域物件
console.log(this === window) // true

// 全域變數 a 賦值
var a = 123 // this.a = 123 一樣意思
console.log(window.a) // 123
```
## 函式環境
呼叫 **函式** 的環境，就是 `this` !

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

**嚴格模式**

在 **嚴格模式** 的情況下，會禁止 `this` 為 **全域物件**，這時 `this` 若為 **全域物件** 就會顯示 `undefined`

```js
'use strict'
function sayThis() {
  console.log(this)
}

sayThis() // undefined
```

## 物件環境
![](/Javascript/img/this-1.png)
> 圖片出處: [卡斯伯's Blog](https://wcc723.github.io/javascript/2019/03/18/JS-THIS/)

物件內 **函式** 的 `this` 會指向執行時所屬的物件 **本身**。下面的例子 `this` 就是分別為呼叫函式的物件 `person1` 與 `person2`。

```js {1-3,7,12,15,18}
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

// (this === person1)
person1.getGender() // male 

// (this === person2)
person2.getGender() // female 
```

如果有多層 **函式** 的 `this` 都是指向上一層!

```js {8,12}
function sayMyName() {
  console.log(this.name)
}

const person = {
  name: 'nike',
  age: 34,
  sayName: sayMyName,
  children: {
    name: 'niki',
    age: 6,
    sayName: sayMyName
  }
}

// ↓ this === person
person.sayName() // nike

//        ↓ this === children
person.children.sayName() // niki
```

**呼叫函式的環境** 決定 `this`

```js {13,16}
var name = 'out'

function sayName() {
  console.log(this.name)
}

const person = {
  name: 'in'
}

person.sayName = sayName

// 呼叫函式的環境是 `person`
person.sayName() // in 

// 呼叫函式的環境是 `window` (全域物件)
sayName() // out 
```

:::danger 間接呼叫
承上，一般操作 `person.sayName()` 就會視 `person` 為 `this`；但如果將 `person.sayName` 賦與給 **全域變數** `a`，再經由 **全域變數** 來呼叫 **函式** ，那函式的呼叫環境，就是 「全域物件 `window`」。

**🔰 呼叫函式的環境 決定 `this` !!**

```js {3}
person.sayName() // in 

const a = person.sayName
a() // out
```
:::

## 脫離物件的 this
`fun1` 函式中的 `this` 就是指向 `person` 就如之前的理解，
但 `fun2` 的 `this` 為 `window`，就與認知不同了。

```js {5-8}
const person = {
  name: 'nike',
  fun1: function() {
    console.log(this === person) // this 指向 person
    let fun2 = function() {
      console.log(this === person) //  this 指向 window
    }
    fun2()
  }
}

person.fun1() // true false
```

#### 「脫離了物件， `this` 的值就沒什麼意義」
>  [淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂](https://blog.techbridge.cc/2019/02/23/javascript-this/)


:::danger 
當 **函式 (含 `this`)** 脫離 **物件** 時， `this` 就是 **全域物件**
:::

## 箭頭函式的 this
箭頭函式不擁有 `this` 特性，會指向 **全域物件**。


```js
var name = 'out'

const person = {
  name: 'in',
  sayName: () => {
    console.log(this.name)
  }
}

person.sayName() // out
```

## 指定 this
在 **嚴格模式** 下，`this` 若指向 **全域物件** 則為 `undefined`。

```js
'use strict'
function person(age, count) {
  console.log(this, age, count)
}

person(34, 4000) // undefined 34 4000
```
### call
定義函式執行時的 `this` 值，同時傳入 `參數`。 [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

語法:
#### fun.call(`thisArg[, arg1[, arg2[, ...]]]`)
- `thisArg` 操作 `fun` 函式時，指定的 `this` 
- `arg1` … 其它參數


```js
person.call(undefined, 34, 3000) // undefined 34 3000
person.call({name: 'nike'}, 34, 3000) // {name: 'nike'} 34 3000
```

**範例** 

一般來說 `sayName2` 函式執行的 `this` 會是 **window 全域物件**，但可以使用 `call` 來指定 `this`

```js {7-10}
const person = {
  name: 'nike',
  age: 34,
  sayName: function() {
    console.log(this.name)

    let sayName2 = function() {
      console.log(this)
    }
    sayName2() // window
    sayName2.call(this) // 把 person 傳入當 this
  }
}

person.sayName() 
// nike  window  {name: 'nike', age: 34, sayName: ƒ}
```

### apply
這個操作與 `call` 其本上是全部相同，只差別在 `參數` 要使用 **陣列** 來傳入。 [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

**語法:**
#### fun.apply(`thisArg, [argsArray]`)
- `thisArg` 操作 `fun` 函式時，要傳入的 `this`
- `argsArray` 其它參數，使用 **陣列** 傳入

```js
person.apply(undefined, [34, 4000]) // undefined 34 4000
person.apply({name: 'niki'}, [34, 4000]) // {name: 'niki'} 34 4000
```

### bind 
與 `call` 操作方式 87 分像，只是 `bind` 會回傳一個綁定好 `this` 的 **函式**，待後續執行。 [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

**語法:**
#### fun.bind(`thisArg[, arg1[, arg2[, ...]]]`)
- `thisArg` 要綁定的 `this`
- `arg1` ... 要傳入的參數

```js
const bindPersonThisFun = person.bind(undefined, 34, 4000) 
bindPersonThisFun() // undefined 34 4000

const bindPersonThisFun2 = person.bind({name: 'nike'}, 34, 4000) 
bindPersonThisFun2() // {name: 'nike'} 34 4000
```

## Reference
- [鐵人賽：JavaScript 的 this 到底是誰？
](https://wcc723.github.io/javascript/2017/12/12/javascript-this/)
- [Kuro What's THIS in JavaScript ?](https://kuro.tw/posts/2017/10/12/What-is-THIS-in-JavaScript-%E4%B8%8A/)
- [[WIKI]: this](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/this)
- [淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂](https://blog.techbridge.cc/2019/02/23/javascript-this/)
- [[教學] JavaScript this 用法整理
](https://medium.com/%E5%BE%AE%E5%B3%AF%E9%A3%9B%E7%BF%94/%E4%BB%8B%E7%B4%B9-javascript-this-%E7%9A%84%E4%BA%94%E7%A8%AE%E7%94%A8%E6%B3%95-d279327fe53a)
- [JavaScript This 系列文：this 與物件的關係](https://wcc723.github.io/javascript/2019/03/18/JS-THIS/)
- [JavaScript深入之从ECMAScript规范解读this](https://github.com/mqyqingfeng/Blog/issues/7)