# 打包壓縮檔 gzip

## 說明

可以壓縮打包的檔案，使得 `客戶端` 可以有效減少取得文件資源的傳輸速度，以達到優化網頁載入速度。
原理 👉 [HTTP 請求壓縮]

## Vite 操作

在 `vite` 打包完成，就會顯示 `/ gzip: xx.xx KiB` 告訴你，如果使用 `GZIP` 打包可以優化的檔案大小。
![](/Vue/img/vite-build.png)

### 套件設置

在 `vite` 工具中，可以使用 [vite-plugin-compression 套件] 來壓縮打包的檔案為 `gzip`。

**install**

```bash
npm i vite-plugin-compression -D
```

**設置 `vite.config.js`**

```js {2,7}
// compression 壓縮套件
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    // 預設壓縮方式
    viteCompression(),
    // 大於 1mb 的文件進行壓縮
    // viteCompression({
    //   threshold: 1024000,
    // }),
  ],
})
```

**壓縮報告**

會自動將壓縮檔案加入 `.gz`，同時會顯示出壓縮前後的結果。(壓縮後容量為 `gzip: xxx KiB`)

![](/Vue/img/vite-build-gzip.png)

:::warning 注意
後續要再請 devops 人員設置 nginx gzip 配置。
:::

## Reference

[http 請求壓縮]: /Browser/http-compression
[vite-plugin-compression 套件]: https://github.com/vbenjs/vite-plugin-compression/tree/main#readme

- [HTTP 請求壓縮]
- [vite-plugin-compression 套件]
