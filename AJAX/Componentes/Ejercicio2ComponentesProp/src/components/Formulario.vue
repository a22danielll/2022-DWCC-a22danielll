<script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        titulo: 'Formulario',
        id: '',
        name: '',
        num: '',
        email: '',
      };
    },
    methods: {
      /*anhadir() {
        this.$emit('nuevo', this.id, this.name, this.num, this.email);
      },*/
    },
    $emit: ['nuevo'],
  };
</script>

<template>
  <form>
    <h3>{{ titulo }}</h3>
    <label hidden>id: </label>
    <input type="number" v-model="id" hidden />
    <br />
    <label>Nombre: </label>
    <input type="text" v-model="name" />

    <br />
    <label>Telefono: </label>
    <input type="text" v-model="num" />
    <br />
    <label>Email: </label>
    <input type="text" v-model="email" />
    <br /><br />

    <button
      @click.prevent="
        $emit('nuevo', this.id++, this.name, this.num, this.email)
      "
    >
      Añadir2
    </button>
  </form>
</template>

<style scoped>
  form {
    border: 1px solid black;
  }
</style>
