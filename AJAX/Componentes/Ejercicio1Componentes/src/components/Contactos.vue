<script>
  import { ref } from 'vue';

  export default {
    data() {
      return {
        msg: 'Ejercicio3',
        //nombre: 'daniel lauroba',
        //telefono: '693624694',
        //correo: 'daniel@gmail.com',
        contactos: [
          {
            name: 'daniel',
            num: '693624694',
            email: 'daniel@gmail.com',
          },
          {
            name: 'martin',
            num: '693693693',
            email: 'martin@gmail.com',
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
      <button @click="ocultarMostrar">ocultar/mostrar</button>
    </h4>
  </div>
</template>
