<template>
  <div>
    <van-cell title="显示分享面板" @click="showShare=true" />
    <van-cell title="显示自定义图标" @click="showShare2=true" />
    <van-cell title="展示描述信息" @click="showShare3=true" />
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    <van-share-sheet v-model="showShare2" :options="options2" />
    <van-share-sheet v-model="showShare3" title="立即分享给好友" description="描述信息" :options="options" />
  </div>
</template>

<script>
export default {
  name: 'ShareSheet',
  data() {
    return {
      showShare: false,
      showShare2: false,
      showShare3: false,
      options: [
        [
          {name: '微信', icon: 'wechat'},
          {name: '微博', icon: 'weibo'}
        ],
        [
          {name: '复制链接', icon: 'link', description: '描述信息~'},
          {name: '分享海报', icon: 'poster'},
          {name: '二维码', icon: 'qrcode'}
        ]
      ],
      options2: [
        {name: '名称', icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png'},
        {name: '名称', icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png'},
        {name: '名称',icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'}
      ]
    }
  },
  methods: {
    onSelect(option) {
      this.$toast(option.name)
      this.showShare = false
    }
  }
}
</script>

<style>

</style>