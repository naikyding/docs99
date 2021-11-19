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
      text: '索引',
      link: '/Javascript/'
    },
    {
      text: '陣列處理',
      link: '/Javascript/陣列處理'
    },
    {
      text: 'Closure 閉包',
      link: '/Javascript/閉包'
    },
    {
      text: 'BOM',
      link: '/Javascript/BOM'
    },
    {
      text: 'IO 目標是否進入畫面 API',
      link: '/Javascript/intersectionObserver'
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

export const getBrowserSidebar = () => ({
  text: 'Browser',
  children: [
    {
      text: 'HTTP 是什麼?',
      link: '/Browser/http'
    },
    {
      text: 'Cookie',
      link: '/Browser/cookie'
    },
  ]
})