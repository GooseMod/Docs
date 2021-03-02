const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GooseMod Docs (beta)',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },

      {
        text: 'Patcher API',
        link: '/patcher/'
      },

      /*{
        text: 'Webpack',
        link: '/webpack/'
      },*/

      {
        text: 'Misc',
        link: '/misc/'
      },

      {
        text: 'GooseMod',
        link: 'https://goosemod.com'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'GooseMod',
          //collapsable: false,
          children: [
            '',
            'goosemod/compare'
          ]
        },
        {
          title: 'Your First Module',
          //collapsable: false,
          children: [
            'first/github',
            'first/manifest'
          ]
        }
      ],

      '/patcher/': [
        {
          title: 'Patcher API',
          collapsable: false,
          children: [
            '',
            'patch'
          ]
        },

        {
          title: 'Functions - UI',
          collapsable: false,
          children: [
            'ui/contextMenu',
            'ui/miniPopover',
            'ui/channelTextAreaButtons'
          ]
        }
      ],

      '/webpack/': [
        {
          title: 'Webpack',
          children: [
            ''
          ]
        }
      ],

      '/misc/': [
        {
          title: 'Misc',
          children: [
            '',
            'ports'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  theme: 'yuu'
}
