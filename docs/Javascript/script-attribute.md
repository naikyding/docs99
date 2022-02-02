# defer 與 async 非同步執行

![](/Javascript/img/asyncdefer.svg)

:::tip 簡單說
- **`defer` 延遲** : 遇到 `<script>` 時，會非同步請求且下載，待 DOM 解析完才會執行。
- **`async` 非同步** : 遇到 `<script>` 時，會非同步請求腳本，下載後 **暫停解析** DOM 先執行 `script` 腳本。
:::

## 前言
瀏覽器讀取 `html` 時，是逐行向下解析，當遇到 `<script>` 就會暫停解析 `DOM` ，開始下載 `<script>` 完成 (下載) 後即刻執行，
再接續的向下 **解析** `DOM`。

為了避免`DOM` 還沒完全生成，就執行 `<script>` 所產生的問題，大家就會把 `<script>` 放在 `<body>` 的最後。

## defer 延遲
在 `script` 加上 `defer` 屬性，是告訴瀏覽器就算下載完腳本，也持續解析、渲染畫面，不被要載入的 `script` 所影響；實際執行是在 [DOMContentLoaded] 之前，一樣是由上至下的順序執行腳本。

```html
<script src="..." defer>
```
### 流程
- 解析 DOM
- 非同步請求腳本 (遇到 `script`)
- 解析 DOM 完成 ([DOMContentLoaded] 之前)
- 執行腳本

:::danger 注意
`defer` 屬性雖然是 **布林值** ，但在 `IE9` 中使用 `defer="false"`，`defer` 還是會生效哦!
:::

## async 非同步
`script` 中加上 `async` 屬性，瀏覽器不停止解析 DOM 的情況，先 **非同步** 請求資源，當腳本下載完成，就會
**停止解析 DOM** 執行載入的腳本，後再接續解析。
```html
<script src="..." async>
```
### 流程
- 解析 DOM
- 非同步請求腳本 (遇到 `script`)
- 取得腳本
- 停止解析 DOM
- 執行腳本
- 恢復解析 DOM
## Reference:
[DOMContentLoaded]:https://developer.mozilla.org/zh-TW/docs/Web/API/Window/DOMContentLoaded_event
- [02. [HTML] script tag 加上 async & defer 的功能及差異？](https://ithelp.ithome.com.tw/articles/10216858)
- [\<script> 中defer跟async是什麼?](https://realdennis.medium.com/html-script-%E4%B8%ADdefer%E8%B7%9Fasync%E6%98%AF%E4%BB%80%E9%BA%BC-1166ee88d18)
- [MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/script)
- [使用SRI保護你的網站免受第三方CDN惡意攻擊
](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/24506/)