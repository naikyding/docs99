export const getIndexSidebar = () => ({
  text: '前言',
  children: [
    // {
    //   text: '關於我',
    //   link: '/Index/about'
    // }
  ]
})

export const getBrowserSidebar = () => ({
  text: 'Browser',
  children: [
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
    }
  ]
})

export const getJavascriptSidebar = () => ({
  text: 'Javascript',
  collapsable: 'auto',
  children: [
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
    }
  ]
})

export const getVueSidebar = () => ({
  text: 'Vue',
  children: [
    {
      text: '索引',
      link: '/Vue/'
    },
    {
      text: '[Vue3]深入了解 ref 實現原理',
      link: '/Vue/vue3-ref'
    },
  ]
})

export const getSecuritySidebar = () => ({
  text: 'Security',
  children: [
    {
      text: 'CSRF 跨站偽造請求',
      link: '/security/csrf'
    },
  ]
})