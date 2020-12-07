<template>
  <div>
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="A" />
      <van-cell title="文本a1" />
      <van-cell title="文本a2" />
      <van-cell title="文本a3" />
      <van-cell title="文本a4" />
      <van-cell title="文本a5" />
      <van-index-anchor index="B" />
      <van-cell title="文本b1" />
      <van-cell title="文本b2" />
      <van-cell title="文本b3" />
      <van-cell title="文本b4" />
      <van-cell title="文本b5" />
      <van-index-anchor index="C" />
      <van-cell title="文本c1" />
      <van-cell title="文本c2" />
      <van-cell title="文本c3" />
      <van-cell title="文本c4" />
      <van-cell title="文本c5" />
      <van-index-anchor index="D" />
      <van-cell title="文本d1" />
      <van-cell title="文本d2" />
      <van-cell title="文本d3" />
      <van-cell title="文本d4" />
      <van-cell title="文本d5" />
    </van-index-bar>
  </div>
</template>

<script>
export default {
  name: 'IndexBar',
  data() {
    return {
      indexList: ['A', 'B', 'C', 'D']
    }
  }
}
</script>

<style>

</style>