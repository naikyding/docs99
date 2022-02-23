# 變數

## 宣告類型

### var 全域變數

- ✅ 重覆宣告
- ✅ 更改值


**宣告方式**

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

```js {4-8,10-14,16-21}
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
function test(num) {
  var a = num
}
test(999)
console.log(a) // 333
```

:::warning 注意
在 **函式** 內宣告 `var`，「有區塊性」只能在 **函式** 內被認得，不影響「全域」。
:::

### let 區域變數
宣告一個「只作用在當前區塊的變數」，作用域在當前區塊，以及區塊包含的「子區塊」；不會在「全域」建立變數。

- ❌ 重覆宣告
- ✅ 更改值

```js {4-8}
let a = 111
console.log(a) // 111

// 不覆寫
if (true) {
  let a = 222
}
console.log(a) // 111
```

**作用域為「當下區塊」以及「子區塊」**

```js {4}
function test() {
  let a = 123
  function test2() {
    a = 456
  }
  test2()
  console.log(a)
} 

test()  // 456
```

**`let` 變數認定以「區塊」為主 (`{}`)**

若變數重覆宣告，會以當前區塊為認定。

```js {4}
function test() {
  let a = 123
  function test2() {
    let a = 456
  }
  test2()
  console.log(a)
} 

test()  // ?? 123
```

:::tip 提示
建議在 `{}` 內使用 `let`，在 **全域** 使用 `let` 也無法在 `window.x` 被找到。
:::

### const 區域常數
宣告一個「只作用在區塊內的常數」，設置後就不可更改。

- ❌ 重覆宣告
- ❌ 更改值

```js {2,4}
function test() {
    const a = 123
    function test2() {
      a = 456
    }
    test2()
    console.log(a) // ❌ Uncaught TypeError: Assignment to constant variable.
}

test()
```
:::tip 提示
建議在區塊 `{}` 內使用。
:::