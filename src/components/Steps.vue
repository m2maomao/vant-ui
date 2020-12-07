<template>
  <div>
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>

    <van-steps :active="active" active-icon="success" active-color="#38f">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>

    <van-steps direction="vertical" :active="0">
      <van-step>
        <h3>[城市]物流状态1</h3>
        <p>2016-09-09 12:12</p>
      </van-step>
      <van-step>
        <h3>[城市]物流状态1</h3>
        <p>2016-09-09 12:12</p>
      </van-step>
      <van-step>
        <h3>[城市]物流状态1</h3>
        <p>2016-09-09 12:12</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: 'active',
  data() {
    return {
      active: 1
    }
  }
}
</script>

<style>

</style>