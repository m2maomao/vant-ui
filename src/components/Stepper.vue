<template>
  <div>
    <h3>基础用法</h3>
    <van-stepper v-model="value" />
    <h3>自定义大小</h3>
    <van-stepper v-model="value" button-size="32px" input-width="40px" />
    <h3>圆角风格</h3>
    <van-stepper v-model="value" theme="round" button-size="22" disable-input />
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  data() {
    return {
      value: 1
    }
  }
}
</script>

<style>

</style>