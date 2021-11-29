<template>
  <div>
    <el-select v-model="$colorMode.preference">
      <el-option v-for="item in options"
                 :key="item.id"
                 :label="item.name"
                 :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        id: '1',
        value: 'system',
        name: 'System'
      }, {
        id: '2',
        value: 'light',
        name: 'Light'
      }, {
        id: '3',
        value: 'dark',
        name: 'Dark'
      }, {
        id: '4',
        value: 'sepia',
        name: 'Sepia'
      }]
    }
  }
}
</script>

<style>
</style>