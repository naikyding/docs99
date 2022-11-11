# Geolocation API 取得裝置地理位置

:::warning 注意
僅能在 `https` 下使用，部分瀏覽器 `http` 無法使用。
:::

## 說明
`Geolocation API` 可以使 `客戶端` 根據網頁應用程式，提供「當前」裝置的地理位置，基於隱私原因，需要 `客戶端` 「許可」後才執行。

<div style="padding: 0 1rem; border: 1px solid lightgreen; border-radius: 8px;">
  <p>當前位置: </p>
  <p>經度 <span id="longitude-position" style="color: lightgreen; margin-left: .5rem;">n/a</span></p>
  <p>緯度 <span id="latitude-position" style="color: lightgreen; margin-left: .5rem;">n/a</span></p>
</div>

<button
id="geolocation-btn"
style="background: var(--vp-c-brand-dark); color: white; padding: .3rem 1rem; border-radius: 8px;">
取得地理位置</button>


<script>
export default {
  mounted() {
    const Geolocation = navigator.geolocation
    const getLocationBtn = document.querySelector('#geolocation-btn')

    // 經度
    const longitudeEl = document.querySelector('#longitude-position')
    // 緯度
    const latitudeEl = document.querySelector('#latitude-position')

    const getLocationSuccess = (info) => {
      console.log('Success:', info)

      longitudeEl.textContent = info.coords.longitude
      latitudeEl.textContent = info.coords.latitude
    }

    const getLocationError = error => {
      console.log('Error:', error)

      const errorCode = error.code
      if(errorCode === 1) return alert('請「啟用」地理位置')
      else if(errorCode === 3) return alert('響應時間超時了 (5秒) !')
      else alert('發生錯誤')
    }

    getLocationBtn.addEventListener('click', () => {
      if(!Geolocation) return alert('瀏覽器不支援 Geolocation API')

      Geolocation.getCurrentPosition(getLocationSuccess, getLocationError, {
        timeout: 5000,
      })
    })
  },
}
</script>

## 建立地理位置實體

可以依 `navigator.geolocation` 來取得「地理位置」的實體，後續依這個實體來做其它操作。

```js
const Geolocation = navigator.geolocation
```

### 瀏覽器不支援

```js
const Geolocation = navigator.geolocation

if(!Geolocation) {
  console.log('抱歉！瀏覽器不支援Geolocation')
}
```

## 取得當前地理位置
操作 `.getCurrentPosition()` 來取得裝置「當前」的地理位置，瀏覽器基於隱私會詢問 `客戶端` 是否同意提供，「同意」 才會提供相關的地理位置。

![](/Javascript/img/geolocation-api.png)

:::info 語法
Geolocation.getCurrentPosition( `successCallback` `[, errorCallback]` `, [options]` )
:::

- `successCallback` (成功)取得地理位置函式

- `errorCallback` (失敗)取得地理位置函式

- `options` 其它選項
  - `maximumAge` **緩存時效 (cache)** (默認 `0`) 表示不使用緩存。
  - `enableHighAccuracy` **啟用高精準度** (默認 `false`)

    如果「啟用」 `響應` 時間上會增加、 `消耗功率` 也會增加，因為會使用到設備的 GPS 晶片。
  - `timeout`  **逾時時間** (默認 `Infinity`)
  
    若超過時間沒有響應，就會進 `errorCallback`

### Demo

```js
// 地理位置實體
const Geolocation = navigator.geolocation

// 選項設置
const options = {
  timeout: 5000,           // 響應超過 5秒 逾時 -> errorCallback
  enableHighAccuracy: true // 使用高精度
}

// 成功執行函式
const successCallback = (info) => {
  console.log(info)
}

// 失敗執行函式
const errorCallback = (error) => {
  console.log(error)
}

// 取得當前地理位置功能
Geolocation.getCurrentPosition(successCallback, errorCallback, options)
```

### callback response 響應

**Success 成功取得**

大部分會拿 `經度` 、 `緯度` 來做後續的操作。

|屬性 |	說明 |
|-|-|
|latitude |	緯度|
|longitude |	經度|
|altitude |	高度|
|accuracy |	位置誤差|
|altitudeAccuracy |	高度誤差|
|heading |	移動方向|
|speed |	移動速度|

```json
{
  coords: {
    accuracy: 17,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 25.056763,    // 緯度
    longitude: 121.518242,  // 經度
    speed: null
  },
  timestamp: 1668145641823  // 取得位置時間戳
}
```

**Error 取得失敗**
- 使用者「拒絕」提供地理位置:
  ```json
  {
    code: 1,
    message: "User denied Geolocation"
  }
  ```

- 響應超時:
    ```json
    {
      code: 3,
      message: "Timeout expired"
    }
    ```

## 其它相關
[監聽位置變動 Geolocation.watchPosition() MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition)

## Reference
- [Geolocation API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Geolocation.getCurrentPosition() MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
- [Geolocation.watchPosition() MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition)
- [JS30 Day 21 - Geolocation](https://ithelp.ithome.com.tw/articles/10208169)
- [MIS2000Lab.的「HTML5 認證考試，從零開始」#19--HTML5 Geolocation API](https://ithelp.ithome.com.tw/articles/10159772?sc=rss.iron)
- [我錯了，取使用者定位沒這麼簡單。](https://yishan.toys/watch-position-tips/)