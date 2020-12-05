<template>
  <div class="hello">
    <div>
      <van-cell-group>
        <van-cell title="单元格" value="内容"></van-cell>
        <van-cell title="单元格" value="内容"></van-cell>
      </van-cell-group>
    </div>
    <div>
      <van-checkbox v-model="checked" ref="checkbox">
        <template #icon="props">
          <img :src="props.checked ? activeIcon : inactiveIcon" />
        </template>
      </van-checkbox>
    </div>
    <h3>按钮类型</h3>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <h3>朴素按钮</h3>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="info">朴素按钮</van-button>
    <h3>细边框</h3>
    <van-button plain hairline type="primary">细边框按钮</van-button>
    <h3>禁用状态</h3>
    <van-button disabled type="primary">禁用状态</van-button>
    <h3>加载状态</h3>
    <van-button loading type="primary" />
    <van-button loading type="primary" loading-type="spinner" />
    <van-button loading type="info" loading-text="加载中..." />
    <h3>按钮形状</h3>
    <van-button square type="primary">方形按钮</van-button>
    <van-button round type="info">圆形按钮</van-button>
    <h3>图标按钮</h3>
    <van-button icon="plus" type="primary" />
    <h3>按钮尺寸</h3>
    <van-button type="primary" size="large">大号按钮</van-button>
    <van-button type="primary" size="normal">普通按钮</van-button>
    <van-button type="primary" size="small">小型按钮</van-button>
    <van-button type="primary" size="mini">迷你按钮</van-button>
    <h3>块级元素</h3>
    <van-button type="primary" block>块级元素</van-button>
    <h3>页面导航</h3>
    <van-button type="primary" url="/vant/mobile.html">URL跳转</van-button>
    <van-button type="primary" to="index">路由跳转</van-button>
    <h3>自定义颜色</h3>
    <van-button color="#7232dd">单色按钮</van-button>
    <van-button color="#7232dd" plain>单色按钮</van-button>
    <van-button color="linear-gradient(to right, #ff6034,#ee0a24)">渐变色按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return({
      checked: false,
      activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
      inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png'
    })
  },
  mounted() {
    // console.log('checked1:', this.checked)
    this.$refs.checkbox.toggle();
    console.log('checked2:', this.checked)
    setTimeout(() => {
      console.log(this.checked)
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
