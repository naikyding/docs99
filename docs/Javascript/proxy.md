# Proxy 物件代理

:::tip 簡單說
Proxy 可以為指定物件做「代理」，所有對物件的操作都可以被攔截，具有修改原有物件操作的功能。且「代理」與物件之間保持連結關係。
:::

## 原理

`Proxy` 可以為物件對象創造一個「代理」，可以藉由這個「代理」來對指定物件進行`修改`、`攔截` ..等，基本的操作。
**不會對物件直接進行操作，而是透過「代理」連接著「指定物件」來操作。**

![](/Javascript/img/JavaScript-Proxy.png)
[圖片出處](https://www.javascripttutorial.net/es6/javascript-proxy/)

**基本用法**

```js {5-8,11-16}
const obj = { a: '數據' }

const handler = {
  // {讀取} 攔截
  get(target, prop) {
    console.log(`屬性 (${prop}) 被讀取`)
    return target[prop] ? target[prop] : '這是默認值'
  },

  // {修改} 攔截
  set(target, prop, newValue) {
    if (target[prop] === newValue) return false
    target[prop] = newValue
    console.log(`屬性 (${prop}) 修改為 ${newValue}`)
    return true
  },
}

const objProxy = new Proxy(obj, handler)

objProxy.a // {讀取} 屬性 (a) 被讀取
objProxy.b = '000' // {修改} 屬性 (b) 修改為 000
```

## 說明

可以透過 `Proxy` 建立新的物件或者為已存在的物件做「代理」。若是已存在的物件，則會對 `getter`、`setter`重新做定義；這個「代理」方法，常使用在 `資料驗證`、`攔截`、`格式調整`、`淨化輸入`。

### 語法

#### new Proxy(`target`, `handler`)

- `target` 想要代理的目標對象
- `handler` 操作方法

## 基本使用

當 `handler` 無定義時，代理的物件也與一般物件操作沒有兩樣，可以讀取與修改。

```js
const person = {
  id: 1,
  name: 'naiky',
}

const handler = {}

const personProxy = new Proxy(person, handler)

person.id // 1
person.name // naiky

person.id = 9
person.id // 9
```

## 攔截設置

### 訪問觸發 `get()`

所有對物件的「訪問」都會執行這個函式，可以透過函式方法，攔截應用，像是 `組合資料`、`默認值`…。

#### get(`target`, `prop`, `receiver`)

- `target` 原始目標物件
- `prop` 訪問屬性
- `receiver` 目標物件的代理

:::details 參數比對

```js
const person = {
  id: 1,
  name: 'naiky',
}

const handler = {
  get(target, prop, receiver) {
    console.log(`target === person: ${target === person}`)
    console.log(`prop: ${prop}`)
    console.log(`personProxy === receiver: ${personProxy === receiver}`)
  },
}

const personProxy = new Proxy(person, handler)

console.log(personProxy.id)
// target === person: true
// prop: id
// personProxy === receiver: true
```

:::

```js {7-11}
const person = {
  firstName: 'naiky',
  lastName: 'ding',
}

const handler = {
  get(target, prop, receiver) {
    if (prop === 'fullName')
      return `${target['firstName']} ${target['lastName']}`
    return prop in target ? target[prop] : '不存在屬性的默認值'
  },
}

const personProxy = new Proxy(person, handler)

personProxy.name // naiky
personProxy.fullName // naiky ding
personProxy.text // 不存在屬性的默認值
```

:::tip 提醒
回傳資料需要使用 `target` 不是 `receiver` !
:::

## Reference

- [MDN Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [JavaScript Proxy](https://www.javascripttutorial.net/es6/javascript-proxy/)
- [[JS] JavaScript 代理（Proxy）](https://pjchender.dev/javascript/js-proxy/)
- [一起來了解 Javascript 中的 Proxy 與 Reflect](https://blog.techbridge.cc/2018/05/27/js-proxy-reflect/)
