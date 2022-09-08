# CDN 內容分發網路

:::tip 簡單說
CDN 會依使用者所在位置，選擇最適合的伺服器節點，提供網站內容數據傳輸服務。
:::

## 說明
CDN (Content Delivery Network) 內容分發網路。指的是一種使用網路「分散式」連接伺服器的網路系統，會藉由離使用者「比較近」的伺服器，來提供更快速、可靠的網路內容數據傳輸，使網站更快速有效率且低成本。

無 CDN 服務的網站，不管使用者在什麼位置，都要連回服務的伺服器，隨著距離越遠，連線的成本就越高且多人連線時速度越慢，若伺服器出了問題就會中斷「所有」服務。

![](/Browser/img/cdn.png)
圖片出處: [alibabacloud](https://www.alibabacloud.com/tc/knowledge/what-is-cdn)
## 工作原理

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0DWk2jP0o3UyRVR9hOuLUA%2FCDN-Flow%3Fnode-id%3D0%253A1" allowfullscreen></iframe>

- **訪問網站** 發起請求
- **DNS服務器** 轉發給 CDN 專用的 DNS服務器處理
- **服務端** 響應 CDN 負載均衡服務器 IP
- **客戶端** 訪問 CDN 負載均衡服務器 IP
- **服務端** 響應 「最適合」 提供服務的 CDN 服務器 IP
- **客戶端** 訪問 「最適合」 提供服務的 CDN 服務器 IP
  - **有緩存:** 「提供服務的 CDN 服務器」 直接響應網站資源
  - **無緩存:** 
    - **「提供服務的 CDN 服務器」** 
      - 訪問 「源站」 (原始網站服務器)
      - 取得 「源站」 網站資源
      - 加入緩存
      - 響應網站資源


## 特色
### 優點
- 減輕「源」服務器壓力
- 提升訪問網站速度
- 承載更多用戶
- 可抵擋 DDoS 攻擊
- 分散式節點提高可靠性

### 缺點
- 增加建置成本 (流量成本)
- 增加架構複雜度 (更新緩存等...)

## Reference 

<iframe width="560" height="315" src="https://www.youtube.com/embed/m73oA0_ptxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [什麼是 CDN？| CDN 的工作原理是什麼？](https://www.cloudflare.com/zh-tw/learning/cdn/what-is-a-cdn/)
- [前端必需了解的CDN知识](https://juejin.cn/post/6913704568325046279)
- [How Does a CDN Work?](https://www.hostinger.com/tutorials/what-is-cdn)
- [使用CDN的優缺點](https://www.astralweb.com.tw/pros-and-cons-for-using-cdn/)