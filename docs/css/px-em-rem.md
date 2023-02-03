# 字體尺吋單位 px、em、rem

:::tip 提示
一般瀏覽器預設字體尺吋是 `font-size: 16px`。
:::

## px 絕對單位

這是「絕對」的單位，定義多少就顯示多大，不會被任何層級影響。

<div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 16px">
  16px
  <div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 20px">
    20px
    <div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 24px">
      24px
      <div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 16px">
        16px
      </div>
    </div>
  </div>
</div>

## em 相對單位

以 `父層` 為基準的「倍數單位」，定義的 `em` 會隨著 `父層` 定義尺吋而改變。當巢狀結構到一定的雜複，難以判斷當前元素字體尺吋。

<div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 1em">
  1em (16px)
  <div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 1.2em">
    1.2em (19.2px)
    <div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 1em">
      1em (19.2px)
      <div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 1.2em">
        1.2em (23.04px)
      </div>
    </div>
  </div>
</div>

## rem 相對單位

以網頁基礎字體尺吋為基準的 「倍數單位」，所以定義都會指向 `html` 的 `font-size` 尺吋的倍數，不會被父層影響。

<div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 1rem">
  1rem (16px)
  <div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 1.2rem">
    1.2rem (19.2px)
    <div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 1rem">
      1rem (16px)
      <div style="border:1px solid #ddd; padding: 1rem; border-radius: 8px; font-size: 1.2rem">
      1.2rem (19.2px)
      </div>
    </div>
  </div>
</div>

:::tip 提示
是目前框架中常用的單位，只要修改 `html` 的 `font-size` 就可以一次性調整所有字體大小。
:::

## Reference

- [一次搞懂 CSS 字體單位：px、em、rem 和 %](https://www.oxxostudio.tw/articles/201809/css-font-size.html)
- [實際展示 EM 與 REM 的差異 | 六角學院](https://www.hexschool.com/2016/01/02/2016-08-08-em-vs-rem/)
- [TailwindCSS Font Size](https://tailwindcss.com/docs/font-size)
