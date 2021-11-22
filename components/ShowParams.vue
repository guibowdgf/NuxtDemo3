<template>
  <div>
    <h3>{{ $t('ComApiConten') }}{{ name }}</h3>
  </div>
</template>
<script>

export default {
  props:{
      name: String
  },

}
</script>
<style scoped>
h3{
  color: red;
}
</style>
