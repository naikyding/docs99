# Vue2 資料響應核心

## 說明

`Vue` 是 [mvvm 軟體架構] 「畫面」與「資料」可以雙向綁定，就是基於 [物件屬性定義 Object.defineProperty] ，這也是 `Vue2` 雙向資料綁定的核心 API。

## 原理

對 `Vue` 實例中的 `data` 資料做「遍歷」，再將每個遍歷出來的數據項目，再用 [物件屬性定義 Object.defineProperty] 定義 `getter` 與 `setter`。

![](/Vue/img/vue2-bind-data.png)
[圖片出處](https://v2.cn.vuejs.org/v2/guide/reactivity.html)

- `getter` 當資料被「讀取」時，會存入到 `Watcher` 進行收集。
- `setter` 當資料被「修改」時，就會通知 `Watcher` 進行畫面更新渲染。

**簡化例子**

```js
class Vue {
  constructor(options) {
    this._data = options.data
    observer(this._data)
  }
}

function observer(data) {
  if (!data || typeof data !== 'object') return false

  // 定義所有 data getter setter
  Object.keys(data).forEach((key) => {
    defineReactive(data, key, data[key])
  })
}

function defineReactive(obj, key, value) {
  Object.defineProperty(obj, key, {
    enumerable: true, // 可被枚舉
    configurable: true, // 可被修改與刪除
    get reactiveGetter() {
      return value
    },
    set reactiveSetter(newValue) {
      if (newValue === value) return false

      // cd 更新畫面核心功能
      cd(newValue)
    },
  })
}
```

:::tip 提醒
這只是簡化後的說明，實際的響應原理是更複雜的。
:::

## DEMO

用 `defineProperty` 寫一個雙向綁定:

- input 改變，更新資料
- 資料改變，更新畫面

<iframe height="300" style="width: 100%;" scrolling="no" title="Vue2 bind data (Object.fineProperty)" src="https://codepen.io/naiky/embed/zYJrYgg?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/zYJrYgg">
  Vue2 bind data (Object.fineProperty)</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 缺點

- 若物件有新增屬性，必須要整個遍歷設置後，才能監聽。
- 物件屬性如果很複雜，必須要深度遍歷才能監聽

## Reference

[mvvm 軟體架構]: /Javascript/mvvm
[物件屬性定義 object.defineproperty]: /Javascript/object-defineProperty

- [vue2 原理探索--响应式系统](https://github.com/LuckyWinty/blog/blob/master/markdown/vue/vue2%E5%8E%9F%E7%90%86%E6%8E%A2%E7%B4%A2--%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F.md)
- [物件屬性定義 object.defineproperty](/Javascript/object-defineProperty)
