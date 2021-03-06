# SOLID 設計原則 (物件導向程式設計)

這是 **物件導向程式設計 (OOP)** 的五個基本設計原則。當原則一起應用時，可以讓程式更容易維護與擴充，在重構時代碼更清晰。

## 核心原則

| 字首縮寫    | 名稱                 | 概念                                                                         |
| ----------- | -------------------- | ---------------------------------------------------------------------------- |
| [SRP](#srp) | [單一功能原則](#srp) | 一個功能物件，應該僅有 **單一功能**                                          |
| [OCP](#ocp) | [開閉原則](#ocp)     | 軟體應該對**擴充開放**，對於**修改封閉**                                     |
| [LSP](#lsp) | [里氏替換原則](#lsp) | **子類別** 可以擴充 **父類別** ，但不能改變 **父類別** 的功能。              |
| [ISP](#isp) | [介面隔離原則](#isp) | 提供不同的接口介面，給不同的需求使用；不使用單一介面，提供綜合功能。         |
| [DIP](#dip) | [依賴反轉原則](#dip) | 避免 **高層模組** 與 **低層功能** 直接耦合關係，需透過 **抽象介面** 來橋接。 |

## SRP 單一功能原則

一個功能只做一件事，減少功能的複雜度，避免修改功能時互相影響。

### 多重功能

實作一個發送 `email` 的功能，當客戶 **存在** 就會打發送 `email` 的 `api` 且發送完還要後續處理顯示 (成功/失敗)，所有功能寫在同一個函式。

```js
function sendEmailToActiveClients(clients) {
  clients.forEach((client) => {
    if (client.isActive) axios.post('send-email-api-url', data)
  })
}
```

> 會發現任何一個判斷或功能修改，都要進來這個函式內，且會互相影響。

### 單一功能

可以針對各別的需求，另外拆分功能，這樣以後在維護、修改上，都會比較方便。

- 判斷客戶是否存在
- 發送 email
- email api

```js
const sendEmailApi = (clientData) =>
  request.post('send-email-api-url', clientData)

const getActiveClients = (clients) => clients.filter((client) => client.active)

const sendEmail = (activeClients) => {
  activeClients.forEach((activeClient) => sendEmailApi(activeClient.emailData))
}
```

## OCP 開閉原則

可以任意擴充功能在實體上，但不修改原本功能。

> 實體對 **擴充功能** 保持開放，對 **修改功能** 保持封閉。

假設我們的功能是這樣，取得資料再做後續處理。

```js
async function getUserData(newDataType) {
  const { data } = await getUserDataAPI()
  setUserList = data.list
}
```

如果需要新增判斷，就需要改到原本的代碼，如果之後更多判斷，每次都要一直修改下去....

```js
async function getUserData(newDataType) {
  const { status, data } = await getUserDataAPI()
  if (status) return (setUserList = data.list)
  console.log('取得資料失敗')
}
```

把要執行的事件，抽離出來獨立一個 `todo` 物件，`function` 依類型來執行 `todo` 屬性的事件，之後如果有新增的類型，只需要增加對應的事件在 `todo` 就可以了，不會修改到 `getUserData` 功能。

```js
const todo = {
  type1: (data) => console.log(data),
  type2: (data) => console.log(data),
  type3: (data) => console.log(data),
  ...
}

async function getUserData(newDataType) {
  const { type, data } = await getUserDataAPI()
  todo[type](data)
}
```

## LSP 里氏替換原則

如果 `Dog` 與 `Cat` 繼承了 `Animal` (父類別)，那 `Animal` 的所有功能， `Cat` 、 `Dog` 應該都要能夠**不發生錯誤**。

### 經典錯誤案例

**父類** 為「矩形」實例，繼承的 **子類** 為「正方形」實例。

```js
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  setHeight(newHeight) {
    this.height = newHeight
  }
  getArea() {
    return this.height * this.width
  }
}

class Square extends Rectangle {
  setHeight(newHeight) {
    this.height = newHeight
    this.width = newHeight
  }
}
```

當 **正方形** 調動 **矩形** (父類) `setHeight` 方法時，就產生了錯誤，**正方形** 的長、寬比已經不是正方形的規則，成為 **無效** 的正方形。

```js
const a = new Rectangle(100, 50)
console.log(a.width, a.height) // 100 50 ✅

const b = new Square(30, 30)
console.log(b.width, b.height) // 30 30 ✅

b.setHeight(50)
console.log(b.width, b.height) // 30 50 ❌
```

這可以在 `Rectangle` 使用 **多形態** 設置 `if` 來處理正方形的問題或其它方式，但真正的問題為 `Square` 不是 `Rectangle` 好的 **子類**。
實際上 `Rectangle` 與 `Square` 都應該繼承自另外的 `Shape` Class。

## ISP 介面隔離原則

不同的`介面` 有不同的服務，不讓一個 `介面` **包山包海**，裡面會有用不到的功能。
是為了降低維護一個巨大 `介面` 的成本，每個功能都被拆分為小的部分，只需要針對該部分維護、修改就可以。 **降低依賴 「大模組」 !!**

**直接依賴「大模組」**

假設三個 `對象` 都使用了 `OPS` 的模組，那 `對象` 只會使用到其中一個功能，其餘兩個功能都是沒有必要的。

![](/Javascript/img/solid-isp.jpg)

**依賴各別介面** 

`大模組` 與 `對象` 之間，設置一個介面，彼此互相隔離、只取用自已需要的功能。

![](/Javascript/img/solid-isp-1.jpg)


**範例**
- 把大模組拆分為更小的接口
- 將客戶端的依賴轉移到小的接口，這樣客戶端不會直接依整在大的模組。

```js
// bankModule.js
export const deposit = () => { ... }
export const withdrawal = () => { ... }
export const transfer = () => { ... }
```

```js
import { deposit } from './bankModule'
```

## DIP 依賴反轉原則

`高層模組` -> `抽象介面` -> `底層方法`

**高層模組** 不直接操作 **底層方法**，是透過 **抽象** 介面來操作 **底層方法** 。這樣 **底層方法** 替換、修改也不影響到 **頂層模組**。

### 直接依賴低層方法

**高層模組** `(Example/Example2)` 的 `downloadFromData` 方法，是一個實際執行 `fetch` 取資料的 **底層方法**。
當 `downloadFromData` 修改時，所有依賴的 **高層模組** 都要同時修改內部的 `downloadFromData` 方法，這樣對後續維護是一個惡夢。

```js {9-11,21-23}
const apiUrl = ''

class Example {
  constructor() {
    ...
  }

  downloadFromData() {
    fetch(apiUrl).then((res) => {
      console.log('取得資料!')
    })
  }
}

class Example2 {
  constructor() {
    ...
  }

  downloadFromData() {
    fetch(apiUrl).then((res) => {
      console.log('取得資料!')
    })
  }
}
```

### 透過抽象依賴低層

將 `downloadFromData` 內部的底層方法抽離出來在 `utils.js`， 再依 **高層模組** 的使用方法各別引入。

:::tip 提示
在 `Javascript` 中，沒有 `interface`，但可以使用 `module` 導出 `class` 或 `function` 來實現這個方式。
:::
**utils.js**

```js
const apiUrl = ''

export const fetchApi = (apiUrl) => {
  return fetch(apiUrl).then((res) => res.json())
}
```

```js {1,9-11,21-23}
import { fetchApi } from '../utils.js'

class Example {
  constructor() {
    ...
  }

  downloadFromData() {
    fetchApi().then(res => {
      console.log(res)
    })
  }
}

class Example2 {
  constructor() {
    ...
  }

  downloadFromData() {
    fetchApi().then(res => {
      console.log(res)
    })
  }
}
```

**修改底層方法** `utils.js`

就算修改底層方法，將 `fetch` 改變為 `axios`，所有引入的 **高層模組** 都不用修改，也不會壞掉，而 `downloadFromData` 不過就是一個 **抽象介面** 而已。

```js
const apiUrl = ''

export const doGet = (apiUrl) => axios.get(apiUrl)
```

## Reference

- [《無瑕的程式碼》- SOLID 設計原則](https://medium.com/jason-read/%E7%84%A1%E6%9A%87%E7%9A%84%E7%A8%8B%E5%BC%8F%E7%A2%BC-solid-%E8%A8%AD%E8%A8%88%E5%8E%9F%E5%89%87-c57489d4dcc4)
- [程式如何正確撰寫 ? | 物件導向程式設計 - SOLID 設計原則 : SRP、OCP、LSP、ISP、DIP](https://devs.tw/post/439)
- [使人瘋狂的 SOLID 原則：目錄
  ](https://medium.com/%E7%A8%8B%E5%BC%8F%E6%84%9B%E5%A5%BD%E8%80%85/%E4%BD%BF%E4%BA%BA%E7%98%8B%E7%8B%82%E7%9A%84-solid-%E5%8E%9F%E5%89%87-%E7%9B%AE%E9%8C%84-b33fdfc983ca)
- [S.O.L.I.D 五大原则之开闭原则 OCP](https://www.kancloud.cn/kancloud/deep-understand-javascript/43733)
- [WIKI SOLID (物件導向設計)](<https://zh.wikipedia.org/wiki/SOLID_(%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1)>)
- [知乎 SOLID 原则实践篇](https://zhuanlan.zhihu.com/p/380550887)
- [什麼是介面隔離原則
  ](https://tso1158687.github.io/blog/2021/01/11/2020ithomed19/)
- [SOLID 依賴反轉原則 Dependency Inversion Principle (DIP)](https://medium.com/@f40507777/%E4%BE%9D%E8%B3%B4%E5%8F%8D%E8%BD%89%E5%8E%9F%E5%89%87-dependency-inversion-principle-dip-bc0ba2e3a388)
- [Dependency Inversion Principle Explained - SOLID Design Principles
  ](https://www.youtube.com/watch?v=9oHY5TllWaU)
- [以請求方法修改為例 Decoupling code in JavaScript with the Dependency Inversion Principle](https://javascript.plainenglish.io/decoupling-code-in-javascript-with-the-dependency-inversion-principle-6d23342b4aaa)
- [Day16-SOLID 原則-單一職責原則(Single Responsibility Principle)](https://tso1158687.github.io/blog/2021/01/11/2020ithomed16/)
- [LSP - The Liskov Substitution Principle](https://blog.oliverjumpertz.dev/lsp-the-liskov-substitution-principle)
- [SOLID principle #3: Liskov Substitution (JavaScript)](https://duncan-mcardle.medium.com/solid-principle-3-liskov-substitution-javascript-fdb6af8ee1ea)
- [SOLID 里氏替換原則 Liskov Substitution Principle (LSP)](https://medium.com/@f40507777/%E9%87%8C%E6%B0%8F%E6%9B%BF%E6%8F%9B%E5%8E%9F%E5%89%87-liskov-substitution-principle-adc1650ada53)
- [【Day 24】用 SOLID 方式開發 React (1)](https://ithelp.ithome.com.tw/articles/10252738?sc=rss.iron)
- [SOLID principle #4: Interface Segregation (JavaScript)](https://duncan-mcardle.medium.com/solid-principle-4-interface-segregation-javascript-cb2508422c5d)
- [【程式如何正確撰寫 ?】物件導向程式設計 - SOLID 設計原則 : SRP、OCP、LSP、ISP、DIP](https://ithelp.ithome.com.tw/articles/10257015)
