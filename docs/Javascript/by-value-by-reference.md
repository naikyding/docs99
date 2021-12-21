# By Value && By Reference 傳值傳址

![](/Javascript/img/by-value-by-reference.gif)

:::tip 簡單說

- **傳值 `By Value`** 將「值」傳遞給另一個 `對象` ，而各別為獨立的個體，不受連動影響 (獨立的記憶體)。
  > 基本型別
- **傳址 `By Reference`** 將「位址」傳遞給另一個 `對象` ，共屬一個 **來源**，受連動影響，共享同一個記憶體。
  > 物件型別

:::

## 傳值 by value

**基本型別** (`string`、`number`、`boolean`、`null`、`undefined`) 都是將 「值」 直接賦予給直定的 **對象**。

```js
let nikiHasMoney = 10
let naikyHasMoney = nikiHasMoney

console.log(nikiHasMoney) // 10
console.log(naikyHasMoney) // 10

nikiHasMoney = 99
console.log(nikiHasMoney) // 99
console.log(naikyHasMoney) // 10
```

`nikiHasMoney` 將 `10` 傳給 `naikyHasMoney`，兩個人同時擁有 `10`，但，是各別獨立的 `10`，沒有連動關係。

## 傳址 by reference

**物件基別** (`object`、`array`...)，是將 **記憶體** 的位置，傳給指定的對象，而他們擁有的都是同一份資源。

```js
let user = { id: 1, name: 'naiky' }
let user2 = user

console.log(user) // { id: 1, name: 'naiky' }
console.log(user2) // { id: 1, name: 'naiky' }

user.id = 9
console.log(user) // { id: 9, name: 'naiky' }
console.log(user2) // { id: 9, name: 'naiky' }
```

`user` 是將內容的 **位置** 傳給 `user2`，而兩個變數內容都是同一份東西，也會受到修改連動的影響。

```js
user === user2 // true
```

> 也完全等於對方
## 重新賦值 by sharing

當 **對象** 被**整個**重新賦值，它就不是如一般所說 `物件型別` 的 **傳址** 的傳址特性。

```js
let obj = {...}
let ary = [ ...]
```
**函式**

這是常見的「坑」，當 **物件型別** 被做為參數傳入，又 **重新賦值** 時，是不受到 **修改連動** 的影響。
```js {2}
function reSet(obj) {
  obj = {id:9, name: 'XXX'}
}
let obj1 = {id:1, name: 'OOO'}

reSet(obj1)
console.log(obj1) // {id: 1, name: 'OOO'}
```
如果不是 **重新賦值**，則它又回到了 **傳址** 特性的連動。

```js {2}
function reSet(obj) {
  obj.id = 9
}
let obj1 = {id:1, name: 'OOO'}

reSet(obj1)
console.log(obj1) // {id: 9, name: 'OOO'}
```


**陣列**
```js {7}
let ary1 = [1,2,3]
let ary2 = ary1

console.log(ary1) // [1,2,3]
console.log(ary2) // [1,2,3]

ary1 = [9,9,9]
console.log(ary1) // [9,9,9]
console.log(ary2) // [1,2,3]
```

**物件**
```js {7}
let obj1 = {id:1, name: 'naiky'}
let obj2 = obj1

console.log(obj1) // {id:1, name: 'naiky'}
console.log(obj2) // {id:1, name: 'naiky'}

obj1 = {id:2, name: 'niki'}
console.log(obj1) // {id:2, name: 'niki'}
console.log(obj2) // {id:1, name: 'naiky'}
```



## Reference

- [重新認識 JavaScript: Day 05 JavaScript 是「傳值」或「傳址」？](https://ithelp.ithome.com.tw/articles/10191057)
- [深入探討 JavaScript 中的參數傳遞：call by value 還是 reference？](https://blog.techbridge.cc/2018/06/23/javascript-call-by-value-or-reference/)
- [JavaScript 的「傳值」與「傳址」
  ](https://hackmd.io/@chupai/B13YRDJJB)
- [[筆記] 談談 JavaScript 中 by reference 和 by value 的重要觀念](https://pjchender.blogspot.com/2016/03/javascriptby-referenceby-value.html)
- [JS Pass by Value vs Pass by Reference](https://medium.com/@jordanmmartin/js-pass-by-value-vs-pass-by-reference-5a8c9ebf4d14)
- [你不可不知的 JavaScript 二三事#Day26：程式界的哈姆雷特 —— Pass by value, or Pass by reference？](https://ithelp.ithome.com.tw/articles/10209104)