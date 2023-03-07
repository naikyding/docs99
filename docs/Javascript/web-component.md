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

  使用原生語法 `customElements.define` 向定義 `html` 元素名稱。

- **Shadow DOM**

  在 DOM 的節點上，附加一個隔離層的 DOM tree ([隱藏式](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)) 封裝自身的 `html`、`css`不受外部影響。

- **HTML template**

  HTML 中的樣版標籤，透過 `<template>` 來定義布局結構，在頁面中不會直接渲染，使用腳本指令將其渲染到頁面上。

## 操作

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

- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [[VIDEO] Learn Web Components In 25 Minutes](https://www.youtube.com/watch?v=2I7uX8m0Ta0)
- [Web Component 學習筆記](https://johnnywang1994.github.io/book/articles/js/web-component.html)
- [如何使用 Web Component 技術來製作元件](https://blog.errorbaker.tw/posts/xiang/build-webcomponent-element/)
- [了解 Web Components 對我們的重要性](https://the-allstars.com/blog/website-information/what-is-web-components-why-is-it-so-important.html)
- [[VIDEO - ALEX]#5 Web Component by Vite & Vue3](https://www.youtube.com/watch?v=pN7fC2vb1Ig)
- [Web Components 教學 (HTML Templates、Custom Elements、Shadow DOM)](https://www.youtube.com/watch?v=spB9e__IPMw)
- [使用 shadow DOM](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM)
