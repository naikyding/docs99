# 監聽器 watch

:::tip 簡單說
當監視的目標狀態變化時，執行對應的回調函式。
:::

## watch

`watch()` 函式，可以在監聽目標狀態變化時，執行指定的函式。監聽目標可以是 `ref`、`reactive`、`getter 計算`、多目標。

**watch(`target`, `callback`)**

- **`target` 目標**

  可以是 `ref`、`reactive`、`getter` `array`

  - `getter` 需要「函式回傳」
  - `array` 多目標，使用「陣列」

- **`callback` 回調函式** 狀態變化時執行

```vue {8-10,13-18,21-24}
<script setup>
import { ref, watch } from 'vue'

const a = ref(0)
const b = ref(1)

// ref
watch(a, (newValue, oldValue) => {
  console.log('target => a', newValue, oldValue)
})

// getter 計算
watch(
  () => a.value + b.value,
  (newValue, oldValue) => {
    console.log('getter a + b', newValue, oldValue)
  }
)

// 多目標監聽 (陣列)
watch([a, () => b.value], (newValueArray, oldValueArray) => {
  console.log('陣列監聽', newValueArray, oldValueArray)
  console.log(`a 由 ${oldValueArray[0]} -> ${newValueArray[0]}`)
})
</script>
```

### 監聽 reactive

監聽「整個」 `reactive` 物件時，內部任何「屬性」狀態改變都會執行回調函式，且「新值」、「舊值」參數內容都相同，因為源自同一個代理物件 (Proxy)；若只想監聽單一屬性，可以使用 `getter` 函式回傳。

```js {7-10,13-19}
const data = reactive({
  a: 1,
  b: 2,
})

// 監聽整個 reactive 物件
watch(data, (newValue, oldValue) => {
  // 當 data 內部變化，就執行
  // newState, oldState 相同 (源自同個 proxy)
})

// 監聽單一屬性
watch(
  () => state.a,
  (newValue, oldValue) => {
    // state.a 變化才觸發
    console.log(`a 屬性狀態改變: ${oldValue} -> ${newValue}`)
  }
)
```

:::warning 若 reactive 屬性為「物件」不觸發

監聽 `reactive` 屬性，當屬性變化才會觸發。若屬性為「物件」，要「整個」物件都替換才會觸發，如果只是「物件」內崁的屬性變化，不會觸發監聽。「深度監聽」可以解決!

:::details CODE

```js {2-5}
const data = reactive({
  user: {
    id: 1,
    name: 'naiky',
  },
})

watch(
  () => data.user,
  (newValue, oldValue) => {
    // 不會觸發
  }
)

// 修改 data.user 內部
setTimeout(() => {
  data.user.id = 2
}, 2000)
```

:::

:::danger 效能不好
監聽「整個」物件，會「遍歷」整個物件內容，對所有屬性進行監聽，使得性能開銷大，非必要不要這樣使用。
:::

### reactive 深層監聽 `{ deep: true }`

承上，當 `reactive` 屬性為「物件」時，若不是整個「物件」被替換，是不會觸發監聽的。在 `watch()` 第三參數加上 `{ deep: true }` 就會「深度監聽」整個屬性物件內部的變化。

```js {16}
import { reactive, watch } from 'vue'

const data = reactive({
  user: {
    id: 1,
    name: 'naiky',
  },
})

watch(
  () => data.user,
  (newValue, oldValue) => {
    // 回調函式
  },
  //  深度監聽
  { deep: true }
)

// 修改 data.user 內部
setTimeout(() => {
  data.user.id = 2
}, 2000)
```

:::danger 效能不好
深度監聽 `{ deep: true }` 會「遍歷」整個物件內容，對所有屬性進行監聽，使得性能開銷大，非必要不要這樣使用。
:::

### 即時執行回調 `{ immediate: true }`

`watch()` 是懶執行的 (`lazy`)，只有在監聽目標狀態變化時才會觸發回調函式。`watch()` 的第三參數加入 `{ immediate: true }` 就可以在監聽設置時「先執行回調」。舉例，使用這個方法先取得「初始資料」，當相關狀態改變時，再重新請求資料。

```js {14}
import { reactive, watch } from 'vue'

const state = reactive({
  a: 0,
  b: 1,
})

watch(
  () => state.a,
  (newValue, oldValue) => {
    // 立即執行，當目標狀態變化「再執行」
    console.log('a', newValue, oldValue)
  },
  { immediate: true }
)

setTimeout(() => {
  state.a = 9
}, 3000)
```

## watchEffect

`watchEffect()` 會監聽「回調函式」內的所有 [資料響應 reactive && ref] 狀態，
在設置 `watchEffect()` 當下就會「先執行」回調函式、當函式內部 [資料響應 reactive && ref] 狀態發生「變化」，就會「再次執行」回調函式。
常使用在有 `初始值` 的情況下，後續又會依狀態變化而監聽改變的情境。

**watchEffect( `callback 回調函式` )**

不論是 `tab.value` 或 `data.value` 都會執行回調，因為它們在回調函式內部都會被監聽。

