# Class 類

[constructor 建構函式]: /Javascript/constructor

`Javascript` 本身沒有 `class` (類)，在 `ES6` 出現新語法 `class` 就是依 [Constructor 建構函式] 語法糖包裝的，它的底層與 [Constructor 建構函式] 是完全一樣，只是提供更簡潔的語法來建立物件與處理繼承。

## 建立基本 Class

```js {3-6,9-11}
class Person {
  // 定義實例屬性
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //  定義 prototype 原型方法
  sayHello() {
    console.log(`Hello my name is ${this.name}`);
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

跟 [constructor 建構函式] 一樣都是使用 `new` 關鍵字。

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



## Reference

- [MDN - Class](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes)
- [深入淺出 JavaScript ES6 Class (類別)](https://shubo.io/javascript-class/)
- [小馬視頻 - Javascript 中文教学 - 高级语法篇 - 类的使用 Classes](https://www.youtube.com/watch?v=Nq6LXzUmNnw)
- [Day 10: ES6篇 - Class(類別)](https://ithelp.ithome.com.tw/articles/10185583)
- [video - JavaScript Classes Tutorial](https://www.youtube.com/watch?v=2ZphE5HcQPQ&ab_channel=freeCodeCamp.org)