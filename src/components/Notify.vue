<template>
  <div>
    <van-button type="primary" text="组件调用" @click="showNotify" />
    <van-notify v-model="show" type="success">
      <van-icon name="bell" style="margin-right:4px" />
      <span>通知内容</span>
    </van-notify>
  </div>
</template>

<script>
export default {
  name: 'Notify',
  data() {
    return {
      show: false
    }
  },
  methods: {
    showNotify() {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 2000)
    }
  },
  mounted() {
    // this.$notify('通知内容')

    // this.$notify({type: 'primary', message: '通知内容'})
    // this.$notify({type: 'success', message: '通知内容'})
    // this.$notify({type: 'danger', message: '通知内容'})
    // this.$notify({type: 'warning', message: '通知内容'})

    // this.$notify({
    //   message: '自定义颜色',
    //   color: '#ad0000',
    //   background: '#ffe1e1',
    //   duration: 1000
    // })
  }
}
</script>

<style>

</style>