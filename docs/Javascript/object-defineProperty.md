# 物件屬性定義 Object.defineProperty

## 說明

可以使用 `Object.defineProperty` 為已存在的物件做屬性定義，可以針對屬性做更細節的設置。

### 語法

#### Object.defineProperty(`物件`, `屬性`, {`描述設置`})

**描述設置**
| 項目 | 說明 | 設定值 | 預設值|
|-|-|-|-|
| writable | 可修改 | `boolean` | `false` |
|configurable | 可重新配置 (刪除) | `boolean` | `false` |
|enumerable| 顯示於迴圈 | `boolean` | `false` |
|value | 屬性資料 | str / num | `undefined` |
|get| 讀取時觸發 | 函式 | `undefined`|
|set| 設置時觸發| 函式 | `undefined`|

:::tip 一般物件

```js
const obj = { a: 1 }
```

一般不經由 `Object.defineProperty` 定義的物件屬性，`writable`、`configurable `、`enumerable` 都是 `true` 保留最大的設置彈性。

:::

## Reference

- [Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
