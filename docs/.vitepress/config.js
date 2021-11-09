import { getIndexSidebar, getJavascriptSidebar } from './slidebar'

module.exports = {
  title: 'Docs99',
  description: '開發相關的認知與學習，期望學習長長99',

  themeConfig: {

    logo: 'https://vuejs.org/images/logo.png',
    
    sidebar:[
      getIndexSidebar(),
      getJavascriptSidebar()
    ]
  }
}

