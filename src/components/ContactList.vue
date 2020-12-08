<template>
  <div>
    <van-contact-list
      v-model="chosenContactId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  data() {
    return {
      chosenContactId: '1',
      list: [
        {
          id: '1',
          name: 'zs',
          tel: '11111111111',
          isDefault: true
        },
        {
          id: '2',
          name: 'ls',
          tel: '22222222222',
          isDefault: false
        }
      ]
    }
  },
  methods: {
    onAdd() {
      this.$toast('新增')
    },
    onEdit(contact) {
      this.$toast('编辑' + contact.id)
    },
    onSelect(contact) {
      this.$toast('选择' + contact.id)
    }
  }
}
</script>

<style>

</style>