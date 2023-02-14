# getter 與 setter

## 說明

在 `object` 或 `class` 都可以透過 `get` `set` 關鍵字，來為物件建立存取之中特殊的加工方式。

**一般情況**

為物件命名一個方法 `fullName` 可以取得完整的名字，但如果 `fullName` 被以錯誤的方法賦值了，就無法再執行`fullName`這個函式了。

```js
const person = {
  firstName: 'Naiky',
  lastName: 'Ding',

  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
}

console.log(person.fullName()) // Naiky Ding

person.fullName = 'NIKI Ding'

console.log(person.fullName()) // Uncaught TypeError: person.fullName is not a function
```

:::tip getter setter 解決什麼事

- 為賦值做把關
- 讀取與賦值分開

:::

## getter

`get` 語法以 `索引`名稱綁定一個函式，在物件 `索引`之上。當物件的 `索引` 被讀取時就會執行這個函式。這個方法 [class 類] 也適用。 (也有點像 `vue` 的計算屬性 `computed`)

### 語法

- #### get `索引名稱() { return ... }`

- #### get `[動態索引]() { return ... }`

### 設置 getter

```js {5-7}
const person = {
  firstName: 'Naiky',
  lastName: 'Ding',

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

console.log(person.fullName) // 'Naiky Ding'
```

::: details (圖) 可以看到 `fullName` 是已經處理好了加工。
![](/Javascript/img/getter.png)
:::

**其它例子**

取得資料最後一筆

```js {4-6}
const num = {
  array: [1, 2, 3, 4],

  get last() {
    return this.array[this.array.length - 1]
  },
}

console.log(num.last) // 4
```

## setter

## Reference

<iframe width="560" height="315" src="https://www.youtube.com/embed/bl98dm7vJt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[class 類]: /Javascript/class

- [MDN getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [MDN setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)
