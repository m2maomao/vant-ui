<template>
  <div>
    <van-password-input :value="value" :focused="showKeyboard" @focus="showKeyboard = true" />
    <van-number-keyboard v-model="value" :show="showKeyboard" @blur="showKeyboard = false" />
  </div>
</template>

<script>
export default {
  name: 'PasswordInput',
  data() {
    return {
      value: '123',
      showKeyboard: true
    }
  },
}
</script>

<style>

</style>