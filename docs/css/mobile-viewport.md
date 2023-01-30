# 移動裝置高度填滿

## 說明

一般而言，可以使用單位 `vh` 表示整個視窗的高度單位、`vw` 表示整個視窗的寬度單位。
![](/css/img/css-vh-vw.png)
[圖片出處](https://github.com/chokcoco/iCSS/issues/**223**)

### 移動裝置問題
但在移動裝置上，使用 `vh` 來填滿視窗高度，就會發現出現滾動軸 `scroll` 的問題，它超過了視窗的高度!!

![](/css/img/dynamic-viewport.webp)
[圖片出處: web.dev](https://web.dev/viewport-units/)

**原因**


- 瀏覽器會把 「網址列」 或 「操作列」 計算在 `vh` 填滿高度內。
- 彈出輸入 「輸入鍵盤」 時，將其計算在 `vh` 填滿高度內。

:::tip 使用手機試試看

![](/css/img/qrcode_bdo6th.csb.app.png) 
[圖片出處: web.dev](https://web.dev/viewport-units/)

- 一般情況下出現 `scroll`
- 點擊 `input` 的 `scroll` 變化
:::

## 解決方案
現在出現新的單位來解決「移動裝置」的視窗高度問題。
- `svh` / `svw` 「小視窗」 填滿單位
- `lvh` / `lvw` 「大視窗」 填滿單位
- `dvh` / `dvw` 「動態視窗」 填滿單位

![](/css/img/svh-lvh.webp)
[圖片出處: web.dev](https://web.dev/viewport-units/)

![](/css/img/dvh.webp)
[圖片出處: web.dev](https://web.dev/viewport-units/)

## Reference
- [The large, small, and dynamic viewport units](https://web.dev/viewport-units/)
- [动态视口单位之 dvh、svh、lvh](https://github.com/chokcoco/iCSS/issues/223)