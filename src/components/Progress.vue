<template>
  <div>
    <van-progress :percentage="50" />
    <van-progress :percentage="50" stroke-width="8" />
    <van-progress inactive :percentage="50" />
    <van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
    <van-progress pivot-text="红色" color="#ee0a24" :percentage="50" />
    <van-progress pivot-text="紫色" pivot-color="#7232dd" color="linear-gradient(to right, #be99ff, #7232dd)" :percentage="75" />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>