<script>
  //import HelloWorld from './components/HelloWorld.vue';

  import Contactos from './components/Contactos.vue';

  export default {
    // Escribir as opcións do compoñente: data, methods, watch, ...
    data() {
      return {
        contactos: [
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
        ],
        mostrar: true,
      };
    },

    // rexistro do compoñente
    components: {
      Contactos,
    },
  };
</script>

<template>
  <!--<HelloWorld msg="Ola mundo" />-->

  <Contactos
    v-for="contacto in contactos"
    :key="contacto.id"
    :name="contacto.name"
    :num="contacto.num"
    :email="contacto.email"
  ></Contactos>
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
