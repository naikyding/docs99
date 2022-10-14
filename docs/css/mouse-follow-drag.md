# 滑鼠任意拖洩元素停留效果

## 說明

純粹使用 `css` 達成的效果。滑鼠隨意拖洩 `太空人` ，並且停留在任意的地方。

<style>
  .outside {
    background: #F0F8FF; 
    border-radius: 8px;
    height: 300px;
    background: no-repeat center/cover url('https://freepngimg.com/download/space/5-2-space-png-pic.png');
    overflow: hidden;
  }

  /* 地球 */
  .outside::before {
    content: '';
    position: absolute;
    top: -40px;
    left: -40px;
    width: 200px;
    height: 200px;
    background: no-repeat center/cover url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1024px-Earth_Western_Hemisphere_transparent_background.png');
  }

  .box {
    position: absolute;
    /* border: 1px solid red; */
    border-radius: 8px;
    position: inline-block;
  }

  .resize {
    position: relative;
    resize: both;
    min-width: 50px;
    min-height: 50px;
    max-width: 650px;
    max-height: 250px;
    width: 300px;
    height: 150px;
    /* background: blue; */
    opacity: .7;
    z-index: 1;
  }

  .resize::-webkit-resizer {
    background:no-repeat center/cover url(http://cdn.onlinewebfonts.com/svg/img_316948.png);
  } 

  .overflow-scroll {
    overflow: scroll;
  }

  .p-relative {
    position: relative;
  }

  /* 太空人 */
  .item {
    position: absolute;
    bottom: -46px;
    right: -35px;
    width: 100px;
    height: 100px;
    /* border: 1px solid green; */
    background: no-repeat center/cover url('https://i.pinimg.com/originals/a0/26/1b/a0261b885cfba5a65c675c33327acf5a.png');
    animation-name: float;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 3s;
    animation-timing-function: linear;
  }

  /* 動畫 */
  @keyframes float {
    from {
      transform: translateY(-5px);
    }
    to {
      transform: translateY(5px);
    }
  }
</style>

<div class="outside p-relative">
  <div class="box">
    <div class="resize overflow-scroll"></div>
    <div class="item"></div>
  </div>
</div>

:::tip
如果可以使用 `css` 達到的效果，就不使用 `Javascript`，這樣是對效能提升的方法之一。
:::

## 主要屬性

是使用 `css` 的 [resize](https://developer.mozilla.org/en-US/docs/Web/CSS/resize#using_resize_with_arbitrary_elements) 屬性「可調整元素尺吋」的特性，將拖洩效果元素附著在容器指定位置。

### 一般 `resize` 樣式

`<textarea />` 元素不用加上任何屬性，就自帶調整的效果。

<textarea />

### 任意元素顯示 `resize` 樣式

要達到調整效果，除了 `resize: both`，還必須加上 `overflow: scroll;` 才會顯示。

```css
div {
  resize: both;
  overflow: scroll;
}
```

<div style="border: 1px solid lightblue; display: inline-block; width: 190px; height: 30px; border-radius: 8px; resize: both; overflow: scroll;" />

## 操作

透過「調整尺吋元素」同時更改其父層尺吋，而「太空人」吸附在父層的特定位置。

<div class="outside p-relative">
  <div class="box">
    <div class="resize overflow-scroll"></div>
    <div class="item"></div>
  </div>
</div>

:::details html

```html
<div class="outside p-relative">
  <div class="box">
    <div class="resize overflow-scroll"></div>
    <div class="item"></div>
  </div>
</div>
```

- `.outside` 背景銀河底圖
- `.resize` 實際調整尺吋的元素
- `.box` 調整尺吋的父層
- `.item` 太空人

:::

:::details css

```css
.outside {
  background: #f0f8ff;
  border-radius: 8px;
  height: 300px;
  background: no-repeat center/cover
    url('https://freepngimg.com/download/space/5-2-space-png-pic.png');
  overflow: hidden;
}

/* 地球 */
.outside::before {
  content: '';
  position: absolute;
  top: -40px;
  left: -40px;
  width: 200px;
  height: 200px;
  background: no-repeat center/cover
    url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1024px-Earth_Western_Hemisphere_transparent_background.png');
}

/* 可調整尺吋元素的「父層」 */
.box {
  position: absolute;
  /* border: 1px solid red; */
  border-radius: 8px;
  position: inline-block;
}

/* 可調整尺吋元素 */
.resize {
  position: relative;
  resize: both;
  min-width: 50px;
  min-height: 50px;
  width: 300px;
  height: 150px;
  /* background: blue; */
  opacity: 0.7;
  z-index: 1;
}

/* 客製作調整尺吋顯示樣子 */
.resize::-webkit-resizer {
  background: no-repeat center/cover
    url(http://cdn.onlinewebfonts.com/svg/img_316948.png);
}

.overflow-scroll {
  overflow: scroll;
}

.p-relative {
  position: relative;
}

/* 太空人 */
.item {
  position: absolute;
  bottom: -46px;
  right: -35px;
  width: 100px;
  height: 100px;
  /* border: 1px solid green; */
  background: no-repeat center/cover
    url('https://i.pinimg.com/originals/a0/26/1b/a0261b885cfba5a65c675c33327acf5a.png');
  animation-name: float;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 3s;
  animation-timing-function: linear;
}

/* 太空人的動畫 */
@keyframes float {
  from {
    transform: translateY(-5px);
  }
  to {
    transform: translateY(5px);
  }
}
```

:::

## Reference

- [超强的纯 CSS 鼠标点击拖拽效果 #207](https://github.com/chokcoco/iCSS/issues/207)
- [不可思议的纯 CSS 实现鼠标跟随](https://github.com/chokcoco/iCSS/issues/46)
- [resize @MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/resize#using_resize_with_arbitrary_elements)
