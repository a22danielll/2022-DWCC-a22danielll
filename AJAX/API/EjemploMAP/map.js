/*
Crea unha aplicación web na que se poidan marcar puntos nun mapa. A aplicación
debe ofrecer as seguintes funcionalidades:
a. Inicialmente debe mostrar un mapa centrado en Galicia ou Santiago de
Compostela, o que ti escollas.
b. Cando se pulse sobre punto do mapa aparecerá un formulario con, polo
menos, unha caixa de texto para gardar a descrición do punto. A caixa de
texto debe ter o foco de forma automática. Podes engadir máis campos ao
formulario para describir mellor o novo punto.
c. Despois de escribir a descrición do punto indicada no apartado anterior,
cando se pulse ENTER, gardarase o novo punto.
d. A aplicación almacena a lista de puntos gardados e mostra unha lista coa
descrición de cada un en todo momento.
e. Cando se pulsa sobre un punto da lista especificada no apartado anterior, o
mapa reposicionarase mostrando o marcador no centro e un popup coa
descrición do punto.
f. Deben poder eliminarse marcadores.
g. Os puntos gardados na aplicación deben permanecer aínda que se cerre o
navegador.
h. Predición meteorolóxica: usando a API de open-meteo ou a de MeteoSIX,
engade aos puntos marcados no mapa a predición meteorolóxica do día
seguinte ao actual.
*/

var map = L.map('map').setView([42.87876, -8.547238], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([42.87876, -8.547238]).addTo(map);

/*function onMapClick(e) {
  marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  console.log('You clicked the map at ' + e.latlng);
  marker
    .setLatLng(e.latlng)
    .setContent('You clicked the map at ' + e.latlng.toString())
    .openOn(map);
}
map.on('click', onMapClick);*/

function onMapClick(e) {
  let nombre = document.getElementById('nombre');
  let descripcion = document.getElementById('descripcion');
  let datos = document.getElementById('datos');
  let tabla = document.getElementById('tabla');
  let lista = document.getElementById('lista');
  var ul = document.getElementsByTagName('ul').item(0);
  var li = document.getElementsByTagName('li');

  var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

  console.log(e.latlng);

  /*nombre.innerHTML = prompt();
  descripcion.innerHTML = [e.latlng.lat, e.latlng.lng];*/
  //descripcion.innerHTML = prompt();

  for (let i = 0; i < li.length; i++) {
    let element = li[i];
    var tooltip = L.tooltip()
      .setLatLng(e.latlng)
      .setContent((element.innerHTML = prompt()))
      .addTo(map);
  }

  //lista.innerHTML = 'pruebaaa';
  //li.innerHTML = [e.latlng.lat, e.latlng.lng];
}
map.on('click', onMapClick);
