<template>
  <div>
    <van-contact-edit
      is-edit
      show-set-default
      :contact-info="editingContact"
      set-default-label="设为默认联系人"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
export default {
  name: 'ContactEdit',
  data() {
    return {
      editingContact: {
        name: '123',
        tel: '13812344321'
      }
    }
  },
  methods: {
    onSave(contactInfo) {
      this.$toast(contactInfo.name)
    },
    onDelete(contactInfo) {
      this.$toast('删除', contactInfo)
    }
  }
}
</script>

<style>

</style>