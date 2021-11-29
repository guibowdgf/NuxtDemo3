<template>
  <ComApi></ComApi>
</template>

<script>
import ComApi from '@/components/ComApi.vue'
export default {
  layout: 'default',
  components: {
    ComApi
  }
}
</script>
<style>
body {
  background-color: rgb(145, 116, 116);
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.light-mode body {
  background-color: #433422;
  color: azure;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
