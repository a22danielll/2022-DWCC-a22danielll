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

  var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

  console.log(e.latlng);
  nombre.innerHTML = prompt();
  descripcion.innerHTML = [e.latlng.lat, e.latlng.lng];

  //descripcion.innerHTML = prompt();
}

map.on('click', onMapClick);
