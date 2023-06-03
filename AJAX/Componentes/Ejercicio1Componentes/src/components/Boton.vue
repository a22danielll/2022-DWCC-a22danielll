<script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        msg: 'ola mundo ',
      };
    },

    methods: {
      mayuscula() {
        this.msg = this.msg.toUpperCase();
      },
      minusculas() {
        this.msg = this.msg.toLowerCase();
      },
      esclamacion() {
        this.msg = this.msg + '!';
      },
    },
  };
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="mayuscula">Mayuscula</button>
  <button @click="minusculas">Mayuscula</button>
  <button @click="esclamacion">Esclamacion</button>
  <div>
    <button @click="esclamacion"></button>
  </div>
</template>
