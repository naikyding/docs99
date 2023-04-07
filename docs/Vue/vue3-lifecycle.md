# Vue3 生命周期

## 說明

使用 `vue` 都需要經過一系列前置流程，從 vue 本身的初始化、掛載到 DOM，及操作後 DOM 的更新與卸載。透過生命周期的 `hook`，可以針對某個階段做特定的操作。

**Vue3 Hook 流程圖**
![](/Vue/img/vue3-lifecycle-flow.png)
[出處 learnvue.co](https://learnvue.co/articles/vue-lifecycle-hooks-guide)

:::details Lifecycle 流程圖
![](/Vue/img/vue3-lifecycle.png)
[圖片出處: vuejs.org](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)
:::

### vue2 與 vue3 的 Hook 對照說明

| vue2            | vue3              | 說明                                                                                           |
| --------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| `beforeCreate`  | `setup()` 內      | `vue 初始化` 組件狀態、事件還沒設置完成                                                        |
| `created`       | `setup()` 內      | `vue 初始化` 可以訪問組件狀態與事件，無法訪問 DOM                                              |
| `beforeMount`   | `onBeforeMount`   | `DOM 渲染之前` 編譯模板，DOM 與模板無法訪問                                                    |
| `mounted`       | `onMounted`       | `DOM 渲染之後` vue 已掛載到畫面，可以訪問 DOM、模板                                            |
| `beforeUpdate`  | `onBeforeUpdate`  | `vue 響應狀態改變` DOM 畫面更新前 (若畫面有響應式狀態，會是更新後的值)                         |
| `updated`       | `onUpdated`       | `vue 響應狀態改變` DOM 畫面更新完成，避免在這個 hook 改變狀態，請使用 `computed` or `watchers` |
| `beforeDestroy` | `onBeforeUnmount` | `組件銷毀前` 組件功能性還是存在                                                                |
| `destroyed`     | `onUnmounted`     | `組件銷毀後` 移除監聽器、事件監聽與子層                                                        |

### 基本操作

可以由 `vue` 引入生命周期方法來操作 hook。

```vue
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`DOM 已經就序!`)
})
</script>
```

## created

在 `setup` 內的操作，基本上就是 Vue2 的 `created`，這個時候可以取得狀態與方法，但無法操作 DOM。

```vue {2}
<script setup>
console.log('created')
</script>
```

## onMounted

可以在這個 hook 操作 DOM，需要先從 `vue` 引入 `onMounted` 方法操作。

```vue {2,4-8}
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Hook: onMounted (可以操作 DOM)')
  // 操作 DOM
  console.log(document.querySelector('#first').textContent) // 123
})
</script>

<template>
  <div id="first">123</div>
</template>
```

## onUnmounted

通常使用 **組件銷毀完成** 的 hook，來取消組件會產生副作用的功能。(ex: 消除定時器)

## 所有 Hook API

[Composition API: Lifecycle Hooks]

## Reference

[composition api: lifecycle hooks]: https://vuejs.org/api/composition-api-lifecycle.html

- [Composition API: Lifecycle Hooks]
- [Vue3 Docs 生命周期钩子](https://cn.vuejs.org/guide/essentials/lifecycle.html)
- [1-7 元件的生命週期與更新機制](https://book.vue.tw/CH1/1-7-lifecycle.html)
- [A Complete Guide to Vue Lifecycle Hooks - with Vue 3 Updates](https://learnvue.co/articles/vue-lifecycle-hooks-guide)
