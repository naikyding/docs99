# Vue3 組件基礎

## 使用組件

若子組件為 [單文件組件 SFC]，可以在父層直接引入使用。

**父層**

```vue {2,7}
<script setup>
import Child from './Child.vue'
</script>

<template>
  <h1>Parent</h1>
  <Child />
</template>
```

## 父層傳參 props

### **父層 (傳送)**

父層可以在「子組件」設置 `屬性` 來傳送資料。

```vue {9}
<script setup>
import Child from './Child.vue'
</script>

<template>
  <h1>Parent</h1>

  <!-- 設置屬性，傳送資料到「子層」 -->
  <Child title="childComponent" />
</template>
```

### **子組件 (接收)**

子組件使用 `defineProps()` 接收「父層」傳送的資料。

#### defineProps([ `屬性名稱 a`, `屬性名稱 b` ])

```vue {2,8}
<script setup>
defineProps(['title']) // 接收由「父層」設置屬性名稱，傳送的資料
</script>

<template>
  <h1>
    <!-- 輸出 `childComponent` -->
    {{ title }}
  </h1>
</template>
```

## 組件事件監聽 emit

「父層」可以對「子組件」進行事件監聽，達到單向資料流。

### **父層 (監聽事件)**

可以對「子組件」做事件監聽，當指定事件觸發時，執行「父層」對應的函式。使用 `@` 前綴來監聽「子組件」將 `傳送` 的事件名稱。

```vue {08-10,12-14,24-25}
<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const title = ref('childComponent')

// 修改 title (當 `change-title` 觸發時執行 )
function changeTitle(newTitle) {
  title.value = newTitle
}
// 修改 content (當 `change-content` 觸發時執行)
function changeContent(newContent) {
  content.value = newContent
}
</script>

<template>
  <h1>Parent</h1>

  <!-- 對「子組件」傳送資料、監聽事件 -->
  <Child
    :title="title"
    :content="content"
    @change-title="changeTitle"
    @change-content="changeContent"
  />
</template>
```

### **子組件 (傳送事件)**

使用 `defineEmits()` 來定義要傳送到 「父層」的事件名稱，再使用 `emit()` 來發射，讓「父層」觸發；也可以在模版上直接寫 `$emit`。

#### **1️⃣ 定義傳送事件**

defineEmits([ `傳送事件名稱 a`, `傳送事件名稱 b` ])

#### **2️⃣ 發射傳送事件給「父層」**

- **setup 寫法:** emit( `傳送事件名稱a`, `參數`)
- **模板寫法:** $emit( `傳送事件名稱a`, `參數`)

```vue {5,9,15,20}
<script setup>
defineProps(['title', 'content'])

// 定義要傳送到「父層」的事件名稱
const emit = defineEmits(['change-title', 'change-content'])

function changeTitleByParent(newTitle) {
  // 發射事件到「父層」
  emit('change-title', newTitle)
}
</script>

<template>
  <!-- 寫法一: 發射 `change-title` 事件 -->
  <h1 @click="changeTitleByParent('childChange Text!')">
    {{ title }}
  </h1>

  <!-- 寫法二: 發射 `change-content` 事件，也可以直接寫作 `emit('change-content', 'child change content')` -->
  <div @click="$emit('change-content', 'child change content')">
    {{ content }}
  </div>
</template>
```

:::warning 注意 $emit
就算在模板上直接使用 `$emit`還是要進行`defineEmits` 聲明，不然會警報。
:::

## Reference

[子組件事件]: https://cn.vuejs.org/guide/components/events.html
[單文件組件 sfc]: https://cn.vuejs.org/guide/scaling-up/sfc.html

- [[子組件事件]
- [單文件組件 SFC]
- [组件基础](https://cn.vuejs.org/guide/essentials/component-basics.html#using-a-component)
