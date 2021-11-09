export const getIndexSidebar = () => ({
  text: 'Index',
  children: [
    {
      text: 'index',
      link: '/Index/'
    },
    {
      text: 'about',
      link: '/Index/about'
    }
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
      text: '閉包',
      link: '/Javascript/閉包'
    },
    {
      text: 'BOM',
      link: '/Javascript/BOM'
    }
  ]
})