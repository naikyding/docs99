# 解構賦值

可以將 **陣列**、**物件** 內容解開且同時賦與一個獨立的變數。

## 陣列解構

```js
const [a, b] = [1, 2]
console.log(a, b) // 1 2
```

**解構剩餘的值**

```js
const [a, b, ...other] = [1, 2, 3, 4, 5, 6]
console.log(other) // [3, 4, 5, 6]
```

:::danger 錯誤
當使用 `...` 解構最後的所有項目時，不可以同時再加上 `,`，這樣會產生語法錯誤。 `...` 只可以放在最後。
:::

**宣告後解構**

```js
let a, b
;[a, b] = [1, 2]

console.log(a, b) // 1 2
```

**解構預設值**

若「值」為 `undefined` 時，會以 **預設值** 為指定內容。

```js {2}
const ary = [1]
const [a = 6, b = 9] = ary // 指定預設置
console.log(a, b) // 1 9
```

**變數交換**

一般要做到這樣，就先將「值」暫存在其它地方，但這個作法不用。

```js
let a = 1
let b = 2
```

```js
;[b, a] = [a, b]
console.lgo(a, b) // 2 1
```

**忽略某些值**

```js {2}
let ary = [1, 2, 3]
const [, , c] = ary // 只取第三位

console.log(c) // 3
```

## 物件解構

```js
const { id, name } = { id: 1, name: 'naiky' }
console.log(id, name) // 1 'naiky'
```
> 物件需要使用，**索引`key`** 來解構。

**重新指定變數名稱 `const { a:b }`**

```js {2}
let obj = {id: 1, name: 'naiky'}
const {id: idT2, name: nameT2} = obj // `原變數:指派新變數`
console.log(idT2, nameT2) // 1 'naiky'
```

**預設值 `const { a = b }`**

當對應的「值」 `undefined` 時，就使使用預設的值。
```js {2}
let obj = {id: 1}
const {id = 9, name = 'niki'} = obj
console.log(name) // 'niki'
```

**重新指派變數且預設值`const { a : b = c }`**

```js
let obj = {id: 1}
const {id: newIdName = 9, name: newName = 'kiki'} = obj
console.log(newName) // kiki
```

## 混合解構

**陣列**資料，轉 **物件** 使用 `key` 解構。
```js {4}
let ary = [1, 2, 3, 4, 5]

❌ const [,,, four] = ary
✅ const { 3: four } = ary

console.log(four)
```



## 函式


**物件參數解構**

函式參數如果為 **物件** 傳入，一樣可以使用 **解構賦值** 來指定變數名稱。

```js {10,15-19}
let user = {
    id: 1,
    displayName: 'naiky',
    fullname: {    
        firstName: 'hom',
        lastName: 'Ding'
    }
}

function sayId({ id }) {
    return id
}

function sayHelloMyName({
   displayName,
   fullname: {
      firstName: helloFirstName,
      lastName: helloLastName 
   } 
}) {
    return `Hello my name is ${displayName}, first name: ${helloFirstName} / last name: ${helloLastName}`
}
```

```js
sayId(user) // 1
sayHelloMyName(user) // 'Hello my name is naiky, first name: hom / last name: Ding'
```

:::tip 解構第二層
```json
{
   displayName,
   fullname: { // 第二層
      firstName: helloFirstName,
      lastName: helloLastName 
   } 
}
```
:::

**物件參數預設值**
```js {7-11}
let data = {
  position: { x: 30, y: 20 },
  radius: 20
}

function draw(
  {
    size = '100px',
    position = { x: 0, y: 0},
    radius= 99
  } = {}
) {
  console.log(size, position, radius)
}
```

```js
draw(data) // 100px {x: 30, y: 20} 20
draw() // 100px {x: 0, y: 0} 99
```

:::tip 進階
在函式參數解構時
`{ size = '100px', position = { x: 0, y: 0}, radius= 99 } = {}` ，可以看到 **解構參數** 被指派一個空物件 (`= {}`) ，這樣可以讓你操作函式時，可以不帶入 **參數** 在使用 `draw()` 也可以帶入 **預設的物件**。

函式中可以**不加上**右邊 `{}` 指派，但你的函式就**必預帶入參數** 不然會噴錯。 (找不到使用指定的變數)
:::danger Uncaught TypeError:
`Cannot read properties of undefined (reading 'size')`
:::
## Reference

- [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
