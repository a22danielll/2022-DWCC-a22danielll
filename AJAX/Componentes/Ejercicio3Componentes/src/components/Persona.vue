<script>
  import { ref } from 'vue';
  export default {
    data() {
      return {};
    },
    methods: {
      /*anhadir() {
        this.$emit('nuevo', this.id, this.name, this.num, this.email);
      },*/
    },
    $emit: ['nuevo'],
  };
</script>

<template></template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
