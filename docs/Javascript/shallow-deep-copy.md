# Shallow VS Deep Copy 淺拷貝與深拷貝

![](/Javascript/img/shallow-deep-copy.png)

:::tip 簡單說
**淺拷貝** 只是 `傳址` (by reference) 或 拷貝到第一層，還是會受到 **來源** 修改的連動影響；
**深拷貝** 拷貝的目標將會是獨立的個體，不會與來源有任何連動。
:::

## Shallow copy 淺拷貝

**拷貝後目標** 局部或全部都為 **傳址** `by reference` ，會受到 **來源資料** 連動修改的影響。

### `=` 賦值

`copyObj` 會受到 `obj` 修改的連動影響

```js {4-5}
let obj = { id: 1 }
let copyObj = obj

// 修改屬性
obj.id = 9
console.log(obj) // {id: 9}
console.log(copyObj) // {id: 9}
```

### Object.assign

僅有第一維有完全 **復製** ，第二維之後都是 **傳址** `by reference`，會受到修改連動影響。

```js {4-5,9-10}
let obj = { id: 1, obj2: { id: 2 } }
let copyObj = Object.assign({}, obj)

// 第一維修改
obj.id = 999
console.log(obj.id) // 999
console.log(copyObj.id) // 1

// 第二維修改
obj.obj2.id = 999
console.log(obj.obj2.id) // 999
console.log(copyObj.obj2.id) // 999
```

### Spread Operator 展開運算子

其實是跟 `Object.assign` 完全一樣的能力，只有第一維是完全不受到連動影響。

```js {4-5,9-10}
let obj = { id: 1, obj2: { id: 2 } }
let copyObj = { ...obj }

// 第一維修改
obj.id = 999
console.log(obj.id) // 999
console.log(copyObj.id) // 1

// 第二維修改
obj.obj2.id = 999
console.log(obj.obj2.id) // 999
console.log(copyObj.obj2.id) // 999
```

## Deep copy 深拷貝

**拷貝後目標** 完全不受到 **來源資料** 修改連動的影響且獨立運作。

### JSON 字串化與解析還原

這個方法，是將物件轉換成單純的 **字串** 使其不具有 **傳址** `by reference` 特性，再轉換為原本的 **物件** 型態，所有屬性都會是另外的記憶體，不受修改連動影響。

```js
let obj = { id: 1, obj2: { id: 2 } }
let copyObj = JSON.parse(JSON.stringify(obj))

// 第一維修改
obj.id = 999
console.log(obj.id) // 999
console.log(copyObj.id) // 1

// 第二維修改
obj.obj2.id = 999
console.log(obj.obj2.id) // 999
console.log(copyObj.obj2.id) // 2
```

:::warning 注意
這個方法僅適用於沒有 **函式** 屬性的物件格式，字串化的物件是無法還原 **函式** 的。
:::

## Reference

- [JS-淺拷貝(Shallow Copy) VS 深拷貝(Deep Copy)](https://kanboo.github.io/2018/01/27/JS-ShallowCopy-DeepCopy/)
- [關於 JS 中的淺拷貝(shallow copy)以及深拷貝(deep copy)](https://medium.com/andy-blog/%E9%97%9C%E6%96%BCjs%E4%B8%AD%E7%9A%84%E6%B7%BA%E6%8B%B7%E8%B2%9D-shallow-copy-%E4%BB%A5%E5%8F%8A%E6%B7%B1%E6%8B%B7%E8%B2%9D-deep-copy-5f5bbe96c122)
- [[JavaScript] 實作技巧： 淺拷貝(Shallow Copy) & 深拷貝(Deep Copy)](https://zwh.zone/javascript--e5-af-a6-e4-bd-9c-e6-8a-80-e5-b7-a7-ef-bc-9a--e6-b7-ba-e6-8b-b7-e8-b2-9dshallow-copy--e6-b7-b1-e6-8b-b7-e8-b2-9ddeep-copy/)
