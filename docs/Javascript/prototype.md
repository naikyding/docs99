# Prototype chain 原型鍵與繼承

![](/Javascript/img/prototype-chain.png)

`Javascript` 是以 **物件導向** 設計的程式語言，沒有其它語言的 `Class` 功能，它的繼承方式是使用 「原型」`prototype` 達成的。
`JavaScript` 所有東西都是一 「包」 動態的屬性的 `object` ，除了它自己的屬性，並擁有一個原型物件的鏈結，當物件試圖存取一個物件的屬性時，其不僅會尋找該物件，也會尋找該物件的原型、原型的原型...直到找到相符合的屬性，或是到達原型鏈的尾端 `null`。

:::tip 簡單說

```
所有 JavaScript 的物件，都是來自原型鏈最頂端的 [Object 原型 實例]
```

- `Javascript` 所有 **原型** 的根本，就是 **物件原型實例**
- 所有型別，都有自已的 **原型 prototype** (`[[prototype]]`) 方法，除此之外還會繼承 **上層** 的原型方法。
- 存取 **屬性** 時，會一直向上尋找 **原型** 直接 `null` 為止。
  :::

:::warning 注意
`__proto__` 在不同瀏覽器，可能會有不同的命名。
:::

## Prototype 原型觀念

每一個型態資料，都會有屬於自已型態的 **原型** 屬性方法，會是以 `[[prototype]]` 來顯示，如果想要看到 **字串** 的 **原型** 方法可以使用 `String.prototype`。在 **第一層** 的 `[[prototype]]` 可以看到當下屬性的 **原型** 方法，而 `[[prototype]]` 內的 `[[prototype]]` (**第二層**) ，就是來自再上一層的繼承。
:::tip 簡單說
原型繼承的的概念，就是透過 **原型** 的方法，去使用本來自已就沒有的某個屬性，而這個屬性是來自「上一層」或「上上...層」所設置的。
:::

### 物件原型的鏈結

```js
const user = { id: 1, name: "nike" };
console.log(user);
```

![](/Javascript/img/object-prototype.png)

### 來自原型操作方法
當我們在操作 **陣列型態** 時，為什麼沒有定義它的操作方法，但是我們還是可以針對 **陣列** 直接操作，就是因為 `Javascript` 在最初就針對各型態定義了，**原型 (prototype)** 方法。
```js
const ary = [1,3,4,5]
console.log(ary)

ary.push(9) // 來自原型的操作方法
```

![](/Javascript/img/ary-prototype.png)

### 原型方法的繼承
當你在 **原型** 上定義了一個方法，它就是共享的。`陣列` 可以共用 `陣列` 的原型方法、`物件`可以共享`物件`的原型方法，可以操作自已沒有的 **方法** 就是因為來自上層的「繼承」。 

直接在`obj1` 上 `__proto__` (原型) 上定義一個屬性 `text: 'text'`，會發現 `obj2` 也共享了這個 **屬性**，這只是一個範例，實際上不應該使用 `__proto__` 來定義 **原型**。

```js
const obj1 = {}
const obj2 = {}

obj1.__proto__.test = 'test'

obj1.__proto__.test === obj1.__proto__.test // true
```

![](/Javascript/img/obj__proto__.png)

:::tip
當你定義了一個共享的 **原型** 方法，方法不會重覆的被創建，也就可以避免不必要的記憶體耗能。
:::


## Reference

- [重新認識 JavaScript: Day 24 物件與原型鏈](https://ithelp.ithome.com.tw/articles/10194154)
- [MDN 繼承與原型鏈](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [前端三十｜ 15. [JS] 什麼是原型鏈？](https://medium.com/schaoss-blog/%E5%89%8D%E7%AB%AF%E4%B8%89%E5%8D%81-15-js-%E4%BB%80%E9%BA%BC%E6%98%AF%E5%8E%9F%E5%9E%8B%E9%8F%88-15543787efb)
- [[Video] Javascript 原型繼承 Chanel:ColorCode](https://www.youtube.com/watch?v=1UTqFAjYx1k&t=712s)
- [扩展 javascript 原生对象-prototype 原型链彻底掌握](https://www.cnblogs.com/kidsitcn/p/5141806.html)
