# Math 數學函式

## Math.pow() 求**次方(幂)值**
`Math.pow()` 函式會回傳 `base` 的 `exponent`  次方值。

### 語法:
> Math.pow( base , exponent )
- `base` : 基數
- `exponent` : 要乘上 `base` 幾次的指數。

```js
Math.pow(2, 3) // 8 (2 的 3 次方，回傳 8)
```

**`**` 求幂** (ES7)

這是新的方法，可以比較簡潔的使用。

```js
2 ** 3 // 8 (與 Math.pow(2, 3) 一樣)
```

## Reference
- [求幂 (**) MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Math.pow() MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)