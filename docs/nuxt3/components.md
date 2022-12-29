# Components 元件

可以創建 `components/` 目錄，放其它畫面會 **重複使用** 「元件」(比如: `按鈕` `選單` …  )。 

**`components/Menu.vue`**

```vue
<template>
  <div>
    <slot />
  </div>
</template>
```

**`app.vue`**

```vue {3-5}
<template>
  <div>
    <Menu>
      <h1>This From Components</h1>
    </Menu>
  </div>
</template>
```

:::tip
`app.vue`

默認情況下，這是 `nuxt` 畫面的「入口」文件。
:::

## Reference
- [Nuxt3 Views](https://nuxt.com/docs/getting-started/views)