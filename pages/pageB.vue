<template>
  <div>
    <h1>{{$t('title_pageB')}}</h1>
    <ComApi></ComApi>
    <br>
    <ShowParams :name="data1.name"></ShowParams>

  </div>
</template>
<script>
import ComApi from '@/components/ComApi.vue'
import { apidata } from '@/components/ComApi.vue'
import ShowParams from '@/components/ShowParams.vue'

export default {
  layout:'layoutB',
  components: {
    ComApi,
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
