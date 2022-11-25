console.log('1. Dado o seguinte código HTML:');
console.log('Engade os eventos que se indican:');
console.log(
  '● Cando o cursor do rato entre e saia do botón, mostra unha mensaxe por consola indicándoo.'
);

function mensaxeover() {
  console.log('sobre el boton');
}
function mensaxeout() {
  console.log('salida sobre el boton');
}
let boton = document.getElementById('ocultar');
boton.addEventListener('mouseover', mensaxeover);
boton.addEventListener('mouseout', mensaxeout);

console.log(' ● Ao pulsar o botón debe desaparecer o div con id=texto.');
let text = document.getElementById('texto');
function textEliminado() {
  text.remove();
}
boton.addEventListener('click', textEliminado);
/*document.getElementById('ocultar').addEventListener('click', () => {
  document.getElementById('texto').focus({ focusVisible: false });
});*/
console.log(
  ' ● Cando se escriba algo na caixa de texto, debe mostrarse a tecla pulsada no div e tamén o código da tecla pulsada. Ademais, se o div estaba oculto, debe mostrarse.'
);

let lineaText = document.getElementById('textoExercicio1');
let text2 = document.getElementById('texto');

function mostrarTexto(event) {
  lineaText = event.key;
  //text2 = event.textContent;
  console.log(lineaText);
}
document.addEventListener('keypress', mostrarTexto);
