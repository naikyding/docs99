# Pages 頁面

創建 `/pages` 資料夾，且新增 `.vue` (以大駱峰命名為原則) 將自動以「檔案名稱」生成在「路由」上， `.vue` 還需要加上 `<NuxtPage />` 供路由頁面顯示。


**`app.vue`**

```vue {3}
<template>
  <div>
    <NuxtPage />
  </div>
</template>
```

**`pages/index.vue` 首頁 (`/`) 顯示**

```vue
<template>
  <div>
    <h1>Index</h1>
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>
```

**`pages/About.vue` 關於頁面 (`/about`)**


## Reference
- [Nuxt3 Views](https://nuxt.com/docs/getting-started/views)
- [Router 路由設置](/nuxt3/router)
- [[Day 07] Nuxt 3 頁面 (Pages) 與路由 (Routing)](https://ithelp.ithome.com.tw/articles/10296131)