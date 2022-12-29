# Router 路由基礎操作

## 說明
「路由系統」是 `Nuxt` 重要核心功能之一，每個在 `pages/` 目錄下的檔案，都會自動被生成在 `路由` 之中供 URL 路徑來顯示檔案的內容，每個頁面都是透過「動態」來載入的，可以使用最少的程碼來創建路由，不用像 `vue cli` 還要手動設置每個路由。

## Pages 設置
是透過 `pages/` 目錄，創建的檔案名稱，系統將會自動生成路由。

**`pages/`目錄設置:**
```text
pages/
--| about.vue
--| posts/
------| [id].vue
```

**系統自動生成路由:**
```json
{
  "routes": [
    {
      "path": "/about",
      "component": "pages/about.vue"
    },
    {
      "path": "/posts/:id",
      "component": "pages/posts/[id].vue"
    }
  ]
}
```

## Navigation 導航
在組件中可以透過 `<NuxtLink>` 來連結到指定的路由頁面，它會生成一個 `<a>` 的標籤且帶有 `href` 屬性。

`<NuxtLink>` 是在 **客戶端** 的執行的，`Nuxt` 系統會在導航前預先動態的生成頁面來供導航，進而加快導航速度。

```vue {5-7}
<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
```

:::tip 提醒
`<NuxtLink>` 生成 `<a>` 導航的操作，並不會 **刷新頁面**，但會允許動畫的過渡。
:::

## Params 參數

假設在 `<script setup>` 情境下，使用 `useRoute()` 可以取得當前路由頁面資料 ( vue2 方法: `this.$route` )。

```vue
<script setup>
  const $route = useRoute()

  // route `/post/1`
  console.log($route.params.id) // 1
</script>
```

## Middleware 中間件
可以自定義要執行的「中間件」函式，它會在指定的路由進入之前先運行，**路由中間件，有三種類型:**


### 1️⃣ 匿名中間件
直接在使用的 `page` 頁面中定義與使用。

### 2️⃣ 命名中間件
設置在 `middleware/` 目錄之下，`page` 頁面使用時會透過「非同步」自動加載。
:::warning 注意
中間件檔案命名的規則是 「kebab-case 烤肉串」，所以 `someMiddleware` 會變成 `some-middleware`
:::

### 3️⃣ 全域中間件
每次路由變化時都會執行的中間件，設置在 `middleware/` 目錄下，檔案以 `.global` 結尾創建。

### [👉 Middleware 中間件](/nuxt3/middleware) 詳細

:::tip 提醒
路由中間件 `middleware` 是運行在 `nuxt` 的 `vue` 部分，與 `服務端` 的 `middleware` 雖然名稱是一樣，但沒有任何關係。
:::

## Validation 驗證

## Reference
- [Nuxt3 Routing](https://nuxt.com/docs/getting-started/routing)
- [Nuxt3 middleware](https://nuxt.com/docs/guide/directory-structure/middleware)