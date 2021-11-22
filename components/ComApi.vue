<template>
  <div>
    <el-form>
      <el-form-item label="数据名">
        <el-input
                  v-model="formdata.name"
                  placeholder="请输入名称"
                  clearable>
        </el-input>
      </el-form-item>
      <h3>{{ $t('ComApiConten') }}{{ formdata.name }}</h3>
    </el-form>
  </div>
</template>
<script>
import { Form, FormItem, Select, Input, Option, InputNumber } from 'element-ui'
import { ref } from '@nuxtjs/composition-api'

const data = ref({ name: '测试数据' })
export default {
  naem: 'ComApi',
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Select.name]: Select,
    [Input.name]: Input,
    [Option.name]: Option,
    [InputNumber.name]: InputNumber
  },
  setup () {
    const formdata = data

    return {
      formdata
    }
  }
}
export const apidata = data
</script>
<style scoped>
.el-form {
  width: 560px;
  position: relative;
  left: 36%;
}
.el-input {
  width: 500px;
}
</style>
