# [Router] 路由守衛 Navigation Guards

## 說明
「路由守衛」可以想像是一個 `hook` ，在當中透過 `重定向` 或 `取消` 導航來保護路由，也可以在這個 `hook` 中做特定的事件。 `全域` 、 `路由` 、 `組件` 都有各自的「路由守衛」。

**workflow:**

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FkDEGOTspgXouWckXwfgbIj%2FUntitled" allowfullscreen></iframe>

## 全域
主要是在 `router` 實體上設置，主掌著 `router` 「全域」 的控制權。

### 進入守衛 `router.beforeEach`
`router.beforeEach` 是進入「路由」之前會獨發的事件，在沒有允許之前 (`next()`)，是不會進入指定的路由!

常見應用在驗證 `to.meta` 權限資料，若不通過則無法進入路由頁面。

```js {5-9}
...
const router = new VueRouter({
  routes
})

router.beforeEach((to, from , next) => {
  console.log(`VueRouterGuards: beforeEach (進入 "${to.path}" )`)
  next()
})
```
**callback 參數:**
- `to` 即將進入的路由
- `from` 原本路由
- `next` 繼續向下執行函式

:::tip 提示
在這個 `Hook` 必須要執行 `next()` 才會繼續向下執行，否則無法進入路由頁面。若在 `vue-router` v4.x 則不用。
:::

### 解析完成守衛 `router.beforeResolve`
與 `router.beforeEach` 是很像的功能，通樣會在每次進入路由執行，但會在 `router.beforeEach` 、頁面組件解析後才觸發。

```js
router.beforeResolve((to, from, next) => {
  console.log("VueRouterGuards: beforeResolve")
  next()
})
```

:::tip 提示
在這個 `Hook` 必須要執行 `next()` 才會繼續向下執行，否則無法進入路由頁面。若在 `vue-router` v4.x 則不用。
:::

:::warning 注意
請確保 `next` 函式在每一個操作都被調用到一次，不然路由將會停留在現況，無法進行到下一個頁面。 也不要調用多次，不然路由錯亂!
```js
// BAD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // if the user is not authenticated, `next` is called twice
  next()
})
```
　
```js
// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```
:::

### 離開守衛 `router.afterEach`
在路由跳轉後才會執行 `router.afterEach` ，所以這個 `Hook` 不需要 `next` 參數。
當然拿來做使用者瀏覽的紀錄。

```js
router.afterEach((to, from, failure) => {
  if(!failure) sendToAnalytics(to.fullPath)
  console.log(`VueRouterGuards: afterEach (從 "${from.path}" 離開)`);
})
```
**callback 參數:**
- `to` 即將進入的路由
- `from` 原本路由
- `failure` 跳轉失敗

## 路由

### 進入路由守衛 `beforeEnter`
在 `routes` 的路由組件中配置的 `Hook`，會有進入路由組件之前執行。
```js {5-8}
const routes = [
  {
    path: "/router1",
    component: Router1,
    beforeEnter(to, from, next) {
      console.log(`Vue Router Guards: beforeEnter ${to.path}`)
      next()
    }
  },
  ...
]

const router = new VueRouter({
  routes 
})
```
**callback 參數:**
- `to` 即將進入的路由
- `from` 原本路由
- `next` 繼續向下執行函式

:::tip 提示
在這個 `Hook` 必須要執行 `next()` 才會繼續向下執行，否則無法進入路由頁面。若在 `vue-router` v4.x 則不用。
:::

## 組件
最後，可以在「組件」內也可以設置守衛來防護:

- `beforeRouteEnter` 進入組件之前，無法訪問 `this` 因為在創建組件之前。
- `beforeRouteUpdate` 組件更新之前，可以訪問 `this`
- `beforeRouteLeave` 組件離開之前，可以訪問 `this` 

```js
export default {
  name: "router1",
  created() {
    console.log("Router1 Mounted Hook!")
  },
  beforeRouteEnter(to, from, next) {
    console.log("VueRouter Guards: beforeRouteEnter")
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log("VueRouter Guards: beforeRouteUpdate")
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log("VueRouter Guards: beforeRouteLeave")
    next()
  },
};
```

:::tip beforeRouteEnter 訪問 `this` 替代方案
由於 `beforeRouteEnter` Hook，是在創建組件之前，所以 `this` 無法訪問，但可以在 `next()` 函式使用 callback， `Vue` 實體會在這個 callback 參數被傳入。
```js {3-5}
  beforeRouteEnter(to, from, next) {
    console.log("VueRouter Guards: beforeRouteEnter")
    next(vm => {
      console.log(vm) // Vue || this
    })
  }
```
這個引入 `vm` 的方式，只有 `beforeRouteEnter` 可以在 `next` 調用， 其它兩個 hook 由於已經可以訪問到 `this` 所以就不支持這個引入 `vm` 的方式。
:::

:::tip 
當頁面離開時，會調用到 `beforeRouteLeave` ，而這個 hook 最好運用的地方，就在使用者還沒完成表單的填寫，就想離開時，可以用 `next(false)` 來阻止這件事。

```js
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```
:::

## Reference
- [Vue Router | Navigation Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html#optional-third-argument-next)
- [重新認識 Vue.js | Kuro Hsu](https://book.vue.tw/CH4/4-4-navigation-guards.html)
- [NIKEDIN Docs](https://naikyding.github.io/book/vue/router-guards.html#%E5%AE%88%E8%A1%9B%E6%B5%81%E7%A8%8B-hook)