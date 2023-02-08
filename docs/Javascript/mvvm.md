# MVVM 軟體架構

## 說明

是一種把數據模型（Model）與用戶介面（View）分離開來，再通過中間層（ViewModel）来綁定它們的軟體架構設計。
通過這個方式，開發者可以更方便的處理介面的數據更新，降低 `View` 與 `Model` 耦合性，提高程式的可維護性。

![](/Javascript/img/mvvm.png)
[圖片來源 VueJS MVVM](https://v1-cn.vuejs.org/guide/overview.html)

## 架構

### M (Model 數據)

在架構中代構著「數據」的資料，數據可能是來自數據庫或 API 請求的數據庫資料。

### V (View 用戶介面)

可以被看見所有 UI 元素都是 `View` 的部分，UI 更新是來自於 `ViewModel` 操作產生的綁定更新，它是不可以有「邏輯」在之中。

### VM (ViewModel 邏輯)

在架構中代表著「邏輯」的部分，常是在「業務邏輯」、「程式邏輯」或者「畫面綁定」…的邏輯，是功能操作的代表。

## Reference

- [MVVM in 100 Seconds](https://www.youtube.com/watch?v=-xTqfilaYow)
- [Vue 响应的数据绑定](https://v1-cn.vuejs.org/guide/overview.html)
