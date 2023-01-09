# 資料獲取 Data Fetching
過去可能會使用 `AXIOS` 來打 `api`，而 `Nuxt3` 提供了下列幾種打 `api` 的方法，這些方式只在 `setup` 或 生命週期內可以使用。

:::danger 注意
`nuxt3` 啟動服務器在 `localhost:3000`，若本機同時啟動「API 服務端」在 `localhost:xxxx` 供應用程式 **請求** 的話，可能會受到無法連線的影響。最好避開應用程式使用的服務。 (`nuxt3` 服務同時為 `baseUrl`)
:::

## $fetch 基本請求數據
這是 `nuxt3` 請求 api 方法，可以直接在 `nuxt` 中直接 HTTP 請求資源。

### $fetch( `apiUrl`, `options` )
[更多使用方式 ohmyfetch](https://github.com/unjs/ofetch)

```vue {8}
<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const data = await $fetch('/api/v1/....')
</script>
```

:::tip 提醒
- `$fetch` 是一個 `promise` 必須要 `await` 非同步處理。
- 在 `server` 與 `client` 都會各執行一次，`server` 端的執行是為了提供「服務端渲染」，`client` 端在下載 `vue js` 後也會再執行一次，不會寫入頁面原始碼。
:::

:::warning 🟡 服務端與客戶端資料不相符 Hydration text content mismatch in 🟡
初次頁面載入時 `$fetch` 會在「服務端」「客戶端」各執行一次，當兩個數據不符合時，`log` 會發出警告 `Hydration text content mismatch in`。


#### 解決方法

使用 `useState` 可以解決這個問題 [參考](https://juejin.cn/post/7086859150759559176)


```vue {3,14}
<template>
  <div>
    {{ domText }}
  </div>
</template>

<script setup>
const apiUrl = 'https://f48b-61-220-84-123.ngrok.io/user'

const res = reactive({ data: [] })

const data = await $fetch(apiUrl)
res.data = data
const domText = useState('user', () => res.data)
</script>
```
:::

:::danger 警示
這是 **阻塞型** 請求，在得到請求 **回傳** 後才會開始渲染頁面內容，在此之前會是「空白」頁面。
:::

## useAsyncData 非同步請求數據
在組件、頁面、或套件，都可以使用 `useAsyncData` 來進行「非同步」取得數據。

### useAsyncData( `key`, `handler`, `options`)
- **`key` 唯一值密鑰 :** 確保重新請求時，正確刪去之前請求舊的數據資料。
- **`handler` 非同步執行函式 :** 打 API 或加功數據資料的地方 (可以組合 `$fetch` 使用)。
- **`options` 選項 :** 
  - `lazy` 懶加載 (默認 `false`):

    是否在路由加載後再 **非同步請求**，而不阻塞客戶端導航到頁面。

  - `default` 默認值 (工廠函式):

    回傳還沒執行 「非同步執行函式」 前的默認數據值，通常跟 `lazy: true` 搭配使用。(回傳應與請求獲得的數據格式相同)
  
  - `server` 是否在服務端請求 (預設: `true`):

    - 頁面載入會「服務端」請求數據。(若 `server: false` 僅會在「客戶端」請求數據，原始頁面為 `default` 或空白)。
    - `NuxtLink` 導航會「客戶端」請求數據。

  - `transform` 加工 `handler` 回傳數據的函式:

    函式自帶的參數為 **回傳**的數據，可以加工後再 `return` 使用。

  - `pick` 指定取得欄位資料 (`[ resultKey ]`):  

    `handler` 回傳資料的欄位，包含 `transform` 的處理。

  - `watch` 監聽響應式的資料 (`[ref, reactive]`) 來自動打 api。

    當陣列內的「值」發生變化時，將會重新請求 `handler` 刷新資料。

```vue
<template>
  <div>
    {{ data }}

    <button @click="refresh ++"> REFRESH </button>
    <button @click="refreshBtn = !refreshBtn"> REFRESH (refreshBtn)</button>
  </div>
</template>

<script setup>
const apiUrl = 'https://f48b-61-220-84-123.ngrok.io/user'
const res = reactive({ data: [] })

const refresh = ref(1)
const refreshBtn = ref(true)

const options = {
  // 懶加載
  lazy: true, 

  // 數據預設值
  default: () => ({ id: '--', name: '--' }), 

  // 服務端請求
  server: true, 

  // 加工回傳數據
  transform: (value) => { 
    const cloneValue = { ...value }
    cloneValue.transform = 'Ya'
    return cloneValue
  },

  // 指定回傳資料欄位 (只取 'name' 的資料)
  pick: ['name'],

  // 監聽數據來重新請求
  watch: [refresh, refreshBtn]
}

const { data } = await useAsyncData('userList', () => $fetch(apiUrl), options)
res.data = data
</script>
```

:::tip 基本操作
- 頁面載入時僅會在 `server 端` 請求數據來渲染頁面。
- `<NuxtLink>` 導航頁面，僅會在 `client 端` 請求數據。
:::

:::danger 警示
這是 **阻塞型** 請求，在得到請求 **回傳** 後才會開始渲染頁面內容，在此之前會是「空白」頁面。

在 `options` 中加入 `lazy: true` 可解決這個部分。
:::

## useFetch


## useLazyData


## useLazyAsyncData

## Reference
- [Nuxt3 Data Fetching](https://nuxt.com/docs/getting-started/data-fetching)
- [[Day 15] Nuxt 3 資料獲取 (Data Fetching)](https://ithelp.ithome.com.tw/articles/10301876)