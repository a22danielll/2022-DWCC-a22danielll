<script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        msg: 'ejercicio1',

        favorito: '',
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
        if (this.favorito == '') {
          this.favorito = '⭐';
        } else {
          this.favorito = '';
        }
      },
      eliminarContacto() {},
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
    <button @click="eliminarContacto">Eliminar</button>
  </div>
</template>
