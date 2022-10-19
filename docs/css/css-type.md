# CSS 設計模式

## 說明

傳統 `css` 一直會有許多痛點，比如 `class 命名` 、`覆蓋`、`優先權`...等問題，若是多人協作更有 `架構管理` 難題，所以不同的設計模式因應誕生。

## 🔥 Atomic CSS

Atomic CSS 指的是「原子化」 `css` ，是一種 `css` 的架構方法。把樣式的 `class` 最小化、以視覺功能化命名，單一 `class` 負責單一樣式。
是近期最熱門的架構，Facebook 也使用來為其節省了 80% 的 `css` 體積，代表框架為
[Tailwind css]、[Windi css]。

![](/css/img/atomic-design-wide.png)
[圖片出處](https://cantina.co/modular-css-atomic-design-in-the-enterprise/)

### 設計原則

Atomic CSS 想解決的是，讓 `css` 只關注在樣式、`html` 關注在內容，而用 `class` 將兩者串聯在一起，只要調整 `class` 就可以直接改變樣式，不用為了某個需求，另客製化 `class` 命名且新增，且這些「原子 css」在其它元件也可以重覆使用。

- 最小化 `class` 視覺化命名樣式
- `class` 命名與 `html` 內容完全無關。

**定義原子 css**

```css
/* Utility css */
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
...
```

原需求樣式

<div style="border: 1px solid pink; padding: 1rem; border-radius: 8px;">
  <code>class="text-left"</code>
</div>

新需求樣式，需要文字「靠右」，我們只需要更改 `class`，就可以輕鬆達到。

<div style="border: 1px solid lightgreen; padding: 1rem; border-radius: 8px; text-align: right;">
  <code>class="text-right"</code>
</div>

### 優點

- 降低 `css` 檔案大小
- 維護更容易
- 沒有權限問題
- 不會命名衝突

### 缺點

- `html` 閱讀性差，`class` 太長

:::tip Tailwind css 的解決方案

透過 `@apply` 來簡化共同樣式 `class`，讓 `html` 顯示更簡化，且自帶有 Tree shaking 功能，有使用到的 css 才會被編譯。
:::

## ⚪ OOCSS

以 `物件` 為設計核心將 `css` 模組化，可以稱為 「物件導向 CSS」，代表框架 [Bootstrap]。

### 設計原則

- 「容器」與「內容」分離 `.row` `.col`

  ```html
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" />
    </div>
  </div>
  ```

- 「結構」與「樣式」分離 `.btn` `.btn-primary`

  ```html
  <button type="button" class="btn btn-primary">Primary</button>
  ```

- 「覆用樣式語意化」抽離 `.text-primary`
  ```html
  <p class="text-primary">.text-primary</p>
  ```

## ⚪ BEM

是一種模組化元件的命名的規範，在 `class` 呈現所屬的「區塊」與「元素」對應類別。

![](/css/img/css-bem.png)
[圖片出處](https://dev.to/khusharth/write-clean-css-code-an-introduction-to-bem-4j57)

### 命名原則

:::details 區塊

```css
.block {
}
```

:::
:::details 元素

```css
.block__element {
}
```

:::

:::details 修飾符

```css
.block--modifier {
}

.block__element--modifier {
}
```

:::

### Demo

```css
.card {
}

.card__title {
}

.card__button--primary {
}
```

### 缺點

**多人協作，難找到對應樣式**

當使用 `scss` 來編寫巢狀 `BEM`時，會讓事後 debug 很難找到「關鍵樣式」 `.card__button--primary`。

```scss
.card {
  ...
  &__button {
    ...
    &--primary {
      ...
    }
  }
}
```

## Reference

[bootstrap]: https://getbootstrap.com/
[tailwind css]: https://tailwindcss.com/
[windi css]: https://windicss.org/

- [從 CSS 方法論看原子化 CSS 的極致: UnoCSS | Kuro Hsu | MOPCON 2022 - Slidev](https://kuro.tw/slides/mopcon-2022-unocss/11?fbclid=IwAR2m4_i4MN7GPdYjGdP_xUy5Yy8bBB8R5M6hpae-ln9hQCDHt4QnQrKkrlc)
- [BEM、SMACSS、OOCSS — CSS 三種常見命名原則](https://medium.com/@k2307874/css-%E5%91%BD%E5%90%8D%E5%8E%9F%E5%89%87-bem-smacss-oocss-84e843a263d1)
- [淺談 CSS 設計模式系列-OOCSS 篇](https://israynotarray.com/css/20200517/168089779/)
- [Sass / SCSS 預處理器 - OOCSS、SMACSS、BEM 模組化方法論](https://awdr74100.github.io/2020-06-19-scss-oocss-smacss-bem/)
- [Write clean CSS code: An introduction to BEM](https://dev.to/khusharth/write-clean-css-code-an-introduction-to-bem-4j57)
- [淺談 Atomic CSS 的發展背景與 Tailwind CSS](https://blog.huli.tw/2022/05/23/atomic-css-and-tailwind-css/)
- [Facebook 重构：抛弃 Sass / Less ，迎接原子化 CSS 时代](https://juejin.cn/post/6917073600474415117)
- [[译] Atomic CSS-in-js](https://juejin.cn/post/6844904152548507661)
- [前端好朋友 — tailwindcss](https://milkmidi.medium.com/%E5%89%8D%E7%AB%AF%E5%A5%BD%E6%9C%8B%E5%8F%8B-tailwindcss-e1e187df6fed)
- [Modular CSS / Atomic Design in the Enterprise](https://cantina.co/modular-css-atomic-design-in-the-enterprise/)
