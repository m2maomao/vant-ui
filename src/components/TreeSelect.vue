<template>
  <div>
    <van-tree-select :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex" />
  </div>
</template>

<script>
export default {
  name: 'TreeSelect',
  data() {
    return {
      items: [
        {
          text: 'a',
          id: 1,
          children: [
            {
              text: 'a1',
              id:2
            },
            {
              text: 'a2',
              id:3
            }
          ]
        },
        {
          text: 'b',
          id: 4,
          children: [
            {
              text: 'b1',
              id: 5
            },
            {
              text: 'b2',
              id: 6
            }
          ]
        }
      ],
      activeId: 1,
      activeIndex: 0
    }
  }
}
</script>

<style>

</style>