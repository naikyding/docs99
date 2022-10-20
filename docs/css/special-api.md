# 特殊且實用的功能

## 垂直文字

<style>
#card {
  border-radius: 10px;
  border: 1px solid lightblue;
  background: white;
  padding: 2rem;
}
.text-black {
  color: black;
}
.card__title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.card__content {
  font-size: .5rem;
}
.writing-mode-vertical {
  writing-mode: vertical-lr;
}
.d-flex {
  display: flex;
}
.mr-1 {
  margin-right: 1rem;
}
</style>

<div class="d-flex">
  <div id="card" class="mr-1">
    <div class="card__title text-black">
    Default Text
    </div>
    <div class="card__content text-black">
      orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
    </div>
  </div>

  <div id="card" class="d-flex">
    <div class="card__title text-black writing-mode-vertical">
    Vertical Text
    </div>
    <div class="card__content text-black">
      orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
    </div>
  </div>
</div>

[writing-mode MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)

```css {2}
.vertical-text {
  writing-mode: vertical-lr;
}
```
- `vertical-lr` 垂直靠左
- `vertical-rl` 垂直靠右


## 鏡像圖片

<style>
  .transform-scale-x {
    transform: scaleX(-1);
  }
</style>

<div class="d-flex">
  <div class="mr-1">
    <img src="https://obs.line-scdn.net/0hKYln_JXOFHZRFwJZOXxrIWtBFxliewd1NSFFdRJ5SkF9IlonaXMJQHJAS08ocFMoOHBbGXUeD0cpLlYpP3IJ/w644" alt="scale-img">
  </div>
  <div>
    <img class="transform-scale-x" src="https://obs.line-scdn.net/0hKYln_JXOFHZRFwJZOXxrIWtBFxliewd1NSFFdRJ5SkF9IlonaXMJQHJAS08ocFMoOHBbGXUeD0cpLlYpP3IJ/w644" alt="scale-img">
  </div>
</div>

[transform MDN](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform)
```css {2}
img {
  transform: scaleX(-1);
}
```

## 滾動吸附 / 全頁滾動

<style>
.custom-container {
  position: relative;
  height: 400px;
  width: 100%;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y mandatory;
}
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  text-shadow: 0 0 0.5em #888;
  height: 100%;
  scroll-snap-align: start;
}
.section1 {
  background: lightblue;
  position: relative;
}
.section2 {
  background: lightpink;
}
.section3 {
  background: lightgreen;
}
.section4 {
  background: lightyellow;
}
.scroll {
  position: absolute;
  bottom:30px;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>

<div class="custom-container">
  <section id="section1" class="section section1">
    section1
    <div class="scroll">
      <a href="#section2">
        <img style="height: 50px;" src="https://www.expectingapp.eu/source/dist/images/scr.gif">
      </a>
    </div>
  </section>
  <section id="section2" class="section section2">
    section2
  </section>
  <section id="section3" class="section section3">
    section3
  </section>
  <section id="section4" class="section section4">
    section4
  </section>
</div>

### 1️⃣ 容器內滾動吸附方式 [scroll-snap-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-snap-type)

設置在父層
```css
.container {
  scroll-snap-type: x mandatory; /* 水平「強制吸附」 */
  scroll-snap-type: x proximity; /* 水平「靠近吸附」 */
  overflow: auto;                /* 必須 */

  scroll-behavior: smooth; /* 滾動平滑 */
}
```
### 2️⃣ 子層 對齊容器方式 [scroll-snap-align](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)
**滾動項目**
```css
.section {
  scroll-snap-align: start; /* 對齊在起始點 */
  scroll-snap-align: end;   /* 對齊在終點 */
  scroll-snap-align: center;/* 元素中間對齊 */
}
```

### 滾動模式 scroll-behavior
設置在容器上，在當滾動時執行。
```css
.container {
	scroll-behavior: smooth; // 滾動平滑
}
```

:::details Reference
- [fullPage scroll snapping. Create full screen pages fast and simple](https://alvarotrigo.com/fullPage/)

- [Snap Scroll with CSS | Full Page Scrolling Effects](https://codepen.io/joealva1957/pen/vPrKEP)

- [[JS] 整頁式滾動](https://medium.com/az-%E4%B8%8B%E7%AD%86%E8%A8%98/full-page-scroll-%E6%95%B4%E9%A0%81%E5%BC%8F%E6%BB%BE%E5%8B%95-d7a94eea7316)

- [大侠，请留步，要不过来了解下CSS Scroll Snap？ " 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2018/11/know-css-scroll-snap/)

- [【乾貨】使用 CSS Scroll Snap 優化滾動，提升使用者體驗！_前端小智 - MdEditor](https://www.gushiciku.cn/pl/grR1/zh-tw)
:::
## Reference
- [Top 10 CSS One Liners That Will Blow Your Mind (VIDEO)](https://www.youtube.com/watch?v=Xc6G3oV24yE)