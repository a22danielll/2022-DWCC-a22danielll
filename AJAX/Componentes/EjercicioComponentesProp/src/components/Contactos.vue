<script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        msg: 'ejercicio1',
        contactos: [
          {
            name: 'daniel',
            num: '693624694',
            email: 'daniel@gmail.com',
            mostrar: true,
          },
          {
            name: 'martin',
            num: '693693693',
            email: 'martin@gmail.com',
            mostrar: true,
          },
        ],
        mostrar: true,
      };
    },
    methods: {
      ocultarMostrar() {
        if (this.mostrar == true) {
          this.mostrar = false;
        } else {
          this.mostrar = true;
        }
      },
    },
    /*props: {
      name: String,
      num: Number,
      email: String,
      mostrar: Boolean
    },*/
  };
</script>

<template>
  <h3>{{ msg }}</h3>

  <div>
    <h4 v-for="contacto in contactos">
      <h4>{{ contacto.name }}</h4>
      <div v-if="mostrar">
        {{ contacto.num }}
        {{ contacto.email }}
      </div>

      <button @click="ocultarMostrar">{{ mostrar }}</button>

      <button @click="ocultarMostrar">ocultar/mostrar</button>
    </h4>
  </div>
</template>
