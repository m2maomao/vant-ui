<template>
  <div>
    <van-button type="primary" plain @click="btnClick">按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return {

    }
  },
  methods: {
    btnClick() {
      console.log('btnClick!!')
    }
  },
  mounted() {
    // 文字提示
    // this.$toast('提示内容')

    // 加载提示
    // this.$toast.loading({
    //   message: '加载中...',
    //   forbidClick: true
    // })

    // 成功失败提示
    // this.$toast.success('成功文案')
    // this.$toast.fail('失败文案')

    // 自定义提示
    // this.$toast({
    //   message: '自定义图标',
    //   icon: 'like-o',
    //   forbidClick: true
    // })
    // this.$toast({
    //   message: '自定义图片',
    //   icon: 'https://img.yzcdn.cn/vant/logo.png'
    // })
    // this.$toast.loading({
    //   message: '加载中...',
    //   forbidClick: true,
    //   loadingType: 'spinner'
    // })

    // 自定义位置
    // this.$toast({
    //   message: '顶部展示',
    //   position: 'top'
    // })
    // this.$toast({
    //   message: '底部展示',
    //   position: 'bottom'
    // })

    // 动态更新提示
    const toast = this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '倒计时3秒'
    })
    let second = 3
    const timer = setInterval(() => {
      second --
      if(second) {
        toast.message = `倒计时${second}秒`
      } else {
        clearInterval(timer)
        this.$toast.clear()
      }
    }, 1000)

  }
}
</script>

<style>

</style>