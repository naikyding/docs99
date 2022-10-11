# Nginx 網頁伺服器
:::tip 簡單說
Nginx 就是提供 `靜態網頁` 相關服務的伺服器
:::

## 說明
Nginx 是著名的 [Web Server 網頁伺服器]，常見運用 [反向代理] 在伺服器上。

<img src="/Browser/img/nginx-flow.png" style="background: white; padding: 1rem; border-radius: 8px;">

[圖片出處](https://www.youtube.com/watch?v=7VAI73roXaY&t=129s)

使用者 -> 發出 `請求` -> Nginx 代理伺服器，接收 `請求` -> 轉發適合的 `服務端`

得到 `服務端` 響應後 -> Nginx 代理伺服器 -> 轉發響應給 使用者

### 常用功能
- 負載均衡功能
- 加密

:::tip
[反向代理 優點](/Browser/proxy#優點)
:::
## 安裝

### Mac
```bash
brew install nginx
```
### Linux
```bash
# 更新 apt-get 套件
sudo apt-get update 

# 安裝 nginx
sudo apt-get install nginx
```

## 操作指令
nginx 最主要的功能，都來個它的設置檔，在了解功能後，可以在設置檔上，加上想要的功能。

### 基本
**啟動 nginx**
```bash
nginx
```
**關閉 nginx**
```bash
nginx -s stop
```
**重新啟動 nginx**
```bash
nginx -s reload
```

:::details **nginx 啟動後可以在 `localhost:8080` 看到服務**
![](/Browser/img/nginx-serve-1.png)
:::

### 查詢文件位置
可以從查詢文件，知道 nginx 設置檔的文件位置
```bash
nginx -t
```
```bash
# 響應
<< nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok
<< nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful
```

### 編輯設置檔
**進入 nginx 目錄**
```bash
cd /usr/local/etc/nginx/
```

- vim 編輯

  ```bash
  vi nginx.conf
  ```

- vscode 編輯
  ```bash
  code .
  ```

:::details `nginx.conf` 預設內容
```bash {11-13}
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
  worker_connections  1024;
}


http {
  include       mime.types;
  default_type  application/octet-stream;

  #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
  #                  '$status $body_bytes_sent "$http_referer" '
  #                  '"$http_user_agent" "$http_x_forwarded_for"';

  #access_log  logs/access.log  main;

  sendfile        on;
  #tcp_nopush     on;

  #keepalive_timeout  0;
  keepalive_timeout  65;

  #gzip  on;

  server {
    listen       8080;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
      root   html;
      index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
  }

  # another virtual host using mix of IP-, name-, and port-based configuration
  #
  #server {
  #    listen       8000;
  #    listen       somename:8080;
  #    server_name  somename  alias  another.alias;

  #    location / {
  #        root   html;
  #        index  index.html index.htm;
  #    }
  #}


  # HTTPS server
  #
  #server {
  #    listen       443 ssl;
  #    server_name  localhost;

  #    ssl_certificate      cert.pem;
  #    ssl_certificate_key  cert.key;

  #    ssl_session_cache    shared:SSL:1m;
  #    ssl_session_timeout  5m;

  #    ssl_ciphers  HIGH:!aNULL:!MD5;
  #    ssl_prefer_server_ciphers  on;

  #    location / {
  #        root   html;
  #        index  index.html index.htm;
  #    }
  #}
  include servers/*;
```
:::

## 基本「靜態」網頁服務
1️⃣ 在指定位置，新增一個 `index.html` 檔案，當作是服務入口的頁面。
:::details Demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NGINX</title>
</head>
<body>
  <h1>NGINX</h1>
  <p>這是 nginx 的頁面</p>
</body>
</html>
```
:::

  2️⃣ 設置 nginx 服務 `nginx.conf`
```bash
http {
  # 啟動服務
  server {
    # localhost 要監聽的埠號
    listen 8080;
    # 監聽埠號提供的入口頁面 (根目錄)
    root /Users/1c00003/Desktop/nginx-demo; 
  }
}

events {}
```
3️⃣ 重啟 nginx 服務
```bash
nginx -s reload
```

4️⃣ **輸入 `localhost:8080` 看到服務**
![](/Browser/img/nginx-demo-serve.png)

## 檔案類型定義 http > types
承上 (啟動了「靜態」網頁服務)，在 `html` 引入了 `css` 樣式 `<link rel="stylesheet" href="./main.css">`，重新啟動 nginx 後，樣式還是沒有改變。

:::details main.css
```css
h1 {
  color: red;
}
```
:::

:::details html
```html {7}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./main.css">
  <title>NGINX</title>
</head>
<body>
  <h1>NGINX</h1>
  <p>這是 nginx 的頁面</p>
</body>
</html>
```
:::

:::details 樣式無改變 (圖)
![](/Browser/img/nginx-demo-serve.png)
:::

### 原因
如下圖所示 `main.css` 被辨別為 `text/plain` 文字檔，它應該被識別為 `text/css` 檔案，樣式才能正常被顯示。

:::details 被識別為 `text/plain` (圖)
![](/Browser/img/mime-types.png)
:::

### 解決方式 1️⃣
在 `http` 底下，設置 `types { ... }`，來指定識別的檔案類型，這樣樣式就可以恢復正常了。

:::details Demo
```bash {2-5}
http {
  types {
    text/css  css;  # 當檔為 .css 識別為 text/css
    text/html html; # 當檔為 .html 識別為 text/html
  }

  server {
    # localhost 要監聽的埠號
    listen 8080;
    # 監聽埠號提供的入口頁面 (根目錄)
    root /Users/1c00003/Desktop/nginx-demo; 
  }
}

events {}
```
:::

:::details 樣式成功被識別
![](/Browser/img/mime-types-success.png)
:::
### 解決方式 2️⃣ (最佳)
在 nginx 目錄下 `mime.types` 就是所有檔案的識別定義，但你不可能一個一個加入 `types { … }`，更有效率的作法是加入 `include mime.types;` 來引入所有檔案的識別。
:::details Demo
```bash {3}
http {
  # 載入所有的樣式識別
  include mime.types;

  server {
    # localhost 要監聽的埠號
    listen 8080;
    # 監聽埠號提供的入口頁面 (根目錄)
    root /Users/1c00003/Desktop/nginx-demo; 
  }
}

events {}
```
:::


## 路由設置 server > location
在 `server` 底下，設置 `location { ... }`，來指向路由指定顯示的檔案。
### 路由設置
當 url 為 `localhost:1111/about` 時，想要顯示  `/Users/1c00003/Desktop/nginx-demo/about` 的 `index.html`，可以這樣設置。

```js {8-11}
http {
  include mime.types;
  server {
    listen 1111;
    root /Users/1c00003/Desktop/nginx-demo;

    // 路由設置
    location /about {
      // 根目錄位置
      root /Users/1c00003/Desktop/nginx-demo;
    }
  }
}
```
:::tip 
會依照 `location` 設置的路由，自動加上 `/about` 在 `root` 設置上不需另加上。

默認檔案名都是 `index.html` 故不需要特別寫。
:::
### 別名路由設置
假設 `/alias-page` 頁面，也想與 `/about` 顯示同一個頁面，可以使用 `alias` 設置檔案位置，需要加上目錄名稱 `/about`，系統不會自動加上。
```js {11-14}
http {
  server {
    listen 1111;
    root /Users/1c00003/Desktop/nginx-demo;

    // /about 頁面
    location /about {
      root /Users/1c00003/Desktop/nginx-demo;
    }

    // /alias-page 頁面 (別名)
    location /alias-page {
      alias /Users/1c00003/Desktop/nginx-demo/about;
    }
  }
}
```

### 路由指向客製化檔案
上面例子，都是使用 `index.html` 作為指向的默認檔案名稱，若被指向的檔案不為 `index.html` 就無法順利被使用。可以使用 `type_files` 來指定要指向的檔名。
- `root` 根目錄位置
- `try_files` 根目錄之下對應的目錄與檔案路徑

```js {8-9}
http {
  server {
    listen 1111;
    root /Users/1c00003/Desktop/nginx-demo;

    // 客製化指向檔案名稱
    location /custom-page {
      root /Users/1c00003/Desktop/nginx-demo;
      try_files /custom/CustomPage.html /index.html =500;
    }
  }
}
```

當匹配 `/custom-page` 路由時，就會顯示 `/Users/1c00003/Desktop/nginx-demo/custom/CustomPage.html` 檔案，若 `/Users/1c00003/Desktop/nginx-demo/custom/CustomPage.html` 失效，就顯示 `/Users/1c00003/Desktop/nginx-demo/index.html` 檔案，若這個檔案再失效，就顯示 `500` 錯誤頁面。


:::warning 注意
`try_files` 必須設置至少「兩個」檔案路徑，不然會報錯:
```bash
nginx: [emerg] invalid number of arguments in "try_files" directive in /usr/local/etc/nginx/nginx.conf:
```
**設置方法**
```
try_files [匹配檔案路徑] [第二匹配檔案路徑] [第三匹配檔案路徑]
```
也可以使用 `=500` `=400` 來表示預設的 status code 顯示的錯誤頁面。
:::

## Reference
[Web Server 網頁伺服器]: /Browser/web-application-server#web-server-網頁伺服器
[反向代理]: /Browser/proxy#反向代理

<iframe width="560" height="315" src="https://www.youtube.com/embed/7VAI73roXaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [[基礎觀念系列] Web Server & Nginx — (1)](https://medium.com/starbugs/web-server-nginx-1-cf5188459108)
- [[基礎觀念系列] Web Server & Nginx — (2)](https://medium.com/starbugs/web-server-nginx-2-bc41c6268646)
- [[Video]Run Multiple Site from one IP with reverse proxy Nginx](https://www.youtube.com/watch?v=x1fnOJsX6wE)
- [How To host Multiple Sites on Nginx with same Domain (FQDN)](https://computingforgeeks.com/how-to-host-multiple-sites-on-nginx-with-same-domain/) 
- [淺談 Nginx 基本配置、負載均衡、緩存和反向代理](https://www.maxlist.xyz/2020/06/18/flask-nginx/)
- [[Day 08] Web Server & Nginx — (2)](https://ithelp.ithome.com.tw/articles/10241354)
- [Nginx三大模块--事件(Event)模块](https://www.myfreax.com/nginx-event-module-introduction/)
- [NGINX 官網](https://www.nginx.com/events/)
- [NGINX 官方文件](https://nginx.org/en/docs/beginners_guide.html)