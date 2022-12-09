# GSAP scrollTrigger 滾動觸發器

## 說明
`滾動動作` 可以指定「觸發元素」在某些動作時，「指定元素」執行播放動畫或播放方式。

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP-scrollTrigger 滾動觸發" src="https://codepen.io/naiky/embed/GRGebKX" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/naiky/pen/GRGebKX">
  GSAP-scrollTrigger 滾動觸發</a> by Naiky (<a href="https://codepen.io/naiky">@naiky</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**一般來說** 

當動畫設置後，就會直接播放，這不符合大部分需求。
```js
gsap.to('.logo', {
	druation: 3,
	xPercent: 200,
})
```

可以使用 `scrollTrigger` 來指定什麼時候才播放這個動畫，像是這樣:
```js {4}
gsap.to('.logo', {
	duration: 3,
	xPercent: 200,
	scrollTrigger: '.logo-play' // 當 '.logo-play' 區塊進入畫面才播放
})
```

## 安裝
一般 GSAP 是不包含 `scrollTrigger` 這個套件，在使用前必須要先引入或安裝。

-  CDN
	```html
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
	```
- npm
	```js
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);
	```

## 基本操作
如同設置 [GSAP Tween 補間動畫] 方法一樣，只是增加了 `scrollTrigger` 屬性，將其設置上一個「觸發元素」。
當「觸發元素」 `進入` 畫面時，就會播放這個「補間動畫」。

```js {2}
gsap.to('.play-element', {
	scrollTrigger: '.target-element',
	duration: 3,
	xPercent: 1000,
	rotation: 360,
})
```

## 進階操作
如同設置 [GSAP Tween 補間動畫] 方法一樣，增加了 `scrollTrigger` 屬性，改為 `物件` 可以讓我們客製化更多設置。

```js {2-5}
gsap.to('.play-element', {
	scrollTrigger: {
		trigger: '.target-element',
		toggleActions: 'play pause resume reverse'
	},
	duration: 3,
	xPercent: 1000,
	rotation: 360,
})
```

- `trigger` 觸發元素
- `toggleActions` 觸發執行動作。 `'向下進入執行 向下離開執行 向上進入執行 向上離開執行'`
	可以設置的動作:
	|動作| 說明|
	|-|-|
	| `play` | 播放 |
	| `pause` | 暫停 |
	| `resume` | 恢復動作 |
	| `reverse` | 倒轉播放 |
	| `restart` | 重新開始播放 |
	| `reset` | 重置 |
	| `complete` | 到完成位置 |
	| `none` | 無動作 |

## 依滾動播放反轉
如同設置 [GSAP Tween 補間動畫] 方法一樣，增加了 `scrollTrigger` 屬性，改為 `物件` 其中新增 `scrub` 可以讓我們依滾動播放。


```js {4}
gsap.to('.play-element', {
	scrollTrigger: {
		trigger: '.target-element',
		scrub: true,  // 依滾動 播放/倒帶 (druation triggerActions 將無效)
  },
	xPercent: 1000,
	rotation: 360
})
```

:::tip 提醒
`scrub: true` 開啟，就會依滾動來播放，而 `druation` 與 `toggleActions` 就沒有作用了。
:::

## Reference
[GSAP Tween 補間動畫]: /Javascript/gsap-tween
- [GSAP ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)