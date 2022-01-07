# SOLID 設計原則 (物件導向程式設計)

這是 **物件導向程式設計 (OOP)** 的五個基本設計原則。當原則一起應用時，可以讓程式更容易維護與擴充，在重構時代碼更清晰。

## 核心原則

| 字首縮寫    | 名稱                 | 概念                                                                                              |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| [SRP](#srp) | [單一功能原則](#srp) | 物件應該僅有 **單一功能**                                                                         |
| [OCP](#ocp) | [開閉原則](#ocp)     | 軟體應該對**擴充開放**，對於**修改封閉**                                                          |
| [LSP](#lsp) | [里氏替換原則](#lsp) | **子型態**必須遵從父型態的行為進行設計                                                            |
| [ISP](#isp) | [介面隔離原則](#isp) | 提供不同的接口介面，給不同的需求使用；不使用單一介面，提供綜合功能。                              |
| [DIP](#dip) | [依賴反轉原則](#dip) | 避免 **高層模組** 與 **低層功能** 直接耦合關係，需透過 **抽象介面** 來橋接。 |

## SRP 單一功能原則

## OCP 開閉原則

## LSP 里氏替換原則

## ISP 介面隔離原則

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
  return fetch(apiUrl).then(res => res.json())
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

就算修改底層方法，將 `fetch` 改變為 `axios`，所有引入的 **高層模組** 都不用修改，也不會壞掉，而 `downloadFromData` 不過就是一個介面而已。

```js
const apiUrl = ''

export const doGet = (apiUrl) => {
  return axios.get(apiUrl);
};
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