# ref 模板元素引用

## 說明

`vue3` 為元素設置 `ref` 屬性，當其被掛載時, 可以直接取得元素，方便後續的 DOM 操作。

```html
<input ref="inputEl" />
```

## 基本操作

`setup` 內 `ref` 變數需要與模版中的 `ref` 屬性設置同名，初始值可以為 `null` ，因為還沒掛載時就是為 `null`。當元素掛載完成，操作同名的 `ref` 變數就是直接操作元素。

```vue {4,6,11}
<script setup>
import { ref, onMounted } from 'vue'

const inputEl = ref(null) // 變數與模版 ref 同名
onMounted(() => {
  console.log(inputEl.value.value) // inputValue
})
</script>

<template>
  <input ref="inputEl" value="inputValue" />
</template>
```

:::tip .value
由於是使用 `ref` 響應狀態，還是要記得使用 `.value` 來取值。
:::

:::danger 注意
若使用 `setup()` 需要將 `ref` 變數 `return`
:::

## v-for 模板引用

若為 `v-for` 元素，也是相同作法，當元素掛載後 `ref` 會是陣列類型。

```vue {4,7-10,16}
<script setup>
import { ref, onMounted } from 'vue'

const liEls = ref(null) // 也可以為 ref([])

onMounted(() => {
  for (let value of liEls.value) {
    console.log(value.innerText)
    // item0 item1 item2 item3 item4
  }
})
</script>

<template>
  <ul>
    <li v-for="(item, index) in 5" ref="liEls">item{{ index }}</li>
  </ul>
</template>
```

## 函式模板引用

模板元素使用 `:ref` 屬性也可以設置 「函式」，元素本身會被當參數帶入「函式」。元素「掛載」與「卸載」時都會執行此函式，若「卸載」執行，則函式參數 為 `null`。

```vue {6-8,12}
<script setup>
import { ref } from 'vue'

const status = ref(true)

function refEvent(el) {
  console.log(el) // 元素 (若卸載執行，則為 `null`)
}
</script>

<template>
  <div v-if="status" @click="status = false" :ref="refEvent">ref element</div>
</template>
```

:::warning ref 不保證順序
元素掛載後的 `ref` 陣列引用，是無法確保符合模版上元素排序。
:::

## Reference

- [模板引用](https://cn.vuejs.org/guide/essentials/template-refs.html)
