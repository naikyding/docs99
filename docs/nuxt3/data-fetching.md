# 資料獲取 Data Fetching
過去可能會使用 `AXIOS` 來打 `api`，而 `Nuxt3` 提供了下列幾種打 `api` 的方法，這些方式只在 `setup` 或 生命週期內可以使用。

:::danger 注意
`nuxt3` 預設服務在 `localhost:3000`，若本機啟動服務 `localhost:xxxx` 供應用程式 **請求** 的話，可能會受到無法連線的影響。最好避開應用程式使用的 `baseUrl`
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
- 在 `server` 與 `client` 都會各執行一次，`server` 端的執行是為了提供「服務端渲染」，`client` 端的執行是為了「更新」數據，不會寫入頁面原始碼。
:::

:::danger 注意
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

  - `default` 默認值工廠函式 (默認 `true`)

    回傳還沒執行 「非同步執行函式」 前的默認數據值。


```vue {8}
<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const { data } = await useAsyncData('userList', () => $fetch('https://4fef-61-220-84-123.ngrok.io/user'))
</script>
```


:::danger 注意
這是 **阻塞型** 請求，在得到請求 **回傳** 後才會開始渲染頁面內容，在此之前會是「空白」頁面。

在 `options` 中加入 `lazy: true` 可解決這個部分。
:::

## useFetch


## useLazyData


## useLazyAsyncData

## Reference
- [Nuxt3 Data Fetching](https://nuxt.com/docs/getting-started/data-fetching)
- [[Day 15] Nuxt 3 資料獲取 (Data Fetching)](https://ithelp.ithome.com.tw/articles/10301876)