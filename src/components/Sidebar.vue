<template>
  <div>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>

    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="标签名称" dot />
      <van-sidebar-item title="标签名称" badge="5" />
      <van-sidebar-item title="标签名称" badge="99+" disabled />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      activeKey: 0
    }
  },
  methods: {
    onChange(idx) {
      this.$notify({
        type: 'primary',
        message: idx
      })
    }
  }
}
</script>

<style>

</style>