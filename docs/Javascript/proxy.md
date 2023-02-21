# Proxy 物件代理

## 原理

`Proxy` 可以為物件對象創造一個「代理」，可以藉由這個「代理」來進行`修改`、`攔截` ..等，基本的操作。
**不會對物件直接進行操作，而是透過「代理」。**

![](/Javascript/img/JavaScript-Proxy.png)
[圖片出處](https://www.javascripttutorial.net/es6/javascript-proxy/)

## 說明

可以透過 `Proxy` 建立新的物件或者為已存在的物件做「代理」。若是已存在的物件，則會對 `getter`、`setter`重新做定義；這個「代理」方法，常使用在 `資料驗證`、`攔截`、`格式調整`、`淨化輸入`。

### 語法

#### new Proxy(`target`, `handler`)

- `target` 想要代理的目標對象
- `handler` 操作方法

## 操作

## Reference

- [MDN Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [JavaScript Proxy](https://www.javascripttutorial.net/es6/javascript-proxy/)
- [[JS] JavaScript 代理（Proxy）](https://pjchender.dev/javascript/js-proxy/)
