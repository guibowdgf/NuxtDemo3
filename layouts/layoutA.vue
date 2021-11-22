<template>
  <div>
    <div>    
        <br>
     <siderbar></siderbar>
    </div>
    <div class="layout">{{$t('title_layout',['layoutA'])}}</div>
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
