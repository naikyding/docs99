# Slots 插槽

## 說明
「父組件」不只能傳送資料 (`props`) 給「子組件」，也可以將「渲染內容」傳送過去，讓 「子組件」 透過 `<slot />` 在自已模板中渲染這個傳送的「渲染內容」。

![](/Vue/img/slots.png)
[圖片出處](https://vuejs.org/guide/components/slots.html#named-slots)

在組件中設置的 `<slot />` 會提供了一個插槽，會為「父組件」將來傳送的「渲染內容」預留插入的位置。

## 基本 slot 操作

**1️⃣ 子組件 =>** 設置 `<slot />` 插槽
```html {4}
<template>
  <button>
    <!-- 預留插槽 -->
    <slot />
  </button>
</template>
```

**2️⃣ 父組件 =>** 傳送「元件」到「子組件」
```html{3}
<SlotChirldren>
  <!-- 替換 slot -->
  Click Me!
</SlotChirldren>
```

**3️⃣ 渲染後**
```html
<button>
  Click Me!
</button>
```

:::tip
- 若「子組件」無設置 `slot` ，「父組件」傳送「渲染內容」，直接被丟棄。
- 若「子組件」有多個 **不具名** `slot`，「父組件」傳送 **單一渲染內容** (不具名)，會同時顯示在多個 **不具名** 插槽。
- 若「父組件」有多個 `不具名` 內容傳送，會被 **合拼** **渲染到子組件** `slot`。
:::

## 渲染作用域
「子組件」 僅負責 **組件外層** 的編譯，而 `slot` 的內容是由提供傳送的「父組件」負責編譯，所以 `slot` 的「渲染內容」，是可以訪問 「父組件」的數據。

:::details Demo
**子組件**
```html {2}
<button class="submit-btn">
  <slot />
</button>
```

**父組件**
```html{2-4}
<SlotChirldren>
  <span style="color: red">
    {{ childrenBtnContent }}
  </span>
</SlotChirldren>
```
　
```js {3}
export default {
  data: () => ({
    childrenBtnContent: 'Click Me!'
  })
}
```

**渲染後**
```html
<button class="submit-btn">
  <span style="color: red;">Click Me!</span>
</button>
```
:::

## 默認內容
當在 `slot` 設置默認內容，若「父組件」無傳入「渲染內容」，就會顯示「默認內容」。

:::tip
常使用在無資料顯示，當沒有傳入資料時，顯示「默認」的設置內容。
:::

### 設置默認內容
**子組件**
```html {2}
<button class="submit-btn">
  <slot>Disable</slot>
</button>
```

### 「父組件」無傳入 `slot` 內容
```js
<SlotChirldren />
```

渲染後，顯示默認內容

```html
<button class="submit-btn">
  Disable
</button>
```

### 「父組件」傳入 `slot` 內容
```js
<SlotChirldren>
  Click Me!
</SlotChirldren>
```

渲染後

```html
<button class="submit-btn">
  Click Me!
</button>
```

## 具名 slot 操作
當「子組件」有多個 `slot` 插槽時，具名的插槽就會非常有用，它可以指定插入的位置。
![](/Vue/img/named-slots.png)
[圖片出處](https://vuejs.org/guide/components/slots.html#named-slots)

**子組件**
```html {7,11,16,21}
<template>
  <div>
    <h5>Chirldren component</h5>
    <header>
      <span>Header: </span>
      <!-- 具名插槽 -->
      <slot name="header" />
    </header>

    <button class="submit-btn">
      <slot> disable!</slot>
    </button>

    <main>
      Main:
      <slot name="main" />
    </main>

    <footer>
      <!-- 具名插槽 -->
      <slot name="footer" />
    </footer>
  </div>
</template>
```

### 父組件傳送方式
- 1️⃣ **template 方式** `v-slot:插槽名稱` / `#插槽名稱`
  ```html {2-4,6-8}
  <SlotChirldren>
    <template v-slot:header> <!-- 傳送插槽 name="header" -->
      由父層傳送 header 內容
    </template>

    <template #footer>       <!-- 傳送插槽 name="footer" -->
      由父層傳送 footer 內容
    </template>

    <h3 slot="main">父層傳送 Main 內容!</h3>

    Click Me!
  </SlotChirldren>
  ```
  :::warning
  這種寫法，必須是 `<template />` 標籤。
  :::

- 2️⃣ **任意標籤方式** `<tag slot="插槽名稱">渲染內容</tag>`
  ```html {2}
  <SlotChirldren>
    <h3 slot="main">父層傳送 Main 內容!</h3>
  </SlotChirldren>
  ```
**渲染後**
```html {6,11,16,21}
<div>
  <h5>Chirldren component</h5>
  <header>
    <span>Header: </span>
    <!-- 具名插槽 -->
    由父層傳送 header 內容
  </header>

  <button class="submit-btn">
    <!-- 不具名插槽 -->
    Click Me!
  </button>

  <main>
    Main:
    <h3>父層傳送 Main 內容!</h3>
  </main>

  <footer>
    <!-- 具名插槽 -->
    由父層傳送 footer 內容
  </footer>
</div>
```

## 動態具名 slot 插槽
- **template 方式** `v-slot:[動態參數]` (簡寫 `#[dynamicSlotName]`)
- **任意標籤方式** `:slot="動態參數"`

:::details 子組件
```html {3-6}
<template>
  <div>
    <div>
      Dynamic:
      <slot name="dynamic" />
    </div>
  </div>
</template>
```
:::

**父組件**
```html {2-4,7-9,13}
<SlotChirldren>
  <template v-slot:[dynamicSlotName] style="color: lightblue">
    <span style="color: lightblue">Parent Pass to Dynamic Content</span>
  </template>

  <!-- 簡寫 -->
  <template #[dynamicSlotName] style="color: lightblue">
    <span style="color: lightblue">Parent Pass to Dynamic Content</span>
  </template>

  <!-- 非 template 寫法 -->
  <span 
    :slot="dynamicSlotName" 
    style="color: lightblue"
  >
    Parent Pass to Dynamic Content
  </span>
</SlotChirldren>
```

## slot 資料向上傳遞 (Scoped Slots)
「**渲染內容**」只可以訪問到「父組件」的數據 ( [渲染作用域](#渲染作用域) )，但若需要取得「子組件」數據的話，可以這樣做:
- 「子組件」設置動態參數傳遞屬性 `<slot :傳遞到父層參數名稱="子組件資料" />`
- 「父組件」設置 `v-slot="父組件自定義參數名"` 來接收數據，「子組件」的 `傳遞到父層參數名稱` 會在 `父組件自定義參數名` 之下。

![](/Vue/img/scoped-slots.svg)
[圖片出處](https://vuejs.org/guide/components/slots.html#named-slots)

### 基本範例
**子組件**
```html {4}
<template>
  <div>
    <h1>Slot Scope</h1>
    <slot :num="123" text="slot" />
  </div>
</template>
```
**父組件**
```html {1-4,7-10}
<SlotScope v-slot="slotData">
  {{ slotData.text }} {{ slotData.num }}
   <!-- slot 123 -->
</SlotScope>

<!-- 解構寫法 -->
<SlotScope v-slot="{ text, num }">
  {{ text + num }}
  <!-- slot123 -->
</SlotScope>
```
:::warning 注意
`<SlotScope v-slot="slotData">` 這個方法只適用在沒有「具名」的 `slot` 傳參。

只要內容有 **「具名」** 渲染內容，就會無法被編譯，這是為了避免默認插槽傳送參數與「具名」插槽參數衝突。
```html {4}
<!-- ⛔⛔⛔ 無法編譯 ⛔⛔⛔ -->
<SlotScope v-slot="{ num, text }">
  {{ text + num }}
  <template #header>Header: </template>
</SlotScope>
```
:::

### 具名 slot 傳參方法
避免「默認」與「具名」的參數資料衝突，建議不直接寫 `v-slot` 在子組件上，而是直接寫在「渲染內容」上。

**子組件**
```html {3-4}
<div>
  <h1>Slot Scope</h1>
  <slot :num="123" text="slot" />
  <slot name="header" headerProps="header 傳送的內容" />
</div>
```

**父組件**
- 使用 `v-slot="{ 默認 slot 參數名稱 }"` 接「默認」 `slot` 傳送的資料。
- 使用 `#具名插槽名稱="{ 具名 slot 參數名稱 }"` 接「具名」 `slot` 傳送的資料。

```html {3-4}
<!-- es6 解構 -->
<SlotScope>
  <template v-slot="{ num, text }">{{ text + num }}</template>
  <template #header="{ headerProps }">Header: {{ headerProps }}</template>
</SlotScope>
```

## Reference
- [Vue js](https://vuejs.org/guide/components/slots.html#slot-content-and-outlet)
- [NIKEDIN](https://naikyding.github.io/book/vue/slot.html#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)
- 