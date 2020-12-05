<template>
  <div>
    <h3>基础用法</h3>
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{required: true, message: '请填写用户名'}]" />
      <van-field v-model="password" name="密码" label="密码" placeholder="密码" :rules="[{required: true, message: '请填写密码'}]" />
      <div style="margin:16px">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <h3>校验规则</h3>
    <van-form validate-first @failed="onFailed">
      <van-field v-model="value1" name="pattern" placeholder="正则校验" :rules="[{pattern, message: '请输入正确内容'}]" />
      <van-field v-model="value2" name="validator" placeholder="函数校验" :rules="[{validator, message: '请输入正确内容'}]" />
      <van-field v-model="value3" name="asyncValidator" placeholder="异步函数校验" :rules="[{validator: asyncValidator, message: '请输入正确内容'}]" />
      <div style="margin:16px">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <h3>表单项类型 - 开关</h3>
    <van-field name="switch" label="开关">
      <template #input>
        <van-switch v-model="switchChecked" size="20" />
      </template>
    </van-field>
    <h3>表单项类型 - 复选框</h3>
    <van-field name="checkbox" label="复选框">
      <template #input>
        <van-checkbox v-model="checkbox" shape="square" />
      </template>
    </van-field>
    <van-field name="checkboxGroup" label="复选框组">
      <template #input>
        <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
          <van-checkbox name="1" shape="square">复选框1</van-checkbox>
          <van-checkbox name="2" shape="square">复选框2</van-checkbox>
        </van-checkbox-group>
      </template>
    </van-field>
    <h3>表单项类型 - 单选框</h3>
    <van-field name="radio" label="单选框">
      <template #input>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">单选框1</van-radio>
          <van-radio name="2">单选框2</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <h3>表单项类型 - 步进器</h3>
    <van-field name="stepper" label="步进器">
      <template #input>
        <van-stepper v-model="stepper" />
      </template>
    </van-field>
    <h3>表单项类型 - 评分</h3>
    <van-field name="rate" label="评分">
      <template #input>
        <van-rate v-model="rate" />
      </template>
    </van-field>
    <h3>表单项类型 - 滑块</h3>
    <van-field name="slider" label="滑块">
      <template #input>
        <van-slider v-model="slider" />
      </template>
    </van-field>
    <h3>表单项类型 - 文件上传</h3>
    <van-field name="uploader" label="文件上传">
      <template #input>
        <van-uploader v-model="uploader" />
      </template>
    </van-field>
    <h3>表单项类型 - 选择器</h3>
    <van-field readonly clickable name="picker" :value="value" label="选择器" placeholder="点击选择城市" @click="showPicker = true" />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
    <h3>表单项类型 - 时间选择器</h3>
    <van-field readonly clickable name="datetimePicker" :value="value" label="时间选择" placeholder="点击选择时间" @click="showPicker = true" />
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker type="time" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
    <h3>表单项类型 - 省市区选择器</h3>
    <van-field readonly clickable name="area" :value="values" label="地区选择" placeholder="点击选择省市区" @click="showArea = true" />
    <van-popup v-model="showArea" position="bottom">
      <van-area :area-list="areaList" @confirm="onConfirm2" @cancel="showArea = false" />
    </van-popup>
    <h3>表单项类型 - 日历</h3>
    <van-field readonly clickable name="calendar" :value="value" label="日历" placeholder="点击选择日期" @click="showCalendar = true" />
    <van-calendar v-model="showCalendar" @confirm="onConfirm3" />
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      username: '',
      password: '',
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/, // 校验6位数字
      switchChecked: false,
      checkbox: false,
      checkboxGroup: [],
      radio: '1',
      stepper: 1,
      rate: 3,
      slider:50,
      uploader: [],
      value: '',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker: false,
      values: '',
      showArea: false,
      areaList: {},
      showCalendar: false
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    // 校验手机
    validator(val) {
      return /1\d{10}/.test(val)
    },
    asyncValidator(val) {
      return new Promise((resolve) => {
        this.$toast.loading({
          message: '验证中...'
        })
        setTimeout(() => {
          this.$toast.clear()
          resolve(/\d{6}/.test(val))
        }, 1000)
      })
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo);
    },
    onConfirm(value) {
      this.value = value
      this.showPicker = false
    },
    onConfirm2(v) {
      this.values = v.filter((item) => !!item).map((item) => item.name).join('/')
      this.showArea = false
    },
    onConfirm3(date) {
      this.value = `${date.getMonth() + 1}/ ${date.getDate()}`
      this.showCalendar = false
    }
  }
}
</script>

<style>

</style>