<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
    
    <van-tabbar v-model="activeName">
      <van-tabbar-item icon="home-o" name="home">标签</van-tabbar-item>
      <van-tabbar-item icon="search" name="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="friends" badge="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" name="setting" badge="99+">标签</van-tabbar-item>
    </van-tabbar>

    <van-tabbar v-model="active">
      <van-tabbar-item badge="3">
        <span>自定义</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>

    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
      <van-tabbar-item icon="search">标签2</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
    </van-tabbar>

    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
      <van-tabbar-item icon="search">标签2</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
    </van-tabbar>

    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      active: 0,
      activeName: 'search',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      }
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