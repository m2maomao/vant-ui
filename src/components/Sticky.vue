<template>
  <div>
    <van-sticky>
      <van-button type="primary">基础用法</van-button>
    </van-sticky>
    <van-sticky :offset-top="50">
      <van-button type="info">吸顶距离</van-button>
    </van-sticky>
    <div ref="container" style="height:150px">
      <van-sticky :container="container">
        <van-button type="warning">指定容器</van-button>
      </van-sticky>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  name: 'Sticky',
  data() {
    return {
      container: null
    }
  },
  mounted() {
    this.container = this.$refs.container
  }
}
</script>

<style>

</style>