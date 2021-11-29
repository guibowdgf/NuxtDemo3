import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b804b4c4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _07190c5e = () => interopDefault(import('../pages/pageA.vue' /* webpackChunkName: "pages/pageA" */))
const _072723df = () => interopDefault(import('../pages/pageB.vue' /* webpackChunkName: "pages/pageB" */))
const _07353b60 = () => interopDefault(import('../pages/pageC.vue' /* webpackChunkName: "pages/pageC" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ch",
    component: _b804b4c4,
    name: "index___ch"
  }, {
    path: "/en",
    component: _b804b4c4,
    name: "index___en"
  }, {
    path: "/ch/pageA",
    component: _07190c5e,
    name: "pageA___ch"
  }, {
    path: "/ch/pageB",
    component: _072723df,
    name: "pageB___ch"
  }, {
    path: "/ch/pageC",
    component: _07353b60,
    name: "pageC___ch"
  }, {
    path: "/en/pageA",
    component: _07190c5e,
    name: "pageA___en"
  }, {
    path: "/en/pageB",
    component: _072723df,
    name: "pageB___en"
  }, {
    path: "/en/pageC",
    component: _07353b60,
    name: "pageC___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
