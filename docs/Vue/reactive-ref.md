# 資料響應 reactive && ref

## reactive 聲明響應狀態

`reactive()` 可以將 `物件`、`陣列` 資料進行響應處理，當資料更新畫面也會同步更新。原理是使用 [Proxy 物件代理] 來「代理」原本的目標資料，操作都是透過「代理」，同時「代理」也會對目標資料進行深入的監聽。

**特色**

- 底層技術: [proxy 物件代理]
- 使用對象：物件型別 ( `array` 、 `object` )

**基本操作**

```vue {4,7,17}
<script setup>
import { reactive, nextTick } from 'vue'

const state = reactive({ count: 0 })

function plus() {
  state.count++

  nextTick(() => {
    // 訪問更新後的 dom
  })
}
</script>

<template>
  <div>
    {{ state.count }}
  </div>
  <button @click="plus">+</button>
</template>
```

:::tip DOM 更新時機
DOM 會因應資料響應而自動更新，但「不是同步」的，所以可以在 `nextTick` 函式訪問到更新後的 DOM ，以確保操作。
:::

### Proxy 代理與原始對象

`reactive()` 返回的是 [proxy 物件代理] 不是原始資料本身，只有修改「代理」是響應的，直接「更換」原始資料的對象，是不會響應的。

為了保證 `reactive()`「代理」資料的一致性，對同一個原始資料的對象做 `reactive()` 都會返回相同的「代理」，對已經存在「代理」的原始對象，再做一次 `reactive` 還是返回一樣的「代理」。

```js
import { reactive, ref } from 'vue'

const data = { name: 'naiky' }

const reactiveData = reactive(data)
const reactiveReactiveData = reactive(reactiveData)
const reactiveDataAgin = reactive(data)

console.log(reactiveData === data) // false 代理不等於對象
console.log(reactiveData === reactiveReactiveData) // true 為保持資料一致性 代理再代理 還是返回 -> 「代理」
console.log(reactiveData === reactiveDataAgin) // true 為保持資料一致性，代理相同的對象都是同一個代理
```

**直接更換原始對象** 不會響應

```js
import { reactive } from 'vue'

let data = { count: 0 }
const state = reactive(data)

console.log(state) // { count: 0 }

❌ data = { count: 999 }
console.log(state) // { count: 0 }

👍 state.count = 999
console.log(state) // { count: 999 }
```

### 操作限制

`reactive()` 對於物件之外的型別都是不能使用的，對於響應資料「解構」、「重新賦值」都是會造成無法響應的原因，只有與「代理」互動才是響應的王道。

**❌ 屬性賦值**

```js {6}
import { reactive } from 'vue'

const data = { count: 0 }
const state = reactive(data)

let count = state.count // ❌ 重新賦變量
count++ // 資料不會響應

console.log(state) // { count: 0 }
```

**❌ 屬性解構**

```js {6}
import { reactive, ref } from 'vue'

const data = { count: 0 }
const reactiveData = reactive(data)

let { count } = reactiveData // ❌ 屬性解構
count++ // data 資料不會被連動改變

console.log(state) // { count: 0 }
```

**❌ 代理重新賦值**

```js {4}
import { reactive, ref } from 'vue'

let reactiveData = reactive({ count: 0 })
reactiveData = reactive({ count: 9 })

// { count: 0 } 將不再被追蹤
```

**❌ 函式傳參**

跟解構的情況是類似的，當屬性被解開帶入，「代理」就不再受到監聽，除非帶入整個「代理」。

```js {6}
import { reactive, ref } from 'vue'

let reactiveData = reactive({ count: 0 })

// 單純帶入資料到函式而已，也無法監聽 reactiveData.count 的變化
somefunction(reactiveData.count)
```

## ref 定義響應變數

## Reference

[proxy 物件代理]: /Javascript/proxy

- [Vue3 Docs](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
