export const getIndexSidebar = () => ({
  text: '前言',
  items: [
    // {
    //   text: '關於我',
    //   link: '/Index/about'
    // }
  ]
})

export const getBrowserSidebar = () => ({
  text: 'Browser',
  collapsible: true,
  collapsed: true,
  items: [
    {
      text: 'HTTP',
      link: '/Browser/http'
    },
    {
      text: 'Cookie',
      link: '/Browser/cookie'
    },
    {
      text: 'TCP',
      link: '/Browser/tcp'
    },
    {
      text: 'XHR',
      link: '/Browser/xhr'
    },
    {
      text: 'AJAX',
      link: '/Browser/ajax'
    },
    {
      text: '瀏覽器輸入網址後發生的事',
      link: '/Browser/enter-url-in-browser'
    },
    {
      text: 'Restful API 路由語義化設計風格',
      link: '/Browser/restful-api'
    },
    {
      text: 'CDN 內容分發網路',
      link: '/Browser/cdn'
    },
    {
      text: '申請 Google OAuth 2.0 憑證',
      link: '/Browser/google-oauth-client-id'
    },
    {
      text: '加入 Apple 開發者計劃',
      link: '/Browser/register-apple-dev'
    },
    {
      text: 'Web Server 與 Application Server',
      link: '/Browser/web-application-server'
    },
    {
      text: '正向代理與反向代理',
      link: '/Browser/proxy'
    },
  ]
})

export const getWeb3sidebar = () => ({
  text: 'Web3',
  collapsible: true,
  collapsed: true,
  items: [
    {
      text: 'Web 3.0',
      link: '/Web3/web3'
    },
    {
      text: 'Blockchain 區塊鏈',
      link: '/Web3/blockchain'
    },
    {
      text: 'Smart Contract 智能合約',
      link: '/Web3/smart-contract'
    },
    {
      text: 'DApp 去中心化應用程式',
      link: '/Web3/dapp'
    }
  ]
})

export const getJavascriptSidebar = () => ({
  text: 'Javascript',
  collapsible: true,
  collapsed: true,
  items: [
    {
      text: 'BOM 瀏覽器物件模型',
      link: '/Javascript/bom'
    },
    {
      text: 'DOM 文件物件模型',
      link: '/Javascript/dom'
    },
    {
      text: 'Date 觀念與處理',
      link: '/Javascript/date'
    },
    {
      text: 'Event Loop',
      link: '/Javascript/eventLoop'
    },
    {
      text: 'Closure 閉包',
      link: '/Javascript/closure'
    },
    {
      text: '封裝「鏈式」函式庫',
      link: '/Javascript/chain'
    },
    {
      text: 'Promise 非同步處理',
      link: '/Javascript/promise'
    },
    {
      text: 'IO 目標是否進入畫面 API',
      link: '/Javascript/intersectionObserver'
    },
    {
      text: '陣列處理',
      link: '/Javascript/array-methods'
    },
    {
      text: 'Prototype chain 原型鏈與繼承',
      link: '/Javascript/prototype'
    },
    {
      text: 'Constructor 建構函式',
      link: '/Javascript/constructor'
    },
    {
      text: 'Factory Function 工廠函式',
      link: '/Javascript/factoryFunction'
    },
    {
      text: 'Constructor VS Factory Function',
      link: '/Javascript/constructorVSfactory'
    },
    {
      text: 'Class 類',
      link: '/Javascript/class'
    },
    {
      text: 'Hoisting 提升',
      link: '/Javascript/hoisting'
    },
    {
      text: '解析網址查詢參數 URLSearchParams',
      link: '/Javascript/parseUrlQuery'
    },
    {
      text: 'By Value && By Reference 傳值傳址',
      link: '/Javascript/by-value-by-reference'
    },
    {
      text: 'Shallow VS Deep Copy 深拷貝與淺拷貝',
      link: '/Javascript/shallow-deep-copy'
    },
    {
      text: 'Cookie 操作',
      link: '/Javascript/cookie'
    },
    {
      text: '解構賦值',
      link: '/Javascript/destructuring-assignment'
    },
    {
      text: 'Side Effect 副作用',
      link: '/Javascript/side-effects'
    },
    {
      text: 'Pure Function 純粹函式',
      link: '/Javascript/pure-function'
    },
    {
      text: 'Functional Programming 函式程式設計',
      link: '/Javascript/functional-programming'
    },
    {
      text: 'SOLID 設計原則',
      link: '/Javascript/solid'
    },
    {
      text: 'Virtual DOM',
      link: '/Javascript/virtual-dom'
    },
    {
      text: '誰是 this ?',
      link: '/Javascript/this'
    },
    {
      text: '\<script> 非同步資源載入與安全驗証',
      link: '/Javascript/script-attribute'
    },
    {
      text: 'Math 數學函式',
      link: '/Javascript/math'
    },
    {
      text: 'Variable 變數',
      link: '/Javascript/variable'
    },
    {
      text: 'Web APIs',
      link: '/Javascript/web-apis'
    },
    {
      text: 'Notification 推播信息',
      link: '/Javascript/notification'
    },
    {
      text: 'Websocket 客戶端與服務端雙向資料傳輸',
      link: '/Javascript/websocket'
    },
    {
      text: 'Websocket 基礎操作',
      link: '/Javascript/websocket-demo'
    },
    {
      text: 'Geolocation API 取得裝置地理位置',
      link: '/Javascript/geolocation'
    },
    {
      text: 'GSAP 特效動畫',
      link: '/Javascript/gsap'
    },
    {
      text: 'GSAP 安裝',
      link: '/Javascript/gsap-install'
    },
    {
      text: 'GSAP 補間動畫',
      link: '/Javascript/gsap-tween'
    },
    {
      text: 'GSAP 時間軸',
      link: '/Javascript/gsap-timeline'
    },
    {
      text: 'GSAP 關鍵幀',
      link: '/Javascript/gsap-keyframes'
    },
    {
      text: 'GSAP 滾動觸發器',
      link: '/Javascript/gsap-scroll-trigger'
    },
  ]
})

