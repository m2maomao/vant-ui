<template>
  <div>
    <h3>基础用法</h3>
    <van-checkbox 
      v-model="checked" 
      checked-color="red"
      shape="square"
      icon-size="24"
    >复选框</van-checkbox>
    <h3>自定义图标</h3>
    <van-checkbox v-model="checked" label-disabled>
      自定义图标
      <template #icon="props">
        <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
      </template>
    </van-checkbox>
    <h3>复选框组</h3>
    <van-checkbox-group v-model="result" direction="horizontal" ref="checkboxGroup">
      <van-checkbox name="a">复选框a</van-checkbox>
      <van-checkbox name="b">复选框b</van-checkbox>
      <van-checkbox name="c">复选框c</van-checkbox>
    </van-checkbox-group>
    <van-button type="primary" @click="checkAll">全选</van-button>
    <van-button type="info" @click="toggleAll">反选</van-button>
    <h3>搭配单元格组件使用</h3>
    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell  v-for="(item, index) in list" clickable :key="item" :title="`复选框${item}`" @click="toggle(index)">
          <template #right-icon>
            <van-checkbox :name="item" ref="checkboxes" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      checked: true,
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
      result: [],
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(true)
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll()
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
.img-icon {
  height: 20px;;
}
</style>