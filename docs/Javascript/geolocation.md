# Geolocation API 取得裝置地理位置

:::warning 注意

- 主要在 `https` 支援使用，部分瀏覽器 `http` 無法使用。
- 初次操作 `響應` 會比較久。
  :::

## 說明

`Geolocation API` 可以使 `客戶端` 根據網頁應用程式，提供「當前」裝置的地理位置，基於隱私原因，需要 `客戶端` 「許可」後才執行。

![](/Javascript/img/geolocation-img.png)

<div style="padding: 0 1rem; border: 1px solid lightgreen; border-radius: 8px;">
  <p><strong>當前位置: </strong></p>
  <p>經度 <span id="longitude-position" style="color: lightgreen; margin-left: .5rem;">n/a</span></p>
  <p>緯度 <span id="latitude-position" style="color: lightgreen; margin-left: .5rem;">n/a</span></p>
  <p>定位時間 <span id="date-position" style="color: lightgreen; margin-left: .5rem;">n/a</span></p>

  <hr/>

  <p><strong>監聽動態位置:</strong></p>
  <p>經度 <span id="longitude-watch" style="color: lightgreen; margin-left: .5rem;">n/a</span></p>
  <p>緯度 <span id="latitude-watch" style="color: lightgreen; margin-left: .5rem;">n/a</span></p>
  <p>變更定位時間 <span id="date-watch" style="color: lightgreen; margin-left: .5rem;">n/a</span></p>
</div>

<button
id="geolocation-btn"
style="background: var(--vp-c-brand-dark); color: white; padding: .3rem 1rem; border-radius: 8px;">
取得地理位置</button>

<button
id="geolocation-watch-btn"
style="background: var(--vp-c-brand-dark); color: white; padding: .3rem 1rem; border-radius: 8px;">
監聽位置變動</button>

