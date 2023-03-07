<script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        titulo: 'Formulario',
      };
    },
    methods: {
      añadir() {
        this.contactos.push(this.id++, this.name, this.num, this.email);
      },
    },
    props: {
      id: Number,
      name: String,
      num: String,
      email: String,
    },
  };
</script>

<template>
  <form>
    <h3>{{ titulo }}</h3>

    <label>Nombre: </label>
    <input type="text" name="nombre" :value="name" />
    <br />
    <label>Telefono: </label>
    <input type="text" name="telefono" :value="num" />
    <br />
    <label>Email: </label>
    <input type="text" name="email" :value="email" />
    <br /><br />
    <button @click="añadir()">Añadir</button>
  </form>
</template>

<style scoped>
  form {
    border: 1px solid black;
  }
</style>
