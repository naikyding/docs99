# directive 自定義指令 v-\*

:::tip 簡單說
可以自定義像 `v-if` 這樣的指令，有「組件註冊」、「全域註冊」兩種方式。
:::

## 說明

在 `vue` 中常見的 `v-show`、`v-if` 都是原生的自定義指令，也可以自已定義專用的指令。

```vue {3}
<template>
  <div>
    <h1 v-show="false">Directive Demo</h1>
  </div>
</template>
```

## 組件註冊

在組件定義，只可以在組件內被使用，無法跟組件使用。

### 註冊指令

`option` 方法中，可以使用 `directives` 的選項來註冊，將名稱寫入索引。

```js {5-10}
export default {
  data: () => ({}),

  directives: {
    focus: {
      inserted(el) {
        // 元素聚焦
        el.focus()
      },
    },
  },
}
```

### 使用指令

將 `directive` 中註冊的名稱加上前綴 `v-` 使用 (比如 `v-名稱`)。

```vue {4}
<template>
  <div>
    <span>Auto focus </span>
    <input v-focus />
  </div>
</template>
```

## 全域註冊

當使用「全域」註冊，在任何組件都可以使用，不會受限跨組件使用。

### 註冊指令

要在入口 `main.js` 直接註冊在 `vue` 實體上。

**`~/src/main.js`**

```js {7-12}
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 向定義指令註冊
Vue.directive('force', {
  inserted(el) {
    // 元素聚焦
    el.focus()
  },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

### 使用指令

將 `directive` 註冊的名稱加上前綴 `v-` 使用 (比如 `v-名稱`)。

```vue {4}
<template>
  <div>
    <span>Auto focus by Global</span>
    <input v-force />
  </div>
</template>
```

## 指令 hook 函式

自定義指令，提供了很多操作的階段，可以參考:

| hook               | 說明                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------- |
| `bind`             | `directive` 初次綁定到元素時，執行的函式 (只執行一次)，一般可以在此做 **初始化**設置。    |
| `inserted`         | 當綁定的元素被插入 `父節點` 時，執行的函式。(只保証父節點存在，綁定的元素不一定在 dom 中) |
| `update`           | 所在組件的更新時執行的函式 (可能發生在綁定元素其子元素更新之前)。                         |
| `componentUpdated` | 所在組件的與其子元素全部更新後執行的函式。                                                |
| `unbind`           | 解除綁定元素時執行函式。(元素不存在)                                                      |

**函式參數:**

- `el` : 綁定的元素 DOM
- `binding` : 綁定元素的內容對象
  - `name` : 指令名稱 (不包含 `v-` )
  - `value` : 指令綁定的值，例如: `v-test="1 + 1"` ，值為 `2`
    (也可以傳送物件型態 `v-test="{ id: 1, name: 'nike' }"` )
  - `expression` : 指令的表達式，例如 `v-test="1 + 1"` 則為 `1 + 1`
  - `arg` : 傳給指令的參數，例如 `v-text:data` ，則參數為 `data` (也可帶入動態參數)，綁定時必須要在修飾符之前哦!!
  - `modifiers` : 指令的修飾符內容，例如 `[v-test.foo.bar](http://v-test.foo.bar)` ，則為 `{ foo: true, bar: true }` 。
- `vnode` : VNode ( 虛擬 DOM )
- `oldVnode` : 上一個 VNode ( 虛擬 DOM )

## Reference

- [[Vue] Custom Directives 自定義指令](https://medium.com/itsems-frontend/vue-custom-directives-c991ce456748)
