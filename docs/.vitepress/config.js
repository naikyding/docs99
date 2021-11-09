import { getIndexSidebar, getJavascriptSidebar } from './slidebar'

module.exports = {
  base: '/',

  title: 'Docs99',
  description: '開發相關的認知與學習，期望學習長長99',

  themeConfig: {
    algolia: {
      apiKey: 'efb740f22d9b7ab3ffcdb9c1bdf00772',
      indexName: 'docs99'
    },

    logo: 'https://vuejs.org/images/logo.png',

    sidebar:[
      getIndexSidebar(),
      getJavascriptSidebar()
    ]
  },

  plugins: [
    ['@vuepress/plugin-search'],
  ],
}

