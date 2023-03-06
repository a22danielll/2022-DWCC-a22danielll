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
        favorito: false,
        mostrar: true,
      };
    },
    methods: {
      ocultarMostrar() {
        //if (this.mostrar == true) {
        //  this.mostrar = false;
        //} else {
        //  this.mostrar = true;
        //}
        this.mostrar = !this.mostrar;
      },
      favoritos() {
        if (this.favorito == true) {
          this.favorito = 'FAV';
        } else {
          this.favorito = '';
        }
      },
    },
    props: {
      key: Number,
      name: String,
      num: String,
      email: String,
    },
  };
</script>

<template>
  <h3>{{ msg }}</h3>

  <div>
    <h4 v-if="favoritos">{{ name }}{{ favorito }}</h4>
    <div v-if="mostrar">
      {{ num }}
      {{ email }}
    </div>

    <input type="button" @click="ocultarMostrar" value="mostrar/ocultar" />
    <button @click="favoritos">Favorito</button>
  </div>
</template>
