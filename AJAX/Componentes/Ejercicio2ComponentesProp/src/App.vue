<script>
  //import HelloWorld from './components/HelloWorld.vue';

  import { noopDirectiveTransform } from '@vue/compiler-core';
  import Contactos from './components/Contactos.vue';
  import Formulario from './components/Formulario.vue';
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
    methods: {
      anhadir(id, name, num, email) {
        console.log(id, name, num, email);
        let novoContacto = {
          id: id,
          name: name,
          num: num,
          email: email,
        };

        //this.contactos.push({ id, name, num, email });
        this.contactos.push(novoContacto);
      },
      eliminarContacto(id) {
        this.contactos.pop(this.contactos.id == id);
      },
    },

    // rexistro do compoñente
    components: {
      Contactos,
      Formulario,
    },
  };
</script>

<template>
  <!--<HelloWorld msg="Ola mundo" />-->
  <h1>Ejercicio1</h1>
  <Contactos
    @eliminar="eliminarContacto"
    v-for="contacto in contactos"
    :key="contacto.id"
    :name="contacto.name"
    :num="contacto.num"
    :email="contacto.email"
  ></Contactos>
  <Formulario @nuevo="anhadir"> </Formulario>
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
