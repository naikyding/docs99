# dialog 對話彈窗

<style scope>
  dialog {
    border-radius: 8px;
    background: white;
    color: black;
  }
  dialog::backdrop {
    background: rgb(0,0,0,.7);
  }

  dialog > div {
    min-width: 300px;
    max-width: 450px;
  }

  dialog h4 {
    font-size: 1.2rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid #eee;
  }
  .text-right {
    text-align: right;
  }
</style>

<script>
  export default {
    mounted() {
      const dialogBtn = document.querySelector('.dialog-btn')
      const dialogCancelBtn = document.querySelector('#dialog-cancel-btn')
      const dialogEl = document.querySelector('dialog')

      const dialogClose = () => {
        dialogEl.close()
      }
      const dialogShow = () => {
        dialogEl.showModal()
      }

      dialogCancelBtn.addEventListener('click', () => dialogClose())

      dialogBtn.addEventListener('click', () => {
        if('open' in dialogEl.attributes) {
          return dialogClose()
        }
        dialogShow()
      })
    }
  }
</script>

## 說明
`<dialog>` 元素，可以用來顯示 `彈窗` 或其它信息的呈現，也可以為文件內容更 `語意` 化；這個元素本身是帶有 `position: absolute;` 屬性。

```html
<dialog open> ... </dialog>
```

## 屬性

### `open`
表示 `<dialog>` 開啟狀態。

:::tip 提醒
如果，一開始未設置 `open` 屬性，不應該用 `open` 屬性的設置來改變 `<dialog>` 的狀態，而是使用 [事件](/Html/dialog#事件) API 來改變狀態。
:::warning 注意
默認的情況下 `esc` 是不會 「關閉」 `<dialog>`。
:::

## 事件
- `.show()` 開啟視窗區塊
  
  這個方法，無法為 `<dialog>` 添加背景。

- `.showModal()` 開啟視窗整體 **(建議)**

  可以使用 `dialog::backdrop` 選取器，為彈窗客製背景。

- `.close()` 關閉視窗

## Demo

<button class="dialog-btn" style="background: var(--vp-c-brand-dark); color: white; padding: .3rem 1rem; border-radius: 8px;">
  試試看 Show Dialog
</button>

<dialog>
  <div>
    <h4>This is Dialog!</h4>
    <p>This is DialogThis is DialogThis is DialogThis  is DialogThis is Dialog is DialogThis is Dialog is DialogThis is Dialog</p>
  </div>
  <div class="text-right">
    <button id="dialog-cancel-btn" style="border:1px solid var(--vp-c-brand-dark); color: var(--vp-c-brand-dark); padding: .3rem 1rem; border-radius: 8px;">
      Cancel
    </button>
  </div>
</dialog>

:::details Code
**元素設置**
```html {5-15}
<button class="dialog-btn">
  Show Dialog
</button>

<dialog>
  <div>
    <h4>This is Dialog!</h4>
    <p>
      This is DialogThis is DialogThis is DialogThis  is DialogThis is Dialog is DialogThis is Dialog is DialogThis is Dialog
    </p>
  </div>
  <div>
    <button id="dialog-cancel-btn">Cancel</button>
  </div>
</dialog>
```
**客製化 dialog 底層背景**
```css
dialog::backdrop {
  background: rgb(0,0,0,.7);
}
```
**事件**
```js {3,6-9,11-13}
const dialogBtn = document.querySelector('.dialog-btn')
const dialogCancelBtn = document.querySelector('#dialog-cancel-btn')
const dialogEl = document.querySelector('dialog')

// 關閉事件
const dialogClose = () => {
  dialogEl.close()
}

// 開啟事件
const dialogShow = () => {
  dialogEl.showModal()
}

dialogCancelBtn.addEventListener('click', () => dialogClose())

dialogBtn.addEventListener('click', () => {
  if('open' in dialogEl.attributes) {
    return dialogClose()
  }
  dialogShow()
})
```
:::

:::details Codepen
[👉 Codepen](https://codepen.io/naiky/pen/xxjoLzR)

<iframe height="300" style="width: 100%;" scrolling="no" title="[html] dialog" src="https://codepen.io/naiky/embed/xxjoLzR?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/xxjoLzR">
  [html] dialog</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::

## Reference
- [\<dialog>: The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [\::backdrop](https://css-tricks.com/almanac/selectors/b/backdrop/)