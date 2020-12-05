<template>
  <div>
    <h3>基础用法</h3>
    <van-row>
      <van-col span="8">span:8</van-col>
      <van-col span="8">span:8</van-col>
      <van-col span="8">span:8</van-col>
    </van-row> 
    <van-row>
      <van-col span="4">span:4</van-col>
      <van-col span="10" offset="4">offset:4, span:10</van-col>
    </van-row>
    <van-row>
      <van-col offset="12" span="12">offset:12, span:12</van-col>
    </van-row>
    <h3>设置列元素间距</h3>
    <van-row gutter="20" class="gutter-box">
      <van-col span="8">span:8</van-col>
      <van-col span="8">span:8</van-col>
      <van-col span="8">span:8</van-col>
    </van-row>
    <h3>Flex布局</h3>
    <!-- 左对齐 -->
    <van-row type="flex">
      <van-col span="6">span:6</van-col>
      <van-col span="6">span:6</van-col>
      <van-col span="6">span:6</van-col>
    </van-row>
    <!-- 居中 -->
    <van-row type="flex" justify="center">
      <van-col span="6">span:6</van-col>
      <van-col span="6">span:6</van-col>
      <van-col span="6">span:6</van-col>
    </van-row>
    <!-- 右对齐 -->
    <van-row type="flex" justify="end">
      <van-col span="6">span:6</van-col>
      <van-col span="6">span:6</van-col>
      <van-col span="6">span:6</van-col>
    </van-row>
    <!-- 两端对齐 -->
    <van-row type="flex" justify="space-between">
      <van-col span="6">span:6</van-col>
      <van-col span="6">span:6</van-col>
      <van-col span="6">span:6</van-col>
    </van-row>
    <!-- 每个元素的两侧间隔相等 -->
    <van-row type="flex" justify="space-around">
      <van-col span="6">span:6</van-col>
      <van-col span="6">span:6</van-col>
      <van-col span="6">span:6</van-col>
    </van-row>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.gutter-box{
  .van-col{
    background: cornflowerblue;
  }
}
</style>
