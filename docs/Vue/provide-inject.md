# Vue3 依賴注入 provide && inject

## 說明

一般而言，組件之間的資料傳遞，可以使用 `props` 來達成，不過一旦層級過多的時候，`props` 就要逐層向下傳遞，會越來越麻煩且複雜。

而 `provide`、`inject` 可以解決這個問題，它可以提供一個「源頭」，子組件們可以藉由同一個源頭取得對應的資料，且沒有層級分別，都可以取得，就不用逐層傳遞資料了。

![](/Vue/img/provide-inject.png)
[圖片出處](https://cn.vuejs.org/guide/components/provide-inject.html#prop-drilling)

## 基本操作

### 父層 provide (提供)

使用 `provide()` 為資料註冊一個源頭名稱，供子組件注入取得資料。
可以多次使用 `provide` 註冊多個資料，資料也可以是 [資料響應 reactive && ref]。

#### provide(`源頭名稱`, `資料`)

```vue {6-7}
<script setup>
import Comp from './Comp.vue'
import { ref, reactive, provide } from 'vue'

const data = ref(0)
provide('parentData', data)
provide('state', '123')
</script>

<template>
  <h1 @click="data++">Parent</h1>
  <Comp />
</template>
```

### 子層 inject (注入)

使用 `inject()` 來接上層註冊的資料，上層使用什麼類型註冊，資料就是什麼類型。

```vue {4-5}
<script setup>
import { inject } from 'vue'

const parentData = inject('parentData')
const state = inject('state')

console.log(parentData.value, state)
</script>

<template>
  <h1>child</h1>
  <div>
    {{ parentData }}
  </div>
</template>
```

## Reference

[資料響應 reactive && ref]: /Vue/reactive-ref

- [Vue3 依赖注入](https://cn.vuejs.org/guide/components/provide-inject.html)
- [資料響應 reactive && ref]
