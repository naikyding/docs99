# Closure 閉包

:::tip 簡單說
讓每個功能相同的 `函式`，各有獨立的 `環境變數` 且不互相干擾、影響。
:::

## 定義
- 設置 `私有環境變數`
- 對外露出 `內層函式` 操作 `私有環境變數`
- 外部無法存取 `私有環境變數`

## 方法
- 建立一個會內部含 `回傳函式`or `執行函式` 的函式
- 定義外層(第一層)函式的環境變數
- 操作函式

```js
// 定義函式，參數為環境變數 
// (會回傳函式，參數為之後會針對環境變數操作的參數)
function withdraw(userBalance, userName) {
	return function(amount) {
		userBalance = userBalance - amount
		console.log(userBalance, userName)
	}
}

// 定義環境變數
const userA = withdraw(1000, 'A')
const userB = withdraw(500, 'B')

// 操作定義的環境變數
userA(100) // 900 "A"
userB(300) // 200 'B'
```

更簡潔的寫法：

```js
const withdraw = (userBalance, userName) => (amount) => userBalance = userBalance - amount

const userA = withdraw(1000, 'A')
const userB = withdraw(500, 'B')

userA(100) // 900
userB(300) // 200
```

## Reference

- [【五分鐘學前端】快速上手JavaScript的閉包Closure](https://yixuntseng-bruce.medium.com/%E4%BA%94%E5%88%86%E9%90%98%E5%AD%B8%E5%89%8D%E7%AB%AF-%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8Bjavascript%E7%9A%84%E9%96%89%E5%8C%85closure-c54321434e9f)