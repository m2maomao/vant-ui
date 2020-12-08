<template>
  <div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
export default {
  name: 'Sku',
  data() {
    return {
      show: false,
      sku: {},
      goods: {},
      messageConfig: {}
    }
  }
}
</script>

<style>

</style>