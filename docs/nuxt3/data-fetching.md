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

:::tip 基本操作
- 頁面載入時僅會在 `server 端` 請求數據來渲染頁面。
- `<NuxtLink>` 導航頁面，僅會在 `client 端` 請求數據。
:::

:::danger 警示
這是 **阻塞型** 請求，在得到請求 **回傳** 後才會開始渲染頁面內容，在此之前會是「空白」頁面。

在 `options` 中加入 `lazy: true` 可解決這個部分。
:::

### useAsyncData( `key`, `handler`, `options`)

### 參數:

- **`key` 唯一值密鑰 :** 確保重新請求時，正確刪去之前請求舊的數據資料。
- **`handler` 非同步執行函式 :** 打 API 或加功數據資料的地方 (組合 `$fetch` 使用)。
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

  - `immediate` 即時觸發 (預設 `true`)

    當 `immediate: false` 會避免 **立即** 觸發請求。(但事件觸發不影響)

:::details Template
```vue
<template>
  <div>
    {{ data }}

    <button @click="refresh ++"> REFRESH </button>
    <button @click="refreshBtn = !refreshBtn"> REFRESH (refreshBtn)</button>
  </div>
</template>
```
:::

```vue {9-34}
<script setup>
const apiUrl = 'https://f48b-61-220-84-123.ngrok.io/user'
const res = reactive({ data: [] })

const refresh = ref(1)
const refreshBtn = ref(true)

// useAsyncData options
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
  watch: [refresh, refreshBtn],

  // 即時請求
  immediate: false
}

const { data } = await useAsyncData('userList', () => $fetch(apiUrl), options)
res.data = data
</script>
```

:::tip 提醒
若前往的路由，請求數據為 `lazy: false` 會阻止前往的導航，直到取得數據，為了用戶的使用體驗感受，建議使用 `lazy: true`。
:::

### 回傳值
- `data` 請求回傳的數據，若回傳且有設置 `option.default` 則會是預設值。
- `pending` {boolean} 是否仍在獲取數據。
- `refresh` {func} 重新執行請求數據函式 (`handler`)。

  預設情況下 `refresh` 函式，必須執行完成才可以再次執行。

- `error` {object} 請求錯誤信息，若無錯誤為 `null`。

```js
const { 
  data,
  pending,
  refresh,
  error
} = await useAsyncData('userList', () => $fetch(apiUrl))
```

:::warning 注意
若不在服務端請求數據 `option.server: false`，那 `<script setup />` 中的 `data` 為是為 `null`。
:::

## useFetch 組合式請求數據
在頁面、組件、封裝邏輯都可以使用，是將 `useAsyncData` 與 `$fetch` 包裝在一個更簡單請求數據的函式，只需要 api `URL` 就可以使用了。
在 `useFetch` 中，會自動產生 `key` 來對應請求的數據更新。

### useFetch(`url`, `options`)

```js
const apiUrl = '/user'

const options = {
  baseURL: 'https://ed91-61-220-84-123.ngrok.io'
  method: 'post',
  headers: { 'test-header': 'test' },
  query: { query: 'test' },
  params: {params: 'test'},
  body: { id: 111, name: 999 },

  default: () => ({ id: '--', name: '--' }), // 數據預設值
  server: true, // 服務端請求
  transform: (value) => { // 加工回傳數據
    const cloneValue = { ...value }
    cloneValue.transform = 'Ya'
    return cloneValue
  },
  pick: ['name'],
  watch: [refreshBtn],
  // server: false,
  // immediate: false
}

const {  data, pending, refresh, error } = await useFetch(apiUrl, options)
```

