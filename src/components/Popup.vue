<template>
  <div>
    <h3>基础用法</h3>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <!-- <van-popup v-model="show">内容</van-popup> -->
    <h3>弹出位置</h3>
    <!-- <van-popup v-model="show" position="top" :style="{height: '30%'}" /> -->
    <h3>关闭图标</h3>
    <!-- <van-popup v-model="show" closeable position="bottom" :style="{height:'30%'}" /> -->
    <!-- <van-popup v-model="show" closeable close-icon="close" position="bottom" :style="{height: '30%'}" /> -->
    <!-- <van-popup v-model="show" closeable close-icon-position="top-left" position="bottom" :style="{height:'30%'}" /> -->
    <h3>圆角弹窗</h3>
    <!-- <van-popup v-model="show" round position="bottom" :style="{height: '30%'}" /> -->
    <h3>指定挂载位置</h3>
    <!-- <van-popup v-model="show" get-container="body" /> -->
    <!-- <van-popup v-model="show" get-container="#app" /> -->
    <van-popup v-model="show" :get-container="getContainer" />
    <div class="my-container"></div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPopup() {
      this.show = true
    },
    getContainer() {
      return document.querySelector('.my-container')
    }
  }
}
</script>

<style>

</style>