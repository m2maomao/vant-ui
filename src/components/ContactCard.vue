<template>
  <div>
    <h3>添加联系人</h3>
    <van-contact-card type="add" @click="onAdd" />
    <h3>编辑联系人</h3>
    <van-contact-card 
      type="edit" 
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="onEdit"
    />
    <h3>不可编辑</h3>
    <van-contact-card type="edit" name="张三" tel="13000000000" :editable="false" />
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  data() {
    return {
      currentContact: {
        name: 'michael',
        tel: '13888888888'
      }
    }
  },
  methods: {
    onAdd() {
      this.$toast('新增')
    },
    onEdit() {
      this.$toast('编辑')
    }
  }
}
</script>

<style>

</style>