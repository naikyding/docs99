module.exports = {
  title: 'Docs99',
  description: '開發相關的認知與學習，期望學習長長99',

  themeConfig: {
    sidebar: {
      '/Javascript': getJavascriptSidebar()
    }
  }
}

function getJavascriptSidebar() {
  return [
    {
      text: 'Javascript',
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
          text: 'BOM',
          link: '/Javascript/BOM'
        }
      ]
    }
  ]
}