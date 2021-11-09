import { getIndexSidebar, getJavascriptSidebar } from './slidebar'

module.exports = {
  base: '/',

  title: 'Docs99',
  description: '開發相關的認知與學習，期望學習長長99',

  themeConfig: {
    algolia: {
      appId: process.env.ALGOLIA_ADD_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME
    },

    logo: 'https://vuejs.org/images/logo.png',

    sidebar:[
      getIndexSidebar(),
      getJavascriptSidebar()
    ]
  },
}

