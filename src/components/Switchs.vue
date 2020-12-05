<template>
  <div>
    <h3>加载状态</h3>
    <van-switch v-model="checked" loading/>
    <h3>自定义大小</h3>
    <van-switch v-model="checked" size="24px"/>
    <h3>自定义颜色</h3>
    <van-switch v-model="checked" active-color="#ee0a24" inactive-color="#dcdee0" />
    <h3>异步控制</h3>
    <van-switch :value="checked" @input="onInput" />
    <h3>搭配单元格使用</h3>
    <van-cell center title="标题">
      <template #right-icon>
        <van-switch v-model="checked" size="24" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'Switchs',
  data() {
    return {
      checked: false
    }
  },
  methods: {
    onInput(checked) {
      this.$dialog.confirm({
        title: '提醒',
        message: '是否切换开关?'
      }).then(() => {
        this.checked = checked
      })
    }
  }
}
</script>

<style>

</style>