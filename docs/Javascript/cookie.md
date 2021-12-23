# Cookie 操作

## 取得所有 cookie 資料 (當下位址)

```js
let allCookieData = document.cookie
// '_ga=GA1.2.1047131248.1639753030; lux_uid=164018249336813517; _gid=GA1.2.473315065.1640182496'
```

`allCookieData` 是一個 `字串`，由 `key=value;` 所組成。

## 新增 (更新) 一個 cookie

使用一個 **字串** `key=value` 的方式寫入 `cookie`

```js
document.cookie = 'name=naiky'
```

**更新 `cookie`**
當你再次設置，就會更新這個 `key` 的 `value`

```js
document.cookie = 'name=niki'
```

### 設置資料的選項設置

- **網域 `; domain=google.com`**

  能夠讀取到此 `cookie` 的網域 (含子網域) `google.com` 與 `mail.google.com` 都可以讀到此 `cookie`。

- **路徑 `; path=/`**

  能夠讀取到此 `cookie` 網域下的路徑，`/` 表示整個網站都可以讀到 (這也是預設值)。

- **有效時間 (`Expires/Max-age`)** 默認關閉視窗後移除

  - **指定時間`; expires=date-in-GMTString-format`**

    設置指定的存活時效，使用 [toUTCString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)格式當「值」

    ```js
    const tomorrow = new Date('2021-12-24')
    document.cookie = `name=nike; expires=${tomorrow.toUTCString()}`
    ```

    :::warning 注意

    [.toGMTString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toGMTString) 已被棄用。
    :::

  - **以秒計 `; max-age=max-in-seconds`**

    `cookie` 存活的時間 (以秒為單位) `; max-age=86400` 就是一天後失效。

- **https `secure`**

  設了 `secure=true` 只有透過 `https` 存取這個網站才能存取這個 `cookie`；透過 `http` 存取這個網站會看不到這個 `cookie`。

- **http `http only`**

  `http=true` 無法使用 `javascript` 來讀取到 `cookie` 的資料，只能透過 **服務端** 訪問。

## Reference

- [什麼是 cookie](/browser/cookie)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [JavaScript Cookie
  ](https://www.fooish.com/javascript/cookie.html)
