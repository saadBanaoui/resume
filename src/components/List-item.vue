<template>
  <div class="list-item" @contextmenu.prevent="showControl" v-if="listItem">
    <slot></slot>
    <div v-if="listControl" class="list-control">
      <span @click="deleteControl">delete</span>
      <span @click="cancelControl">cancel</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ListItem',
    data: function () {
      return {
        listControl: false,
        listItem: true
      }
    },
    methods: {
      showControl: function () {
        this.listControl = true
      },
      cancelControl: function () {
        this.listControl = false
      },
      deleteControl: function () {
        this.listItem = false
      }
    }
  }
</script>
