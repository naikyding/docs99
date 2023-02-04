# Pages 頁面

## 說明

在 `nuxt` 中，只要在 `/pages` 資料夾，創建相關的 `.vue` 檔案(「烤肉串」命名為原則)，就可以自動生成 `routes`，
再插入 `<NuxtPage />` 供路由頁面顯示。

**設置「首頁`/`」 、 「about 頁 `/about`」**

```text
-| pages/
---| index.vue
---| about.vue
```

**`app.vue`**

```vue {3}
<template>
  <div>
    <NuxtPage />
  </div>
</template>
```

## 子層路由

若路由是有層級的，可以在 `/pages` 設置以「路由名稱」設置資料夾，再在其資料夾新增 `.vue` 檔案來顯示子層頁面。

### 層級設置

- **`/product` 頁面:** `~/product/index.vue`
- **`/product/item` 頁面:** `~/product/item.vue`

```text {2-4}
-| pages/
---| product 📂
-----| index.vue
-----| item.vue
```

### 多層級

- **`/product/sport` 頁面:** `~/product/index.vue`
- **`/product/sport/item` 頁面:** `~/product/item.vue`

```text {5-7}
-| pages/
---| product 📂
-----| index.vue
-----| item.vue
-------| sport 📂
---------| index.vue
---------| item.vue
```

## 動態路由

以 `[]` 來表示動態參數的部分設置 `.vue` 檔案。

- **`/data/:id` 頁面:** `~/data/[id].vue`
- **`/data/item-:id` 頁面:** `~/data/item-[id].vue`
- **`/product-:group/:id` 頁面:** `~/product-[group]/[id].vue`

```text
-| pages/
---| data 📂
-----| [id].vue
-----| item-[id].vue
---| product-[group] 📂
-----| [id].vue
```

### 取得動態參數

`~/product-[group]/[id].vue`

```vue {3-4}
<template>
  <div>
    <h1>Route.params.group: {{ $route.params.group }}</h1>
    <h1>Route.params.id: {{ $route.params.id }}</h1>
  </div>
</template>

<script setup>
const $route = useRoute()
</script>
```
