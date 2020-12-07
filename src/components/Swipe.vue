<template>
  <div class="my-swipe">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <van-swipe @change="onChange">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <van-swipe :loop="false" :width="200">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <van-swipe @change="onChange">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{current + 1}} / 4
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swipe',
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      current: 0
    }
  },
  methods: {
    onChange(idx) {
      this.current = idx
      this.$toast(`当前swipe索引：${idx}`)

    }
  }
}
</script>

<style>
.my-swipe .van-swipe-item{
  margin-top: 20px;
  color:#fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background: #39a9ed;
}
img{
  width: 100%;
}
.custom-indicator{
  position: absolute;
  right:5px;
  bottom: 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>