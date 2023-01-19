# 狀態管理 useState

`Nuxt3` 提供了 `useState` 組合函式，可以使用在 **跨組件** 的數據響應與 **SSR** 友善的數據共享方法。

在 SSR 中 `useState` 是很好用來替代 `ref` 的響應資料工具，它會於「服務端」渲染後的數據共享於「客戶端」之間，並用唯一值 `key` 來確保數據的共享辨別。當「服務端」與「客戶端」資料的差異錯誤，就是使用這個方法來處理響應。

:::warning 格式注意

- `useState` 只可以使用在 `setup` 或 生命周期之內。
- `useState` 會將資料加工為 `json`，所以資料不能是 `function` 、 `instance (class)`。
  :::

## Hydration 說明

`nuxt` 主要是 SSR + CSR，會在「服務端」 執行程式碼與生成 **靜態頁面** 提交到「客戶端」，當「客戶端」收到頁面也會同步下載 `js` 相關檔案並執行，讓頁面有「互動性」，而這個過程稱為 `Hydration`。

下面的程式，實際上「服務端」、「客戶端」都會各執行一次。

```vue {3,9}
<template>
  <div>
    {{ stateData }}
  </div>
</template>

<script setup>
// 服務端、客戶端都會執行 (隨機產生數字)
const stateData = ref(Math.round(Math.random() * 1000))
</script>
```

### 服務端與客戶端數據不同步

上面的例子，在 `Hydration` 過程中，程式每次執行都會產生不同的隨機數據，在頁面上會看到先顯示「服務端」取得的數字，再跳「客戶端」需得的數字，這會造成 「服務端」與「客戶端」數據的不同步以致於報錯，這時就可以使用 `useState` 來解決這個問題。

:::danger **「服務端」與「客戶端」數據不同步**\_警示:

```text {3,4}
runtime-core.esm-bundler.js:40
[Vue warn]: Hydration text mismatch:
- Client: "377 "
- Server: "743 "
  at <Index onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > >
  at <Anonymous key="/" routeProps= {Component: {…}, route: {…}} pageKey="/"  ... >
  at <Anonymous >
  at <RouterView name=undefined route=undefined >
  at <NuxtPage>
  at <App key=1 >
  at <NuxtRoot>
```

**Hydration Error:**

```text
runtime-core.esm-bundler.js:4629
Hydration completed but contains mismatches.
```

:::

## 基本使用

將 `數據` 以 `key` 為金鑰，使用 `useState` 來存取，也可以 `init` 來設置默認數據。

### useState(`key`, `init`)

- `key` 唯一值密鑰，用來識別數據
- `init` 初始值 (函式)

```vue
<template>
  <div>{{ data }}</div>
</template>

<script setup>
const data = useState('count', () => 1)
</script>
```

```js
// 設置數據
const num = useState('count', () => 1)

// 取得數據
const num = useState('count')

// 操作數據
num++
```

### 範例

經過 `page1` 的數據設置後，再進入 `page2` 就可以取得 `data` 為 `1`，若沒有先經過 `page1` 的數據設置，直接進入 `page2` 頁面 `data` 就會為 `undefined` 因為沒有默認值。

經過 `key` 的設置，兩個頁面都可以 **共享相同數據且是連動的**，當 `page1` 點擊 `+` 後，再進入到 `page2` 數字就會變成 `2`。

**`/page1.vue`**

```vue {3,14}
<template>
  <div>
    {{ data }}
  </div>

  <!-- 操作 -->
  <div>
    <button @click="data++">+</button>
    <button @click="data--">-</button>
  </div>
</template>

<script setup>
const data = useState('count', () => 1)
</script>
```

**`/page2.vue`**

```vue {3,8}
<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const data = useState('count')
</script>
```

:::warning 注意
若設置 `默認值` 則為 `undefined`。
:::

## 封裝使用
可以在 `composables/` 目錄封裝共享狀態。

### type1 命名輸出

`/composables/useState.js`

```js
export const useCount = () => useState('count', () => 1)
export const useNum = () => useState('num', () => 9)
```

`/page1.vue`

```vue
<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ num }}</div>
  </div>
</template>

<script setup>
const count = useCount()
const num = useNum()
</script>
```

### type2 默認輸出

`/composable/useCount.js`

```js
export default function () {
  return useState('count', () =>1)
}
```

```vue
<template>
  <div>
    <div>{{ count }}</div>
  </div>
</template>

<script setup>
const count = useCount()
</script>
```

## Reference

- [Nuxt3 useState](https://nuxt.com/docs/getting-started/state-management#best-practices)
- [[Day 16] Nuxt 3 狀態管理 (State Management)](https://ithelp.ithome.com.tw/articles/10302323)
