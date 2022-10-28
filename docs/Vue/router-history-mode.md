# 路由 history 模式設置

:::tip 提醒
以下是以 Vue Router v4.x 以例說明。
:::

## 說明
路由的創建可以使用 `history` 來決定路由的模式，一般 spa 常見的 `hash` 模式，就會帶有 `#` 比較醜，為求美觀比較正式的網站大多會使用 `history` 模式 (在 Router v4 叫 `HTML5` 模式)。

## HTML5 模式
路由網址不會帶有 `#` 符號，但需要透過「後端」或「設備」人員在服務端配置，不然 `重刷頁面`、`回上一頁` 就會發生「找不到頁面」的情況。

:::tip 說明
一般 SPA 網站會利用網址 `hash` 來做定錨 (`#`)，讓網站知道首頁的位置。
:::

### 前端設置
以下是 Vue Router v4.x 以例說明，

```js {3,7}
import { 
  createRouter,
  createWebHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})
```
### 服務端設置
在 SPA 網站中，是由 `Javascript` 來變化頁面的，沒有真正的 `服務端` 來分配路由，指定 `https://www.example.com/id/123` 「重刷」 or 「上一頁」會發生 `404` 找不到頁面。

在網頁服務器 Nginx 配置 [路由指向特定檔案](/Browser/nginx-operate.html#路由指向客製化檔案)，當 SPA 重刷找不到 「首頁」 時，會回過頭來找 url 的根源 `index.html` 來匹配產生頁面。

```nginx {8-11}
http {
  include mime.types;

  server {
    listen 80;
    server_name example.com;
    root /xxx/yyy/zzz;

    location / {
      try_files $uri $uri/ /index.html;
    }
  }
}
```
## Reference
- [Vue Router Different History modes](https://router.vuejs.org/guide/essentials/history-mode.html)