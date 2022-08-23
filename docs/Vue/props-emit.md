# 父子組件資料傳遞
![](https://i.imgur.com/tMExXxt.png)

## props 傳子
當 **父組件** 有數據想傳送到 **子組件** 可以使用這個方法。

### 1️⃣ 父層傳遞設置
可以在 **父組件** 的 **屬性** 給予一個值，當作要傳送到子組件的資料。

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

### 2️⃣ 子層接收數據
在 **子組件** 可以宣告 `props` 來接收來自 **父組件** 的數據。

- 🔴「**不驗證傳遞數據**」方式指收: (不推薦)

  `props` 使用「陣列」方式，來宣告傳遞數據的名稱。

  ```vue {5}
  <!-- 子組件 -->
  <script>
  export default {
    name: "HelloWorld",
    props: ["msg", "data"],
  };
  </script>
  ```

- 🟡「**指定數據型別**」方式接收: (不推薦)

  `props` 使用「物件」方式，來驗證宣告的數據

  ```vue {5,6}
  <script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
      data: Number
    },
  };
  </script>
  ```

  :::details 所有型別
  ```js
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor
  }
  ```
  :::

- 🟢 「**指定必須且型別**」方式接收: (推薦)

  **數據**使用「物件」來指定**型別**(type)、指定 **必填項目**(required) 無填入會報錯。

  ```vue {5-8}
  <script>
  export default {
    name: "HelloWorld",
    props: {
      msg: {
        type: String,
        required: true
      }
    },
  };
  </script>
  ```

:::danger 注意
`props` 的接收驗証，是在`組件`被 `created` 的時候! 所以此時 **父組件** 的 `data / computed` 都無法在驗證中使用!
:::

### 無數值的傳遞數據為 `true`
當數據為 `boolean`，只要數據名稱在 `屬性` 上，就為 `true`。

```html
// Including the prop with no value will imply `true`.
<blog-post is-published></blog-post>
```

## $emit 傳父


## Reference
- [VueJS Props](https://vuejs.org/guide/components/props.html#props)