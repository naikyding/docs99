# Middleware 中間件

## 說明
`Nuxt` 提供了 `middleware` 中間件功能，非常適合操作導航到路由之前的執行函式方法。實值上，就是取代了 `Vue Router` 路由守衛，可以控制路由到路由之間的導航方式。

**路由中間件，有三種類型:**

:::tip 提醒
前兩性中間件都可以在頁面中透過 `definePageMeta` 的 `middleware` 來定義中間件。
:::

## 匿名中間件
直接在使用的 `page` 頁面中定義與使用。

## 命名中間件
設置在 `middleware/` 目錄之下，`page` 頁面使用時會透過「非同步」自動加載。

### 1️⃣ 定義中間件
在 `middleware/` 創建 `middleware` 中間件檔案，使用 `defineNuxtRouteMiddleware` 來創建函式方法。


**`middleware/some-middleware.js`**

```js
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`to: ${to}`) // 將去到哪個頁面
  console.log(`from: ${from}`) // 從哪個頁面過來的

  const isAuth = false
  if(isAuth) {
    return navigateTo('/login')
  }
  return abortNavigation('拒絕導航方法')
})
```

**`Nuxt` 在中間件提供了兩個「全域」方法，供退回導航**

- **`navigateTo('/path')` 重定向到指定路由**

  可以直接調用到指定的路由頁面。

- **`abortNavigation('失敗文字')` 中止導航路由**

  調用此函式將不會進行任何導航，有可選的失敗文字供填寫，會有警示 log 在面板出現。



:::warning 注意
中間件檔案命名的規則是 「kebab-case 烤肉串」，所以 `someMiddleware` 會變成 `some-middleware`
:::

### 2️⃣ 設置頁面中間件

```vue
```


## 全域中間件
每次路由變化時都會執行的中間件，設置在 `middleware/` 目錄下，檔案以 `.global` 結尾創建。

## Reference
- [Nuxt3 middleware](https://nuxt.com/docs/guide/directory-structure/middleware)