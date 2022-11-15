console.log('2. Descarga o código fonte 03-propiedadesNodo02.html e indica:');

console.log('● O número de ligazóns da páxina.');
console.log(document.getElementsByTagName('a').length);
console.log('● A dirección da penúltima ligazón.');
let ligazon = document.querySelectorAll('a').length - 1;
console.log(ligazon.dataset['href']);
console.log('● O número de ligazóns que apuntan a http://proba');
console.log(
  document.getElementsByTagName('a').getElementsByName('href').length
);
console.log('● O número de ligazóns do terceiro parágrafo.');
console.log(
  document.getElementsByTagName('a').getElementsByName('href').length
);
console.log(
  '● Fai que as ligazóns que apuntan a http://proba teñan o texto de cor laranxa.'
);
console.log(
  document.getElementsByTagName('a').getElementsByName('href').length
);
