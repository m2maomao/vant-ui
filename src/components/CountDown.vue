<template>
  <div>
    <van-count-down :time="time" />
    <van-count-down :time="time" format="DD天HH时mm分ss秒" />
    <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
    <van-count-down :time="time">
      <template #default="timeData">
        <span class="block">{{timeData.hours}}</span>
        <span class="colon">:</span>
        <span class="block">{{timeData.minutes}}</span>
        <span class="colon">:</span>
        <span class="block">{{timeData.seconds}}</span>
      </template>
    </van-count-down>
    <van-count-down ref="countDown" millisecond :time="3000" :auto-start="false" format="ss:SSS" @finish="finish" />
    <van-grid clickable>
      <van-grid-item text="开始" icon="play-circle-o" @click="start" />
      <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
      <van-grid-item text="重置" icon="replay" @click="reset" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  data() {
    return {
      time: 30*60*60*1000
    }
  },
  methods: {
    start() {
      this.$refs.countDown.start()
    },
    pause() {
      this.$refs.countDown.pause()
    },
    reset() {
      this.$refs.countDown.reset()
    },
    finish() {
      this.$toast('倒计时结束')
    }
  }
}
</script>

<style lang="scss" scoped>
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
</style>