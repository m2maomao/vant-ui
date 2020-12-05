<template>
  <div>
      <h3>基础用法</h3>
      <van-image width="100" height="100" src="http://img.yzcdn.cn/vant/cat.jpeg" />
      <h3>填充模式</h3>
      <van-image width="3rem" height="3rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-image width="3rem" height="3rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-image width="3rem" height="3rem" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-image width="3rem" height="3rem" fit="none" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-image width="3rem" height="3rem" fit="scale-down" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <h3>圆形图片</h3>
      <van-image round width="3rem" height="3rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-image round width="3rem" height="3rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-image round width="3rem" height="3rem" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-image round width="3rem" height="3rem" fit="none" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-image round width="3rem" height="3rem" fit="scale-down" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <h3>图片懒加载</h3>
      <van-image width="100" height="100" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <h3>加载中提示</h3>
      <van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
      <h3>加载失败提示</h3>
      <van-image src="https://img.yzcdn.cn/vant/cat.jpeg1" width="200px" height="200px">
        <template v-slot:error>加载失败</template>
      </van-image>
  </div>
</template>

<script>
export default {
  name: 'Images',
  data() {
    return {

    }
  }
}
</script>

<style>

</style>