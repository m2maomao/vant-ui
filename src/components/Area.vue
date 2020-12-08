<template>
  <div>
    <van-area 
      title="标题" 
      :area-list="areaList" 
      :columns-num="2"
      :columns-placeholder="['请选择', '请选择']"
    />
  </div>
</template>

<script>
import areaList from '../../public/static/js/area'
export default {
  name: 'Area',
  data() {
    return {
      areaList
    }
  }
}
</script>

<style>

</style>