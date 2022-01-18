# Virtual DOM

## 什麼是 DOM?

代表 [**文件物件模型**](/JavaScript/dom) ，是瀏覽器接口的 API，用於更改瀏覽器顯示的內容。

![DD1-1.jpg](/Javascript/img/virtual-dom-1.jpg)

一般我們可以使用 `Javascript` 來改變 `h1` 的顯示文字。

```js
const item = document.querySelector('h1')
item.textContent = '這是我要修改的文字'
```

### 缺點:

- 頻繁觸發操作
- 耗效能
- 操作成本高

## Virtual DOM (虛擬 DOM)

許多前端框架 (以 **Vue** 為例) 使用 `Javascript` 物件表示 **DOM** 的 `Virtual DOM` 處理畫面顯示，這可以完全解決原生 **DOM** 缺點。

當 **Vue** 接收到 `<template>` 模板，會在創建 `Virtual DOM` 之前，將模版編譯成一個 **渲染函式**：

![DD1-3.jpg](/Javascript/img/virtual-dom-2.jpg)

`render` 函式會生成 `Virtual DOM` ，再發送到 **Vue** 來更新 **DOM** ；如果 `render` 函式內容有發生變化，就會再被觸發生成新的 `Virtual DOM` ， **Vue** 會再比較 新、舊的 `Virtual DOM` 進行適當的畫面更新。

![DD1-4.jpg](/Javascript/img/virtual-dom-3.jpg)

## DOM vs Virtual DOM

以建築為例，可以把 `Virtual DOM` 比喻為 **藍圖、** **DOM**為 **實際建築**。

假設，要對大樓的 29 樓進行裝修，變更家俱、添加廚櫃、修改佈局 ...等，可以透過兩個方式來對建築變更：

1.  折掉 29 樓的一切，重新開始。
2.  創建一個新的 **藍圖** ，對修改進行比對，以最少的工作量進行更新。

很顯然的選 `2` 是最快的方式 !

## Reference

[Vue 3 Overview - Vue 3 Deep Dive with Evan You | Vue Mastery](https://www.vuemastery.com/courses/vue3-deep-dive-with-evan-you/vue3-overview/)