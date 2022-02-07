# 陣列處理
[副作用 Side Effects]: /Javascript/side-effects
## push
陣列最末端，新增 `值` (可新增多個值)

```javascript
let ary = ['one']
ary.push('two') // 2

console.log(ary) // ['one', 'two']
```

## pop

移除陣列最末端的 `值`

```javascript
let ary = ['one', 'two']
ary.pop() // two

console.log(ary) // ['one']
```

## unshift

陣列最前端，新增 `值` (可新增多位)

```javascript
let ary = []
ary.unshift('one') // 1

console.log(ary) // ['one']
```

## shift

移除陣列第一位

```javascript
let ary = ['one', 'two']
ary.shift() // 1

console.log(ary) // ['one']
```

## toString

陣列內容轉換為字串，含符號

```javascript
let ary = ['a', 'b', 'c']
ary.toString() // 'a,b,c'
```

## slice

依指定的 `索引(起始)`  ~ `索引(終止之前)` 回傳新的陣列 (淺拷貝)，原本的陣列不會被修改。

```javascript
let ary = [1, 2, 3, 4, 5, 6]
ary.slice(2, 4) // [3, 4]
```

## splice

移除 **原陣列** 既有的 `值`，或移除同時可以加入 `值` 到操作的 `索引` 。

- `索引` 起始
- `位數` 移除位數
- `值` 新增的值 (option 可多位)

```javascript
let ary = [1, 2, 3, 4, 5, 6]

ary.splice(2, 1) // [3] 
// (移除 索引2 移除一位數)

console.log(ary) // [1, 2, 4, 5, 6]

ary.splice(2, 2, 'a', 'b', 'c') // [4, 5]
// (移除 索引2 移除二位數 加入'a', 'b', 'c')

console.log(ary) // [1, 2, 'a', 'b', 'c' 6]
```
:::warning
會有 **副作用**
:::


## includes

元素是否在陣列之中

```javascript
const item = 'a'
let ary = ['a', 'b']

console.log(ary.includes(item)) // true
```

## sort

依 `Unicode` 字串位置排序陣列

```javascript
ary = [2,1,5,3,7,4,7]
ary.sort() // [1, 2, 3, 4, 5, 7, 7]
```

### 進階操作
> arr.sort(`[compareFunction]`)
- `compareFunction` 比較函式
  - `return 負值` 向前調整位置
  - `return 正值` 向後調整位置
  - `return 0` 維持原位

**Reference**
- [[JavaScript] 從 Array 的 sort 方法，聊到各瀏覽器的實作，沒想到 Chrome 和FireFox 的排序如此不同](https://realdennis.medium.com/javascript-%E5%BE%9Earray%E7%9A%84sort%E6%96%B9%E6%B3%95-%E8%81%8A%E5%88%B0%E5%90%84%E5%AE%B6%E7%80%8F%E8%A6%BD%E5%99%A8%E7%9A%84%E5%AF%A6%E4%BD%9C%E7%AE%97%E6%B3%95-c23a335b1b80)
- [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [15 Javascript codes you will always need](https://medium.com/@mertcanarguc/15-javascript-codes-you-will-always-need-e8569903dd1)
## join

將陣列中所有的元素，組合成一個字串(包含 `,`)，且回傳這個組合好的字串。

```javascript
let ary = ['hello', 'world']
ary.join() // 'hello,world'
```

## map
依 `callback` 的回傳值，建立一個 **新的** 陣列回傳。
```js
const ary = [1, 2, 3, 4, 5]
const plus2 = ary.map(value => value + 2) // 都加 2 回傳

console.log(plus2) // [3, 4, 5, 6, 7]
```

```js
const ary = [1, 2, 3, 4, 5]
const resAry = ary.map(value => value > 3) 


console.log(resAry) // [false, false, false, true, true]
```

:::tip 提示
這個方法不會產生 [副作用 Side Effects]
:::