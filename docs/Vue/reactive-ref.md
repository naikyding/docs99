# 資料響應 reactive && ref

:::tip 簡單說
若希望「畫面」與「資料」是連動的，應使用 Vue3 提供的 `reactive` 與 `ref` 兩種響應資料方法之一。
:::

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

由於 `reactive()` 只能接受 `物件` 型別，所以 `vue3` 提供了 `ref()` 來讓所有型別都可以被接受。`ref()` 是以 [物件屬性定義 object.defineproperty] 作為底層原理。放入的資料都會寫入 `value` 屬性，操作時再以 `.value` 來存取資料。

:::tip 提醒
當 `物件` 類別被放入 `ref` 中，會自動被轉換為 `reactive()` 的[proxy 物件代理] 方法。
:::

**特色**

- 使用對象：基本型別 `string` `number` `boolean` …所有型別
- 在 vue3 顯示： `RefImpl` 類
- 須透過 `.value` 取值

**基本操作**

```vue {4,7,14}
<script setup>
import { reactive, ref } from 'vue'

const num = ref(0)

function plus() {
  num.value++ // 變更 num 的值
}
</script>

<template>
  <button @click="plus">+</button>
  <div>
    {{ num }}
  </div>
</template>
```

### 物件自動轉為代理

當 `ref()` 內容或 `.value` 賦值為 `物件` 類別時，會自動使用 `reactive()` 轉換為 Proxy 代理。

```js
import { ref } from 'vue'

let state = ref(0)
console.log(state.value) // 0

state.value = { id: 1 }
console.log(state.value) // Proxy { id: 1 }

// ref 放入物件，會自動轉為 reactive() 處理
const data = ref({ id: 1 })
console.log(data.value) // Proxy { id: 1 }
```

### 模版自動解 `.value`

當 `ref()` 是在變數「頂層」時，模版中使用會自動解開 `.value`，不需要再另加 `.value`。

```vue
<script setup>
import { reactive, ref } from 'vue'

const state = ref(0)
state.value++
</script>

<template>
  <div>
    {{ state + 1 }}
    <!-- 不需要 .value 值為 2 -->
  </div>
</template>
```

**若 `ref` 不是變數「頂層」** 模版無法自動解 `value`

如果不進行「操作」模版是可以直接顯示「結果」。但在模版無法操作，若要「解決」操作的問題:

- 將它「解構」變為變數的「頂層」再輸出模版
- 在模版操作中加上 `.value`

```vue {4-6,14-15,17-18,20-21,23-24}
<script setup>
import { reactive, ref } from 'vue'

const state = {
  data: ref(0),
}

// 解決方式一
const { data } = state
</script>

<template>
  <div>
    <!-- ❌ 顯示: [object Object]1 (無法解 value) ❌ -->
    {{ state.data + 1 }}

    <!-- 解決方式一 顯示: 1 -->
    {{ data + 1 }}

    <!-- 解決方式二 顯示: 1 -->
    {{ state.data.value + 1 }}

    <!-- 自動運算結果: 0 -->
    {{ state.data }}
  </div>
</template>
```

### reactive 「物件」嵌入 ref 自動解 `.value`

若 `ref` 被崁在 `reactive` 「物件」內，它將會「自動解 `.value` 」，在操作中不需要加 `.value` ，當成一般屬性操作就可以了。

```js
const state = reactive({
  count: ref(0),
})

state.count += 1

console.log(state.count) // 2
```

:::danger reactive 「陣列」嵌入 ref 還是要解 `.value`
若 `ref` 被崁入到 `reactive` 的「陣列」內，是不會自動被解 `.value` ，操作還是需要加上 `.value`

```js
const state = reactive([ ref(0) ])
❌ state[0] += 1
👍 state[0].value += 1
```

:::

### 總結

- 只要 `ref` 在「頂層」操作就是要再加 `.value`
- `ref` 在 `reactive` 「物件」內，操作 `ref` 不用加 `.value`
- `ref` 在 `reactive` 「陣列」內，操作 `ref` 「要」加 `.value`

## Reference

[proxy 物件代理]: /Javascript/proxy
[物件屬性定義 object.defineproperty]: /Javascript/object-defineProperty

- [Vue3 Docs](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
- [真的好想離開 Vue 3 新手村 - Day 10: 從原生 JS 理解 Vue 3 響應式基礎 - reactive & ref (上) - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10298023)

- [响应式基础 | Vue.js](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state)

- [[Vue 源码系列-4]vue3 的 Ref 实现原理](https://zhuanlan.zhihu.com/p/355162566)

- [【譯】Vue 3 Composition API: Ref vs Reactive](https://www.readfog.com/a/1633537209551392768)
