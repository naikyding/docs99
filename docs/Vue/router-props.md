# [Router] 路由資料傳遞 Passing Props to Route Components

## 說明
我們經常使用來自 `$router` 的 `動態參數` 來耦合路由的組件，這會讓這個「組件」只有在特定的 `url` 可以使用。
為了提高「組件」的覆用性，可以使用 `props` 的方式來傳遞要接收的參數，讓路由組件不限定在特定的 `url` 使用。

**常用方式**
```js {5}
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const routes = [
  { path: '/user/:id', component: User }
]
```

**使用 `props` 方法**
```js {7}
const User = {
  // make sure to add a prop named exactly like the route param
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const routes = [
  { path: '/user/:id', component: User, props: true }
]
```

## `props` 布林模式
當路由設置 `{ props: true }` 時，就可以在組件內的 `props` 接收 `$route.param` 的資料。

### 路由設置
```js {7}
const User = {
  // make sure to add a prop named exactly like the route param
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const routes = [
  { path: '/user/:id', component: User, props: true }
]
```

### 組件接收資料
```js {2}
export default {
  props: ["id"], // 等於 this.$route.params.id

  mounted() {
    console.log(this.$route.params.id); // 等於 this.id (props)
  },
};
```

:::tip 提示
若有命名的 `router-view name="routerNamed"`，可以各別指定是否傳入 `props`。

```js {4,6-7}
const routes = [
  {
    path: "/router-props/:id",
    components: { default: RouterProps, propsNamed: RouterNamed },
    props: {
      default: true,
      propsNamed: true
    }
  }
];
```
:::

:::warning 注意
若 `router-view` 有傳入參數的話，還是會被路由設置的 `props` 取代。
```js
<router-view :id="999" />
```
:::

## `props` 物件模式
路由內的 `props` 也可以設置為 `object` 物件，若為資料為「靜態」，這個方法很好用。

### 路由設置
```js {7}
Vue.use(VueRouter);

const routes = [
  {
    path: "/router-props/:id",
    component: RouterProps,
    props: { newsletterPopup: false }
  }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});
```
### 組件接收資料
```js {2-6}
export default {
  props: {
    newsletterPopup: {
      type: Boolean,
    }
  },
}
```

## `props` 函式模式
這個設置方法是最靈活的，資料可以為「動態」的，也可以是「靜態」資料的組合。

### 路由設置
```js {9-12}
const routes = [
  {
    path: "/slot",
    component: Slot
  },
  {
    path: "/router-props/:id",
    component: RouterProps,
    props: (route) => ({
      params: route.params.id,
      id: `${route.query.agent}靜態資料-${route.params.id}`
    })
  }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});
```

### 組件接收參數
```js {2-9}
export default {
  props: {
    params: {
      type: String,
    },
    id: {
      type: String,
    },
  },
};
```


## Reference
- [VueJS Passing Props to Route Components](https://router.vuejs.org/guide/essentials/passing-props.html)
- [NIKEDIN 組件傳參數](https://naikyding.github.io/book/vue/props.html)