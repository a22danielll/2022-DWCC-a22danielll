<script>
  import HelloWorld from './components/HelloWorld.vue';
  import Boton from './components/Boton.vue';
  import Contador from './components/Contador.vue';
  import Contactos from './components/Contactos.vue';
  export default {
    // Escribir as opcións do compoñente: data, methods, watch, ...
    data() {
      return {
        telefono: false,
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
  <contactos />
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
