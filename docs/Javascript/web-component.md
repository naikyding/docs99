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

:::tip 提示

- elementNode`.cloneNode(true)` 複製節點
- parentNode`.append(`childNode`)` 在指定節點子層最後插入
- `template` 為何使用 `.content.cloneNode(true)`

  `template` 只是一個容器，在創建時內部也會創建一個 `#document-fragment`， 這是一個虛擬的節點，後續只要使用 `template.content` 就可以直接操作 `template` 內部的所有節點 (即模板本身)，以減少對 `template` 內容的 DOM 操作次數。
  若使用 `template.cloneNode(true)` 是直接操作 `template` 元素本身，不是模板內容。
  :::

## 運用 template slot 自定義組件

使用 `template` `slot` 可以更靈活的使用自定義組件，使用自定義組件只要沒有特別載名 `slot=""`，寫入的 內容都是會在 `<slot />` 中。

```html
<custom-element>
  默認 slot 內容
  <span slot="desc">slot name="desc" 的內容</span>
</custom-element>
```

```js
// 定義模板
const template = document.createElement('template')
template.innerHTML = `
  <style>
  h1 {
    color: red;
  }
  p {
    color: green;
  }
  </style>

  <h1>
    <slot />
  </h1>

  <p>
    <slot name="desc" />
  </p>
`

// 向定義元素建構函式
class customElement extends HTMLElement {
  constructor() {
    super()

    // 為自定義元素附加 shadowDOM
    const shadowRoot = this.attachShadow({ mode: 'open' })
    const templateContent = template.content

    // 模板內容複制插入到 shadowDOM 內
    shadowRoot.append(templateContent.cloneNode(true))
  }
}

// 定義 向定義元素名稱與內容
customElements.define('custom-element', customElement)
```

## 生命周期

自定義組件的建構式中，提供了生命周期，以便 DOM 發生變化時調用。

| 方法                       | 名稱         | 說明                                                                                                                                       |
| -------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `connectedCallback`        | 添加調用     | 當元素被附加到文件時調用，可能在元素被解析之前。                                                                                           |
| `disconnectedCallback`     | 移除調用     | 當元素不在文件中調用。                                                                                                                     |
| `adoptedCallback`          | 移動調用     | 當元素移動到新的文件時調用用。                                                                                                             |
| `attributeChangedCallback` | 屬性改變調用 | 元素中的 屬性 `attribute` 有變動都會調用 (新增、移除、修改)，在靜態方法 `static get observedAttributes` 指定監聽屬性**才會調用這個方法**。 |

```js
const template = document.createElement('template')
template.innerHTML = `
            <label>
                <input type="checkbox" />
                <slot />

                <span>
                    <slot name="desc" />
                </span>
            </label>
        `

class customElement extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    const templateContent = template.content
    shadowRoot.append(templateContent.cloneNode(true))
  }

  // 監聽屬性變化
  static get observedAttributes() {
    // 回傳要監聽的屬性
    return ['checked']
  }

  connectedCallback() {
    console.log('自定義元素被 ((添加)) 到 document')
  }
  disconnectedCallback() {
    console.log('自定義元素從 document 被 ((移除))')
  }
  adoptedCallback() {
    console.log('自定義元素被移動到其它 document')
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`屬性 (${name}) 被改變! 從 ${oldValue} 改為 ${newValue}`)
  }
}

customElements.define('custom-element', customElement)
```

## 寫一個 web component

建立一個內部有 `<input type="checkbox" />` 的自定義元素，當自定義元素的屬性 `checked` 被寫上，載入時 `<input type="checkbox" />` 就會自動 `checked`、當 `<input type="checkbox" />` 改變狀態，也會連動自定義元素的 `checked` 屬性。

<iframe height="300" style="width: 100%;" scrolling="no" title="Web Component" src="https://codepen.io/naiky/embed/poOrZMO?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/poOrZMO">
  Web Component</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```js
// 建立模版
const template = document.createElement('template')
template.innerHTML = `
    <label>
        <input type="checkbox" />
        <slot />
    </label>
`

// 創建自定義元素建構式
class nCheckbox extends HTMLElement {
  constructor() {
    // 呼叫父層屬性
    super()

    // 自定義元素 建立 shadowDOM
    const shadow = this.attachShadow({ mode: 'open' })
    // 將模版寫入 shadowDOM
    shadow.append(template.content.cloneNode(true))
    // 將 shadowDOM 內 checkbox 寫入屬性 (方便之後操作)
    this.shadowCheckboxEl = shadow.querySelector('input[type="checkbox"]')
  }

  // 監聽 自定義元素 指定屬性
  static get observedAttributes() {
    // 監聽元素的 checked 屬性
    return ['checked']
  }

  // 當 自定義元素 屬性改變執行函式
  attributeChangedCallback(name, oldValue, newValue) {
    if (name !== 'checked') return false

    // 屬性內容為字串，轉變為 boolean
    const newStatus = newValue !== null && newValue !== 'false'
    this.setShadowCheckbox(newStatus)
  }

  // 當 自定義元素 插入 document hook
  connectedCallback() {
    console.log(`connectedCallback`)

    this.shadowCheckboxEl.addEventListener('change', () => {
      this.setCustomCheckbox(this.shadowCheckboxEl.checked)
    })
  }

  // 設置 自定義元素 `checked` 屬性
  setCustomCheckbox(newValue) {
    this.setAttribute('checked', newValue)
  }

  // 設置 shadowDOM 內 checkbox 元素 checked 狀態
  setShadowCheckbox(newValue) {
    this.shadowCheckboxEl.checked = newValue
  }
}

customElements.define('n-checkbox', nCheckbox)
```

在建立元素的當下，從 `constructor` 中把 `shadowDOM` 的 `checkbox` 寫入屬性 `shadowCheckboxEl`，以便內部操作；在自定義元素添加到 document 後，才對 `shadowCheckboxEl` 進行監聽。

:::warning 注意 1

在監聽事件時，是使用 `() => {}` 而不是 `function() {}`， 使用 `function() {}` 的 `this` 指向 `<input type="checkbox" />` 觸發元素的本身；`() => {}` 沒有自已的 `this` 所以是外部的 `this`。

```js
this.shadowCheckboxEl.addEventListener('change', () => {
  this.setCustomCheckbox(this.shadowCheckboxEl.checked)
})
```

:::

:::warning 注意 2
取得屬性的值，都會是 `字串`，可以使用 `&&` 來方便處理 `boolean`。

```js {5}
attributeChangedCallback(name, oldValue, newValue) {
  if (name !== 'checked') return false

  // 屬性內容為字串，轉變為 boolean
  const newStatus = newValue !== null && newValue !== 'false'
  this.setShadowCheckbox(newStatus)
}
```

:::

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
