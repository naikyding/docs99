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

### reactive 深層監聽

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
    // 觸發
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

## watchEffect

## Reference

- [watch() API 核心](https://cn.vuejs.org/api/reactivity-core.html#watch)
