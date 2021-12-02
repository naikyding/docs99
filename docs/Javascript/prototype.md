# Prototype chain 原型鍵與繼承

![](/Javascript/img/prototype-chain.png)

`Javascript` 是以 **物件導向** 設計的程式語言，沒有其它語言的 `Class` 功能，它的繼承方式是使用 「原型」`prototype` 達成的。
`JavaScript` 所有東西都是一 「包」 動態的屬性，除了它自己的屬性，並擁有一個原型物件的鏈結，當物件試圖存取一個物件的屬性時，其不僅會尋找該物件，也會尋找該物件的原型、原型的原型...直到找到相符合的屬性，或是到達原型鏈的尾端 `null`。

:::tip 簡單說

```
所有 JavaScript 的物件，都是來自原型鏈最頂端的 「Object 實例」
```

- `Javascript` 所有 **原型** 的根本，就是 **物件原型**
- 所有型別，都有自已的 **原型 prototype** (`[[prototype]]`) 方法，除此之外還會繼承 **上層** 的原型方法。
- 存取 **屬性** 時，會一直向上尋找 **原型** 直接 `null` 為止。
  :::

## Prototype 原型方法

每一個型態資料，都會有屬於自已型態的 **原型** 屬性方法，會是以 `[[prototype]]` 來顯示，如果想要看到 **字串** 的 **原型** 方法可以使用 `String.prototype`。在 **第一層** 的 `[[prototype]]` 可以看到當下屬性的 **原型** 方法，而 `[[prototype]]` 內的 `[[prototype]]` **第二層** ，就是來自再上一層的繼層。

![](/Javascript/img/prototype.png)

## Reference

- [重新認識 JavaScript: Day 24 物件與原型鏈](https://ithelp.ithome.com.tw/articles/10194154)
- [MDN 繼承與原型鏈](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [前端三十｜ 15. [JS] 什麼是原型鏈？](https://medium.com/schaoss-blog/%E5%89%8D%E7%AB%AF%E4%B8%89%E5%8D%81-15-js-%E4%BB%80%E9%BA%BC%E6%98%AF%E5%8E%9F%E5%9E%8B%E9%8F%88-15543787efb)
