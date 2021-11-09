module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',

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