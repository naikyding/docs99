# 瀏覽器輸入網址後發生的事

這是一個很有延伸性的議題，依網路技術深度差異，都可能有不同的回答方式與延伸面向，也或許沒有一個很標準的答案，
是顯示表述能力的部分!

![](/Browser/img/enter-url-in-browser.jpeg)

> 圖片出處: [@manekinekko](https://twitter.com/manekinekko/status/1281704000572858375?fbclid=IwAR0jy77-mx6tVOYZmY-FckoLaJsI0afUPlWL8Yt4J7OrHx_9K20V8Ck5hWo)

## 1. 瀏覽器輸入網址且**送出**

## 2. DNS

### a. 緩存紀錄查找

1. **檢查 `瀏覽器` 緩存 的 DNS 紀錄**

   瀏覽器會為之前訪問過的網站做 DNS 的紀錄，可以藉此查看是否有 `https://example.com` 的 `IP` 位址。

2. **檢查 `作業系統` 緩存 的 DNS 紀錄**

   除了 `瀏覽器` 會有緩存 的 DNS 紀錄，`作業系統` 也會維護 DNS 紀錄。

3. **檢查 `路由器` 緩存 DNS 紀錄**

   以上兩項在電腦上的檢查都找不到紀錄，瀏覽器就會與路由器通信來查找路由器上的緩存紀錄。

4. **檢查 [ISP (網路連線服務公司)] 緩存**

   以上所有方式都無法找到，瀏覽器就會轉向查找 [ISP (網路連線服務公司)] 的緩存紀錄。

:::tip
那麼多緩存的位置，是為了優化 網路流量、數據傳輸速度
:::

### b. ISP DNS 啟動查找 Domain 的 IP

如果無法從 [**緩存查找**](#a-緩存查找) 取得紀錄，ISP 的 DNS 服務器就會啟動 DNS 查詢托管這個 domain 的 IP 位址。
DNS 服務器，主要是去搜索 `internet` 上多個 DNS 服務器，直到找到網站正確的 IP 位址或響應無法找到。

![](/Browser/img/url-level.png)

> [圖片出處](https://webhostinggeeks.com/guides/dns/)

![](/Browser/img/root-domain.png)

> [圖片出處](https://www.quora.com/What-is-the-root-of-your-domain)

**網址解析**

大部分網站網址除了「根網域」之外，有三個等級 「頂級」、「二級」、「三級」。

**服務器查找**

![](/Browser/img/dns-search-domain.jpg)

會依序重定向到 **下一級** 服務器查找，找到時會將匹配的 IP 址傳送給 DNS 紀錄及發送到瀏覽器；反之，會收到失敗的錯誤。

- 「根網域」服務器查找 `.` / `example.com`
- 「頂級」服務器查找 `.com`
- 「二級」服務器查找 `example`
- 「三級」服務器查找 `www`

## 3. 瀏覽器與服務器 [TCP] 連線

當瀏覽器取得 IP 位址，就可以與匹配的 IP 服務器進行資料交換。資料傳輸前更重要的就是連立 [TCP] 連線，就是所謂的[「三次握手」](/Browser/enter-url-in-browser#連線建立-三次握手)。

### 三次握手 (連立連線)

1. `客戶端` 透過 internet 發送 `SYN 數據包` 給 `服務端` 請求連線。
2. 若 `服務端` 有開啟 `埠號` 且接受請求連線，`服務端`將會確認 `客戶端` 的 `SYN 數據包` 後，發送 `SYN / ACK 數據包` 給 `客戶端` 做連線確認。
3. `客戶端` 發送 `ACK 數據包` 給 `服務端` ，確認無誤後就開始建立連線。

:::tip
這個動作的目的，在確認雙方的 `接收`、`發送` 能力是否正常，為之後的連線做準備。
:::

## 4. HTTP 請求

當 [TCP] 連線已建立，就可以開始交換數據資料，當 `客戶端` 請求資料時，也會同步帶上瀏覽器上的 [Cookie] 資料。

```bash
GET https://api.juejin.cn/user_api/v1/user/get?aid=2608&uuid=6914148287638308365&not_self=0
```

## 5. 服務器 處理與響應

`服務器` 接收到 `客戶端` 請求資料，會檢查它的 `header` `cookie` `body`，再依需求
，處理後響應回傳。若是在前後端分離的情況下，主流是回傳 `json` 格式資料。

### 回應響應

會依 [HTTP] 協定的方法，在響應資料上加上應該有的狀態 `status` 與資料屬性，當響應有錯誤時，也可以從瀏覽器的請求上查看錯誤問題。

## 6. 瀏覽器解析、渲染畫面

1. 解析 `HTML` 產生 `DOM tree`
2. 解析 `CSS` 產生 `CSSOM tree`
3. 渲染畫面 (會等到 `CSSOM tree` 完成，才會執行)

:::tip
`js` 就是依擺放的位置與屬性，來看執行的時間。[\<script> 非同步資源載入]
:::

## Reference

[\<script> 非同步資源載入]: /Javascript/script-attribute
[tcp]: /Browser/tcp
[http]: /Browser/http
[cookie]: /Browser/cookie
[dns 是什麼? @aws]: https://aws.amazon.com/tw/route53/what-is-dns/
[isp (網路連線服務公司)]: https://www.ithome.com.tw/news/5086

- [DNS 是什麼? @aws]
- [What happens when you type a URL in the browser and press enter?](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
- [在瀏覽器輸入網址並送出後，到底發生了什麼事？](https://cythilya.github.io/2018/11/26/what-happens-when-you-type-an-url-in-the-browser-and-press-enter/)
- [前端面試考古：瀏覽器輸入 URL 後到底發生什麼事呢？](https://viboloveyou12.medium.com/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%A9%A6%E8%80%83%E5%8F%A4-%E7%80%8F%E8%A6%BD%E5%99%A8%E8%BC%B8%E5%85%A5url%E5%BE%8C%E5%88%B0%E5%BA%95%E7%99%BC%E7%94%9F%E4%BB%80%E9%BA%BC%E4%BA%8B%E5%91%A2-ddc186da4043)
- [Will 保哥的技術交流中心\_討論](https://www.facebook.com/will.fans/posts/5477204855641947)
- [六角 [熱門面試題] 從輸入網址列到渲染畫面，過程經歷了什麼事？](https://w3c.hexschool.com/blog/8d691e4f?fbclid=IwAR00yCEcVl82xTyZ9H35wIBQ9Z7xqzefTz1-1aeYyygCraCp87r6LbxgMHg)
- [从 URL 输入到页面展现到底发生什么？ #24](https://github.com/ljianshu/Blog/issues/24#issuecomment-1312347833)
