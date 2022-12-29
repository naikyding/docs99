export const getDevOpsNav = () => ({
  text: 'Devops',
  items: [
    {
      text: 'Nginx',
      items: [
        {
          text: '基礎',
          link: '/Browser/nginx',
        },
        {
          text: '文件設置',
          link: '/Browser/nginx-operate'
        }
      ]
    },
    {
      text: 'Docker',
      items: [
        {
          text: '容器化 Node JS App',
          link: '/Browser/docker-node'
        }
      ]
    }
  ]
})

export const getNuxt3Nav = () => ({
  text: 'Nuxt3',
  items: [
    {
      text: 'Views',
      items: [
        {
          text: 'Components 元件',
          link: '/nuxt3/components'
        },
        {
          text: 'Pages 頁面',
          link: '/nuxt3/pages'
        },
        {
          text: 'Layouts 佈局',
          link: '/nuxt3/layouts'
        },
      ]
    }
  ]
})

export const getVueNav = () => ({
  text: 'Vue',
  items: [
    {
      text: 'Component',
      items: [
        {
          text: '父子組件資料傳遞 props、$emit',
          link: '/Vue/props-emit'
        },
        {
          text: 'Slots 插槽',
          link: '/Vue/slots'
        }
      ]
    },
    {
      text: 'Router',
      items: [
        {
          text: '路由守衛 Navigation Guards',
          link: '/Vue/navigation-guards'
        },
        {
          text: '路由信息設置 Meta Fields',
          link: '/Vue/router-meta'
        },
        {
          text: '路由資料傳遞 Passing Props to Route Components',
          link: '/Vue/router-props'
        },
        {
          text: '路由 history 模式',
          link: '/Vue/router-history-mode'
        }
      ]
    },
    {
      text: 'Config',
      items: [
        {
          text: '本地端開發機 https',
          link: '/Vue/dev-server-ssl'
        },
        {
          text: '客製化開發伺服器網域',
          link: '/Vue/dev-server-custom-domain'
        },
      ]
    },
    {
      text: 'Third Party',
      items: [
        {
          text: '產生 Google 登入按鈕',
          link: '/Vue/google-signin-button'
        },
        {
          text: '產生 Apple 登入按鈕',
          link: '/Vue/apple-signin-button'
        },
        {
          text: 'LINE LIFF 應用程式',
          link: '/Vue/liff'
        }
      ]
    }
  ]
})