# Proxy 物件代理

:::tip 簡單說
Proxy 可以為指定物件做「代理」，所有對物件的操作都可以被攔截，具有修改原有物件操作的功能。且「代理」與物件之間保持連結關係。

- `vue3` 資料綁定的核心技術
  :::

## 原理

`Proxy` 可以為物件對象創造一個「代理」，可以藉由這個「代理」來對指定物件進行`修改`、`攔截` ..等，基本的操作。
**不會對物件直接進行操作，而是透過「代理」連接著「指定物件」來操作。**

![](/Javascript/img/JavaScript-Proxy.png)
[圖片出處](https://www.javascripttutorial.net/es6/javascript-proxy/)

## 說明

可以透過 `Proxy` 建立新的物件或者為已存在的物件做「代理」。若是已存在的物件，則會對 `getter`、`setter`重新做定義；這個「代理」方法，常使用在 `資料驗證`、`攔截`、`格式調整`、`淨化輸入`。

### 語法

#### new Proxy(`target`, `handler`)

- `target` 想要代理的目標對象
- `handler` 操作方法

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

## 無定義 handler

當 `handler` 無定義時，代理的物件也與一般物件操作沒有兩樣，可以讀取與修改。

```js
const person = {
  id: 1,
  name: 'naiky',
}

const personProxy = new Proxy(person, {})

person.id // 1
person.name // naiky

person.id = 9
person.id // 9
```

:::warning 注意
只有 「原生物件」才適用這樣的操作轉發。
:::

### 私有屬性禁止訪問

`class` 的私有屬性，只可以由聲明的 `class` 實例才能訪問。若 `Proxy` 無設置相關 `handler` 是禁止訪問的。

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

const niki = new Person('niki')
niki.firstName //  'niki'
niki.#firstName //  error
```

**禁止訪問**

```js
const nikiProxy = new Proxy(niki, {})
nikiProxy.firstName // error
```

:::danger 錯誤信息
Uncaught TypeError: Cannot read private member #firstName from an object whose class did not declare it at get firstName
:::

**允許訪問**

當設置了方法，使用 `target` 自身訪問，就得到允許了。

```js
const nikiProxy = new Proxy(niki, {
  get(target, prop) {
    return target[prop]
  },
})

nikiProxy.firstName // 'niki'
```

## 訪問攔截 `get()`

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

### 查詢功能

完全不需要使用 [物件屬性定義 Object.defineProperty] ，使用 `get()` 攔截，就可以靈活的定義查詢的方法。

```js
const data = [
  { name: 'Firefox', type: 'browser' },
  { name: 'SeaMonkey', type: 'browser' },
  { name: 'Thunderbird', type: 'mailer' },
]

const handler = {
  get(target, prop) {
    if (prop in target) return target[prop]
    if (prop === 'number') return target.length

    let matchItem = null
    let types = {}

    for (const item of target) {
      if (item.name === prop) {
        matchItem = item
      }
      if (types[item.type]) {
        types[item.type].push(item)
      } else {
        types[item.type] = [item]
      }
    }

    if (matchItem) return matchItem
    if (prop === 'types') return Object.keys(types)
    if (types[prop]) return types[prop]

    return undefined
  },
}

const prod = new Proxy(data, handler)
```

```js
// 屬性查詢
prod[0] // { name: "Firefox", type: "browser" }

// 資料數量查詢
prod.number // 3

// 資料 {name} 查詢
prod['Firefox'] // { name: "Firefox", type: "browser" }
prod['text'] // undefined

// 資料所有 {type} 查詢
prod.types // ['browser', 'mailer']
```

## 設置攔截 `set()`

當屬性進行「修改/設置」時，就會觸發這個 `set()` 函式，常見來對輸入的數據進行 `驗證`、`操作 dom` `數據加工`

#### set(`target`, `prop`, `value`)

- `target` 原始目標物件
- `prop` 訪問屬性
- `value` 設置的值

### 驗證攔截

```js
const person = { age: 1 }

const validate = {
  set(target, prop, value) {
    if (prop === 'age') {
      if (value > 100) {
        throw '年紀無效'
      }
      if (!Number.isInteger(value)) {
        throw '輸入格式不正確'
      }
    }
    target[prop] = value
    return true
  },
}

const personProxy = new Proxy(person, validate)

personProxy.age = 'old' // Uncaught 輸入格式不正確
personProxy.age = 999 // Uncaught 年紀無效

personProxy.age = 100 // 100
personProxy.age // 100
```

### DOM 操作

當 `target` 物件屬性被改變時，利用 `set()` 攔截功能操作 DOM，是資料與畫面綁定的方式。(下圖，點擊 「item1」 or 「item2」)。

<iframe height="300" style="width: 100%;" scrolling="no" title="Javascript Proxy Dom" src="https://codepen.io/naiky/embed/GRXqgVO?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/GRXqgVO">
  Javascript Proxy Dom</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**說明**

點擊時 `元素` 會被做為內容傳入 `target.selected` 中。當 `target.selected` 被設置，該元素就會被添加 `.active-style`，而舊元素 `.active-style` 就會被移除。進而達到 DOM 的操作。

:::details css

```css
.active-style {
  padding: 1rem;
  background: #2e2e2e;
  color: #fff;
}
h2 {
  padding: 1rem;
  cursor: pointer;
}
```

:::

:::details html

```html
<h2 id="item1">Item1</h2>
<h2 id="item2">Item2</h2>
```

:::

```js
const item1 = document.querySelector('#item1')
const item2 = document.querySelector('#item2')

const target = {
  selected: null,
}

const handler = {
  set(target, prop, value) {
    const oldEl = target[prop] // 舊元素
    const newEl = value // 新元素

    if (prop === 'selected') {
      if (oldEl) {
        oldEl.classList.remove('active-style')
      }
      if (newEl) {
        newEl.classList.add('active-style')
      }
    }

    target[prop] = value
    return true
  },
}

const view = new Proxy(target, handler)

item1.addEventListener('click', () => {
  view.selected = item1
})

item2.addEventListener('click', () => {
  view.selected = item2
})
```

### 資料修正與額外屬性

在物件上新增額外的屬性 `lastBrowser` 在 `set` `get` 都適用；當屬性 `browsers` 資料不符合格式 `Array`時，動態調整格式。

```js
const target = {
  browsers: ['IE', 'Firefox'],
}

const handler = {
  get(target, prop) {
    if (prop === 'lastBrowser') {
      return target['browsers'][target['browsers'].length - 1]
    }

    return target[prop]
  },

  set(target, prop, value) {
    if (prop === 'lastBrowser') {
      target['browsers'].push(value)
      return true
    }

    if (prop === 'browsers' && typeof value === 'string') {
      value = [value]
    }

    target[prop] = value
    return true
  },
}

const prod = new Proxy(target, handler)
```

物件訪問與修改都多了 `lastBrowser` 屬性，設置時也同步更新 `browsers`；當 `browsers` 修改時，若為字串則調整為陣列輸入。

```js
prod.browsers // ['IE', 'Firefox']
prod.lastBrowser // 'Firefox'

prod.lastBrowser = 'Safari'
prod.lastBrowser // 'Safari'
prod.browsers // ['IE', 'Firefox', 'Safari']

prod.browsers = 'Chrome'
prod.browsers // ['Chrome']

prod.browsers = ['Edge']
prod.browsers // ['Edge']
```

## handler 其它操作功能

此篇僅寫了常用的 `get()`、`set()`，其實 `handler` 方法中還有更多操作方法可以 [參考 MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods)

## 優缺點

### 優點

- 可以監聽物件所有變動
- 代理與物件是連結的，當物件再更新也能追蹤所有屬性
- 可以比 [物件屬性定義 object.defineproperty] 更靈活設置攔截條件。

### 缺點

[IE 不支援度](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#browser_compatibility)

## Reference

[物件屬性定義 object.defineproperty]: /Javascript/object-defineProperty

- [MDN Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [JavaScript Proxy](https://www.javascripttutorial.net/es6/javascript-proxy/)
- [[JS] JavaScript 代理（Proxy）](https://pjchender.dev/javascript/js-proxy/)
- [一起來了解 Javascript 中的 Proxy 與 Reflect](https://blog.techbridge.cc/2018/05/27/js-proxy-reflect/)
