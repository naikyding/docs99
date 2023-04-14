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

在組件上，使用 `v-model` 它會將一般的傳參 `props` 與事件 `emit` 包裝在一起，不需要再另外監聽事件。是組件「雙向綁定」更簡潔的方法。

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

**子層** (方法一)

父層設置 `v-model` 時，子組件接收的資料預設為 `modelValue` ，更新資料函式預設為 `update:modelValue`。

- `props` 接收資料
- `emit`事件: 更新資料

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

**子層** (方法二)

子組件透過 `v-model` 與 `computed` 再雙向綁定。

```vue {6-13,17}
<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emits('update:modelValue', newValue)
  },
})
</script>

<template>
  <input v-model="value" />
</template>
```

## `v-model` 指定參數

在組件使用 `v-model` 會是預設的參數名稱 `modelValue` 與預設的更新事件名 `update:modelValue`。

也可以使用 `v-model:參數名稱` 來指定傳遞的參數名稱，而子組件更新資料事件就會是 `update:參數名稱`。

**父層**

```html
<custom-element v-model:title="refTitle" />
```

**子組件**

```vue {2-3,9-10}
<script setup>
const props = defineProps(['title'])
const emit = defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="props.title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```

## 多 `v-model` 綁定

可以使用多個 [v-model 指定參數](/Vue/component-v-model#v-model-指定參數) 來為組件設置多個「雙向綁定」資料，且更新事件會自動處理，不需要額外監聽。

**父層**

```vue {12}
<script setup>
import ChildComp from './ChildComp.vue'
import { ref } from 'vue'

const firstName = ref('firstName')
const lastName = ref('lastName')
</script>

<template>
  <div>Parent: {{ firstName + lastName }}</div>

  <ChildComp v-model:first-name="firstName" v-model:last-name="lastName" />
</template>
```

**子組件**

更新資料事件，只要使用 `update:` 前綴加上參數名稱就可以了。

```vue {2-3,9-10,14-15}
<script setup>
const props = defineProps(['firstName', 'lastName'])
const emit = defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input
    type="text"
    :value="props.firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="props.lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```

## 客製 v-model 修飾符

一般而言 `v-model` 有許多內建的「修飾符」，比如 `.trim` `.number` …。在組件中，你也可以創建「客製化」的修飾符，執行客製化的事件處理。

### 一般 `v-model`

比如下面的程式，在 `v-model` 加入「移除底線功能」的修飾符 `.removeUnderLine`。

```html
<custom-component v-model.removeUnderLine="value" />
```

**子組件**

加入客製修飾符時，必須在 `defineProps({ … })` 中，定義 `modelModifiers` 屬性，且給它一個默認的空物件。
若父層有加 `.removeUnderLine` 修飾符，`props.modelModifiers.removeUnderLine` 會為 `true`，就可以用來判斷是否調整更新值的「加工」。

```vue {4,7,12-24}
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) },
})

console.log(props.modelModifiers) // { removeUnderLine: true }

const emit = defineEmits(['update:modelValue'])

// 更新資料時執行
function modifiValue(event) {
  const inputValue = event.target.value
  // 判斷是否含有需加工的修飾符
  if (props.modelModifiers.removeUnderLine) {
    let modifiValue = ''
    inputValue.split('').forEach((item) => {
      if (item !== '_') {
        modifiValue += item
      }
    })
    emit('update:modelValue', modifiValue)
  }
}
</script>

<template>
  <div>ChildComp</div>
  <p>
    {{ props }}
  </p>
  <p>
    <input :value="modelValue" @input="modifiValue" />
  </p>
</template>
```

### `v-model` 帶參數

## Reference

[vue3 組件基礎]: /Vue/vue3-component

- [Vue3 組件基礎]
- [组件 v-model](https://cn.vuejs.org/guide/components/v-model.html)
