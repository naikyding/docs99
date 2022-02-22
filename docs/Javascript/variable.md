# 變數

## 宣告方式

### var 全域變數

- ✅ 重覆宣告
- ✅ 更改值

```js
//type1:
var name = 'value' //字串
var name = 123 //數字
var 名稱 = true //布林值

//type2:
var price
var quantity
var total
price = 5
quantity = 14
total = price * quantity

//type3:
var price = 5,
  quantity = 3,
  total = price * quantity
```

**作用域**
大部分都可以被覆寫，除了 **函式** 內的宣告。

```js {5-8,11-14,17-21}
var a = 111
console.log(a) // 111

// 覆寫
if (true) {
  var a = 222
}
console.log(a) // 222

// 覆寫
for (i = 1; i < 10; i++) {
  var a = 333
}
console.log(a) // 333

// 不覆寫
function test() {
  var a = 444
}
test()
console.log(a) // 333
```

:::warning 注意
於 **函式** 內宣告，只能在 **函式** 內被認得。
:::

### let 區域變數

- ❌ 重覆宣告
- ✅ 更改值

```js

```

### const 區域常數

- ❌ 重覆宣告
- ❌ 更改值

```js

```
