<template>
  <div>
    <h3>选择年月日</h3>
    <van-datetime-picker
      v-model="currentDate"
      type="year-month"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
    />
    <h3>选项过滤器</h3>
    <van-datetime-picker v-model="currentTime" type="time" :filter="filter" />
    <h3>自定义排序</h3>
    <van-datetime-picker 
      v-model="currentDate" 
      type="date" 
      title="自定义列排序" 
      :columns-order="['month', 'day', 'year']" 
      :formatter="formatter" 
    />
  </div>
</template>

<script>
export default {
  name: 'DatetimePicker',
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      currentTime: '12:00'
    }
  },
  methods: {
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`
      } 
      if (type === 'month') {
        return `${val}月`
      }
      if (type === 'day') {
        return `${val}日`
      }
      return val
    },
    filter(type, options) {
      if(type === 'minute') {
        return options.filter((opt) => opt % 5 === 0)
      }
      return options
    }
  }
}
</script>

<style>

</style>