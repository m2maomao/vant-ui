<template>
  <div>
    <h3>基础用法</h3>
    <van-uploader :after-read="afterRead" />
    <h3>文件预览</h3>
    <van-uploader v-model="fileList" multiple />
    <h3>上传状态</h3>
    <van-uploader v-model="fileList2" :after-read="afterRead2" />
    <h3>自定义上传样式</h3>
    <van-uploader>
      <van-button icon="plus" type="primary">上传文件</van-button>
    </van-uploader>
    <h3>自定义预览样式</h3>
    <van-uploader v-model="fileList">
      <template #preview-cover="{ file }">
        <div class="preview-cover van-ellipsis">{{ file.name }}</div>
      </template>
    </van-uploader>
    <h3>上传前置处理</h3>
    <van-uploader :before-read="asyncBeforeRead" />
  </div>
</template>

<script>
export default {
  name: 'Uploader',
  data() {
    return {
      fileList: [
        {url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1', file: {name: '图片1'}},
        {url: 'https://cloud-image', isImage: true, name: '图片2', file: {name: '图片2'} }
      ],
      fileList2: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...'
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: '上传失败'
        }
      ]
    }
  },
  methods: {
    afterRead(file) {
      console.log(file)
    },
    afterRead2(file) {
      file.status = 'uploading'
      file.message = '上传中...'
      setTimeout(() => {
        file.status = 'failed',
        file.message = '上传失败'
      } , 1000)
    },
    beforeRead(file) {
      if(file.type !== 'image/jpeg') {
        this.$toast('请上传jpg格式图片')
        return false
      }
      return true
    },
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if(file.type !== 'image/jpeg') {
          this.$toast('请上传jpg格式图片')
          reject()
        } else {
          let img = new File(['foo'], 'bar.jpg', {type: 'image/jpeg'})
          resolve(img)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-cover {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
</style>