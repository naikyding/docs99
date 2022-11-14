import {
  getIndexSidebar, getJavascriptSidebar, getVueSidebar,
  getBrowserSidebar, getSecuritySidebar, getWeb3sidebar, getCssSidebar,
  getHtmlSidebar, getGitSidebar
} from './slidebar'

import { getDevOpsNav, getVueNav } from './nav'

module.exports = {
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/document.svg' }]
  ],
  base: '/',
  title: 'Docs99',
  description: '開發學習．長長99',
  lastUpdated: true,
  
  themeConfig: {
    logo: '/document.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/naikyding' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/naikyding' },
    ],

    algolia: {
      appId: 'FAH6VE4565',
      apiKey: '362a9d66dde5158b946e62473e92179f',
      indexName: 'docs99'
    },

    nav: [
      getVueNav(),
      getDevOpsNav(),
    ],

    sidebar: [
      getIndexSidebar(),
      getBrowserSidebar(),
      getWeb3sidebar(),
      getJavascriptSidebar(),
      getVueSidebar(),
      getHtmlSidebar(),
      getCssSidebar(),
      getSecuritySidebar(),
      getGitSidebar()
    ]
  },
}