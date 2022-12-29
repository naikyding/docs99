# Layouts 佈局

在 `/layouts` 資料夾底下，提供了所有頁面的佈局模板，會自動「非同步」的加載在指定頁面顯示，佈局是使用 `<slot>` 作為內容的插入；佈局是透過 `.vue` 加入 `<NuxtLayout / >` 進而在頁面顯示佈局模板。

:::tip 提醒
`layouts/default.vue` 是默認的佈局模版。
:::


## 全域佈局
如果全站只有一個「佈局」且 **所有頁面套用**，這是一個很好的方法。

**`/layouts/default.vue`**
```vue {4}
<template>
  <div>
    <Nav />
    <slot />
    <Footer />
  </div>
</template>
```

**`app.vue`**
```vue {4,7}
<template>
  <div>
    <!-- 載入佈局 /layouts/.. -->
    <NuxtLayout>
      <!-- 載入路由頁面 /pages/... -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```



## 指定佈局
若只有 **特定頁面** 需要指定佈局，其它頁面將不受到影響。

**`app.vue`**

在畫面入口文件，僅載入路由頁面。

```vue {3}
<template>
  <div>
    <NuxtPage />
  </div>
</template>
```

**`/pages/About.vue`**

只有在 `/about` 顯示佈局的話，在指定頁面內容外層加上 `<NuxtLayout >`，頁面內容將會以 `slot` 方式插入到佈局模板中。

```vue {2,4}
<template>
  <NuxtLayout>
    <h1>About</h1>
  </NuxtLayout>
</template>
```

## Reference
- [Nuxt3 Views](https://nuxt.com/docs/getting-started/views)
- [Nuxt3 Layouts section](https://nuxt.com/docs/guide/directory-structure/layouts)