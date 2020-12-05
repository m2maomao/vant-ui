<template>
  <div>
    <van-dialog v-model="show" title="标题" show-cancel-button>
      <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      show: false
    }
  },
  methods: {
  },
  mounted() {
    // this.$dialog({message: '提示'})

    // this.$dialog.alert({
    //   title: '标题',
    //   message: '弹窗内容',
    // }).then(() => {
      
    // })

    // this.$dialog.alert({
    //   message: '内容~'
    // }).then(() => {

    // })

    // this.$dialog.confirm({
    //   title: '标题',
    //   message: '弹窗内容'
    // }).then(() => {
    //   console.log('confirm')
    // }).catch(() => {
    //   console.log('cancel');
    // })

    // this.$dialog.alert({
    //   title: '标题',
    //   message: '弹窗内容',
    //   theme: 'round-button'
    // }).then(() => {

    // })

    // function beforeClose(action, done) {
    //   if(action === 'confirm') {
    //     setTimeout(done, 1000)
    //   } else {
    //     done()
    //   }
    // }
    // this.$dialog.confirm({
    //   title: '标题',
    //   message: '弹窗内容',
    //   beforeClose
    // })
  }
}
</script>

<style>

</style>