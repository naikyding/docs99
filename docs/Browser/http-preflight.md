# Preflight 請求預檢

## 說明

`cors` 時「請求」在某些情況下，基於安全性「瀏覽器」會在實際「請求」前，預先以 `method: OPTIONS` 先發送一個「請求」來判斷安全性。
確認 **安全** 後，才會再發送實際的「請求」，這就是所謂的 」`preflight` 預檢」。

- `preflight` 會是以 `method` `OPTIONS` 方法發送

## Reference

- [为什么会有 OPTIONS 请求](https://cloud.tencent.com/developer/article/1046663)
- [MDN 預檢](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS#%E9%A0%90%E6%AA%A2%E8%AB%8B%E6%B1%82)
