console.log(
  '2. Dado o seguinte código HTML, engade a configuración CSS para que inicialmente o span estea oculto. Ao pulsar a ligazón debe facerse visible o contido do span e desaparecer a ligazón.'
);
let texto = document.getElementById('textoExercicio2');
let span = document.getElementById('adicional');
let ligazons = document.getElementById('ligazon');

function mostrarTexto() {}

function eliminarLigazon() {
  ligazon.remove();
}

for (let eliminar of texto) {
  eliminar.addEventListener('click', mostrarTexto);
  eliminar.addEventListener('click', eliminarLigazon);
}
