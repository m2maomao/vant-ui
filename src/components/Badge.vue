<template>
  <div class="wrapper">
    <van-badge :content="5">
      <div class="child" />
    </van-badge>
    <van-badge dot>
      <div class="child" />
    </van-badge>
    <van-badge :content="20" max="9">
      <div class="child" />
    </van-badge>
    <van-badge :content="5" color="#1989fa">
      <div class="child" />
    </van-badge>
    <van-badge>
      <div class="child" />
      <template #content>
        <van-icon name="success" class="badge-icon" />
      </template>
    </van-badge>
    <van-badge :content="20" />
  </div>
</template>

<script>
export default {
  name: 'Badge',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  padding: 20px;
  .van-badge__wrapper{
    margin-right: 20px;
  }
}
.child{
  width: 40px;
  height: 40px;
  background: #f2f3f5;
  border-radius: 4px;
}
.badge{
  display: block;
  font-size: 10px;
  line-height: 16px;
}
</style>