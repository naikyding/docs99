# Slots 插槽

## 說明
「父組件」不只能 `props` 傳送資料給「子組件」，也可以透過 `slot` 將 「元件」 傳送過去，讓「子組件」在自已模板中渲染這個傳送的 「元件」。

![](/Vue/img/slots.png)
[圖片出處](https://vuejs.org/guide/components/slots.html#named-slots)

在組件中設置的 `<slot />` 會提供了一個插槽，會為「父組件」將來傳送的 `component` 預留插入的位置。

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
- 若「子組件」無設置 `slot` ，「父組件」傳送內容，直接被丟棄。
- 若「子組件」有多個 **不具名** `slot`，「父組件」傳送 **單一** 內容 (不具名) 會同時顯示在多個 **不具名** 插槽。
- 若「父組件」有多個 `不具名` 內容傳送，會被 **合拼** **傳送至子組件**。
:::

## 渲染作用域
「子組件」 僅負責 **組件外層** 的編譯，而 `slot` 的內容是由提供傳送的「父組件」負責編譯，所以 `slot` 的內容，是可以訪問 「父組件」的數據。

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
當在 `slot` 設置默認內容，若「父組件」無傳入內容，就會顯示默認內容。

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
- 1️⃣ `template` 標準寫法與簡寫
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

- 2️⃣ 其它 `tag` 寫法
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
在 `template` 方法下，使用 `v-slot:[動態參數]`，若為其它 `tag` 方法，則 `:slot="動態參數"`。

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
  <template #[dynamicSlotName] style="color: lightblue">
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
[渲染作用域](#渲染作用域) 提到 **插槽的內容** 只可以訪問到「父組件」的數據，但若需要「子組件」數據的話，可以在「子組件」設置動態參數傳遞屬性 `:參數名稱="資料"`，「父組件」設置 `v-slot="參數名稱"` 來接收與操作數據。

![](/Vue/img/scoped-slots.svg)
[圖片出處](https://vuejs.org/guide/components/slots.html#named-slots)


## Reference
- [Vue js](https://vuejs.org/guide/components/slots.html#slot-content-and-outlet)
- [NIKEDIN](https://naikyding.github.io/book/vue/slot.html#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)
- 