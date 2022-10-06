# 正向代理與反向代理
:::tip 簡單說
- 反向代理: 隱藏「真實的」 `服務端`
- 正向代理: 隱藏「真實的」 `客戶端`
:::

## 正向代理
正向的「代理伺服器」接收來自 `客戶端` 的請求，再轉發到 `服務端`，實際上 `服務端` 並不會知道真實的 `客戶端` 來源。

![](/Browser/img/proxy-flow.jpg)
[圖片出處](https://www.apeiro8.com/how-does-reverse-proxy-work-in-cdn/)


## 反向代理
是 [CDN 內容分發網路] 的技術核心。指的是反向的「代理伺服器」替 `服務端` 來接收請求，再「轉發」到 `服務端`，`客戶端` 實際上並不會知道真實的 `服務端` 位置。

<img src="/Browser/img/Reverse_proxy_h2g2bob.svg" style="padding: 1rem; background: white; border-radius: 8px;">

[圖片出處](https://zh.wikipedia.org/zh-tw/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86)

### 優點
- 內容緩存，提升網站速度
- 流量篩選，阻擋惡意請求
- 隱藏 IP 位置，避免攻擊
- 負載均衡，避免服務過載與移除故障服務

## Reference
[CDN 內容分發網路]: /Browser/cdn
- [WIKI 反向代理](https://zh.wikipedia.org/zh-tw/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86)
- [[基礎觀念系列] Web Server & Nginx — (1)](https://medium.com/starbugs/web-server-nginx-1-cf5188459108#:~:text=Apache%20%E7%99%BC%E6%8F%AE%E5%95%A6%E3%80%82-,%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E8%88%87%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86,-%E8%AC%9B%E8%A7%A3%E9%80%99%E5%85%A9%E5%80%8B)
- [CDN教學：解析反向代理伺服器原理與優勢，一次帶你了解](https://www.apeiro8.com/how-does-reverse-proxy-work-in-cdn/)