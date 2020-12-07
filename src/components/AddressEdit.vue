<template>
  <div>
    <van-address-edit 
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from '../../public/static/js/area.js'
export default {
  name: 'AddressEdit',
  data() {
    return {
      areaList,
      searchResult: []
    }
  },
  methods: {
    onSave() {
      this.$toast('save')
    },
    onDelete() {
      this.$toast('delete')
    },
    onChangeDetail(val) {
      if(val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '重庆市茶园'
          }
        ]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style>

</style>