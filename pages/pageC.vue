<template>
  <div>
    <h1>{{$t('title_pageC')}}</h1>
    <br>
    <ShowParams :name="data1.name"></ShowParams>

  </div>
</template>
<script>
import { apidata } from '@/components/ComApi.vue'
import ShowParams from '@/components/ShowParams.vue'

export default {
  layout:'layoutC',
  components: {
    ShowParams
  },
  data () {
    return {
      data1: apidata.value
    }
  }
}
</script>
<style scoped>
</style>
