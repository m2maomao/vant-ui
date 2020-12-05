<template>
  <div>
    <van-rate v-model="value" @change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'Rate',
  data() {
    return {
      value: null
    }
  },
  methods: {
    onChange(val) {
      this.$toast(`当前值:${val}`)
    }
  }
}
</script>

<style>

</style>