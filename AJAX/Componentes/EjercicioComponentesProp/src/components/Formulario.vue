<script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        titulo: 'Formulario',
        name: String,
        num: String,
        email: String,
      };
    },
    methods: {
      añadir() {
        this.$emit('nuevo', this.name, this.num, this.email);
      },
    },
    $emit: ['nuevo'],
  };
</script>

<template>
  <form>
    <h3>{{ titulo }}</h3>
    <label>Nombre: </label>
    <input type="text" v-model="name" />

    <br />
    <label>Telefono: </label>
    <input type="text" v-model="num" />
    <br />
    <label>Email: </label>
    <input type="text" v-model="email" />
    <br /><br />
    <button @click.prevent="añadir()">Añadir</button>
  </form>
</template>

<style scoped>
  form {
    border: 1px solid black;
  }
</style>
