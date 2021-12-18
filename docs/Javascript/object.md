# 物件操作

## in

判斷否擁有 `屬性` or `原型繼承`，回傳 `boolean`

```js
let obj = { id: 1 }
console.log('id' in obj) // true
```

## Object.assign()

復製物件到指定位置 (淺拷貝，第二維之後都是 `by reference`) [淺拷貝與深拷貝](/Javascript/shallow-deep-copy) / [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

> Object.assign(target, ...sources)

```js
const obj = { id: 1, name: 'naiky' }
const copyObj = Object.assign({}, obj)
console.log(copyObj) // {id: 1, name: 'naiky'}
```

**復製多個來源**

```js
let obj1 = { id: 1 }
let obj2 = { name: 'naiky' }
let obj3 = { age: 34 }

const assignObj = Object.assign(obj1, obj2, obj3)
console.log(assignObj) // {id: 1, name: 'naiky', age: 34}
```

**相同屬性合拼**

相同 `屬性` 會被後者覆蓋

```js
let obj1 = { id: 1 }
let obj2 = { id: 2 }

const assignObj = Object.assign(obj1, obj2)
console.log(assignObj) // { id: 2 }
```

:::tip 簡單說
其實這個函式，就是把所有的 **參數 (不分 `target` `sources`)** 解構開來，再放進 `{}` 回傳。
:::
