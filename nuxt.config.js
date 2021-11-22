export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtDemo3',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', '@nuxtjs/i18n',
  ],

  i18n: {
    locales: ['en', 'ch'],
    /* defaultLocale: 'en', */
    vueI18n: {
      fallbackLocale: 'ch',
      messages: {
        en: {
          welcome: 'Welcome to your Nuxt Application',
          ComApiConten: 'Current Input Content: ',
          title_pageA: 'This is pageA',
          title_pageB: 'This is pageB',
          title_pageC: 'This is pageC',
          title_layout: 'Current layout is{0}',
          testdada: 'testdata'
        },
        ch: {
          welcome: '欢迎进入Nuxt应用',
          ComApiConten: '当前的输入的内容是: ',
          title_pageA: '这是pageA',
          title_pageB: '这是pageB',
          title_pageC: '这是pageC',
          title_layout: '当前使用的模板是{0}',
          testdada: '测试数据'
        }
      }
    },
    parsePages: false,   // Disable babel parsing
    pages: {
      about: {
        en: '/en', // -> accessible at /about-us (no prefix since it's the default locale)
        ch: '/ch', // -> accessible at /fr/a-propos
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  }
}
