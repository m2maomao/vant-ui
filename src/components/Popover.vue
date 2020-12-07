<template>
  <div>
    <van-popover v-model="showPopover" trigger="click" :actions="actions" @select="onSelect">
      <template #reference>
        <van-button type="primary">浅色风格</van-button>
      </template>
    </van-popover>
    <van-popover placement="top" />
    <van-popover v-model="showPopover" trigger="click">
      <van-grid square clickable :border="false" column-num="3" style="width:240px">
        <van-grid-item v-for="i in 6" :key="i" text="选项" icon="photo-o" @click="showPopover = false" />
      </van-grid>
      <template #reference>
        <van-button type="primary">自定义内容</van-button>
      </template>
    </van-popover>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  data() {
    return {
      showPopover: false,
      actions:[
        {text: '选项1', icon: 'add-o', disabled: true},
        {text: '选项2', icon: 'music-o'},
        {text: '选项3', icon: 'more-o'}
      ]
    }
  },
  methods: {
    onSelect(action) {
      this.$toast(action.text)
    }
  }

}
</script>

<style>

</style>