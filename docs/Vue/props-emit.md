# 父子組件資料傳遞 props、$emit
![](https://i.imgur.com/tMExXxt.png)

## props 傳子數據
當 **父組件** 有數據想傳送到 **子組件** 可以使用這個方法。

### 1️⃣ 父層傳遞設置
可以在 **父組件** 的 **屬性** 給予一個值，當作要傳送到子組件的資料。

**父層組件**
```html
<!-- 靜態 -->
<componentA parent-data="這是我要傳送到組件的文字" />

<!-- 動態 -->
<componentA :parent-data="userData" />
```

:::danger 注意
在 屬性上的 `props` 名稱命名規則，須使用 `kebab-case` (烤肉串)，不可以使用 `camelCase` (駱峰)。
:::

### 2️⃣ 子層接收數據
在 **子組件** 可以宣告 `props` 來接收來自 **父組件** 的數據，指定數據名稱必須要使用 `camelCase` (駱峰)來設置接收。

- 🔴「**不驗證傳遞數據**」方式指收: (不推薦)

  `props` 使用「陣列」方式，來宣告傳遞數據的名稱。

  ```vue {5}
  <!-- 子組件 -->
  <script>
  export default {
    name: "HelloWorld",
    props: ["parentData", "data"],
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
      parentData: String,
      data: Number
    },
  };
  </script>
  ```


### 3️⃣ `props` 驗證設置 (推薦方式)
這是接收 `props` 更嚴謹的方式，當數據 `props` 不符合指定「驗證」方式就會報錯，也是 **比較推薦** 的接收方式。
- **`type` 型別:**
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

- **`required` 必傳 (父組件必須傳值):** `Boolean` 
- **`default` 默認值**: `Function` `String` `Number`

```vue {5-11}
<script>
export default {
  name: "HelloWorld",
  props: {
    parentData: {
      type: String,
      required: true,
      default() {
        return 'Default function'
      }
    }
  },
};
</script>
```
:::details 詳細範例
```vue
<script>
  export default {
    props: {
      // Basic type check
      //  (`null` and `undefined` values will allow any type)
      propA: Number,
      // Multiple possible types
      propB: [String, Number],
      // Required string
      propC: {
        type: String,
        required: true
      },
      // Number with a default value
      propD: {
        type: Number,
        default: 100
      },
      // Object with a default value
      propE: {
        type: Object,
        // Object or array defaults must be returned from
        // a factory function. The function receives the raw
        // props received by the component as the argument.
        default(rawProps) {
          return { message: 'hello' }
        }
      },
      // Custom validator function
      propF: {
        validator(value) {
          // The value must match one of these strings
          return ['success', 'warning', 'danger'].includes(value)
        }
      },
      // Function with a default value
      propG: {
        type: Function,
        // Unlike object or array default, this is not a factory function - this is a function to serve as a default value
        default() {
          return 'Default function'
        }
      }
    }
  }
</script>
```
:::

:::danger 注意
`props` 的接收驗証，是在`組件`被 `created` 的時候! 所以此時 **父組件** 的 `data / computed` 都無法在驗證中使用!
:::

:::warning 注意
### 無數值的傳遞數據為 `true`
當數據為 `boolean`，只要數據名稱在 `屬性` 上，就為 `true`。

```html
// Including the prop with no value will imply `true`.
<blog-post is-published></blog-post>
```
:::
## 單向資料流
> 不可直接更改 **子組件** 數據資料。

**子組件** 接收的數據都是來自 **父組件** 傳遞的，當 **父組件** 數據更改時 **子組件** 就會同步更新數據，**子組件** 不應該可以直接改動 **父組件** 數據狀態，這是為了避免資料流錯亂、難以被理解。
若有 `props` 數據更新需求，應該由 [父組件操作](#emit-傳父事件)

```vue {4-7}
<script>
export default {
  props: ['foo'],
  created() {
      // ❌ warning, props are readonly!
      this.foo = 'bar'
  }
}
<script>
```

## $emit 傳父事件

### 1️⃣ 子層客製事件
> `$emit('客製事件名稱', 參數)`

**子組件** 可以使用 `$emit` 來發射一個「客製事件」給 **父組件**。

**客製事件設置:**
```js {4-6}
// 子組件
export default {
  methods: {
    submit() {
      this.$emit('someEvent', newData)
    }
  }
}
```
**也可以直接寫在 `click` 上**
```html
<!-- 子組件 -->
<button @click="$emit('someEvent', newValue)">UPDATE DATE</button>
```

:::warning 注意
客製事件名稱可以自定義，但必須為 `camelCase` 駱峰。
:::

### 2️⃣ 父層監聽客製事件
> `@子層-傳送客製事件="父層執行事件"`

**父組件** 可以使用 `v-on`(`@`) 監聽由 **子組件** 傳送的客製事件，在 `methods` 設置指定「客製事件」(`some-event`) 要執行的事件 (`update`)。

```vue {3,12-14}
// 父組件
<template>
  <MyComponent @some-event="update" />
</template>

<script>
export default {
  data: () => ({
    count: 1
  }),
  methods: {
    update(newValue) {
      this.count = newValue
    }
  }
}
</script>
```
**也可以直接寫在 `v-on` 上**:
```vue {3}
// 父組件
<template>
  <MyComponent @some-event="(newValue) => count = newValue" />
</template>
```

:::warning 注意
監聽客製事件名稱，必須為 `kebab-case` (烤肉串)。
:::
## Reference
- [VueJS Props](https://vuejs.org/guide/components/props.html#props)
- [VueJS Event](https://vuejs.org/guide/components/events.html)