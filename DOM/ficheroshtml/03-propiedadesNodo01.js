console.log(
  '1. Descarga o código fonte 03-propiedadesNodo01.html e indica, polo menos, unha forma de acceder ao seguinte contido:'
);
console.log('● O innerHTML da etiqueta “Escolle sexo”:');
console.log((document.innerHTML = 'Escolle o sexo:'));
console.log('● O textContent da etiqueta anterior');
console.log('● O valor do primeiro input de sexo');
console.log('● O valor do sexo que estea seleccionado.');
console.log('● O texto de cada un dos elementos <li>');
console.log(document.getElementsByTagName('li').textContent);
console.log('● Indica cantos elementos <li> hai.');
console.log(document.getElementsByTagName('li').length);
