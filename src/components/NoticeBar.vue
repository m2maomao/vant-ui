<template>
  <div>
    <van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率时衡量代码质量的唯一标准" />
    <van-notice-bar scrollable text="技术时开发它的人的共同灵魂" />
    <van-notice-bar wrapable :scrollable="false" text="在代码阅读过程中人们说脏话的频率时衡量代码质量的唯一标准" />
    <van-notice-bar mode="closeable" text="技术时开发它的人的共同灵魂" ></van-notice-bar>
    <van-notice-bar mode="link" text="技术时开发它的人的共同灵魂" />
    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" text="技术时开发它的人的共同灵魂" />
    <van-notice-bar left-icon="volume-o" :scrollable="false">
      <van-swipe vertical class="notice-swipe" :autoplay="2000" :show-indicators="false">
        <van-swipe-item>内容1</van-swipe-item>
        <van-swipe-item>内容2</van-swipe-item>
        <van-swipe-item>内容3</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.notice-swipe{
  height: 40px;
  line-height: 40px;
}
</style>