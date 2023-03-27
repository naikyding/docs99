# 計算屬性 computed

## 說明

使用 `computed` 可以讓 `template` 顯示更簡潔或變數更利落。要先引入 `computed` 再操作，`computed` 是一個函式，需要 `return` 一個計算後的值。

`computed` 若是計算 [資料響應 reactive && ref] 的值，當 [資料響應 reactive && ref] 改變時，`computed` 的值也會同時更新。

```vue
<script>
import { computed } from 'vue'

const computedState = computed(() => '計算屬性')
console.log(computedState.value) // '計算屬性'
</script>
```

:::tip 與 ref 相同
`computed` 返回的值，就是一個與 [資料響應 reactive && ref] 的 `ref` 相同特性的值，在 `template` 會自動解 `.value`，但 `<script>` 操作還是需要 `.value` 來訪問。
:::

**例子**

```vue {9-11,17-19,22-24}
<script setup>
import { reactive, computed } from 'vue'

const users = reactive([
  { id: 0, name: 'naiky', age: 37 },
  { id: 1, name: 'niki', age: 7 },
])

const user0Age = computed(() => {
  return users[0].age > 20 ? 'old' : 'young'
})
</script>

<template>
  <div>
    <!-- ⛔ template 太複雜 -->
    <span>
      {{ users[0].age > 20 ? 'old' : 'young' }}
    </span>

    <!-- 👍 use computed -->
    <span>
      {{ user0Age }}</div>
    </span>
</template>
```

## 計算緩存特性

會發現使用 `computed` 或 `function` 方法，都可以達到一樣的計算結果，但 `computed` 有「緩存」效果，當「值」沒改變時，都會返回相同的「值」不會再重新計算。而 `function` 方法，每次渲染都會執行一次。

:::tip 效能好
**若有「緩存」的需求，使用 `computed` 「效能」會好過 `function` 。**
:::

```vue {6,8-10,15,21-23}
<script setup>
import { reactive, ref, computed } from 'vue'

const nowSpaceState = ref(false)

const now = computed(() => new Date())

function nowFunc() {
  return new Date()
}
</script>

<template>
  <!-- use computed -->
  <div>{{ now }}</div>

  <!-- nowSpaceState use nowFunc-->
  <button @click="nowSpaceState = !nowSpaceState">
    顯示 / 隱藏 `nowSpaceState`
  </button>
  <div v-if="nowSpaceState">
    {{ nowFunc() }}
  </div>
</template>
```

## ⛔ 可修改的計算屬性

將 `computed` 函式內部設為 `{}` 就可以寫入 `getter`、`setter`，[物件屬性定義 object.defineproperty] 的 [getter 與 setter] 就是它的底層原理。

```vue {9-16}
<script setup>
import { reactive, ref, computed } from 'vue'

const user = reactive({
  firstName: 'naiky',
  lastName: 'ding',
})

const fullName = computed({
  get() {
    return `${user.firstName} ${user.lastName}`
  },
  set(newFullName) {
    // 解構賦值的寫法
    ;[user.firstName, user.lastName] = newFullName.split(' ')
  },
})

fullName.value = 'niki lo'
</script>

<template>
  {{ fullName }}
</template>
```

## computed 應該「唯讀」

使用 `computed` 時，最佳的作法是不應該產生 [side effect 副作用]，`computed` 只能是回傳計算過的資料，若是修改資料來源，就失去意義了。

:::danger 注意
應避免修改 `computed` 的「值」。
:::

## Reference

[資料響應 reactive && ref]: /Vue/reactive-ref
[物件屬性定義 object.defineproperty]: /Javascript/object-defineProperty
[getter 與 setter]: /Javascript/getter-setter
[side effect 副作用]: /Javascript/side-effects

- [資料響應 reactive && ref]
- [Vue3 Docs](https://cn.vuejs.org/guide/essentials/computed.html)
- [物件屬性定義 object.defineproperty]
- [getter 與 setter]
