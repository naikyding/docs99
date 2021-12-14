# Constructor (Class) VS Factory Function

[constructor 建構函式]: /Javascript/constructor
[class 類]: /Javascript/class
[factory function 工廠函式]: /Javascript/factoryFunction

## 基本型態創建

如果不要仿照 **建構函式** 的方式，各別建立函式的話。

### class(建構函式)

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHello() {
    console.log(`Hello my name is ${this.name} ${this.age} years old.`)
  }
}

const niki = new Person('niki', 6)
const naiky = new Person('naiky', 34)
```

可以在`class` 建立 **原型方法** `sayHello` 都是指向同一個函式，所以不會重覆的 **記憶體**；
之後方法修改，也只要改這個 **原型方法** 就可以了。

```js
niki.sayHello === naiky.sayHello // true
```

### 工廠函式

```js
const person = (name, age) => ({
  name() {
    return name
  },
  age() {
    return age
  },
  sayHello() {
    console.log(`Hello my name is ${name} ${age} years old.`)
  },
})

const niki = person('niki', 6)
const naiky = person('naiky', 36)
```

工廠函式會整個物件 **復製** 一份，所以 **函式** 屬性，也會重復佔用不同的 **記憶體**。

```js
niki.sayHello === naiky.sayHello // false
```

### 比較

- **[class 類] (建構函式)**
  - 可以透過 **原型** 共享方法
  - 資料是外露的
    ![](/Javascript/img/constructor-vs-factory.png)
- **[factory function 工廠函式]**
  - 內容會重復創建 **佔用記憶體** (可以被解決)
  - 內部不需要指定 `this` 操作。
  - 資料保有隱私，亦可以操作。
    - 如果 `name` `age` 沒有 **return**，外界是不會知道資料的。
      ```js
      name() {
        return name
      },
      age() {
        return age
      }
      ```
      ![](/Javascript/img/constructor-vs-factory-2.png)

## 建構函式創建

下面使用了三種方式，以 `建構函式` 的模型實現 **原型與繼承**，他們都可以達到一樣的功能；都是將 **方法** 共享。關於 [Factory function 工廠函式] 的定義可以看此。

### class(建構函式)

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
```

### 工廠函式

```js
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

### 比較

- **[class 類] (建構函式)**

  - **優點**

    - `this` 指的是 `instance 實例` 對象。
    - 直觀的創建 `instance` 方式 `myFoo = new Foo()` 。
    - 經微的效能優化 (除非你有對程式進行實際分析與證明，不然不必擔心)。

  - **缺點**

    - 必須使用 `new` 關鍵字。
    - `instance` 都與 **建構函式** 緊密耦合，沒有 **工廠函式** 靈活。
    - `constructor` 違背了開發 [開閉原則 (對擴展開發、對修改關閉)](https://tso1158687.github.io/blog/2021/01/11/2020ithomed17/)，對於 **擴充** 是無法的，以下面的例子，我們想要增加汽車品牌，對於 **建構函式** 來說是困難的；而 `factory function` 是靈活的。

      ```js
      // class
      class Car {
        console.log('volvo')
      }
      const AutoMaker = { Car }

      const oldCar = new AutoMaker.Car()

      // factory
      const AutoMaker = {
        Car(brand) {
          return Object.create(this.brand[brand])
        },
        brand: {
          volvo: {
            drive() {
              console.log('volvo')
            }
          }
        }
      }

      const newCar = AutoMaker.Car('volvo')

      // 新增品牌 bmw
      AutoMaker.brand.bmw = {
        driver() {
            console.log('BMW')
        }
      }

      const newCar2 = AutoMaker.Car('bmw')
      ```

- **[factory function 工廠函式]**

  - **優點**

    - 可以 `return` 任易的 **對象** 與 **原型**
    - 不用擔心重構 (永遠不需要從 [factory function 工廠函式] 轉換為 [constructor 建構函式] 所以沒有 **重構** 的問題 )
    - 不用使用 `new` 的關鍵字
    - 有些人喜歡直觀的方法: `myFoo = createFoo()`
    - 資料的隱密性

  - **缺點**
    - 沒有 `this` 指向對象的操作
    - 效能可能比 `class` 差一點點 (只是微距)

:::tip 建構函式與工廠函式最核心的差別
[constructor 建構函式]、[class 類] 都強制需要使用 `new` 來創建 **實例**，而 [Factory function 工廠函式] 不需要。
:::

## Reference

- [【Youtube - ColorCode】Factory Function vs. Constructor vs. Class - JavaScript Tutorial](https://www.youtube.com/watch?v=fbuyliXlDGI&t=103s)
- [JavaScript Factory Functions vs Constructor Functions vs Classes](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)
- [譯 ↑](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/195549/)
