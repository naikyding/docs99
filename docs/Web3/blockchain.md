
# Blockchain 區塊鏈

:::tip 簡單說
「區塊鏈」是公眾的資料庫。
:::

## 說明
「區塊鏈」是一種依照時間序，將數據資料區塊相聯的「鏈式結構」，並以「密碼學」來保證它的不可篡改與偽造的分散式資料庫。

![](/Web3/img/blockchain-1.png)

### 區塊結構

![](/Web3/img/blockchain-2.png)

- **Data 資料**
- **Hash 密碼** (獨一無二)
- **Hash of previous block** (前一個區塊密碼)

### 鏈結方式
區塊與區塊藉由與 hash 的相符而鏈結，自已的 hash 與 前一個區塊的 hash 配對相連。

![](/Web3/img/blockchain-3.png)


### 區塊資料被修改
若有一個區塊資料被修改，該區塊的 hash 也會改變，而後面的區塊就無法成功鏈結 ! 導致後面的區塊資料都無效。
![](/Web3/img/blockchain-5.png)

## 安全性
- **Hash 區塊密碼**
    
    區塊與區塊藉由與 hash 的相符而鏈結。
    
    電腦一秒就可以十萬次 hash 產生，只有 hash 配對是不夠的，修改區塊內容後，還是可以重新計算其它區塊的 hash 來偽造資料，使區塊鍵再次有效；
    
- **PoW (Proof of work) 工作證明** (礦工)
    
    為了避免 hash 被重新產生，區塊還會生產「工作證明」來強化安全性，使偽造的難度更高。
    
- **去中心化資料庫網路鏈**

    「區塊鏈」沒有任何中心機制，使用「點對點網路」任何人都可以加入 ，當加入後就可以獲得鏈上的資料的副本，所有人都是不同的「節點」，每個人手上都有「副本」藉此來互相驗證區塊的資料是否合法。
    
    ![](/Web3/img/blockchain-6.png)
    
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