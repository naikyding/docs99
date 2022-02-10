# 瀏覽器輸入網址後發生的事

這是一個很有延伸性的議題，依網路技術深度差異，都可能有不同的回答方式與延伸面向，也或許沒有一個很標準的回答方式，
也是提問者可以看到表述能力的部分!

![](/Browser/img/enter-url-in-browser.jpeg)
> 圖片出處: [@manekinekko](https://twitter.com/manekinekko/status/1281704000572858375?fbclid=IwAR0jy77-mx6tVOYZmY-FckoLaJsI0afUPlWL8Yt4J7OrHx_9K20V8Ck5hWo)



## 瀏覽器輸入網址且**送出**

## DNS

### 緩存查找
1. **檢查 `瀏覽器` 緩存 的 DNS 紀錄**

    瀏覽器會為之前訪問過的網站做 DNS 的紀錄，可以藉此查看是否有 `https://example.com` 的 `IP` 位址。

2. **檢查 `作業系統` 緩存 的 DNS 紀錄**

    除了 `瀏覽器` 會有緩存 的 DNS 紀錄，`作業系統` 也會維護 DNS 紀錄。

3. **檢查 `路由器` 緩存 DNS 紀錄**

    以上兩項在電腦上的檢查都找不到紀錄，瀏覽器就會與路由器通信來查找路由器上的緩存紀錄。

4. **檢查 [ISP (網路連線服務公司)]  緩存**

    以上所有方式都無法找到，瀏覽器就會轉向查找  [ISP (網路連線服務公司)]  的緩存紀錄。


:::tip
那麼多緩存的位置，是為了優化 網路流量、數據傳輸速度
:::


## Reference
[DNS 是什麼? @aws]:https://aws.amazon.com/tw/route53/what-is-dns/
[ISP (網路連線服務公司)]:https://www.ithome.com.tw/news/5086
- [DNS 是什麼? @aws]
- [What happens when you type a URL in the browser and press enter?](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
- [在瀏覽器輸入網址並送出後，到底發生了什麼事？](https://cythilya.github.io/2018/11/26/what-happens-when-you-type-an-url-in-the-browser-and-press-enter/)
- [前端面試考古：瀏覽器輸入URL後到底發生什麼事呢？](https://viboloveyou12.medium.com/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%A9%A6%E8%80%83%E5%8F%A4-%E7%80%8F%E8%A6%BD%E5%99%A8%E8%BC%B8%E5%85%A5url%E5%BE%8C%E5%88%B0%E5%BA%95%E7%99%BC%E7%94%9F%E4%BB%80%E9%BA%BC%E4%BA%8B%E5%91%A2-ddc186da4043)
- [Will 保哥的技術交流中心_討論](https://www.facebook.com/will.fans/posts/5477204855641947)