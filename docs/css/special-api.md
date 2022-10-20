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
.writing-mode-vertical {
  writing-mode: vertical-lr;
}
```
- `vertical-lr` 垂直靠左
- `vertical-rl` 垂直靠右


## Reference
- [Top 10 CSS One Liners That Will Blow Your Mind (VIDEO)](https://www.youtube.com/watch?v=Xc6G3oV24yE)