### 參數
- `url` API 請求連結
- **`options` 選項 (1/2):**
  - `baseURL` {string} 基本請求 URL (與 `axios` 相同)
  - `method` {string} 請求方法 (`get`'、`post`…)
  - `headers` {object} 請求頭部
  - `search` 請求連結加上 `query` 參數。
  - `params` 與 `search` 相同，擇一使用即可。
  - `body` {string / object} 若傳入 `物件` 自動轉換成字串。

    有傳 `body` 的情況下，一定要設置方法 (ex: `method: 'post'`) ，不然無法請求。

- **`options` 選項 (2/2): (與 [useAsyncData 非同步請求數據](/nuxt3/data-fetching#useasyncdata-非同步請求數據) 相同)** 
  - `key` 唯一值密鑰: 確保重新請求時，正確刪去之前請求舊的數據資料 (供 `useAsyncData` 使用)。
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

  - `immediate` 即時觸發 (預設 `true`)

    當 `immediate: false` 會避免 **立即** 觸發請求。(但事件觸發不影響)

### 回傳值
- `data` 請求回傳的數據，若回傳且有設置 `option.default` 則會是預設值。
- `pending` {boolean} 是否仍在獲取數據。

  常見使用在是否顯示 `loading` 畫面 `v-if="pending"`。
- `refresh` {func} 重新執行請求數據函式 (`handler`)。

  預設情況下 `refresh` 函式，必須執行完成才可以再次執行。

- `error` {object} 請求錯誤信息，若無錯誤為 `null`。

:::warning 注意
若你提供 url 的方式是 `function` 、 `ref` 響應式 或 `options` 設置本身就是一個 `function`，在使用 `useFetch` 時看起來就算是一樣，但數據還是不會匹配來做更新。如果是這樣的情況，必須要為 `useFetch` 設置上 `key`來確保這種事情的發生。
:::

### 攔截器 interceptors
`useFetch` 在請求方法中，`options` 也提供了幾個 `hook`，可以針對 「請求前」、「獲得回傳」來處理特定事件: [參考 interceptors](https://github.com/unjs/ofetch#%EF%B8%8F-interceptors)

- `onRequest` 請求前處理: 一旦請求就會馬上執行。
- `onRequestError` 請求前發生錯誤執行
- `onResponse` 處理回傳數據，一旦得到回傳執行。

  在此處理回傳數據 `response._data`，會造成 `onResponseError` 無法正常運作。

- `onResponseError` 獲取回傳錯誤

  就算回傳錯誤，還是會進入 `onResponse` 這個 `hook`，只是數據不會回傳。

```js
const apiUrl = '/user'

const options = {
  baseURL: 'https://www.example.com',

  onRequest({ request, options }) {
    console.log(request) // /user <- 請求的 `url`

    // 設置請求 headers
    options.headers = { ...options.headers, Authorization: '111222333' }

    // 請求 log
    console.log(`[Fetch Request] /api${request}`, options, new Date())
  },

  onRequestError({ request, options, error }) {
    console.log(error)
  },

  onResponse({ request, response, options }) {
    console.log(request) // 請求的完整連結 request === response.url

    // 回傳 log
    console.log(`[Fetch Response] ${request}`, response._data, new Date())
    
    return response._data
  },

  onResponseError({ request, response, options }) {
    console.log('[------- fetch response error -------]', request, response.status, response._data)
  },
}

const { data, pending, refresh } = await useFetch(apiUrl, options)
```

:::warning 注意
當 `onRequest` 直接對 `headers` 內容賦值的話，`onRequestError` 會報錯。

```js {2}
onRequest({ request, options }) {
  options.headers.Authorization = '...'
}
```

`onRequestError` 錯誤:
```
DOMException: Failed to execute 'fetch' on 'Window': The user aborted a request.
at $fetchRaw2
```

**解決方式**

整個 `headers` 重新賦值。
```js {2}
onRequest({ request, options }) {
  options.headers = { ...options.headers, Authorization: '111222333' }
}
```
:::

## useLazyFetch
與 [useFetch 組合式請求數據](/nuxt3/data-fetching#usefetch-組合式請求數據) 功能一樣，就只是在 `options` 設置了 `lazy: true` 而已。這會讓路由導航不會因為等待請求的數據而 **延後渲染畫面**，相反的必須處理 **數據為空** 的情況，`options.default` 可以設置數據為空的默認值。

```vue
<template>
  <div v-if="pending">
    Loading...
  </div>

  <div v-else>
    {{ data }}
  </div>
</template>

<script setup>
const apiUrl = '...'
const options = { ... }

const { data, pending } = await useLazyFetch(apiUrl, options)
</script>
```

## useLazyAsyncData

## Reference
- [Nuxt3 Data Fetching](https://nuxt.com/docs/getting-started/data-fetching)
- [[Day 15] Nuxt 3 資料獲取 (Data Fetching)](https://ithelp.ithome.com.tw/articles/10301876)
- [[Day 11] Nuxt3 的 AJAX 家族：useAsyncData、useFetch、useLazyFetch、useLazyAsyncData](https://ithelp.ithome.com.tw/articles/10298741)