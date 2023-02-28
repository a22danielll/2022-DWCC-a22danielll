<script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        msg: 'Ejercicio2',
        count1: 0,
        count2: 0,
        count3: 0,
      };
    },
  };
</script>

<template>
  <h3>{{ msg }}</h3>
  <button type="button" @click="count1++">count is {{ count1 }}</button>
  <button type="button" @click="count2++">count is {{ count2 }}</button>
  <button type="button" @click="count3++">count is {{ count3 }}</button>
</template>
