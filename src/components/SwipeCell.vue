<template>
  <div>
    <h3>基础用法</h3>
    <van-swipe-cell>
      <template #left>
        <van-button square type="primary" text="选择" />
      </template>
      <van-cell :border="false" title="单元格" value="内容" />
      <template #right>
        <van-button square type="danger" text="删除" />
        <van-button square type="primary" text="收藏" />
      </template>
    </van-swipe-cell>
    <h3>自定义内容</h3>
    <van-swipe-cell>
      <van-card num="2" price="2.00" desc="描述信息" title="商品标题" class="goods-card" thumb="https://img.yzcdn.cn/vant/cat.jpeg" />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <h3>异步关闭</h3>
    <van-swipe-cell :before-close="beforeClose">
      <template #left>
        <van-button square type="primary" text="选择" />
      </template>
      <van-cell :border="false" title="单元格" value="内容" />
      <template #right>
        <van-button square type="danger" text="删除" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  name: 'SwipeCell',
  data() {
    return {

    }
  },
  methods: {
    beforeClose({position, instance}) {
      switch(position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close()
          break
        case 'right':
          this.$dialog.confirm({
            message: '确定删除吗?'
          }).then(() => {
            instance.close()
          })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-card{
  margin: 0;
  background-color: #fff;
}
.delete-button{
  height: 100%;
}
</style>