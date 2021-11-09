import { getIndexSidebar, getJavascriptSidebar } from './slidebar'

module.exports = {
  base: '/',

  title: 'Docs99',
  description: '開發相關的認知與學習，期望學習長長99',

  themeConfig: {
    algolia: {
      apiKey: '39a116604cd8fcbfdc45958794461096',
      indexName: 'docs99'
    },

    logo: 'https://vuejs.org/images/logo.png',

    nav: [
      { text: '首页', link: '/Index/' },
      { text: '分类', link: '/Javascript/' },
      { text: '分类', link: '/Javascript/' },
      { text: '分类', link: '/Javascript/' },
    ],

    sidebar:[
      getIndexSidebar(),
      getJavascriptSidebar()
    ]
  },

  plugins: [
    ['@vuepress/plugin-search'],
  ],
}

