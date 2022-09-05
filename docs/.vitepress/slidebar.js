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
    }
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
  ]
})

export const getCssSidebar = () => ({
  text: 'CSS',
  collapsible: true,
  collapsed: true,
  items: [
    {
      text: '元素置中的 5 個方法',
      link: '/css/center'
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
      text: '[前端] 產生 Google 登入按鈕',
      link: '/Vue/google-signin-button'
    },
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