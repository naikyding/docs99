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

## 響應資料注入與資料修改

為維持「單向資料流」，資料都應由源頭修改，這樣會較容易維護。「提供」不只是提供 `資料` 也可以提供 `函式` 供子組件操作狀態。

### 父層

「父層」聲明了一個源頭，為 `物件` 型別，資料以 [資料響應 reactive && ref] 提供，在 `物件` 中同時提供了修改源頭資料的方法。

```vue {15-20}
<script setup>
import Comp from './Comp.vue'
import { ref, provide } from 'vue'

const num = ref(0)
function resetNum() {
  num.value = 0
}
function plusNum() {
  num.value++
}
function customNum(newNum) {
  num.value = newNum
}
provide('num', {
  value: num,
  customNum,
  plusNum,
  resetNum,
})
</script>

<template>
  <Comp />
</template>
```

### 子組件

由 `inject()` 取得了「源頭」資料，內部包含了操作源頭資料的方法，「子組件」應透過方法操作資料，來落實單向資料流!

```vue {3,8-12}
<script setup>
import { inject } from 'vue'
const num = inject('num')
</script>

<template>
  <div>
    <button @click="num.customNum(999)">num = 999</button>
    <button @click="num.plusNum">+</button>
    <button @click="num.resetNum">reset</button>

    {{ num.value }}
  </div>
</template>
```

## Reference

[資料響應 reactive && ref]: /Vue/reactive-ref

- [Vue3 依赖注入](https://cn.vuejs.org/guide/components/provide-inject.html)
- [資料響應 reactive && ref]
