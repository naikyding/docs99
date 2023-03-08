# Web Component 自定義組件

## 說明

這是可以製作客製化組件的原生 API，使得組件內部與外部完全隔絕，不受外部全域 css 影響；前端框架也都有提供對應的操作，可以將框架內組件輸出，供其它不同框架或原生語法插入使用。

```text
+-----------------------------------+
| +-----+-------------------------+ |
| | Nav                           | |
| +-----+-------------------------+ |
|                                   |
| +---------+ +-------------------+ |
| | Sidebar | | Web component     | |
| |         | | (custom element)  | |
| |         | |                   | |
| |         | | <template/>       | |
| |         | | <script/>         | |
| |         | | <style/>          | |
| +---------+ +-------------------+ |
+-----------------------------------+
```

### 解決什麼事?

- 提升組件重用性，降低重複程式碼
- 組件與外部隔離，不受限專案框架
- 客製化組件樣式

### 過去作法

過去長久使用 `iframe` 嵌入來自其它的服務頁面，來避免 css 的互相影響與快速置入其它服務，這樣所產生的問題:

- `iframe` 必須有固定的寬高，使得與原網站樣式格格不入。
- 效能影響，會受到來源網站載入的效能影響。
- 安全性問題，由於網站是嵌入第三方的服務內容，若來源網頁有安全問題，也會直接影響到本身網站的資安。

## 核心技術

`web component` 由三個技術組成，可以創建具有封裝功能的自定義組件，使其可以在任何地方使用，且不會產生程式碼衝突。

- **Custom element 自定義元素**

  使用 [customelementregistry.define()] API 來達成，創建客制化元素，像是這樣:

  ```html
  <custom-element></custom-element>
  ```

- **Shadow DOM**

  在 DOM 的節點上，附加一個「隔離層」的 DOM tree ([隱藏式](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)) 封裝自身的樣式與行為，不受外部影響。

  ![](/Javascript/img/shadowdom.svg)
  圖片出處 [使用 shadow dom]

- **HTML template**

  HTML 中的樣版標籤，透過 `<template>` 來定義布局結構，在頁面中不會直接渲染，再使用腳本指令將其渲染到頁面上。

  ```html
  <template>
    <slot />
  </template>
  ```

## 基本自定義組件

寫一個會產生新元素的 `class` 其中的 `extends HTMLElement` 指的是繼承來自 `html` 元素的原型功能。再操作創建自定義元素 API [customElements.define()] ，以會產生元素的建構函式來定義一個「新」的元素，之後在 `html` 寫上自定義元素就完成。

- customElements.define(`name`, `constructor`)
  - `name` 元素名稱
  - `constructor` 產生新自定義元素的建構函式

```html
<custom-element title="TITLE">CONTENT</custom-element>
```

```js
// extends HTMLElement 繼承父原型屬性
class customElement extends HTMLElement {
  constructor() {
    // 呼叫父層屬性
    super()

    // 取得自定義元素屬性 `title` 的資料
    const title = this.getAttribute('title')
    // 取得自定義元素內容
    const content = this.innerHTML

    // 自定義元素的顯示內容
    this.innerHTML = `
      <h1>${title}</h1>
      <p>${content}</p>
    `
  }
}

// 定義 自定義元素
customElements.define('custom-element', customElement)
```

:::warning ⛔ 注意 ⛔ 受全域影響
上述的方式，是會受到「全域」css 的影響，如果外部有 `h1 { color: red; }`，是會直接影響到 `自定義元素` 內的 `h1`，若要隔離元素，需要使用 `shadowDOM`。
:::

## 使用 shadowDOM 自定義元素

將自定義的元素，附加上 `shadowDOM` 功能，將模版內容寫入到 `shadowDOM`的裡面，模板內容就會被隔離在 `shadowDOM` 之內，不會被外部樣式行為影響，這也是最推薦的寫法。

```html
<custom-element title="TITLE">CONTENT</custom-element>
```

```js
// extends HTMLElement 繼承父原型屬性
class customElement extends HTMLElement {
  constructor() {
    // 呼叫父層屬性
    super()

    // 在自定義元素上附加 shadowDOM
    const shadowRoot = this.attachShadow({ mode: 'open' })

    // 取得自定義元素屬性 `title` 的資料
    const title = this.getAttribute('title')
    // 取得自定義元素內容
    const content = this.innerHTML

    // 創建模板
    const template = document.createElement('template')
    template.innerHTML = `
      <h1>${title}</h1>
      <p>${content}</p>
    `
    const templateContentNode = template.content.cloneNode(true)

    // 模板內容節點掛載在 shadowRoot 之下
    shadowRoot.append(templateContentNode)
  }
}

// 定義 自定義元素
customElements.define('custom-element', customElement)
```

:::tip 推薦
這個方法可以有效的將「自定義元素」隔離在 `shadowDOM` 之內，不會受到全域樣式、行為的影響。
:::

## demo

**Html**

```html
<div>
  <custom-element background="lightblue" color="yellow"
    >默認 slot 文字
  </custom-element>
</div>
```

**Javascript**

```js
class customElement extends HTMLElement {
  constructor() {
    super()

    // 創建 shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' })

    // 取得元素相關資料
    const title = this.getAttribute('title')
    const content = this.innerHTML
    const attributeBackgorund = this.getAttribute('background')
    const attributeColor = this.getAttribute('color')

    // 創建 template 模板
    const template = document.createElement('template')
    template.innerHTML = `
      <style>
      h1 {
        background: ${attributeBackgorund};
        color: ${attributeColor};
      }
      </style>
    
      <h1>
        <slot />
      </h1>
    `

    // 複製模版內容節點
    const cloneTmeplateNode = template.content.cloneNode(true)
    // 掛截模板節點到 shadow DOM 上
    shadowRoot.append(cloneTmeplateNode)
  }
}

// (定義) 客製化元素名稱，供使用
customElements.define('custom-element', customElement)
```

## Reference

[customelements.define()]: https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define
[使用 shadow dom]: https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM

- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [customElements.define()]
- [[VIDEO] Learn Web Components In 25 Minutes](https://www.youtube.com/watch?v=2I7uX8m0Ta0)
- [Web Component 學習筆記](https://johnnywang1994.github.io/book/articles/js/web-component.html)
- [如何使用 Web Component 技術來製作元件](https://blog.errorbaker.tw/posts/xiang/build-webcomponent-element/)
- [了解 Web Components 對我們的重要性](https://the-allstars.com/blog/website-information/what-is-web-components-why-is-it-so-important.html)
- [[VIDEO - ALEX]#5 Web Component by Vite & Vue3](https://www.youtube.com/watch?v=pN7fC2vb1Ig)
- [Web Components 教學 (HTML Templates、Custom Elements、Shadow DOM)](https://www.youtube.com/watch?v=spB9e__IPMw)
- [使用 shadow DOM]
