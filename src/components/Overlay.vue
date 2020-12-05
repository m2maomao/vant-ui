<template>
  <div>
    <h3>基础用法</h3>
    <van-button type="primary" text="显示遮罩层" @click="show = true" />
    <van-overlay :show="show" @click="show = false" />
    <h3>嵌入内容</h3>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block" />
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block{
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>