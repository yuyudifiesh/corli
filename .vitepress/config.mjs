import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "铆志录",
  description: "A VitePress Site",
  base: '/corli/', // 部署到GitHub Pages时需要配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [ // 菜单栏
      { text: '首页', link: '/' },
      { text: '登录塔', link: 'https://sysyzspublic.rth1.xyz/yuyudifiesh/corli/buildlogin' }
    ],

    sidebar: [ // 左侧导航栏
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [ // 社交图标
      { icon: 'github', link: 'https://github.com/yuyudifiesh' }
    ],

    footer: {
      message: "架空世界观，请勿代入现实",
      copyright: 'Copyright © 2025-present yuyudifiesh'
    },

    search: {
      provider: "local",
      options: {
        translations: {
          botton: {
            buttonText: "搜索信息",
            buttonAriaLabel: "搜索信息"
          },
          modal: {
            noResultsText: "您要找的信息不在塔方志中",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭"
            }
          },
        },
      },
    },

    outlineTitle: "目录",
    outline: [2, 6], // 左侧目录显示层级
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    // 汉化
    backToTopLabel: "回到顶部",
    darkModeSwitchLabel: "切换显示模式",
  }
})
