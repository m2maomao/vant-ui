<template>
  <div>
    <van-cell @touchstart.native.stop="show = true">弹出默认键盘</van-cell>
    <!-- <van-number-keyboard :show="show" @blur="show = false" @input="onInput" @delete="onDelete" /> -->
    <van-number-keyboard :show="show" theme="custom" extra-key="." close-button-text="完成" @blur="show=false" @input="onInput" @delete="onDelete" />
  </div>
</template>

<script>
export default {
  name: 'NumberKeyboard',
  data() {
    return {
      show: false
    }
  },
  methods: {
    onInput(val) {
      this.$toast(val)
    },
    onDelete() {
      this.$toast('删除')
    }
  }
}
</script>

<style>

</style>