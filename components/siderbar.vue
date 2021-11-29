<template>
  <div>
    <div>
      <ColorMode></ColorMode>
      <nuxt-link :to="pageA" tag="button">转入pageA</nuxt-link>
      <nuxt-link :to="pageB" tag="button">转入pageB</nuxt-link>
      <nuxt-link :to="pageC" tag="button">转入pageC</nuxt-link>
    </div>
  </div>
</template>
<script>
import ColorMode from '@/components/ColorMode.vue'


export default {
  components: { ColorMode },
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
