<template>
  <div>
    <h3>基础用法</h3>
    <van-submit-bar :price="3000" button-text="提交订单" @submit="onSubmit" />
    <van-submit-bar
      disabled
      :price="3050"
      button-text="提交订单"
      tip="你的收货地址不支持同城送，我们已为你推荐快递"
      tip-icon="info-o"
      @submit="onSubmit"
    />
    <van-submit-bar loading :price="3050" button-text="提交订单" @submit="onSubmit" />
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送，<span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: 'SubmitBar',
  data() {
    return {
      checked: true
    }
  },
  methods: {
    onSubmit() {

    },
    onClickEditAddress() {
      
    }
  }
}
</script>

<style>

</style>