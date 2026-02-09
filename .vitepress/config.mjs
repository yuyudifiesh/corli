import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/corli/',
  title: "Corli",
  description: "一个架空的世界观",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '设定', link: '/docs/setting/set' }
    ],

    // 汉化
    outlineTitle: '标题大纲',
    outline: [2,6],
    sidebarMenuLabel: '目录',
    darkModeSwitchTitle: '切换深色主题',
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换浅色主题',
    lightModeSwitchLabel: '切换主题',
    returnToTopLabel: '返回顶部',

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    sidebar: [
      {
        text: '设定',
        items: [
          { text: '设定', link: '/docs/setting/set' },
          { text: '人物设定', link: '/docs/setting/people' }
        ]
      },
      {
        text: '主线',
        items: [
          { text: '灰烬时代', link: '/docs/novel/f/1' },
          { text: '黎明前夜', link: '/docs/novel/f/2' },
          { text: '冲破黑暗', link: '/docs/novel/f/3' },
          { text: '步行千里', link: '/docs/novel/f/4' },
          { text: '身当以生', link: '/docs/novel/f/5' },
          { text: '残阳如血', link: '/docs/novel/f/6' },
          { text: '恨火四起', link: '/docs/novel/f/7' },
          { text: '欲望丛生', link: '/docs/novel/f/8' },
          { text: '永续灯塔', link: '/docs/novel/f/9' },
          { text: '再见再见', link: '/docs/novel/f/10' },
          { text: '希冀荧荧', link: '/docs/novel/f/11' },
          { text: '焰火燎原', link: '/docs/novel/f/12' },
          { text: '乌合之众', link: '/docs/novel/f/13' },
          { text: '呼吸洄流', link: '/docs/novel/f/14' },
        ]
      },
      {
        text: '支线',
        items: [
          { text: '岁华灯', link: '/docs/novel/sidestory/hua/suihuadeng' },
          { text: '青阳稔', link: '/docs/novel/sidestory/hua/qingyangren' },
          { text: '长圆时', link: '/docs/novel/sidestory/hua/changyuanshi' },
        ]
      },
      {
        text: '故事集',
        items: [
          { text: '乘船归去', link: '/docs/novel/story/chengchuanguiqu' },
          { text: '侠自平生', link: '/docs/novel/story/xiazipingsheng' },
        ]
      },
      {
        text: '联动剧情',
        items: [
          { text: '海蚀时代', link: '/docs/novel/haishi' },
          { text: '旧梦泡影', link: '/docs/novel/jiumengpaoying' },
        ]
      },
      {
        text: '国家叙事',
        items: [
          { text: '华川《时代》', link: '/docs/novel/countryss/t/huachuan1' },
          { text: '菲林南利《乌托邦》', link: '/docs/novel/countryss/t/flnl1' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuyudifiesh' }
    ],

    footer: {
      message: '架空世界观和设定，仅供娱乐使用，请勿带入现实。',
      copyright: 'Copyright © 2026 yuyudifiesh'
    }
  }
})
