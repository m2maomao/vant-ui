<template>
  <div>
    <van-radio-group v-model="radio" direction="horizontal">
      <van-radio name="1">单选框1</van-radio>
      <van-radio name="2">单选框2</van-radio>
    </van-radio-group>

    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="单选框1" clickable @click="radio = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="单选框2" clickable @click="radio = '2'">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      radio: ''
    }
  }
}
</script>

<style>

</style>