# getter 與 setter

## 說明

`Javascript` 的物件中，可以透過 `getter` 與 `setter` 方法來控制屬性的「訪問」與「修改」。這個方法會讓開發者在「訪問」與「修改」屬性時，執行額外的「程式邏輯」，比如 `驗證` 或 `計算`。

**私有屬性**

`getter`、`setter` 常用在定義「私有屬性」，可以防止直接訪問到「私有屬性」。定義一個 `getter` 當屬性被訪問時回傳私有屬性的值，定義一個 `setter` 當屬性被修改時，修改私有屬性。

### 例子

在 `person` 中，定義了 `person.firstName` 與 `person.lastName` 來訪問與修改 `person` 私有屬性 `_firstName`、`_lastName`。

```js {2-3,6-8,11-18,21-28,}
const person = {
  _firstName: 'Naiky', // 私有屬性
  _lastName: 'Ding', // 私有屬性

  // ------ 公有方法 getter setter -----
  get fullName() {
    return `${this._firstName} ${this._lastName}`
  },

  // 訪問 firstName 屬性 && 修改屬性
  get firstName() {
    return this._firstName
  },
  set firstName(newValue) {
    if (!newValue) return false
    this._firstName = newValue
    return this._firstName
  },

  // 訪問 lastName 屬性 && 修改屬性
  get lastName() {
    return this._lastName
  },
  set lastName(newValue) {
    if (!newValue) return false
    this._lastName = newValue
    return this._lastName
  },
}
```

:::details 一般情況
為物件命名一個方法 `fullName` 可以取得完整的名字，但如果 `fullName` 被以錯誤的方法賦值了，就無法再執行`fullName`這個函式了。

```js
const person = {
  firstName: 'Naiky',
  lastName: 'Ding',

  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}

console.log(person.fullName()) // Naiky Ding

person.fullName = 'NIKI Ding'

console.log(person.fullName()) // Uncaught TypeError: person.fullName is not a function
```

:::

:::tip getter setter 解決什麼事

- 私有化屬性
- 訪問與修改不直接操作私有屬性

:::

## getter

在物件中 `get` 語法以 `屬性`作為函式名稱設置。當物件的 `屬性` 被「訪問」就會執行這個函式。這個方法 [class 類] 也適用。 (也有點像 `vue` 的計算屬性 `computed`)

### 語法

- #### get `屬性() { return ... }`

- #### get `[動態屬性]() { return ... }`

### 物件設置 getter

```js {5-7}
const person = {
  firstName: 'Naiky',
  lastName: 'Ding',

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

console.log(person.fullName) // 'Naiky Ding'
```

::: details (圖) 可以看到 `fullName` 的加工。
![](/Javascript/img/getter.png)
:::

**其它例子**

取得資料最後一筆

```js {4-6}
const num = {
  array: [1, 2, 3, 4],

  get last() {
    return this.array[this.array.length - 1]
  },
}

console.log(num.last) // 4
```

**刪除 getter**

與一般刪除物件屬性方法一樣。

```js
delete person.firstName

person.firstName // undefined
```

### 為已存在對象定義 `getter`

可以透過 [Object.defineProperty()] 為已經存在的物件，定義 `getter`。

#### 語法

#### Object.defineProperty(`物件`, `屬性`, `屬性描述檔`)

```js {3-7}
const obj = { a: 1 }

Object.defineProperty(obj, 'b', {
  get() {
    return this.a * 5
  },
})

console.log(obj.b) // 5
```

:::warning ⛔⛔ 注意 ⛔⛔ 屬性無法刪除
若在 [Object.defineProperty()] 定義的 `getter` 會有刪除的可能性，上面的寫法會無法刪除。(重新賦 get 為 undefined)

**解決方法**

設置時，預先在描述檔設置上 `configurable: true`，這樣可以為之後的刪除屬性留後路。

```js {4}
const obj = { a: 1 }

Object.defineProperty(obj, 'b', {
  configurable: true,
  get() {
    return this.a * 5
  },
})

obj.b // 5
```

**刪除屬性**

```js
Object.defineProperty(obj, 'b', {
  get: undefined,
})

obj.b // undefined
```

:::

### class 設置 getter

```js {2-4}
class Person {
  get firstName() {
    return 'hello'
  }
}
```

```js
const niki = new Person()

console.log(niki.firstName) // hello
```

**刪除 class `getter`**

從 class 刪除原型方法

```js
delete Person.prototype.firstName

console.log(niki.firstName) // undefined
```

### class 與 defineProperty 定義 getter 差別

在 [class 類] 定義的 `get` 實際上與 `Object.defineProperty()` 定義的 `get` 使用上沒有什麼不同?

