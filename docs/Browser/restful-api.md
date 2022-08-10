# Restful API 路由語義化設計風格

## 說明

以 http method 為主的設計方式 (CRUD 對應)，是一種路由語義化的設計風格，可以透過 `url`了解請求資源的「動作」與「資源」。

![](/Browser/img/restful-api-flow.png)
[圖片出處](https://restapilinks.com/manipulation-of-resources-through-representations/)

```bash
瀏覽全部資料：GET    資源名稱     # GET    https://www.example.com/todos
瀏覽特定資料：GET    資源名稱/:id # GET    https://www.example.com/todos/1
新增一筆資料：POST   資源名稱.    # POST   https://www.example.com/todos
修改特定資料：PUT    資源名稱/:id # PUT    https://www.example.com/todos/1
刪除特定資料：DELETE 資源名稱/:id # DELETE https://www.example.com/todos/1
```

### 動作

指的是 http 的 method

- **GET** 讀取資源
- **POST** 新增資源
- **PUT** 替換資源
- **DELETE** 刪除資源
- **PATCH** 更新資源部份內容

### 資源

指的是請求的 `url` 接口，相同的資源 `url` 必須是固定的。

```bash
https://www.example.com/post
https://www.example.com/post/:id
```

## 特性

- 唯一資源接口 `url`
    
    ```bash
    ❌
    GET     /api/post/item
    DELETE  /api/post/delete
    
    ✅
    GET     /api/post/:id
    DELETE  /api/post/:id
    ```
    
- 可以由 `url` 來知道資料的階層
- 語意化請求動作 `methods`
- 無狀態請求

## 缺點
- 請求數量驚人

## Reference

- [什么是REST](http://restful.p2hp.com/)

- [HTTP幂等性概念和应用 | 酷 壳 - CoolShell](https://coolshell.cn/articles/4787.html)

- [API 是什麼? RESTful API 又是什麼?](https://medium.com/itsems-frontend/api-%E6%98%AF%E4%BB%80%E9%BA%BC-restful-api-%E5%8F%88%E6%98%AF%E4%BB%80%E9%BA%BC-a001a85ab638)

- [什麼是REST? 認識 RESTful API 路由語義化設計風格｜ALPHA Camp Blog](https://tw.alphacamp.co/blog/rest-restful-api)

- [自學RESTful API - HackMD](https://hackmd.io/@monkenWu/Sk9Q5VoV4/https%3A%2F%2Fhackmd.io%2F%40gen6UjQISdy0QDN62cYPYQ%2FHJh9zOE7V?type=book)

- [進階 RESTful API 討論 - 科技新人](https://www.vnewin.com/day22-restful-api-advanced/)