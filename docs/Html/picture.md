# 響應式載入圖片 picture

:::warning 注意
`<img>` 要寫在最後一個
:::

## 說明
`<picture>` 元素可以為不同的裝置，提供不同的圖片版本。瀏覽器會評估內部每個 `<source>` 元素，挑選最「適合」的尺吋載入圖片，若沒有最適合，則顯示 `<img>` 的 URL。

**試試看**

當寬度 `1024px` 以下，就會顯示 VueJS LOGO。

<div style="border: 1px solid lightgreen; padding: 2rem 1rem; border-radius: 8px;">
<picture>
    <!-- NUXT LOGO -->
    <source srcset="https://seeklogo.com/images/N/nuxt-logo-64E0472AA8-seeklogo.com.png" media="(min-width: 1024px)">
    <!-- VUE LOGO -->
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" width="32px">
</picture>
</div>


## Reference
- [\<picture>: The Picture element](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/picture)
- [HTML \<picture> Tag](https://www.w3schools.com/tags/tag_picture.asp)
- [HTML \<picture> 響應式圖片 (Responsive Images) - 自動載入不同尺寸和檔案格式的圖片](https://www.fooish.com/html/picture-tag.html)