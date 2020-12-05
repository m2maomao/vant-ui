<template>
  <div>
    <h3>基础用法</h3>
    <van-cell-group>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    </van-cell-group>
    <h3>自定义类型</h3>
    <van-field v-model="text" label="文本" />
    <van-field v-model="tel" type="tel" label="手机号" />
    <van-field v-model="digit" type="digit" label="整数" />
    <van-field v-model="number" type="number" label="数字" />
    <van-field v-model="password" type="password" label="密码" />
    <h3>禁用输入框</h3>
    <van-cell-group>
      <van-field label="文本" value="输入框只读" readonly />
      <van-field label="文本" value="输入框已禁用" disabled />
    </van-cell-group>
    <h3>显示图标</h3>
    <van-cell-group>
      <van-field v-model="value1" label="文本" left-icon="smile-o" right-icon="warning-o" placeholder="显示图标" />
      <van-field v-model="value2" label="文本" left-icon="music-o" placeholder="显示清除图标" clearable />
    </van-cell-group>
    <h3>错误提示</h3>
    <van-cell-group>
      <van-field v-model="username" error required label="用户名" placeholder="请输入用户名" />
      <van-field v-model="phone" required label="手机号" placeholder="请输入手机号" error-message="手机号码格式错误" />
    </van-cell-group>
    <h3>插入按钮</h3>
    <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
      <template #button>
        <van-button size="small" type="primary">发送验证码</van-button>
      </template>
    </van-field>
    <h3>格式化输入内容</h3>
    <van-field v-model="value1" label="文本" :formatter="formatter" placeholder="在输入时执行格式化" />
    <van-field v-model="value2" label="文本" :formatter="formatter" format-trigger="onBlur" placeholder="在失焦时执行格式化" />
    <h3>高度自适应</h3>
    <van-field v-model="message" rows="2" autosize label="留言" type="textarea" maxlength="50" placeholder="请输入留言" show-word-limit />
    <van-field v-model="value" label="文本" placeholder="输入框内容右对齐" type="digit" input-align="right">
      <template #right-icon>元</template>
    </van-field>
  </div>
</template>

<script>
export default {
  name: 'Field',
  data() {
    return {
      value: '',
      text: '',
      tel: '',
      digit: '',
      number: '',
      password: '',
      value1: '',
      value2: '',
      username: '',
      phone: '',
      sms: '',
      message: ''
    }
  },
  methods: {
    formatter(value) {
      return value.replace(/\d/g, '')
    }
  }
}
</script>

<style>

</style>