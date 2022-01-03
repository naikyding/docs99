# Side Effect 副作用

:::tip 簡單說
廣義來，說會變動到 **原本** 變數 or 常數的內容或狀態，都可以叫做有 **副作用 `Side Effect`**。
:::

## 表達式
**副作用**

會變動來源內容或外部裝態。

```js
count ++
x = 'hello' + name
y += 5
```
**無副作用**
```js
true
x > y
'hello word'
```
## 函式
**副作用**
```js
let status = false
const change = (newStatus) => status = newStatus
```
**無副作用**
```js
const add = (x, y) => x + y
```
## Reference
- [Day 12: ES6篇: Side Effects(副作用)與Pure Functions(純粹函式)](https://ithelp.ithome.com.tw/articles/10185780)
- [Buzz word 2 : Side Effect](https://ithelp.ithome.com.tw/articles/10234206)