# Constructor (Class) VS Factory Function

[constructor 建構函式]: /Javascript/constructor
[class 類]: /Javascript/class
[factory function 工廠函式]: /Javascript/factoryFunction

[constructor 建構函式]、[class 類] 都強制需要使用 `new` 來創建 **實例**，而 [Factory function 工廠函式] 不需要。

```js
// constructor
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.sayHey = function () {
  console.log(`Hey my name is ${this.name} ${this.age} years old.`)
}

// class
class Person2 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHey() {
    console.log(`Hey my name is ${this.name} ${this.age} years old.`)
  }
}

// factory function
const prototype = {
  sayHey() {
    console.log(`Hey my name is ${this.name} ${this.age} years old.`)
  },
}

const person3 = (name, age) =>
  Object.create(prototype, {
    name: {
      value: name,
    },
    age: {
      value: age,
    },
  })
```

## Constructor 與 Class 的好處

- `this` 指的是 `instance 實例` 對象。
- 直觀的創建 `instance` 方式 `myFoo = new Foo()` 。
- 經微的效能優化 (除非你有對程式進行實際分析與證明，不然不必擔心)。

## Factory Function 的好處

-

## Reference

- [JavaScript Factory Functions vs Constructor Functions vs Classes](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)
- [【Youtube - ColorCode】Factory Function vs. Constructor vs. Class - JavaScript Tutorial](https://www.youtube.com/watch?v=fbuyliXlDGI&t=103s)
