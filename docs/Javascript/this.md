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
誰呼叫 `函式` ，誰就是 `this` !

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

## 常見誤區
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
## Reference
- [鐵人賽：JavaScript 的 this 到底是誰？
](https://wcc723.github.io/javascript/2017/12/12/javascript-this/)
- [What's THIS in JavaScript ?](https://kuro.tw/posts/2017/10/12/What-is-THIS-in-JavaScript-%E4%B8%8A/)
- [[WIKI]: this](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/this)
- [淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂](https://blog.techbridge.cc/2019/02/23/javascript-this/)
- [[教學] JavaScript this 用法整理
](https://medium.com/%E5%BE%AE%E5%B3%AF%E9%A3%9B%E7%BF%94/%E4%BB%8B%E7%B4%B9-javascript-this-%E7%9A%84%E4%BA%94%E7%A8%AE%E7%94%A8%E6%B3%95-d279327fe53a)
- [JavaScript This 系列文：this 與物件的關係](https://wcc723.github.io/javascript/2019/03/18/JS-THIS/)