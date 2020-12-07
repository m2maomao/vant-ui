<template>
  <div>
    <van-empty description="描述文字" />
    <van-empty image="error" description="描述文字" />
    <van-empty image="network" description="描述文字" />
    <van-empty image="search" description="描述文字" />
    <van-empty class="custom-image" image="https://img.yzcdn.cn/vant/custom-empty-image.png" description="描述文字" />
    <van-empty description="描述文字">
      <van-button round type="danger" class="bottom-button">按钮</van-button>
    </van-empty>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.custom-image .van-empty__image{
  width: 90px;
  height: 90px;
}
.bottom-button{
  width: 160px;
  height: 40px;
}
</style>