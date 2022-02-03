# \<script> 非同步資源載入與安全驗証

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
<script src="..." defer />
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
<script src="..." async />
```
### 流程
- 解析 DOM
- 非同步請求腳本 (遇到 `script`)
- 取得腳本
- 停止解析 DOM
- 執行腳本
- 恢復解析 DOM

## Integrity 資源驗証 (SRI)
當你的 `<script>` 使用外部載入、或第三方資源載入，就很難確保來源是否有受到 **篡改**，
如果受到惡意的篡改，當執行了載入的腳本就可能發生 **資安** 事件。

而 `integrity` 屬性，就可以用來確保載入的資源是否受到篡改；瀏覽器會比對下載的來源 `integrity` 值，是否與請求 `integrity` 相同，若不符就不會執行下載；
這個行為也稱 **子資源完整性** [Subresource Integrity (SRI)]。

```html {4,11}
<!-- 這是 jQuery 提供的 CDN -->
<script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"
></script>

<!-- Bootstrap CDN -->
<script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
  crossorigin="anonymous"
></script>
```

### 使用方法
- **設置 `integrity` 屬性** : 

  遇到 `<script>
  integrity="加密演算-base64"`，以 `sha256` 加密為範本。
  
  ```javascript
  integrity="sha256-2mQWTKbO3ljlTwwAlKs8Ooj/VVMdGTc2FhrEq9GFy0A="
  ```
  - [SRI 產生器]
  - 本機資源生成
    ```bash
    openssl dgst -sha256 -binary [YOUR FILE NAME.js] | openssl base64 -A
    ```
    編碼生成:
    ```bash
    47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=
    ```

:::warning 注意
當啟用了 SRI 策略，瀏覽器就會對資源做 CROS  檢查，需要在屬性加上 `crossorigin="anonymous"`。 
:::
## Reference:
[SRI 產生器]:https://www.srihash.org/
[DOMContentLoaded]:https://developer.mozilla.org/zh-TW/docs/Web/API/Window/DOMContentLoaded_event
[Subresource Integrity (SRI)]:https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity
- [02. [HTML] script tag 加上 async & defer 的功能及差異？](https://ithelp.ithome.com.tw/articles/10216858)
- [\<script> 中defer跟async是什麼?](https://realdennis.medium.com/html-script-%E4%B8%ADdefer%E8%B7%9Fasync%E6%98%AF%E4%BB%80%E9%BA%BC-1166ee88d18)
- [MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/script)
- [使用SRI保護你的網站免受第三方CDN惡意攻擊
](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/24506/)
- [CORS settings attributes](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/crossorigin)