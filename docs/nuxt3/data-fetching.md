# 資料獲取 Data Fetching 

過去可能會使用 `AXIOS` 來打 `api`，而 `Nuxt3` 提供了下列幾種打 `api` 的方法，這些方式只在 `setup` 或 生命週期內可以使用。

## $fetch
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
`$fetch` 是一個 `promise` 必須要非同步處理。
:::

## useAsyncFetch


## useFetch


## useLazyFetch


## useLazyAsyncFetch

## Reference
- [Nuxt3 Data Fetching](https://nuxt.com/docs/getting-started/data-fetching)
- [[Day 15] Nuxt 3 資料獲取 (Data Fetching)](https://ithelp.ithome.com.tw/articles/10301876)