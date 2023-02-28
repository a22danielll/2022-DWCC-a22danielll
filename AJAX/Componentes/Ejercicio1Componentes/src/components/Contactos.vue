<script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        msg: 'Ejercicio3',
        nombre: 'daniel lauroba',
        telefono: '693624694',

        correo: 'daniel@gmail.com',
      };
    },
    methods: {
      ocultarMostrar() {
        if (!this.telefono.visible) {
          this.telefono.visible = false;
        } else {
        }
      },
    },
  };
</script>

<template>
  <h3>{{ msg }}</h3>
  <h4>{{ nombre }}</h4>
  <h4>{{ telefono }} - {{ correo }}</h4>
  <button @click="ocultarMostrar">ocultar/mostrar</button>
</template>
