<template>
  <div>
    <div>
      <nuxt-link :to="pageA">转入pageA</nuxt-link>
      <nuxt-link :to="pageB">转入pageB</nuxt-link>
      <nuxt-link :to="pageC">转入pageC</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pageA: `/${this.$route.path.split('/')[1]}/pageA`,
      pageB: `/${this.$route.path.split('/')[1]}/pageB`,
      pageC: `/${this.$route.path.split('/')[1]}/pageC`
    }
  }
  /*     methods: {
          changedata(page){
              let arr = page.split('//')
              str = await + $i18n.locale
              page = '/'+ str + arr[1]
          }
      } */
}
</script>
