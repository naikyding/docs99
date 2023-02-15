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

### 方法

- #### get `屬性() { return ... }`

- #### get `[動態屬性]() { return ... }`

### 設置 getter

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

### 刪除 getter

與一般刪除物件屬性方法一樣。

```js
delete person.firstName

person.firstName // undefined
```

### 懶加載的 getter

`getter` 是智能的，有使用到才會執行邏輯；相反的，若都沒有使用到是不會有負擔的開銷。

**暫存**

可以針對屬性做 `lazy` 或 `delay` 以暫存方法儲存供後續訪問，稱為 smart 或暫存作法。
這必須要符合以下條件才適合:

- 訪問數據開銷成本高
- 一次性訪問 or 也可能不會訪問
- 屬性資料訪問過後，不會再修改

**原理**

初次訪問屬性 -> 執行邏輯 -> 刪除 `getter` -> 重新寫入屬性供訪問暫存數據。

```js {2-3}
get notifier() {
  delete this.notifier
  this.notifier = document.querySelector('#notifier')

  return this.notifier
}
```

## setter

## Reference

<iframe width="560" height="315" src="https://www.youtube.com/embed/bl98dm7vJt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[class 類]: /Javascript/class

- [MDN getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [MDN setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
