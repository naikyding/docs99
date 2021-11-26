import { getIndexSidebar, getJavascriptSidebar, getVueSidebar, getBrowserSidebar } from './slidebar'

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

    algolia: {
      appId: 'ZQTA4IMIN7',
      apiKey: '677d812bc3c1840d449554a4df6f33b7',
      indexName: 'docs99'
    },

    logo: '/document.svg',

    sidebar: [
      getIndexSidebar(),
      // getJavascriptSidebar(),
      // getVueSidebar(),
      getBrowserSidebar(),
      getJavascriptSidebar()
    ]
  },
}

