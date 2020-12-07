<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {

    }
  },
  methods: {
    onClickLeft() {
      this.$toast('返回')
    },
    onClickRight() {
      this.$toast('按钮')
    }
  }
}
</script>

<style>

</style>