# SEO and Meta

透過 `<head>` 內部 `meta` 相關設置，可以更強化 `Nuxt` 應用程式  SEO 的表現。

**在 `Nuxt` 中有不同的設置方式:**

## 全站設置
可以在 `nuxt.config` 檔案內，`app.head` 來設置 **整個應用程式** 需要的夾帶「靜態」資訊。 [參考更多 `app.head`](https://nuxt.com/docs/api/configuration/nuxt-config#head)

**默認生成的 meta 內容:**
- `charset`: 'utf-8'
- `viewport`: 'width=device-width, initial-scale=1'

```js {5-13}
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt3 App',
      meta: [
        { name: 'title', content: 'Nuxt3 title' },
        { name: 'description', content: '網站描述文字' },
        { property: 'og:title', content: '社群標題' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://miro.medium.com/max/1000/1*qJppTMduXXhjgU2tZt9SfQ.png'},
        { property: 'og:description', content: '社群描述文字'}
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js' }
      ]
    }
  }
})
```

:::tip 提示
這個設置方式是「靜態」資料，若內容是「動態」的資料，請在 `app.vue` 中使用 `useHead` 方法。
:::

## 腳本設置 useHead
`Nuxt` 提供了一個組合函式 `useHead` 可以讓你在想要的頁面或 `app.vue` 設置頁面 `head` 內容，這是可以使用「動態」的資料。

**可設置參數:** [更多設置](https://nuxt.com/docs/getting-started/seo-meta#types)
- `title` 頁面標題
- `script` 腳本
- `style` 樣式
- `meta` 信息
- `bodyAttrs` 為 `<body>` 添加屬性

**Example**
```vue {13-23}
<script setup>
const pageTitle = ref('')
const pageDescription = ref('')

pageTitle.value = 'About TITLE'
pageDescription.value = 'about description content'

const useOgTitle = () => ({
  property: 'og:title',
  content: pageTitle.value + 111,
})

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    useOgTitle()
  ],
  bodyAttrs: {
    class: 'body-class',
    id: 'app'
  }
})
</script>
```

:::tip 提醒
在頁面內設置的 `useHead` 內容，會覆蓋過 [全站「靜態」設置](/nuxt3/seo-and-meta#全站「靜態」設置)。
:::

:::warning 注意
優先權: 模板設置 > 腳本設置
:::

## 模板設置
在元件中 `Nuxt` 也提供了類似原生 tag 的標籤方法，一般常見的 `head` 內容都可以直接設置，而且是「動態」的。
- `<Head>`
- `<Meta>`
- `<Title>`
- `<NoScript>`

:::warning 注意
由於這些都跟原生 html 標籤一樣，所以必須是 **大寫開頭** 設置。
:::

```vue {3-6}
<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta property="og:title" :content="title" />
    </Head>
    <NuxtPage />
  </div>
</template>

<script setup>
const title = ref('App Title')
</script>
```

## 標題模版 titleTemplate
在 `useHead` 中 `titleTemplate` 屬性，可以客製化的調整整個應用程式的 `title`，可以針對 **每個頁面** 標題做修改。
如果使用這個方法，就不需在在 `nuxt.config` 中設置 `title` 了，只需要一次性的在 `app.vue` 設置就可以了。

**提供功能**

當頁面沒有設置 `title` 它提供了基本的標題，或也可以一次性為所有頁面的標題「加料」

**`app.vue`**
```vue
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? titleChunk + ' - 加料文字 ' : '默認標題'
  }
})
</script>
```
- `titleChunk` 頁面本身設置的標題

## Reference
- [HTML 基礎 SEO 標籤：meta、og](https://www.tpisoftware.com/tpu/articleDetails/1989)
- [08. Nuxt 客製《甜點電商》SEO 基本資訊](https://ithelp.ithome.com.tw/articles/10204248)
- [#21 No-code 之旅 — 如何讓網站在分享時看起來漂亮和有吸引力？Open Graph (OG) 簡介](https://ithelp.ithome.com.tw/articles/10278469)