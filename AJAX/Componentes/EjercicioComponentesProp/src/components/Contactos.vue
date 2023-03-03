<script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        msg: 'ejercicio1',
        /*contactos: [
          {
            id: 1,
            name: 'daniel',
            num: '693624694',
            email: 'daniel@gmail.com',
          },
          {
            id: 2,
            name: 'martin',
            num: '693693693',
            email: 'martin@gmail.com',
          },
        ],*/
        mostrar: true,
      };
    },
    methods: {
      ocultarMostrar() {
        // if (this.mostrar == true) {
        //   this.mostrar = false;
        // } else {
        //   this.mostrar = true;
        // }
        this.mostrar = !this.mostrar;
      },
    },
    props: {
      key: Number,
      name: String,
      num: String,
      email: String,
      favorito: String,
    },
  };
</script>

<template>
  <h3>{{ msg }}</h3>

  <div>
    <h4>{{ name }}{{ favorito }}</h4>
    <div v-if="mostrar">
      {{ num }}
      {{ email }}
    </div>

    <button @click="ocultarMostrar">ocultar/mostrar</button>
    <button @click="favorito">favorito</button>
  </div>
</template>
