<template>
  <div>
    <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list> -->
    <!-- <van-list v-model="loading" :error.sync="error" error-text="请求失败，点击重新加载" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="title" />
    </van-list> -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if(this.refreshing) {
          this.list = []
          this.refreshing = false
        }
        for(let i=0; i< 10; i++) {
          this.list.push(this.list.length+1)
        }
        this.loading = false
        if(this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)

      // fetchSomeThing().catch(() => {
      //   this.error = true
      // })
    },
    onRefresh() {
      this.finished = false
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style>

</style>