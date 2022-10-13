export const getDevOpsNav = () => ({
  text: 'Devops',
  items: [
    {
      text: 'Nginx',
      items: [
        {
          text: '入門',
          link: '/Browser/nginx',
        },
        {
          text: '操作方法',
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
      text: 'Auth',
      items: [
        {
          text: '產生 Google 登入按鈕',
          link: '/Vue/google-signin-button'
        },
        {
          text: '產生 Apple 登入按鈕',
          link: '/Vue/apple-signin-button'
        }
      ]
    }
  ]
})