<template>
  <div style="min-height:100vh">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <p>刷新次数：{{count}}</p>
    </van-pull-refresh>

    <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
      <template #pulling="props">
        <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" :style="{transform:`scale(${props.distance / 80})`}" />
      </template>
      <template #lossing>
        <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
      </template>
      <template #loading>
        <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
      </template>
      <p>刷新次数：{{count}}</p>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: 'PullRefresh',
  data() {
    return {
      isLoading: false,
      count: 0
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
</style>