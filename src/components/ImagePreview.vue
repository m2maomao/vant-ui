<template>
  <div>
    <van-image-preview v-model="show" :images="images" @change="onChange">
      <template v-slot:index>第{{index}}页</template>
    </van-image-preview>
  </div>
</template>

<script>
// import {ImagePreview} from 'vant'
export default {
  name: 'ImagePreview',
  data() {
    return {
      show: false,
      index: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ]
    }
  },
  methods: {
    onChange(index) {
      this.index = index
    }
  },
  mounted() {
    // ImagePreview(['https://img.yzcdn.cn/vant/apple-1.jpg']);

    // ImagePreview({
    //   images: [
    //     'https://img.yzcdn.cn/vant/apple-1.jpg',
    //     'https://img.yzcdn.cn/vant/apple-2.jpg',
    //   ],
    //   startPosition: 1,
    //   closeable: true,
    //   onClose() {
    //     this.$toast('关闭')
    //   }
    // });

    // const instance = ImagePreview({
    //   images: [
    //     'https://img.yzcdn.cn/vant/apple-1.jpg',
    //     'https://img.yzcdn.cn/vant/apple-2.jpg',
    //   ],
    //   asyncClose: true
    // })

    // setTimeout(() => {
    //   instance.close()
    // }, 2000)
  }
}
</script>

<style>
.img_box *{
}
</style>