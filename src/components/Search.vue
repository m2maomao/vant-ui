<template>
  <div>
    <h3>基础用法</h3>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <h3>事件监听</h3>
    <form action="/">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </form>
    <h3>搜索框内容对齐</h3>
    <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
    <h3>自定义背景色</h3>
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <h3>自定义按钮</h3>
    <van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(val) {
      console.log('val', val)
      this.$toast(val)
    },
    onCancel() {
      this.$toast('取消')
    }
  }
}
</script>

<style>

</style>