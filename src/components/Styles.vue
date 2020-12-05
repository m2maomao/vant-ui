<template>
  <div>
    <h3>文字省略</h3>
    <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略；这是一段最多显示一行的文字，多余的内容会被省略</div>
    <div class="van-multi-ellipsis--l2">这是一段最多显示两行的文字，多余的内容会被省略;这是一段最多显示两行的文字，多余的内容会被省略;这是一段最多显示两行的文字，多余的内容会被省略</div>
    <div class="van-multi-ellipsis--l3">这是一段最多显示三行的文字，多余的内容会被省略；这是一段最多显示三行的文字，多余的内容会被省略；这是一段最多显示三行的文字，多余的内容会被省略；这是一段最多显示三行的文字，多余的内容会被省略；</div>
    <h3>1px边框</h3>
    <div class="van-hairline--top"></div>
    <div class="van-hairline--bottom"></div>
    <div class="van-hairline--left"></div>
    <div class="van-hairline--right"></div>
    <div class="van-hairline--top-bottom"></div>
    <div class="van-hairline--surround"></div>
    <h3>动画</h3>
    <van-button type="primary" plain @click="visible1 = true">Fade</van-button>
    <van-button type="primary" plain @click="visible2 = true">Slide Up</van-button>
    <van-button type="primary" plain @click="visible3 = true">Slide Down</van-button>
    <van-button type="primary" plain @click="visible4 = true">Slide Left</van-button>
    <van-button type="primary" plain @click="visible5 = true">Slide Right</van-button>
    <!-- 淡入 -->
    <transition name="van-fade">
      <div v-show="visible1">Fade</div>
    </transition>
    <!-- 上滑进入 -->
    <transition name="van-slide-up">
      <div v-show="visible2">Slide Up</div>
    </transition>
    <!-- 下滑进入 -->
    <transition name="van-slide-down">
      <div v-show="visible3">Slide Down</div>
    </transition>
    <!-- 左滑进入 -->
    <transition name="van-slide-left">
      <div v-show="visible4">Slide Left</div>
    </transition>
    <!-- 右滑进入 -->
    <transition name="van-slide-right">
      <div v-show="visible5">Slide Right</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Styles',
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
    }
  }
}
</script>

<style>

</style>