<script>
export default {
  mounted() {
    const Geolocation = navigator.geolocation
    const getLocationBtn = document.querySelector('#geolocation-btn')
    const getLocationWatchBtn = document.querySelector('#geolocation-watch-btn')

    
    const longitudeEl = document.querySelector('#longitude-position') // 經度
    const latitudeEl = document.querySelector('#latitude-position')   // 緯度
    const dateEl = document.querySelector('#date-position')

    const longitudeWatchEl = document.querySelector('#longitude-watch') // 經度
    const latitudeWatchEl = document.querySelector('#latitude-watch')   // 緯度
    const dateWatchEl = document.querySelector('#date-watch')

    const getLocationSuccess = (info) => {
      console.log('Success:', info)
      const { timestamp, coords: { longitude, latitude } } = info
      const date = new Date(timestamp)

      longitudeEl.textContent = longitude
      latitudeEl.textContent = latitude
      dateEl.textContent = date
    }

    const watchLocationSuccess = (info) => {
      console.log('Success:', info)
      const { timestamp, coords: { longitude, latitude } } = info
      const date = new Date(timestamp)

      longitudeWatchEl.textContent = longitude
      latitudeWatchEl.textContent = latitude
      dateWatchEl.textContent = date
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

      longitudeEl.textContent = '...'
      latitudeEl.textContent = '...'
      dateEl.textContent = '...'

      Geolocation.getCurrentPosition(getLocationSuccess, getLocationError, {
        timeout: 5000,
      })
    })

    getLocationWatchBtn.addEventListener('click', () => {
      if(!Geolocation) return alert('瀏覽器不支援 Geolocation API')

      console.log(getLocationWatchBtn.style.display = 'none')

      longitudeWatchEl.textContent = '...'
      latitudeWatchEl.textContent = '...'
      dateWatchEl.textContent = '...'

      Geolocation.watchPosition(watchLocationSuccess, getLocationError, {
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

### 判斷瀏覽器支援

```js
const Geolocation = navigator.geolocation

if (!Geolocation) {
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

  - `timeout` **逾時時間** (默認 `Infinity`)

    若超過時間沒有響應，就會進 `errorCallback`

### Demo

```js
// 地理位置實體
const Geolocation = navigator.geolocation

// 選項設置
const options = {
  timeout: 5000, // 響應超過 5秒 逾時 -> errorCallback
  enableHighAccuracy: true, // 使用高精度
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

| 屬性             | 說明     |
| ---------------- | -------- |
| latitude         | 緯度     |
| longitude        | 經度     |
| altitude         | 高度     |
| accuracy         | 位置誤差 |
| altitudeAccuracy | 高度誤差 |
| heading          | 移動方向 |
| speed            | 移動速度 |

```json
{
  "coords": {
    "accuracy": 17,
    "altitude": null,
    "altitudeAccuracy": null,
    "heading": null,
    "latitude": 25.056763, // 緯度
    "longitude": 121.518242, // 經度
    "speed": null
  },
  "timestamp": 1668145641823 // 取得位置時間戳
}
```

**Error 取得失敗**

- 使用者「拒絕」提供地理位置:

  ```json
  {
    "code": 1,
    "message": "User denied Geolocation"
  }
  ```

- 響應超時:
  ```json
  {
    "code": 3,
    "message": "Timeout expired"
  }
  ```

## 持續監聽位置

使用 `geolocation.watchPosition()` 持續監聽定位的變動，操作方法與 `getCurrentPosition()` 相同。

```js {2}
const geolocation = navigator.geolocation
geolocation.watchPosition(successEvent, errorEvent, options)
```

## 移除監聽

使用 `geolocation.clearWatch()` 來對持續監聽定位 `watchPosition` 回傳值 `id` 做「取消」。

```js {2,5}
const geolocation = navigator.geolocation
let id = geolocation.watchPosition(successEvent, errorEvent, options)

// 移除監聽
geolocation.clearWatch(id)
```

## 實例

<iframe src="https://codesandbox.io/embed/location-api-0nt4wb?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="location API"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

:::details CODE

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
      * {
        padding: 0;
        list-style: none;
        background: #2e2e2e;
        color: #fff;
      }
      button {
        background: #fff;
        color: #2e2e2e;
        padding: 0.5rem 1rem;
        border: 1px solid #2e2e2e;
        border-radius: 8px;
      }
      ul {
        padding: 0.5rem 1rem;
        border: 1px solid #aaa;
        border-radius: 8px;
      }
      .ps-info {
        border-top: 1px solid #fff;
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        font-size: 10px;
      }
    </style>
    <title>Static Template</title>
  </head>
  <body>
    <h1>Location Position</h1>

    <div class="location-info">
      <ul>
        <li>
          時間:
          <span id="time">--</span>
        </li>
        <li>
          經度:
          <span id="longitude">--</span>
        </li>
        <li>
          緯度:
          <span id="latitude">--</span>
        </li>
        <li>
          高度:
          <span id="altitude">--</span>
        </li>
        <li>
          速度:
          <span id="speed">--</span>
          <span>（m/s）</span>
        </li>
        <li>
          方向:
          <span id="heading">--</span>
        </li>
        <li class="ps-info">
          <div>
            位置誤差:
            <span id="accuracy">--</span>
          </div>
          <div>
            高度誤差:
            <span id="altitudeAccuracy">--</span>
          </div>
        </li>
      </ul>
      <button onclick="getCurrentLocation()">開始監聽位置</button>
      <button onclick="stopGetlocation()">停止監聽</button>
    </div>

    <script>
      const geolocationAPI = navigator.geolocation

      function setProps(propsEl, value) {
        const el = document.querySelector(`#${propsEl}`)
        el.textContent = value || 'n/a'
      }

      if (!geolocationAPI) {
        alert('抱歉! 瀏覽器不支援「定位服務」')
      }

      const options = {
        timeout: 5000, // 響應超過 5秒 逾時 -> errorCallback
        enableHighAccuracy: true, // 使用高精度
      }

      // 成功執行
      function getLocationSuccess({ timestamp, coords }) {
        console.log('success', coords)
        setProps('time', formatDate(timestamp)) // 時間
        setProps('longitude', coords.longitude) // 緯度
        setProps('latitude', coords.latitude) // 經度
        setProps('altitude', coords.altitude) // 高度
        setProps('speed', coords.speed) // 速度
        setProps('heading', coords.heading) // 方向 ( 0 度代表正北方向，90 度代表正東方向，180 度代表正南方向，270 度代表正西方向)
        setProps('accuracy', coords.accuracy) // 位置誤差
        setProps('altitudeAccuracy', coords.altitudeAccuracy) // 高度誤差
      }

      // 失敗執行
      function getLocationError() {
        alert('取得定位失敗!')
      }

      let watchId = null

      // 開始監聽定位功能
      function getCurrentLocation() {
        watchId = geolocationAPI.watchPosition(
          getLocationSuccess,
          getLocationError,
          options
        )
        alert('開始監聽位置')
      }

      // 停止監聽功能
      function stopGetlocation() {
        geolocationAPI.clearWatch(watchId)
        alert('已停止監聽位置')
      }

      // 格式時間功能
      function formatDate(timestamp) {
        const now = new Date(timestamp)
        return `${now.getFullYear()}/${
          now.getMonth() + 1
        }/${now.getDay()} ${now.getHours()}:${now.getMinutes()}`
      }
    </script>
  </body>
</html>
```

:::

## Reference

- [Geolocation API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Geolocation.getCurrentPosition() MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
- [監聽位置變動 Geolocation.watchPosition() MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition)
- [Geolocation.watchPosition() MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition)
- [JS30 Day 21 - Geolocation](https://ithelp.ithome.com.tw/articles/10208169)
- [MIS2000Lab.的「HTML5 認證考試，從零開始」#19--HTML5 Geolocation API](https://ithelp.ithome.com.tw/articles/10159772?sc=rss.iron)
- [我錯了，取使用者定位沒這麼簡單。](https://yishan.toys/watch-position-tips/)
