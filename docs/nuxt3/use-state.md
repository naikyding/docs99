# 狀態管理 useState
`Nuxt3` 提供了 `useState` 組合函式，可以使用在 **跨組件** 的數據響應與 **SSR** 友善的數據共享方法。

在 SSR 中 `useState` 是很好用來替代 `ref` 的工具，它會於「服務端」渲染後的數據共享於「客戶端」之間，並用唯一值 `key` 來確保數據的共享辨別。當「服務端」與「客戶端」資料的差異錯誤，就是使用這個方法來處理。

:::warning 格式注意
- `useState` 只可以使用在 `setup` 或 生命周期之內。 
- `useState` 會將資料加工為 `json`，所以資料不能是 `function` 、 `instance (class)`。 
:::

## 說明
`nuxt` 主要是 ssr + csr，會在「服務端」 執行程式碼與生成 **靜態頁面** 提交到「客戶端」，當「客戶端」收到頁面也會同步下載 `js` 相關檔案並執行，讓頁面有「互動性」，而這個過程稱為 `Hydration`。

下面的程式，實際上「服務端」、「客戶端」都會各執行一次。

```vue {9}
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
上面的例子，在 `Hydration` 過程中，程式每次執行都會產生不同的隨機數據，這會造成 「服務端」與「客戶端」數據的不同步以致於報錯:

:::danger **「服務端」與「客戶端」數據不同步**_警示:
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
:::

## 基本使用

### useState(`key`, `init`)
- `key` 唯一值密鑰，確保數據更新識別
- `init` 初始值

```vue
<template>
  <div>{{ data }}</div>
</template>

<script setup>
const res = await getDataApi(apiUrl)
const data = useState(() => res.data)
</script>
```

## Reference
- [Nuxt3 useState](https://nuxt.com/docs/getting-started/state-management#best-practices)
- [[Day 16] Nuxt 3 狀態管理 (State Management)](https://ithelp.ithome.com.tw/articles/10302323)