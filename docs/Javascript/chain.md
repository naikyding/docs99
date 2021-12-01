# 封裝「鏈式」函式庫

```js
// jquery
$(".box").height(200).width(200) 

// vue3
createApp(App)
  .use(Router)
  .use(Vuex)
  .mount('#app')
```

:::tip 簡單說
對指定的 **對象** 使用 `.` **鏈式** ，可連續調用這個對象進行多種的操作。

核心在於 `return this`
:::

## [建構函式](/Javascript/constructor) 
相同的，也可以使用 `Class` 來建構。
```js
const Num = function(num) {
	this.num = num
}

Num.prototype.add = function() {
	this.num ++
	return this
}

Num.prototype.less = function() {
    this.num --
	return this
}

const ten = new Num(10)

ten.add().less().num // 10
```

## 工廠函式
```js
const bank = (balance) => {
    return {
        get() {
            return balance
        },
        deposit(amount) {
            balance += amount
            return this
        },
        withdrawal(amount) {
            balance -= amount
            return this
        }
        
    }
}

const A = bank(1000)

A.deposit(500).withdrawal(300).get() // 1200
```

## Reference
- [如何封裝一個可被鏈式調用的函式庫？](https://realdennis.medium.com/%E5%A6%82%E4%BD%95%E5%B0%81%E8%A3%9D%E4%B8%80%E5%80%8B%E5%8F%AF%E8%A2%AB%E9%8F%88%E5%BC%8F%E8%AA%BF%E7%94%A8%E7%9A%84%E5%87%BD%E5%BC%8F%E5%BA%AB-a64ca464be32)
- [javascript中的鍊式操作](https://zhuanlan.zhihu.com/p/110512501)
