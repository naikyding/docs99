# 物件屬性定義 Object.defineProperty

:::tip 簡單說
可以為物件定義特殊的屬性功能，也是 `vue2` 資料綁定的核心技術。

缺點:

- 無法監聽整個物件
- 只能監聽有設置的屬性
- 定義後，物件若更新屬性無法追蹤

:::

## 說明

可以使用 `Object.defineProperty` 為已存在的物件做屬性定義，可以針對屬性做更細節的設置。

### 語法

#### Object.defineProperty(`物件`, `屬性`, {`描述設置`})

**描述設置**
| 項目 | 說明 | 設定值 | 預設值|
|-|-|-|-|
| writable | 可修改 | `boolean` | `false` |
|configurable | 可修改/刪除 | `boolean` | `false` |
|enumerable| 顯示於迴圈 | `boolean` | `false` |
|value | 屬性資料 | str / num | `undefined` |
|get| 讀取時觸發 | 函式 | `undefined`|
|set| 設置時觸發| 函式 | `undefined`|

:::danger 注意
`setter` 與 `getter` 無法與 `value`、`writable` 共用，會報錯。
:::

:::tip 一般物件

```js
const obj = { a: 1 }
```

一般不經由 `Object.defineProperty` 定義的物件屬性，`writable`、`configurable `、`enumerable` 都是 `true` 保留最大的設置彈性。

:::

## 屬性定義

### 資料設置

為 `obj` 定義一個屬性 `obj.b` 且只定義 `value` ，其它設置會是默認為 `true` 不可修改。

```js
const obj = { a: 0 }

Object.defineProperty(obj, 'b', {
  value: 99,
})

console.log(obj.b) // 99

obj.b = 100
console.log(obj.b) // 99
```

:::warning 注意
屬性默認不可覆寫。
:::

### 覆寫設置 writable

為 `obj.b` 設置 `writable: true` ，這個屬性就可以被覆寫。

```js {5}
const obj = { a: 0 }

Object.defineProperty(obj, 'b', {
  value: 99,
  writable: true,
})

console.log(obj.b) // 99

obj.b = 100
console.log(obj.b) // 100
```

### 重新配置設置 configurable

一般默認的情況下，是不可以為屬性重新配置，也不可以刪除。

```js
const obj = {}

Object.defineProperty(obj, 'a', {
  value: 11,
})

// 刪除屬性
delete obj.a // false
obj.a // 11

// 重新配置屬性
Object.defineProperty(obj, 'a', {
  value: 99,
})
// Uncaught TypeError: Cannot redefine property: a
// at Function.defineProperty (不可以重新配置屬性 'a')
```

為屬性設置 `configurable: true` 就可以重新配置屬性及刪除。

```js {5,15}
const obj = {}

Object.defineProperty(obj, 'a', {
  value: 99,
  configurable: true,
})

obj.a // 99

delete obj.a // true
obj.a // undefined

Object.defineProperty(obj, 'a', {
  value: 1111,
  configurable: true,
})

obj.a // 111
```

### 枚舉性 (顯示在佚代)

當對物作做佚代 (迴圈) 時，是否會顯示的設置。默認的情況是不會顯示在列舉之中。

```js {8,16,19}
const obj = {}

Object.defineProperty(obj, 'a', {
  value: 99,
})

obj // { a: 99 }
Object.keys(obj) // []

for (const index in obj) {
  console.log(index)
} // undefined

Object.defineProperty(obj, 'b', {
  value: 99,
  enumerable: true,
})

Object.keys(obj) // ['b']

for (const index in obj) {
  console.log(index)
}
// b
```

### set get 設置

可以看 [getter 與 setter](/Javascript/getter-setter) 是一樣的功能。

## Reference

- [Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
- [vueJS 深入响应式原理](https://v2.cn.vuejs.org/v2/guide/reactivity.html)
