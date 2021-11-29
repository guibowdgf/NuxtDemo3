

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"ch","messages":{"en":{"welcome":"Welcome to your Nuxt Application","ComApiConten":"Current Input Content: ","title_pageA":"This is pageA","title_pageB":"This is pageB","title_pageC":"This is pageC","title_layout":"Current layout is{0}","testdada":"testdata"},"ch":{"welcome":"欢迎进入Nuxt应用","ComApiConten":"当前的输入的内容是: ","title_pageA":"这是pageA","title_pageB":"这是pageB","title_pageC":"这是pageC","title_layout":"当前使用的模板是{0}","testdada":"测试数据"}}},
  vueI18nLoader: false,
  locales: ["en","ch"],
  defaultLocale: "",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: false,
  pages: {"about":{"en":"/en","ch":"/ch"}},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en"},{"code":"ch"}],
  localeCodes: ["en","ch"],
  additionalMessages: [],
}

export const localeMessages = {}
