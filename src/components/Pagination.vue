<template>
  <div>
    <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />  
    <van-pagination mode="simple" v-model="currentPage" :total-items="24" :items-per-page="5" />
    <van-pagination v-model="currentPage" :total-items="125" :show-page-size="3" force-ellipses />
    
    <van-pagination v-model="currentPage" :total-items="50" :show-page-size="5">
      <template #prev-text>
        <van-icon name="arrow-left" />
      </template>
      <template #next-text>
        <van-icon name="arrow" />
      </template>
      <template #page="{text}">{{text}}</template>
    </van-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      currentPage:1
    }
  }
}
</script>

<style>

</style>