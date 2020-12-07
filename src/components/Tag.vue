<template>
  <div>
    <van-tag type="primary">标签</van-tag>
    <van-tag type="success">标签</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="warning">标签</van-tag>
    <van-tag type="primary" plain>标签</van-tag>
    <van-tag type="primary" round>标签</van-tag>
    <van-tag type="primary" mark>标签</van-tag>
    <van-tag v-if="show" closeable size="medium" type="primary" @close="close">标签</van-tag>
    <van-tag type="primary">标签</van-tag>
    <van-tag type="primary" size="medium">标签</van-tag>
    <van-tag type="primary" size="large">标签</van-tag>
    <van-tag color="#7232dd">标签</van-tag>
    <van-tag color="#ffe1e1" text-color="#ad0000">标签</van-tag>
    <van-tag color="#7232dd" plain>标签</van-tag>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  data() {
    return {
      show: true
    }
  },
  methods: {
    close() {
      this.show = false
    }
  }
}
</script>

<style>

</style>