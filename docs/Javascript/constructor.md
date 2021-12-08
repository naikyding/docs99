# Constructor Function 建構函式

**建構函式** 算是 **物件導向程式設計** 的方法，可以透過 **建構函式** 創建的 `object` 來塑造一個 **模型範本**，這個範本有自已的命名空間、自已的屬性與共享的 [原型繼承](/Javascript/prototype) 方法，而藉由 **建構函式** 創建出來的物件，也可以稱為是一個 **物件實體** `instance`。

![](/Javascript/img/constructor-instance.png)

:::tip 簡單說
**建構函式** 可以為你要 `定義的物件`、`函式功能` 提供一個範本，可以再透過它來高效建立所需的物件，並依需求為它定義 **共享函式** `prototype` 與 **添加資料**。。
:::

## 建立建構函式

標準是以 **大寫** 開頭為函式命名，這是為了與其它函式分別的作法。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello my name is ${this.name}`);
  };
}
```

:::tip
其實 **建構函式** 的原理，就是透過 **函式** 在內部創建一個 `object` 將 **屬性** 寫入這個 `object`，最後再 **return** `object` 。

```js
function createObject(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;

  return obj;
}
```

:::

## 創建物件實例 (instance)

是以 `new` 告知瀏覽器，要建立新的物件實例且帶入`參數`，這樣你就可以無限快速的重覆產生更多 **標準內容** 、 **標準功能** 的物件。

其它方法：[1. 為對象指定原型](/Javascript/prototype#為對象指定原型)、[2. 依原型創建對象](/Javascript/prototype#依原型創建對象)

```js
const niki = new Person("niki", 6);
const naiky = new Person("naiky", 34);

console.log(niki.sayHello()); // Hello my name is niki
console.log(naiky.sayHello()); // Hello my name is naiky
```

:::warning 注意
`sayHello` 是來自 **建構函式** 設置的方法，每次建立 **實例** 都會重覆創建。

```js
console.log(naiky.sayHello === niki.sayHello); // false
```

:::

## 設置原型繼承 (prototype)

如果每個 **建構函式** 都內含一個操作方法 (如`sayHello`)，這樣每次創建 **實例** 就會重覆為 `sayHello` 佔了一個記憶體空間。就應該為共用的方法 **共享化** == `prototype`，這對效能有幫助。

```js
// 只設置資料屬性
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// 設置共享方法 (原型繼承)
Person.prototype.sayHello = function () {
  console.log(`Hello my name is ${this.name}`);
};
```

這時，就算 **實例** 沒有 `sayHello` 還是可以操作這個方法。

```js
const niki = new Person("niki", 6);
const naiky = new Person("naiky", 34);

console.log(niki.sayHello()); // Hello my name is niki
console.log(naiky.sayHello()); // Hello my name is naiky
```

因為這個 `sayHello` 在 **原型** `[[prototype]]` 裡被繼承。

![](/Javascript/img/instance-prototype.png)

```js
console.log(naiky.sayHello === niki.sayHello); // true
```

:::warning 注意
原型 `prototype` 要在 **建構函式** 設置，不是在 **實例** (不可以使用 **箭頭函式**)
:::

## 判斷是否擁有屬性 (.hasOwnProperty())

這個方法可以用來判斷，到底是自已擁有屬性，或屬性來自於 **原型** 的繼承；`sayHello` 就是在上一層的 **原型** 所擁有的方法。

```js
niki.hasOwnProperty("sayHello"); // false

niki.__proto__.hasOwnProperty("sayHello"); // true
```

:::tip
上一層的原型，可以使用 `__proto__` 來存取。
:::

## 判斷實例來源 (instanceof)

可以判斷 **實例** 是來自於誰

- 是否為 `Person` 的實例?
- 是否為 `Object` 的實例?

```js
console.log(niki instanceof Person); // true
console.log(niki instanceof Object); // true
console.log(niki instanceof Array); // false
```

## Reference

- [MDN 初學者應知道的物件導向 JavaScript](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [該來理解 JavaScript 的原型鍊了
  ](https://blog.techbridge.cc/2017/04/22/javascript-prototype/)
- [Web 開發學習筆記 16 — OOP（Object Oriented Programming）、Constructor Function、Class](https://teagan-hsu.coderbridge.io/2021/01/05/javascript-oop-constructor-function-class/)
