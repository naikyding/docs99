
# Blockchain 區塊鏈

:::tip 簡單說
「區塊鏈」是公眾的資料庫。
:::

## 說明
「區塊鏈」是一種依照時間序，將數據資料區塊相聯的「鏈式結構」，並以「密碼學」來保證它的不可篡改與偽造的分散式資料庫。

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3a6b043c-dcf4-4c6b-9852-7f1140b0bf4c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220726T071800Z&X-Amz-Expires=86400&X-Amz-Signature=813185a46b879c97a676bc1bc1f091bdaf92e9f05f341d4289de176533cdde16&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### 區塊結構

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e7776703-ff52-4844-ab00-f437f2fc1839/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220726T071943Z&X-Amz-Expires=86400&X-Amz-Signature=e12df52c07df34cbaa9926cce67cfe0e751f6db4edc5442f7602606fd90194e6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

- **Data 資料**
- **Hash 密碼** (獨一無二)
- **PoW (Hash of previous block)** (前一個區塊密碼)

### 鏈結方式
區塊與區塊藉由與 hash 的相符而鏈結，自已的 hash 與 前一個區塊的 hash 配對相連。
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/70d6a73e-13b5-4b2d-bd1d-5cd39ddac452/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220726T072256Z&X-Amz-Expires=86400&X-Amz-Signature=883c80a937091915b9c50462900de4b360156e69777adc8538b71c37d1e01dff&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### 區塊資料被修改
若有一個區塊資料被修改，該區塊的 hash 也會改變，而後面的區塊就無法成功鏈結 ! 導致後面的區塊資料都無效。
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84d46dfb-f60b-4bb1-927a-f967011ae1fb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220726T072434Z&X-Amz-Expires=86400&X-Amz-Signature=ea3dff0bcd7e808e87a41de1b08148d11b55f37a4eee4de4cfe1599feee12972&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## 安全性
- **Hash 區塊密碼**
    
    區塊與區塊藉由與 hash 的相符而鏈結。
    
    電腦一秒就可以十萬次 hash 產生，只有 hash 配對是不夠的，修改區塊內容後，還是可以重新計算其它區塊的 hash 來偽造資料，使區塊鍵再次有效；
    
- **Proof of work 工作證明** (礦工)
    
    為了避免 hash 被重新產生，區塊還會生產「工作證明」來強化安全性，使偽造的難度更高。
    
- **去中心化資料庫網路鏈**

    「區塊鏈」沒有任何中心機制，使用「點對點網路」任何人都可以加入 ，當加入後就可以獲得鏈上的資料的副本，所有人都是不同的「節點」，每個人手上都有「副本」藉此來互相驗證區塊的資料是否合法。
    ![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/461ac2a7-37be-45ca-a9a4-63fdec20dde3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220726T072634Z&X-Amz-Expires=86400&X-Amz-Signature=778e03d2d0c72b36b577835a4714ac6e1727857b67444164736a01efb541506e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
    
## 何謂礦工?

:::tip 「挖礦」
以比特幣來說，將一段時間內系統中所有發生的交易進行驗證，並記錄在「區塊鏈」上形成新的「區塊」的過程。
:::

### 工作內容
參與「挖礦」的礦工，都要一起來解數字難題 (hash)，這個數字難題是無跡可尋的，全靠電腦的能力 (效能) 來解題；最先解開難題 (hash) 的人，就可以得到「記帳」的權利。

### 為什麼要「挖礦」?
礦工幫忙為系統上的所有交易，打包、驗證且形成新的區塊 (記帳)，報酬就是一定數量的礦石 (ex 比特幣)。


## Reference

<iframe width="560" height="315" src="https://www.youtube.com/embed/SSo_EIwHSd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [有高手能簡單說一下什麼是「 區塊鏈 」嗎？ （PTT鄉民 newwu 授權分享）](https://www.kocpc.com.tw/archives/206307)

- [写给小白的「区块链」故事](https://mp.weixin.qq.com/s/MXueYPKQb4R8JJ6MvCtiWQ)

- [區塊鏈 - 維基百科，自由的百科全書](https://zh.m.wikipedia.org/zh-tw/%E5%8C%BA%E5%9D%97%E9%93%BE)

- [挖礦與礦工](https://guide.blocto.app/article/mining-and-miner)

- [工作量證明 - 維基百科，自由的百科全書](https://zh.m.wikipedia.org/zh-tw/%E5%B7%A5%E4%BD%9C%E9%87%8F%E8%AD%89%E6%98%8E)