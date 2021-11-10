import { getIndexSidebar, getJavascriptSidebar } from './slidebar'

module.exports = {
  base: '/',

  title: 'Docs99',
  description: '開發相關的認知與學習，期望學習長長99',

  themeConfig: {
    algolia: {
      appId: 'ZQTA4IMIN7',
      apiKey: '677d812bc3c1840d449554a4df6f33b7',
      indexName: 'docs99'
    },

    logo: 'https://vuejs.org/images/logo.png',

    sidebar:[
      getIndexSidebar(),
      getJavascriptSidebar()
    ]
  },
}