export const getHtmlSidebar = () => ({
  text: 'Html',
  collapsible: true,
  collapsed: true,
  items: [
    {
      text: 'dialog 對話彈窗',
      link: '/Html/dialog'
    },
    {
      text: 'picture 響應式載入圖片',
      link: '/Html/picture'
    },
  ]
})

export const getCssSidebar = () => ({
  text: 'CSS',
  collapsible: true,
  collapsed: true,
  items: [
    {
      text: 'CSS 設計模式',
      link: '/css/css-type'
    },
    {
      text: '元素置中的 5 個方法',
      link: '/css/center'
    },
    {
      text: '特殊實用功能',
      link: '/css/special-api'
    },
    {
      text: '滑鼠任意拖拽元素停留效果',
      link: '/css/mouse-follow-drag'
    },
    {
      text: 'Flexbox 彈性盒子',
      link: '/css/flex'
    },
    {
      text: 'Grid 網格系統',
      link: '/css/grid'
    },
    {
      text: 'Grid Container 屬性設置',
      link: '/css/grid-container'
    },
    {
      text: 'Grid Item 屬性設置',
      link: '/css/grid-item'
    },
  ]
})

export const getVueSidebar = () => ({
  text: 'Vue',
  collapsible: true,
  collapsed: true,
  items: [
    {
      text: '父子組件資料傳遞 props、$emit',
      link: '/Vue/props-emit'
    },
    {
      text: 'Slots 插槽',
      link: '/Vue/slots'
    },
    {
      text: '路由守衛 Navigation Guards',
      link: '/Vue/navigation-guards'
    },
    {
      text: '路由信息設置 Meta Fields',
      link: '/Vue/router-meta'
    },
    {
      text: '路由資料傳遞 Passing Props to Route Components',
      link: '/Vue/router-props'
    },
    {
      text: '路由 history 模式設置',
      link: '/Vue/router-history-mode'
    },
    {
      text: '客製化開發伺服器網域',
      link: '/Vue/dev-server-custom-domain'
    },
    {
      text: '本地端開發機 https',
      link: '/Vue/dev-server-ssl'
    },
    {
      text: '產生 Google 登入按鈕',
      link: '/Vue/google-signin-button'
    },
    {
      text: '產生 Apple 登入按鈕',
      link: '/Vue/apple-signin-button'
    },
    {
      text: 'LINE LIFF 應用程式',
      link: '/Vue/liff'
    }
  ]
})

export const getSecuritySidebar = () => ({
  text: 'Security',
  collapsible: true,
  collapsed: true,
  items: [
    {
      text: 'XSS 跨站腳本攻擊',
      link: '/security/xss'
    },
    {
      text: 'CSRF 跨站偽造請求',
      link: '/security/csrf'
    },
    {
      text: 'CORS 與 同源政策',
      link: '/security/cors'
    },
    {
      text: 'JWT 身份驗證機制',
      link: '/security/jwt'
    },
  ]
})

export const getGitSidebar = () => ({
  text: 'Git',
  collapsible: true,
  collapsed: true,
  items: [
    {
      text: '快速找出 bug commit',
      link: '/git/git-bisect'
    }
  ]
})