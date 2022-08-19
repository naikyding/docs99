# 父子組件資料傳遞
![](https://i.imgur.com/tMExXxt.png)

## props 傳子
可以在 **父組件** 的 **屬性** 給予一個值，當作要傳送到子組件的資料。

### 傳遞設置
**父層組件**
```html
<!-- 靜態 -->
<componentA data="這是我要傳送到組件的文字" />

<!-- 動態 -->
<componentA :data="userData" />
```

:::danger 注意
在 屬性上的 `props` 名稱命名規則，須使用 `kebab-case` (烤肉串)，不可以使用 `camelCase` (駱峰)。
:::

## $emit 傳父
