<script>
  import HelloWorld from './components/HelloWorld.vue';
  import Boton from './components/Boton.vue';
  import Contador from './components/Contador.vue';
  import Contactos from './components/Contactos.vue';
  export default {
    // Escribir as opcións do compoñente: data, methods, watch, ...
    data() {
      return {
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
      };
    },
    // rexistro do compoñente
    components: {
      Boton,
      Contador,
      Contactos,
    },
  };
</script>

<template>
  <!--<HelloWorld msg="Ola mundo" />-->
  <Boton />
  <Contador />
  <contactos
    v-for="contacto in contactos"
    :name="contacto.name"
    :telefono="contacto.telefono"
    :email="contacto.email"
  />
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
