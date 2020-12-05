<template>
  <div>
    <van-cell title="选择单个日期" :value="date" @click="show=true" />
    <van-calendar
      type="range"
      v-model="show"
      position="right"
      :round="false"
      :show-confirm="false"
      :max-range="3"
      :poppable="false"
      first-day-of-week="0"
      color="#1989fa" 
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      show: false,
      date: null,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2020, 0, 30)
    }
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm(date) {
      // this.date = this.formatDate(date)

      this.show = false;
      const [start, end] = date
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`
    }
  }
}
</script>

<style>

</style>