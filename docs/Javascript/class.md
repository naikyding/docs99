# Class 類

[constructor 建構函式]: /Javascript/constructor

`Javascript` 本身沒有 `class` (類)，在 `ES6` 出現新語法 `class` 就是依 [Constructor 建構函式] 語法糖包裝的，讓大家更方便使用，它的本質與 [Constructor 建構函式] 是完全一樣的。

## 建立 Class

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
- 定義 `方法`
  - 內部直接寫上 `prototype` 函式 (這個部份，就是 建構函式中的 `prototype` 的方法)
    之後也可以透過 `.prototype` 來新增函式方法

:::danger 注意
`class` 沒有 **hoisting** (提升)，你必須先宣告才可以使用，不然會出現錯誤。

```js
// ReferenceError
const niki = new Person('niki', 6)

class Person{ ... }
```

:::

## Reference

- [深入淺出 JavaScript ES6 Class (類別)](https://shubo.io/javascript-class/)
- [小馬視頻 - Javascript 中文教学 - 高级语法篇 - 类的使用 Classes](https://www.youtube.com/watch?v=Nq6LXzUmNnw)
