# Web Component 自定義組件

## 說明

這是原生 API 方法，可以允許製作客製化組件，使得組件內部與外部是完全隔絕，不受外部全域 css 影響。

### 解決什麼事?

過去長久使用 `iframe` 嵌入來自其它的服務頁面，來避免 css 的互相影響，以達到置入其它服務頁面，這樣做產生的問題:

- 必須要使 `iframe` 有固定的寬高，使得與原網站格格不入。
- 效能影響，會受到來源的網站載入的效能影響。
- 安全性問題，由於網站是嵌入第三方的服務，若來源網頁有安全問題，也會直接影響到本身網站的資安。

## Reference

- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Web Component 學習筆記](https://johnnywang1994.github.io/book/articles/js/web-component.html)
- [VIDEO Learn Web Components In 25 Minutes](https://www.youtube.com/watch?v=2I7uX8m0Ta0)
