<script>
  import Persona from './components/Persona.vue';
  export default {
    data() {
      return {
        titulo: 'Ejercicio 3',
        persona: [
          {
            id: 1,
            name: 'daniel',
            fNacimiento: 21 / 03 / 2001,
          },
        ],
      };
    },
    components: {
      Persona,
    },
  };
</script>

<template>
  <h1>{{ titulo }}</h1>
  <Persona></Persona>
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
