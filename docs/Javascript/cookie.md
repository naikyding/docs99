# Cookie 操作

## 取得所有 cookie 資料 (此位址)

```js
let allCookieData = document.cookie
// '_ga=GA1.2.1047131248.1639753030; lux_uid=164018249336813517; _gid=GA1.2.473315065.1640182496'
```

`allCookieData` 是一個 `字串`，由 `key=value;` 所組成。

## 新增一個 cookie

使用一個 **字串** `key=value` 的方式寫入 `cookie`

```js
document.cookie = 'name=naiky'
```

### 寫入資料 (option)

## Reference

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
