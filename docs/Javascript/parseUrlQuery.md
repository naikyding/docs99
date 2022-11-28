# 解析網址 query 參數 URLSearchParams

## 說明
- `URLSearchParams` 是一個實例方法，解析 `url` 中的查詢文字 `search` ( 問號之後的參數) 後，回傳一個實體方便後續的操作。
- `URLSearchParams.get()` 方法，可以針對這個「實體」來訪問 `參數` 內容的 `值`。

## 解析網址 query
```js {4}
const url = new URL('https://example.com?id=1111&agent_code=222')
url.search // ?id=1111&agent_code=222

const searchObject = new URLSearchParams(url.search) // location.search 一樣
searchObject // URLSearchParams {}
```

## 取得參數值
```js
searchObject.get('id') // 1111 
searchObject.get('agent_code') // 222
```

## Liff 狀態解析
`Liff` 狀態會經過不同方式的「轉址」，網址狀態會一直被改變 ([您需要了解有關新 LIFF URL 的所有資訊])。
有時 `query` 會被塞入到 `liff.state` 參數當中，不當的嵌套參數中，也可以使用這個方法來取得。


```js
getUrlSearchObj() {
  const locationSearch = location.search
  let liffId = null

  // query liff.state 參數是否有值
  const liffState = new URLSearchParams(locationSearch).get('liff.state')

  // 如果參數被塞入 liff.state=
  if (liffState) {
    // 再解析一次 query 文字 -> 取 liff_Id
    liffId = new URLSearchParams(liffState).get('liff_Id')
  // 如果沒有直接取得 liff_Id
  } else {
    liffId = new URLSearchParams(locationSearch).get('liff_Id')
  }

  return { liff_Id: liffId }
},
```

## Reference
[您需要了解有關新 LIFF URL 的所有資訊]: https://engineering.linecorp.com/zh-hant/blog/new-liff-url-infomation/
- [MDN URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams)
- [MDN URLSearchParams.get()](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get)