```vue {6-10}
<script setup>
import { ref, watchEffect } from 'vue'

const tab = ref(0)
const data = ref(0)

watchEffect(() => {
  // 初始執行一次，`tab.value` 或 `data.value` 狀態改變再次執行
  console.log(tab.value, data.value)
})
</script>

<template>
  <div @click="tab++">tab</div>
  <div @click="data++">data</div>
</template>
```

### 基本使用

假設，當 `tab.value` 變化，就重新設置 `data.value` 的值。當 `watchEffect()` 設置時，
就會先執行一次 `callback`，當 `tab.value` 變化時，就會再次執行回調。

```js {8-11}
import { ref, watchEffect } from 'vue'

const apiData = [{ data: 0 }, { data: 1 }, { data: 2 }]

const tab = ref(0)
const data = ref(null)

watchEffect(() => {
  // 初始執行一次、tab.value 變化，再次執行
  data.value = apiData[tab.value]
})
```

:::tip
用 `watch()` 追蹤多個屬性，改使用 `watchEffect()` 會更有效率，因為不用手動設置上多個目標屬性。且 `watchEffect` 不是「深層監聽」目標物件內所有屬性，而是有用到的屬性才會追蹤。
:::

## 回調訪問更新後的 DOM `{ flush: true }`

通常監聽目標狀態改變，就會執行回調函式，或者 `{ immediate: true }` 與 `watchEffect()` 在創建監聽器的當下，就會預先執行回調。

默認都是在 「DOM 還沒更新」 的情況下執行回調，這可能會造成回調內訪問的 DOM 是「之前」的狀態，在選項參數上加上 `{ flush: true }` ，可以讓回調內部訪問到「更新後」的 DOM。

```js {6,13}
watch(
  state,
  () => {
    // 訪問更新後的 DOM
  },
  { flush: true }
)

watchEffect(
  () => {
    // 訪問更新後的 DOM
  },
  { flush: true }
)
```

### watchPostEffect 簡寫

`watchEffect` 加入 `{ flush: true }` 選項參數，也可以直接寫作 `watchPostEffect()` 更簡潔。

```js
import { watchPostEffect } from 'vue'

watchPostEffect(() => {
  // 訪問更新後的 DOM
})
```

## 停止監聽

在組件的 `setup()` 或 `<script setup>` 內創建監聽器，當組件「卸載」時，監聽器就會「自動停止」監聽。

一般而言，監聽器是「同步」創建的，這樣適用「自動停止」的原則；若監聽器是「非同步」創建的，當組件「卸載」時，是不會自動停止監聽的，**必須要手動停止**。

```js
import { watchEffect } from 'vue'

// 當組件「卸載」時，會自動停止
watchEffect(() => {...})

// 當組件「卸載」時，「不會」自動停止
setTimeout(() =>{
  watchEffect(() => {...})
}, 1000)
```

### 手動停止監聽

監聽器創建時，會回傳停止監聽函式，`watch` 與 `watchEffect` 都相同方法。

```js {5-7}
import { ref, watch } from 'vue'

const data = ref(0)

const stopWatch = watch(data, () => {
  console.log(data.value())
})

stopWatch() // 停止監聽
```

:::tip 同步創建監聽
盡可能使用「同步」方式來創建監聽器，若非得在某些「非同步」的條件下創建監聽器，或許可以嘗試在同步監聽器內部寫上條件，當條件滿足才執行。

```js {6-8}
import { watchEffect } from 'vue'

const data = ref(null)

watchEffect(() => {
  if (data.value) {
    // data 有資料，才執行 (非同步取得 data 資料)
  }
})
```

:::

## watch VS watchEffect

`watch` 需要明確指定目標，才能進行監聽，且是「懶」執行，當狀態改變才會執行，可以由回調函式取得當前值與舊值；

`watchEffect` 回調函式內的響應資料都會進行監聽，當其狀態改變就會執行回調，不用特別指定監聽目標，且在監聽的當下就會覺執行回調，但無法取得「舊值」。不過自動追蹤的特性，可以讓「程式碼更簡潔」。由於無差別監聽目標，若某一狀態改變與執行回調的結果沒有影響的話，就可能造成效能的浪費。

### 特色

|              | watch | watchEffect |
| ------------ | :---: | :---------: |
| 監聽目標     | 手動  |    自動     |
| 新值、舊值   |  ✅   |             |
| 初始執行回調 |       |     ✅      |

### 該如何選擇

- 需要新、舊值 => `watching`
- 自動監聽目標 => `watchEffect`
- 明確的監聽目標 => `watch`
- 程式碼簡潔 => `watchEffect`
- 效能浪費(可能) => `watchEffect`
- 初始執行回調 => `watchEffect` (`watch` 可透過 `{ immediate: true }` 達成)

## Reference

[資料響應 reactive && ref]: /Vue/reactive-ref

- [watch() API 核心](https://cn.vuejs.org/api/reactivity-core.html#watch)
- [Vue3 中 watch 与 watchEffect 有什么区别？](https://www.zhihu.com/question/462378193)
- [(ERIC 影片)Vue3 watch VS watchEffect](https://www.youtube.com/watch?time_continue=351&v=QkadKspKoJo&source_ve_path=MTI3Mjk5LDI4NjYzLDI4NjYzLDEyNzMwMSwxMjcyOTksMjM4NTE&feature=emb_title)
