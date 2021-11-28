# Date 時間觀念與處理

:::danger
在任何瀏覽器，使用操作 `Date` 物件，一律都會是以 **本地時間** 為顯示。
:::

## 常見時間格式
- [Timestamp 時間戳 (Unix timestamp)](#timestamp-時間戳-unix-timestamp) `1619577479460`
- [ISO 8601](#iso-8601) `2012-09-27` / `2004-05-03T17:30:08+08:00`


## Timestamp 時間戳

從 UTC+0 時區的 1970 年 1 月 1 號 0 時 0 分 0 秒開始，總共過了多少 毫秒。

```js
new Date().getTime() 
// 1619577479460 timestamp

Date.now() // 1638083670874
```
:::tip
- `timestamp` 本身是沒有時區觀念。 (`UTC+0`) 
- 以 `毫秒` 為單位
:::

:::tip
💡 如果你發現程式碼中有些地方需要除以 `1000` 或是乘以 `1000`，就很有可能是在做秒跟毫秒的轉換。
:::

## ISO 8601 [:link:](https://zh.wikipedia.org/wiki/ISO_8601)
當日期用數字表示時，它可以有不同的方式解釋。比如，01/05/12 or January 5, 2012 or May 1, 2012 這都代表同一個時間，在商業環境中，它可能會產生錯誤的日期判讀，當日期不明確時，購買機票可能會非常困難。

所以 `ISO 8601` 透過國際的認證，來明確定義格式來解決這個不確定性：

**格式： `YYYY-MM-DDTHH:mm:ss.sssZ`**


```bash
2012-09-27 #YYYY-MM-DD
```
> 表示2012年9月27日

```
2004-05-03T17:30:08+08:00
```
> 表示東八區 (UTC/GMT +8) 時間2004年5月3日下午5點30分8秒

:::tip
是目前最主流的表示日期的規範格式，也是最推薦的日期格式。
:::

:::warning 注意
在跨瀏覽器使用 `Date` 物件解析日期字串， `IOS 8601` 也是最保險的方式，不會出現不同瀏覽器解析差異的問題。
```js
let now = new Date('2021-11-28')
```
:::

## [時間操作](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date)

### 本地時間 `new Date()`

```js
new Date()
// Wed Apr 28 2021 11:29:24 GMT+0800 (台北標準時間)
```

- 取得 `timestamp` 時間 `.getTime()`
    
    ```jsx
    new Date().getTime()
    // 1619580969515
    ```
    
- 取得 `ISO 8610` 時間 `.toISOString()`
    
    ```js
    new Date().toISOString()
    // "2021-04-28T03:40:20.643Z"
    ```

### 解析時間 `new Date( timestamp || iso8610)`  [🔗](https://www.notion.so/new-Date-af19559f00be4324b20cde5ac17404ce)


```js
new Date(1619580969515)
// Wed Apr 28 2021 11:36:09 GMT+0800 (台北標準時間)

new Date("2021-04-28T03:40:20.643Z")
// Wed Apr 28 2021 11:40:20 GMT+0800 (台北標準時間)
```


### 時間處理
|取值|操作|回傳|備註|
|-|-|-|-|
|西元年|.getFullYear()|2021|   |
|月份|.getMonth()|(0-11)| 0 :一月 ~ 11:十二月 |
|日期|.getDate()|(1-31)|   |
|星期|.getDay()|(0-6)| 0代表星期日，1代表星期一 |
|小時|.getHours()|(0-23)|   |
|分鐘|.getMinutes()|(0-59)|   |
|秒數|.getSeconds()|(0-59)|   |

## 時區
日期為是以 `本地` 時間為主!! 在不同的電腦執行，都可能產生不同的時區!!


無論是 `dayjs` 或是 `moment` 也都一樣，如果沒有在 `format` 之前特別指定時區，format 出來的結果都會依照使用者當前的時區。所以同一段程式碼，在不同使用者的電腦可能會有不同的輸出。

:::tip
同一段時間代碼，在不同的電腦執行，都可能產生不同的時區輸出
:::

:::warning 注意
但是大部分情形下會建議的做法都是由 **前端** 自行決定要顯示成哪個時區的時間，而不是由後端給的 date time 來決定。
:::

### 解決方式

`dayjs`

```js
dayjs('2020-02-02T13:00:00+03:00')
  .tz('Asia/Tokyo')
  .format('HH:mm:ss')
```

## Reference
- [WIKI: ISO 8601](https://zh.wikipedia.org/wiki/ISO_8601)
- [前端工程研究：關於 JavaScript 中 Date 型別的常見地雷與建議作法](https://blog.miniasp.com/post/2016/09/25/JavaScript-Date-usage-in-details)
- [淺談 JavaScript 中的時間與時區處理 - huli](https://blog.techbridge.cc/2020/12/26/javascript-date-time-and-timezone/)
- [Date( ), 輕鬆獲取明年，明天，昨天](http://bananajs.blogspot.com/2016/10/javascript-get-date-that-is-2-days-ago_11.html)
- [如何在 Javascript 處理時區](https://blog.bitsrc.io/how-to-handle-time-zones-in-javascript-b135a7931453)
- [詳細時間處理方式](https://levelup.gitconnected.com/javascript-date-and-time-in-detail-270e85a68124)