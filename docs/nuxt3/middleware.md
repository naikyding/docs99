# Middleware 中間件

## 說明
`Nuxt` 提供了 `middleware` 中間件功能，非常適合操作導航到路由之前的執行函式方法。實值上，就是取代了 `Vue Router` 路由守衛，可以控制路由到路由之間的導航方式。

**路由中間件，有三種類型:**

:::tip 提醒
前兩種中間件都可以在 `page` 頁面中透過 `definePageMeta` 的 `middleware` 來定義中間件。
:::

## 命名中間件
設置在 `middleware/` 目錄之下，`page` 頁面使用時會透過「非同步」自動加載，在進入頁面之前執行中間件。

### 1️⃣ 定義中間件
在 `middleware/` 創建中間件檔案，使用 **`defineNuxtRouteMiddleware`** 來定義函式方法。

```
-| middleware/
---| some-middleware.js
```

**`middleware/some-middleware.js`**

```js {1,7,9}
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`to: ${to}`) // 將去到哪個頁面
  console.log(`from: ${from}`) // 從哪個頁面過來的

  const isAuth = false
  if(isAuth) {
    return navigateTo('/login')
  }
  return abortNavigation('拒絕導航信息')
})
```

**`Nuxt` 在中間件提供了兩個「全域」方法，供退回導航**

- **`navigateTo('/path')` 重定向到指定路由**

  可以直接調用到指定的路由頁面。

- **`abortNavigation('失敗文字')` 中止導航路由**

  調用此函式將不會進行任何導航，有可選的失敗文字供填寫，會有警示 log 在面板出現。

### 2️⃣ 設置頁面中間件
在 `page` 頁面的 `definePageMeta` 設置中間件，當進入頁面之前就會預先被執行。

```vue
<script setup>
definePageMeta({
  middleware: ["some-middleware"]
  // middleware: "some-middleware"  <- 也可以這樣寫 (只會設置一個的話)
})
</script>
```

:::warning 注意
中間件檔案命名的規則是 「kebab-case 烤肉串」，就算命名 `someMiddleware` 還是會轉換成 `some-middleware`。
:::


## 匿名中間件
直接在使用的 `page` 頁面中定義函式與使用，操作與 [命名中間件](/nuxt3/middleware.html#命名中間件) 相同。

```vue {3-7}
<script setup>
definePageMeta({
  middleware: (to, from) => {
    console.log('page Middleware')
    console.log(to, from)
    navigateTo({path: '/'})
  }
})
</script>
```

**若命名與匿名一起使用**

```vue {3-6}
<script setup>
definePageMeta({
  middleware: [
    (to, from) => { }, 
    'some-middleware'
  ]
})
</script>
```

## 全域中間件
每次路由變化時都會預先執行的中間件，創建在 `middleware/` 目錄下，檔案命名加上 `.global` 結尾。(頁面就不用再另設置 `middleware` 了)

```
-| middleware/
-----| auth.global.js
```

:::tip 提示
執行順序會是 `全域中間件` > `命名中間件`。
:::

## Reference
- [Nuxt3 middleware](https://nuxt.com/docs/guide/directory-structure/middleware)