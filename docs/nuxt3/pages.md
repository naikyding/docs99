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

以 `[]` 來表示動態參數設置資料夾或 `.vue` 檔案名稱。

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

## 補獲所有路由

在 `/pages` 下新增 `[...slug].vue` 可以用來匹配所有路由，當要 **補獲不存在路由** 時可以使用這個方式。

**設置補獲**

```
-| pages/
-----| [...slug].vue
```

```vue
<template>
  <div>
    <h1>頁面不存在</h1>
    <p>當前路由: {{ $route.params }}</p>
  </div>
</template>

<script setup>
const $route = useRoute()
</script>

<style lang="scss" scoped></style>
```

**頁面顯示**

```
頁面不存在
當前路由: { "slug": [ "aaa", "bbb" ] }
```

:::tip 提示
常用的 `404` 不存在畫面可以使用這個方法，並可以在 `route.params.slug` 中，取得補獲頁面的路由。
:::

## 崁套路由

創建與路由資料夾 **同名** 的 `.vue` 檔案，在其中插入 `<NuxtPage />` 供顯示崁套的子層頁面，而 `index.vue` 就會是默認的 「根」頁面內容。

此時，頁面已經可以依路由來切換子層頁面。

**路由頁面**

```
/person                                                /person/emails                                         /person/profile
+-----------------------------------+                  +-----------------------------------+                  +-----------------------------------+
| person.vue                        |                  | person.vue                        |                  | person.vue                        |
| +-----+-------------------------+ |                  | +-----+-------------------------+ |                  | +-----+-------------------------+ |
| | index.vue(default)            | |                  | | emails.vue                    | |                  | | profile.vue                   | |
| |                               | |  +------------>  | |                               | |  +------------>  | |                               | |
| |                               | |                  | |                               | |                  | |                               | |
| +-----+-------------------------+ |                  | +-----+-------------------------+ |                  | +-----+-------------------------+ |
+-----------------------------------+                  +-----------------------------------+                  +-----------------------------------+

```

**設置檔案**

```
---| person 📂
------| index.vue (default)
------| emails.vue
------| profile.vue
---| person.vue
```

`person.vue`

```vue {11}
<template>
  <div>
    <h1>Nav</h1>
    <NuxtLink to="/person">index</NuxtLink>
    <br />
    <NuxtLink to="/person/emails">Emails</NuxtLink>
    <br />
    <NuxtLink to="/person/profile">Profile</NuxtLink>

    <!-- 崁入子層頁面 -->
    <NuxtPage />
  </div>
</template>
```
