<template>
  <div>
    <van-circle 
      v-model="currentRate" 
      :rate="30" 
      :speed="100" 
      :text="text" 
      :stroke-width="60"
      :color="gradientColor"
      :clockwise="false"
      size="120px"
      layer-color="#ebedf0"
    />
  </div>
</template>

<script>
export default {
  name: 'Circles',
  data() {
    return {
      currentRate: 0,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      }
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%'
    }
  }
}
</script>

<style>

</style>