<template>
  <div>
    <div>
        {{$t('title_layout',['layoutC'])}}
        <br>
     <siderbar></siderbar>
    </div>
    <Nuxt></Nuxt>
  </div>
</template>
<script>
import siderbar from '@/components/siderbar.vue'
export default {
  components: {
    siderbar
  }
}
</script>
<style>
div {
  text-align: center;
}
</style>
