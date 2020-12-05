<template>
  <div>
    <h3>基础用法</h3>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
    </van-collapse>
    <h3>手风琴</h3>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
    </van-collapse>
    <h3>自定义标题内容</h3>
    <van-collapse v-model="activeNames">
      <van-collapse-item name="1">
        <template #title>
          <div>
            <span>标题1</span>
            <van-icon name="question-o" />
          </div>
        </template>
        内容
      </van-collapse-item>
      <van-collapse-item title="标题2" name="2" icon="shop-o">内容</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  data() {
    return {
      activeNames: ['1'],
      activeName: '1'
    }
  }
}
</script>

<style>

</style>