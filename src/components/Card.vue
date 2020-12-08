<template>
  <div>
    <h3>基础用法</h3>
    <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
    <h3>营销信息</h3>
    <van-card num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
    <h3>自定义内容</h3>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>