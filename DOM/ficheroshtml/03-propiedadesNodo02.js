console.log('2. Descarga o código fonte 03-propiedadesNodo02.html e indica:');

console.log('● O número de ligazóns da páxina.');
let ligazon = document.getElementsByTagName('a');
console.log(ligazon.length);
console.log('● A dirección da penúltima ligazón.');
let ligazon2 = document.getElementsByTagName('a');
console.log(ligazon2[ligazon2.length - 1].href);
console.log('● O número de ligazóns que apuntan a http://proba');
let contador = 0;
for (var i = 0; i < ligazon.length; i++) {
  if (ligazon[i].href == 'http://proba/') {
    contador++;
  }
}
console.log(contador);
console.log('● O número de ligazóns do terceiro parágrafo.');
let ligazon4 = document
  .getElementsByTagName('p')[2]
  .getElementsByTagName('a').length;
console.log(ligazon4);
console.log(
  '● Fai que as ligazóns que apuntan a http://proba teñan o texto de cor laranxa.'
);
for (var i = 0; i < ligazon.length; i++) {
  if (ligazon[i].href) {
    ligazon[i].style.color = '#FF8000';
  }
}