**class**

```js
class Person {
  get hello() {
    return `hello`
  }
}

const niki = new Person()
niki.hello // 'hello'

const nico = new Person()
nico.hello // 'hello'

// 取得自身屬性
Object.getOwnPropertyDescriptor(niki, 'hello') // undefined
```

**defineProperty**

```js
const obj = {}
Object.defineProperty(obj, 'hello', {
  get() {
    return `Hello`
  },
})

// 取得自身屬性內容 -> 執行
const helloDec = Object.getOwnPropertyDescriptor(obj, 'hello')
helloDec.get() // Hello
```

:::tip 最大差別

- class `get` 是定義在 「原型」上的方法，可以被所有「實例」繼承，而不在實例本身。
- `Object.defineProperty()` 是直接定義在指定的物件本身屬性上。

:::

### 懶加載的 getter

`getter` 是智能的，有使用到才會執行邏輯；相反的，若都沒有使用到是不會有負擔的開銷。

**暫存**

可以針對屬性做 `lazy` 或 `delay` 以暫存方法儲存供後續訪問，稱為 smart 或暫存作法。
這必須要符合以下條件才適合:

- 訪問數據開銷成本高
- 一次性訪問 or 也可能不會訪問
- 屬性資料訪問過後，不會再修改

**原理**

初次訪問屬性 -> 執行邏輯 -> 刪除 `getter` 屬性 -> 重新寫入屬性供訪問暫存數據。

```js {2-3}
get notifier() {
  delete this.notifier
  this.notifier = document.querySelector('#notifier')

  return this.notifier
}
```

## setter

在物件中 `set` 語法以 屬性作為函式名稱設置。當物件的 屬性被「修改」就會執行這個函式。這個方法 [class 類] 也適用。常用來修改屬性資料或驗證。

### 語法

- #### set `屬性() { ... }`

- #### set `[動態屬性]() { ... }`

### 物件設置 setter

```js {8-10}
const obj = {
  _langs: ['en'],

  get langs() {
    return this._langs
  },

  set lang(newLang) {
    this._langs.push(newLang)
  },
}

obj.langs // ['en']
obj.lang = 'vn'

obj.langs // ['en', 'vn']
```

**驗證例子**

```js
const person = {
  _firstName: 'naiky',

  get firstName() {
    return this._firstName
  },

  set firstName(newName) {
    if (!newName) {
      console.log(`名稱不可為空`)
      return false
    }
    this._firstName = newName
  },
}

person.firstName = '' // 名稱不可為空
```

**刪除 setter**

```js {9}
const langs = {
  log: ['en'],

  set lang(newLang) {
    this.log.push(newLang)
  },
}

delete person.lang
```

:::danger 注意
`setter` 與一般屬性同名時，會無法取得。

```js {13}
const person = {
  firstName: 'naiky',

  set firstName(newName) {
    if (!newName) {
      console.log(`名稱不可為空`)
      return false
    }
    this.firstName = newName
  },
}

person.firstName // undefined
```

:::

### 為已存在物件新增 setter

使用 `Object.defineProperty` 可以為已存在的物件定義 `setter`。

```js {4-7}
const obj = { a: 0 }

Object.defineProperty(obj, 'plusNum', {
  set(newNum) {
    this.a += newNum
    return this.a
  },
})

obj.a // 0

obj.plusNum = 9 // 9
obj.a // 9
```

:::danger 刪除 getter
必須在定義 `setter` 時加入 `configurable: true` 可方便後續的刪除。

```js
const obj = { a: 1 }
Object.defineProperty(obj, 'b', {
  set(val) {
    this.a += val
  },
  configurable: true,
})
```

**刪除 `setter`**

```js
delete obj.b
```

:::

### 在 class 設置 setter

```js {8-11}
class Person {
  #firstName = 'default'

  get firstName() {
    return this.#firstName
  }

  set firstName(newName) {
    this.#firstName = newName
    return this.#firstName
  }
}

const niki = new Person()
niki.firstName // 'default'

niki.firstName = 'NIKI'
niki.firstName // 'NIKI'
```

**刪除 class 中的 `setter`**

```js
delete Person.prototype.firstName
```

### class 與 defineProperty `setter` 差異

- class 定義的 `setter` 是定全在「原型」之中，所有 `實例` 都會繼承到這個方法。要從 class 原型做刪除。
- defineProperty 是定義在物件本身的屬性上。[可參考](/Javascript/getter-setter#class-與-defineproperty-定義-getter-差別)

## Reference

<iframe width="560" height="315" src="https://www.youtube.com/embed/bl98dm7vJt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[class 類]: /Javascript/class
[object.defineproperty()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

- [MDN getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [MDN setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
