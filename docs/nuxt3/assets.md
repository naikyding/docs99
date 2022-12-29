# Assets 資源
`Nuxt` 使用兩種方式來處理資源，像是「字體」、「圖像」、「樣式」...等。

## Public 靜態資源
`public/` 目錄用來放置「靜態」的資源，打包不會另外處理這個資料夾，是應用程式公開 URL 位置可以訪問的。

### 使用方式

若圖像在 `public/img/nuxt3.png`，可以使用 `/img/nuxt3.png` 來取得靜態資源。
```vue {2}
<template>
  <img src="/img/nuxt.png" alt="nuxt-image">
</template>
```

## Assets 動態資源
`nxut` 是透過 `vite` 或 `webpack` 來打包應用程式，在打包過程中也會進行其它的套件處理 (優化、更小)，而在 `assets/` 目錄的資源會在打包的過程中被另外處理輸出。

### 使用方式

若圖像在 `assets/img/nuxt.png`，可以使用 `~/assets/img/nuxt.png` 來取得。
```vue {2}
<template>
  <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
```

:::warning 注意
`assets/` 目錄的資源，是會另外被打包工具處理過的，無法直接 `/assets/img/nuxt3.png` 訪問資源。若你有這個需求，請使用 `public/` [Public 靜態資源](/nuxt3/assets#public-靜態資源)。
:::

## Style 全域載入
可以在 `nuxt.config` 設置 `vite` 選項來「全域」載入樣式。

### scss 設置方式
**`assets/_colors.scss`**
```scss
$primary: #49240F;
$secondary: #E4A79D;
```

**`nuxt.config`**
```js {5-7}
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  }
})
```

### scss 設置方式

**`assets/_colors.sass`**
```sass
$primary: #49240F;
$secondary: #E4A79D;
```

```js {5-7}
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/_colors.sass" as *\n'
        }
      }
    }
  }
})

```