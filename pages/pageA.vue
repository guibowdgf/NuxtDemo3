<template>
  <div>
    <h1>{{$t('title_pageA')}}</h1>
    <ComApi></ComApi>
    <br>
    <ShowParams :name="data1.name"></ShowParams>
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </div>
</template>
<script>
import ComApi from '@/components/ComApi.vue'
import { apidata } from '@/components/ComApi.vue'
import ShowParams from '@/components/ShowParams.vue'

export default {
  layout: 'layoutA',
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
<style>

</style>
