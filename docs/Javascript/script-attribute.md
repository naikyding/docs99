# script 同步與非同步載入

:::tip 簡單說
- `defer` 延遲 : 遇到 `<script>` 時，會非同步請求且下載，待 DOM 解析完才會執行。
- `async` 異步 : 遇到 `<script>` 時，會非同步請求腳本，下載後 **暫停解析** DOM 先執行 `script` 腳本。
:::

## 前言
瀏覽器讀取 `html` 時，是逐行向下解析，當遇到 `<script>` 就會暫停解析 `DOM` ，開始下載 `<script>` 完成 (下載) 後即刻執行，
再接續的向下 **解析** `DOM`。

為了避免`DOM` 還沒完全生成，就執行 `<script>` 所產生的問題，大家就會把 `<script>` 放在 `<body>` 的最後。

## Reference:

- [02. [HTML] script tag 加上 async & defer 的功能及差異？](https://ithelp.ithome.com.tw/articles/10216858)
- [\<script> 中defer跟async是什麼?](https://realdennis.medium.com/html-script-%E4%B8%ADdefer%E8%B7%9Fasync%E6%98%AF%E4%BB%80%E9%BA%BC-1166ee88d18)