<template>
  <div>
    <h3>基础用法</h3>
    <van-tabs v-model="active">
      <van-tab title="标签1">内容1</van-tab>
      <van-tab title="标签2">内容2</van-tab>
      <van-tab title="标签3">内容3</van-tab>
      <van-tab title="标签4">内容4</van-tab>
    </van-tabs>

    <h3>通过名称匹配</h3>
    <van-tabs v-model="activeName">
      <van-tab title="标签 1" name="a">内容a</van-tab>
      <van-tab title="标签 2" name="b">内容b</van-tab>
      <van-tab title="标签 3" name="c">内容c</van-tab>
    </van-tabs>

    <h3>标签栏滚动</h3>
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签' + index" :key="index">
        内容 {{index}}
      </van-tab>
    </van-tabs>

    <h3>禁用标签</h3>
    <van-tabs @disabled="onClickDisabled">
      <van-tab title="标签1">内容1</van-tab>
      <van-tab title="标签2" disabled>内容2</van-tab>
      <van-tab title="标签3">内容3</van-tab>
    </van-tabs>

    <h3>样式风格</h3>
    <van-tabs type="card">
      <van-tab title="标签1">内容1</van-tab>
      <van-tab title="标签2">内容2</van-tab>
      <van-tab title="标签3">内容3</van-tab>
    </van-tabs>

    <h3>点击事件</h3>
    <van-tabs @click="onClick">
      <van-tab title="标签1">内容1</van-tab>
      <van-tab title="标签2">内容2</van-tab>
    </van-tabs>

    <h3>粘性布局</h3>
    <van-tabs v-model="active" sticky>
      <van-tab v-for="index in 4" :title="'选项' + index" :key="index">内容{{index}}</van-tab>
    </van-tabs>

    <h3>自定义标签</h3>
    <van-tabs v-model="active">
      <van-tab v-for="index in 2" :key="index">
        <template #title>
          <van-icon name="more-o" />选项
        </template>
        内容{{index}}
      </van-tab>
    </van-tabs>

    <h3>切换动画</h3>
    <van-tabs v-model="active" animated>
      <van-tab v-for="index in 4" :title="'选项'+index" :key="index">
        内容{{index}}
      </van-tab>
    </van-tabs>

    <h3>滑动切换</h3>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="index in 4" :title="'选项'+index" :key="index">
        内容{{index}}
      </van-tab>
    </van-tabs>

    <h3>滚动导航</h3>
    <van-tabs v-model="active" scrollspy sticky>
    <van-tab v-for="index in 8" :title="'选项 ' + index" :key="index">
      内容 {{ index }}
    </van-tab>

    <h3>异步切换</h3>
    <van-tabs :before-change="beforeChange">
      <van-tab v-for="index in 4" :title="'选项'+index" :key="index">
        内容{{index}}
      </van-tab>
    </van-tabs>
    <h1>.</h1>
</van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data() {
    return {
      active: 1,
      activeName: 'a'
    }
  },
  methods: {
    onClickDisabled(name, title) {
      this.$toast(name + '已被禁用!' + title)
    },
    onClick(name, title) {
      this.$toast(`name: ${name}, title: ${title}`)
    },
    beforeChange(index) {
      if(index === 1) {
        return false
      }
      return new Promise((resolve) => {
        resolve(index!==3)
      })
    }
  }
}
</script>

<style>
.van-tab__pane{
  padding: 30px;
}
</style>