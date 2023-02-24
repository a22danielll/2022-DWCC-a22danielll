const game = Vue.createApp({
  data() {
    return {
      vidaMonstro: 100,
      vidaVostede: 100,
    };
  },

  methods: {
    ataque() {
      this.vidaMonstro =
        this.vidaMonstro - Math.floor(Math.random() * (12 - 5) + 5);
      this.vidaVostede =
        this.vidaVostede - Math.floor(Math.random() * (15 - 8) + 8);
    },
    ataqueEspecial() {
      this.vidaMonstro =
        this.vidaMonstro - Math.floor(Math.random() * (25 - 10) + 10);

      this.vidaVostede =
        this.vidaVostede - Math.floor(Math.random() * (15 - 8) + 8);
    },
    curacion() {
      if (this.vidaVostede == 100) {
        console.log('ya tienes todo la vida al completo');
      } else if (this.vidaVostede < 100) {
        this.vidaVostede =
          this.vidaVostede + Math.floor(Math.random() * (20 - 8) + 8);
      }
    },
  },
}).mount('#game');
