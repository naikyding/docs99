# Vue3 生命周期

## 說明

使用 `vue` 都需要經過一系列前置流程，從 vue 本身的初始化、掛載到 DOM，及操作後 DOM 的更新與卸載。透過生命周期的 `hook`，可以針對某個階段做特定的操作。

:::details Lifecycle 流程圖
![](/Vue/img/vue3-lifecycle.png)
[圖片出處: vuejs.org](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)
:::

### vue2 與 vue3 的 Hook 對照說明

| vue2            | vue3              | 說明                                     |
| --------------- | ----------------- | ---------------------------------------- |
| `beforeCreate`  | `setup()` 內      | `vue` 實體已創建，但狀態、事件未初始化   |
| `created`       | `setup()` 內      | `vue` 實體狀態與事件完成初始化           |
| `beforeMount`   | `onBeforeMount`   | 模板編譯完成                             |
| `mounted`       | `onMounted`       | `vue` 實體與 DOM 完成掛載 (可以操作 DOM) |
| `beforeUpdate`  | `onBeforeUpdate`  | vue 狀態改變，畫面更新「前」             |
| `updated`       | `onUpdated`       | vue 狀態改變，畫面更新「完成」           |
| `beforeDestroy` | `onBeforeUnmount` | 組件銷毀前 (可以取得組件狀態)            |
| `destroyed`     | `onUnmounted`     | 組件銷毀後 (可以取得組件狀態)            |

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
