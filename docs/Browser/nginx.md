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


## 修改文件配置
除基礎操作外，客制化設置可以到 [文件設置方法](/Browser/nginx-operate.md)。

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
- [NGINX 學習筆記](https://blog.learn-or-die.com/zh-tw/nginx/)
- [Nginx load balance setting](https://nginx.org/en/docs/http/load_balancing.html#:~:text=grpc_pass%20directives%20respectively.-,Least%20connected%20load%20balancing,-Another%20load%20balancing)