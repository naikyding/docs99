import { getIndexSidebar, getJavascriptSidebar, getVueSidebar, getBrowserSidebar, getSecuritySidebar, getWeb3sidebar } from './slidebar'

module.exports = {
  base: '/',
  title: 'Docs99',
  description: '開發學習．長長99',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/document.svg' }]
  ],
  
  themeConfig: {
    repo: 'https://github.com/naikyding/docs99',
    lastUpdated: true,
    search: true,
    searchMaxSuggestions: 10,

    algolia: {
      appId: 'FAH6VE4565',
      apiKey: '362a9d66dde5158b946e62473e92179f',
      indexName: 'docs99'
    },

    logo: '/document.svg',

    sidebar: [
      getIndexSidebar(),
      // getVueSidebar(),
      getBrowserSidebar(),
      getWeb3sidebar(),
      getJavascriptSidebar(),
      getSecuritySidebar()
    ]
  },
}

