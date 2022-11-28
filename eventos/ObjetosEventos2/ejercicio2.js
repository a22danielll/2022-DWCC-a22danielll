console.log(
  '2. Dado o seguinte código HTML, engade a configuración CSS para que inicialmente o span estea oculto. Ao pulsar a ligazón debe facerse visible o contido do span e desaparecer a ligazón.'
);
let texto = document.getElementById('textoExercicio2');

let span = document.getElementById('adicional');
let ligazon = document.getElementById('ligazon');

function eliminarLigazon() {
  //span.className = 'visible';

  const classes = span.classList;
  classes.remove('oculto');

  ligazon.hidden = 'true';
}
document.addEventListener('click', eliminarLigazon);
