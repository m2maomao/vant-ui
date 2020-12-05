<template>
  <div>
    <van-picker 
      title="标题" 
      show-toolbar 
      :columns="columns" 
      :default-index="2"
      @confirm="onConfirm" 
      @cancel="onCancel" 
      @change="onChange" 
    />
    <van-field readonly clickable label="城市" :value="value" placeholder="选择城市" @click="showPicker = true" />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'Picker',
  data() {
    return {
      value: '',
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华']
    }
  },
  methods: {
    onConfirm(value, index) {
      this.value = value
      this.showPicker = false
      this.$toast(`当前值:${value},当前索引:${index}`)
    },
    onChange(picker, value, index) {
      this.$toast(`当前值:${value},当前索引:${index}`)
    },
    onCancel() {
      this.$toast('取消')
    }
  }
}
</script>

<style>

</style>