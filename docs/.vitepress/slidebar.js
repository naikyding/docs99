export const getIndexSidebar = () => ({
  text: '前言',
  children: [
    // {
    //   text: '關於我',
    //   link: '/Index/about'
    // }
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
      text: 'Constructor 建構函式',
      link: '/Javascript/constructor'
    },
    {
      text: 'Promise',
      link: '/Javascript/promise'
    },
    {
      text: 'IO 目標是否進入畫面 API',
      link: '/Javascript/intersectionObserver'
    },
    {
      text: '陣列處理',
      link: '/Javascript/陣列處理'
    },
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
  ]
})