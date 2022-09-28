# [Router] 路由信息設置 Meta Fields

## 說明
某些時候，會希望附加資料在路由上，比如轉場名稱、誰可以訪問...等，可以通過 `routes` 的 `meta` 來設置這個信息。且可以在 `$route` 、 [路由守衛 Navigation Guards] 訪問到路由 `meta` 設置的資料。

## 設置路由 meta
可以在 `routes` 針對指定的路由做 `meta` 的設置。

```js {5,10,16,22}
const routes = [
  {
    path: '/posts',
    component: PostsLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: PostsList,
        meta: { requiresAuth: false }
      },
      {
        path: 'new',
        component: PostsNew,
        // 驗証身份才可以新增貼文 only authenticated users can create posts
        meta: { requiresAuth: true }
      },
      {
        path: ':id',
        component: PostsDetail,
        // 任何人都可以讀取貼文 anybody can read a post
        meta: { requiresAuth: false }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
```
### 嵌套路由 meta 合拼
一個路徑可能會匹配「多個路由」，比如 `/posts/:id` 這個路徑會匹配到 `/posts` 與 `/posts/:id`，而在取得 `$route.meta` 你只能看到最終端設置的 `meta` 資料，是已經被合拼後的結果 (`requiresAuth: false`)。

### 取得所有匹配路由 meta
承上，在 `$router.meta` 只能取得「合拼」後的資料，但可以在 `$route.matched` 取得到所有匹配路由的資料。

## 取得路由 meta
### $route
```js
this.$route.meta
```

### 路由守衛
當路由需要驗證身分，若驗證錯誤轉址 `登入頁面`。

```js {5}
router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  // 如果驗證身份錯誤
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // 儲存本來要去的頁面，當登入後前往
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})
```

## Reference
[路由守衛 Navigation Guards]: /Vue/navigation-guards
- [Vue Router](https://router.vuejs.org/guide/advanced/meta.html)
- [路由元信息](https://router.vuejs.org/zh/guide/advanced/meta.html)
- [NIKEDIN](https://naikyding.github.io/book/vue/router-meta.html#%E4%BD%BF%E7%94%A8%E8%B7%AF%E7%94%B1%E4%BF%A1%E6%81%AF)