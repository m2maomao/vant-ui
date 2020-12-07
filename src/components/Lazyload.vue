<template>
  <div>
    <img v-for="(img, index) in imageList" v-lazy="img" :key="index"/>
    <lazy-component>
      <img v-for="(img, index) in imageList" v-lazy="img" :key="index"/>
    </lazy-component>
  </div>
</template>

<script>
export default {
  name: 'Lazyload',
  data() {
    return {
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ]
    }
  }
}
</script>

<style>

</style>