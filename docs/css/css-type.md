# CSS 設計模式

## 說明

傳統 `css` 一直會有許多痛點，比如 `class 命名` 、`覆蓋`、`優先權`...等問題，若是多人協作更有架構管理難題，所以不同的設計模式因應誕生。

## 1️⃣ OOCSS

以 `物件` 為設計核心將 `css` 模組化，可以稱為 「物件導向 CSS」，代表框架 [Bootstrap]。

**設計原則:**

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

## 2️⃣ BEM

是一種模組化元件的命名的規範，在 `class` 呈現所屬的「區塊」與「元素」對應類別。

![](/css/img/css-bem.png)
[圖片出處](https://dev.to/khusharth/write-clean-css-code-an-introduction-to-bem-4j57)

**命名原則:**

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

## Atomic CSS

## Reference

[bootstrap]: https://getbootstrap.com/

- [從 CSS 方法論看原子化 CSS 的極致: UnoCSS | Kuro Hsu | MOPCON 2022 - Slidev](https://kuro.tw/slides/mopcon-2022-unocss/11?fbclid=IwAR2m4_i4MN7GPdYjGdP_xUy5Yy8bBB8R5M6hpae-ln9hQCDHt4QnQrKkrlc)
- [BEM、SMACSS、OOCSS — CSS 三種常見命名原則](https://medium.com/@k2307874/css-%E5%91%BD%E5%90%8D%E5%8E%9F%E5%89%87-bem-smacss-oocss-84e843a263d1)
- [淺談 CSS 設計模式系列-OOCSS 篇](https://israynotarray.com/css/20200517/168089779/)
- [Sass / SCSS 預處理器 - OOCSS、SMACSS、BEM 模組化方法論](https://awdr74100.github.io/2020-06-19-scss-oocss-smacss-bem/)
- [Write clean CSS code: An introduction to BEM](https://dev.to/khusharth/write-clean-css-code-an-introduction-to-bem-4j57)
