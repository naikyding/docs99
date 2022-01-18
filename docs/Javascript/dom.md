# DOM 文件物件模型 
:::tip 簡單說
`DOM` 代表 **文件物件模型**，是我們瀏覽器接口的 API，可以透過 `Javascript` 來指定 `節點` 進行屬性操作，更改瀏覽器顯示的內容。
:::

![DOM img](./img/dom.png)

## 說明
`DOM` 文件物件模型 (Document Object Model)，是 `html`、`xml`、`svg` 文件的程式介面，它提供了整個文件的「樹」狀結構表示法，並定義文件的架構、風格、屬性、函式與節點，且可透過 `Javascript` 來針對 `DOM` 做 `節點` 操作或風格的改變。同時也是隸屬於 `瀏覽器` 之下的一個 `document` 分支。(參考：[BOM](./bom)) 

## API

### 擷取特性
|操作|說明|
|-|-|
|document.title|目前頁面標題文字|
|document.lastModifide|頁面最後更新日期|
|document.URL|目前頁面 URL 位址|
|document.domain|頁面所屬網域|

### 常見操作
|操作|說明|備註|
|-|-|-|
|document.write()|將文字寫入文件| -- |
|document.getElementById()|依 id 名取得元件| 動態 |
|document.getElementByCalss()|依 class 名取得元件| 動態 |
|document.querySelector()|依 css 選擇器取得第一個元件| 靜態 |
|document.querySelectorAll()|依 css 選擇器取得所有個元件| 靜態 |

:::tip
- 動態：每次執行，都會查尋
- 靜態：定義的當下，不會再次查詢
:::

## Reference
- [document.getElementsBy** 與 document.querySelector 的差異](https://ithelp.ithome.com.tw/articles/10191765)
- [静态的后续无法变化
](https://www.cnblogs.com/andy-lehhaxm/p/10784325.html)