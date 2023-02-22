# Class 類

[constructor 建構函式]: /Javascript/constructor

`Javascript` 本身沒有 `class` (類)，在 `ES6` 出現新語法 `class` 就是依 [Constructor 建構函式] 語法糖包裝的，它的底層與 [Constructor 建構函式] 是完全一樣，只是提供更簡潔的語法來建立物件與處理繼承。

:::tip 簡單說
`Class` 只是簡化了 `JavaScript` 中操作 `Constructor` 的語法糖。
:::

## 建立基本 Class

```js {3-6,9-11}
class Person {
  // 定義實例屬性
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  //  定義 prototype 原型方法
  sayHello() {
    console.log(`Hello my name is ${this.name}`)
  }
}
```

**流程**

- 聲明 `class` 的命名物件 `{}`
- 定義 **屬性資料**
  - 內部創建一個 `consturctor` 的函式，來定義這個實例的 **屬性資料**。
- 定義 **原型方法** `prototype`
  - 內部直接寫上 **函式** (這個部份，就是 建構函式中的 `prototype` 的方法)
    之後也可以透過 `.prototype` 來新增函式方法

**創建實例**

跟 [Constructor 建構函式] 一樣都是使用 `new` 關鍵字。

```js
const niki = new Person('niki', 6)
```

:::danger 注意
`class` 沒有 **hoisting** (提升)，你必須先宣告才可以使用，不然會出現錯誤。

```js
// ReferenceError
const niki = new Person('niki', 6)

class Person{ ... }
```

:::

## 原型方法 `prototype`

可以提供 **實例 `instance`** 共享操作方法的設置，直接在 `class` 物件內建立函式，就是原型方法了。

```js {9-11}
class Person {
  // 定義實例屬性
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  //  定義 prototype 原型方法
  sayHello() {
    console.log(`Hello my name is ${this.name}`)
  }
}
```

## 建立子類別 (extends)

建立 `class` 時，加上 `extends` 關鍵字，可以用來繼承 **父層 `class`** 的 **原型方法**，同時也會將 **父層 屬性資料**，變成 **子層 屬性資料** (寫入)。

> class `子層` extends `父層` { ... }

```js {10}
class Parent {
  constructor(name) {
    this._parentName = name
  }
  sayParentName() {
    console.log(this._parentName)
  }
}

class Child extends Parent {
  sayChildName() {
    console.log('Child')
  }
}

const niki = new Child('NIKI')
```

**說明**

**子層** 會繼承 **父層** 的 `屬性資料`，**父層** 的 `_parentName` 會變成 **子層** 的 `屬性資料`，當 **子層實例** 傳入 `參數` 時，就會設置成 `_parentName`；**子層實例** 除了有本身的 **原型** 也繼承了來自 **父層 原型**。
![](/Javascript/img/class-extends.png)

:::danger Error
當 **子層** 有設置 `constructor` 時，就必須要使用 [super](/Javascript/class.html#呼叫父類別-super) 不然就會報錯：

Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

:::

## 呼叫父類別 (super)

在繼承 **父層 `class`** 情況下的 **子層 `class`**，在可在物件內使用 `super` 來操作 **父層 `class`**。

```js {17,26}
// 父層
class Parent {
  // 父層 屬性資料
  constructor(name) {
    this._parentName = name
  }
  // 父層 原型方法
  sayParentName() {
    console.log(this._parentName)
  }
}

// 子層 (繼承父層)
class Child extends Parent {
  // 子層屬性資料
  constructor(parentName, childName) {
    super(parentName) // 父層 屬性資料 賦值 (帶入父層參數)
    this._childName = childName
  }
  // 子層 原型方法
  sayChildName() {
    console.log(this._childName)
  }
  sayParentName() {
    console.log(`child sayParentName fun`)
    super.sayParentName() // 操作父層 原型方法
  }
}
```

```js
const niki = new Child('Naiky', 'NIKI')
niki.sayParentName()

// child sayParentName fun
// Naiky
```

### 說明

從 **子層 `constructor`** 的 `super` 帶的參數，會直接送到 **父層 `constructor`**，再回頭寫入 **子層 `constructor`**。

而 **子層 `prototype`** 函式內的 `super.sayParentName()`，就是直接操作 **父層 `prototype`** 的 `sayParentName` 函式。

![](/Javascript/img/class-extends-super.png)

:::tip 簡單說
`super` 代表 **父層 `class`** 物件。
:::

:::warning 注意

- **子類** 的 `super()`，在放在 `this` 使用之前。
- 當 **子層 `constructor`** 的屬性名稱與 **父層 `constructor`** 屬性名稱 **相同** 時，會以 **子層** 為主 (覆蓋)。
- 當 **子層 `prototype`** 與 **父層 `prototype`** **同名** 時，會先執行本身 **子層 `prototype`**。([若無，向上層尋找](/Javascript/prototype.html#prototype-原型觀念))
  :::

## 私有屬性

當屬性名稱以 `#` 為前綴時，就會被認為是「私有」的屬性，只可以在聲名這個變數的 class 中被訪問，外部無法訪問。

```js
class Person {
  #firstName
  constructor(firstName) {
    this.#firstName = firstName
  }
  get firstName() {
    return this.#firstName
  }
}

const niki = new Person('NIKI')

niki.firstName // 'NIKI'
niki.#firstName // Uncaught SyntaxError: Private field '#firstName' must be declared in an enclosing class
```

## Reference

- [MDN - Class](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes)
- [深入淺出 JavaScript ES6 Class (類別)](https://shubo.io/javascript-class/)
- [小馬視頻 - Javascript 中文教学 - 高级语法篇 - 类的使用 Classes](https://www.youtube.com/watch?v=Nq6LXzUmNnw)
- [Day 10: ES6 篇 - Class(類別)](https://ithelp.ithome.com.tw/articles/10185583)
- [video - JavaScript Classes Tutorial](https://www.youtube.com/watch?v=2ZphE5HcQPQ&ab_channel=freeCodeCamp.org)
- [神 q 超人 | JavaScript | ES6 中最容易誤會的語法糖 Class - 基本用法](https://medium.com/enjoy-life-enjoy-coding/javascript-es6-%E4%B8%AD%E6%9C%80%E5%AE%B9%E6%98%93%E8%AA%A4%E6%9C%83%E7%9A%84%E8%AA%9E%E6%B3%95%E7%B3%96-class-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-23e4a4a5e8ed)
- [# 类私有域](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
