<template>
  <div>
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>

    <van-grid :column-num="3">
      <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
    </van-grid>

    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
    </van-grid>

    <van-grid square>
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <h3>格子间距</h3>
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" icon="icon-o" text="文字" />
    </van-grid>
    <h3>内容横排</h3>
    <van-grid direction="horizontal" :column-num="2">
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <h3>页面导航</h3>
    <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" text="路由跳转" to="/" />
      <van-grid-item icon="search" text="URL跳转" url="/vant/mobile.html" />
    </van-grid>
    <h3>徽标提示</h3>
    <van-grid :column-num="2">
      <van-grid-item icon="home-o" text="文字" dot />
      <van-grid-item icon="search" text="文字" badge="99+" />
    </van-grid>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>