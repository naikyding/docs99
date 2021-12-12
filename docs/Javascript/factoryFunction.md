# Factory Function 工廠函式

**工廠函式** 是除了 [Class 類](/Javascript/class)、[Constructor 建構函式](/Javascript/constructor) 之外，任何會 `return` 新的 **物件** 的函式。在 `Javascript` 裡，任何的 `function` 都可以 `return` 物件，但不使用 `new` 關鍵字又可以 `return` 一個新的物件的函式，就是 **工廠函式**。

## 核心

不能是使用 `new` 關鍵字創建 **實例** 的情況下，在 **函式** 內創建一個 **物件** 且 `return` 這個 **物件** ，廣義來說就是 **工廠函式**。

```js
function factoryFunciton() {
    ...
    return { ... }
}

// ES6 arrow funciton
const reateUser = ({name, age}) => ({
    ...
})
```

**直接創建一個 `物件` 不也可以做同樣的事?**

```js
const creatUser = { ... }
```

![](/Javascript/img/factory-function.png)
需求量大的時候，你就不可能一個個創建了。

:::tip 好的工廠函式

- 單純的函式
- 讓你不會有重覆的代碼
- 擁有資料的隱私性
  :::

## 建立工廠函式

```js {17-26}
// ES6 arrow funciton
const statusFactory = (status, name) => ({
  getStatus() {
    return status
  },
  setStatus(newStatus) {
    status = newStatus
    return status
  },
  getName() {
    return name
  },
})

function statusFactory(status, name) {
  return {
    getStatus() {
      return status
    },
    setStatus(newStatus) {
      status = newStatus
      return status
    },
    getName() {
      return name
    },
  }
}
```

`status`、`name` 參數，都會被記憶在 `niki` 這個變數環境內，如同 [Closure 閉包](/Javascript/closure) 有自已的 **環境變數** ，若沒有對外開放，是無法存取的。

```js
const niki = statusFactory(true, 'niki')

niki.getStatus() // true
niki.getName() // 'niki'

niki.setStatus(false) // false
niki.getStatus() // false
```

可以發現 `status` 這個私有的環境變數，是會被保持記憶且可以被存取的。

## 實例

實作一個銀行功能，包含 讀取 取款 存款 的功能

```js
const bank = (name, balance) => ({
  get() {
    return balance
  },
  withdrawal(amount) {
    return (balance = balance - amount)
  },
  deposit(amount) {
    return (balance = balance + amount)
  },
})

const a = bank('a', 10000)

a.get() // 10000
a.withdrawal(100) // 9900
a.deposit(400) // 10300
```

## Reference

- [(Video) What is Factory Function in JavaScript? - JS Tutorial](https://www.youtube.com/watch?v=lE_79wkP-1U&ab_channel=ColorCode)
- [JavaScript Factory Functions with ES6+
  ](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)
- [【譯】JavaScript 工廠函式 vs 建構函式
  ](https://iter01.com/194949.html)
