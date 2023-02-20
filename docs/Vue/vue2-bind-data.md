# Vue2 資料響應原理

## 說明

`Vue` 是 [mvvm 軟體架構] 「畫面」與「資料」可以雙向綁定，就是基於 [物件屬性定義 Object.defineProperty] ，這也是 `Vue2` 雙向資料綁定的核心 API。

![](/Vue/img/vue2-bind-data.png)

### 原理

對 `Vue` 實例中的 `data` 資料做「遍歷」，再將每個遍歷出來的數據項目，各別做 [物件屬性定義 Object.defineProperty] 定義 `getter` 與 `setter`。

- `getter` 當資料被「讀取」時，會存入到 `Watcher` 進行收集。
- `setter` 當資料被「修改」時，就會通知 `Watcher` 進行畫面更新渲染。

:::tip 提醒
這只是簡化後的說明，實際的響應原理是更複雜的。
:::

## Reference

[mvvm 軟體架構]: /Javascript/mvvm
[物件屬性定義 object.defineproperty]: /Javascript/object-defineProperty

- [vue2 原理探索--响应式系统](https://github.com/LuckyWinty/blog/blob/master/markdown/vue/vue2%E5%8E%9F%E7%90%86%E6%8E%A2%E7%B4%A2--%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F.md)
