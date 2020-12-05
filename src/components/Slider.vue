<template>
  <div>
    <van-slider v-model="value" @change="onChange" />
    <h3>自定义按钮</h3>
    <van-slider v-model="value" active-color="#ee0a24">
      <template #button>
        <div class="custom-button">{{value}}</div>
      </template>
    </van-slider>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      value: 50
    }
  },
  methods: {
    onChange(val) {
      this.$toast(`当前值：${val}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-button{
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}
</style>