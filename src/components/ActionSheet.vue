<template>
  <div>
    <van-cell is-link title="基础用法" @click="show = true" />
    <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect" /> -->
    <!-- <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" close-on-click-action @cancel="onCancel" /> -->
    <!-- <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" description="这时一段描述信息" close-on-click-action /> -->
    <!-- <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" close-on-click-action /> -->
    <van-action-sheet v-model="show" title="标题">
      <div class="content">内容</div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  name: 'ActionSheet',
  data() {
    return {
      show: false,
      actions: [
        {name: '选项一', color:'#ee0a24'}, 
        {name: '选项二', disabled: true}, 
        {name: '选项三', subname: '描述信息', loading: true}
      ]
    }
  },
  methods: {
    onSelect(item) {
      this.show = false
      this.$toast(item.name)
    },
    onCancel() {
      this.$toast('取消')
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  padding: 16px 16px 160px;
}
</style>