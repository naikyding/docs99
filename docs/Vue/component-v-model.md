# 組件 v-model 雙向綁定

## 說明

一般來說，父、子組件可以使用 [vue3 組件基礎] 中的 `props`、`emit` 來達到資料綁定與更新。或者，也可以使用在子組件使用 `v-model` 來達到雙向綁定。

### 一般雙向綁定

一般可以使用組件 [vue3 組件基礎] 中的 `props`、`emit`，傳遞資料與更新資料方法。

**父層**

```vue {6,9-11,17}
<script setup>
import ChildComp from './ChildComp.vue'
import { ref } from 'vue'

// 資料 (屬性 `data` 傳遞)
const inputValue = ref('default value')

// 資料更新方法 (監聽 `input-value-change` 屬性來執行)
function changeInputValue(newValue) {
  inputValue.value = newValue
}
</script>

<template>
  <div>Parent: {{ inputValue }}</div>

  <ChildComp :data="inputValue" @input-value-change="changeInputValue" />
</template>
```

**子組件**

由 `props` 接收資料，再由 `emit` 發射事件更新資料。

```vue {3,6,10-13}
<script setup>
// 父層資料
const props = defineProps(['data'])

// 更新父層資料 函式
const emits = defineEmits(['input-value-change'])
</script>

<template>
  <input
    :value="data"
    @input="$emit('input-value-change', $event.target.value)"
  />
</template>
```

## v-model 雙向綁定

在組件設置 `v-model` 屬性，它會同時包裝父層資料更新的「監聽事件」，父層省去了更新資料事件的設置。

**父層**

僅需要在子組件設置 `v-model` 來達到「雙向綁定」。

```vue {11}
<script setup>
import ChildComp from './ChildComp.vue'
import { ref } from 'vue'

const inputValue = ref('default value')
</script>

<template>
  <div>Parent: {{ inputValue }}</div>

  <ChildComp v-model="inputValue" />
</template>
```

**子層**

父層設置 `v-model` 時，子組件接收的資料預設為 `modelValue` ，更新資料函式預設為 `update:modelValue`。

```vue {2-3,7-10}
<script setup>
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

## Reference

[vue3 組件基礎]: /Vue/vue3-component

- [Vue3 組件基礎]
- [组件 v-model](https://cn.vuejs.org/guide/components/v-model.html)
