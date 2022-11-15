console.log(
  '1. Descarga o código fonte 03-propiedadesNodo01.html e indica, polo menos, unha forma de acceder ao seguinte contido:'
);
console.log('● O innerHTML da etiqueta “Escolle sexo”:');
let label1 = document.getElementsByTagName('label')[3].innerHTML;
console.log(label1);
console.log('');
console.log('● O textContent da etiqueta anterior');
let label2 = document.getElementsByTagName('label')[3].textContent;
console.log(label2);
console.log('');
console.log('● O valor do primeiro input de sexo');
let label3 = document
  .getElementsByTagName('label')[3]
  .getElementsByTagName('input')[0].value;
console.log(label3);
console.log(document.querySelector("input[name='sexo']").value);
console.log('');
console.log('● O valor do sexo que estea seleccionado.');

console.log(document.querySelector("input[name='sexo']:checked").value);

console.log('');
console.log('● O texto de cada un dos elementos <li>');
for (i = 0; i < document.getElementsByTagName('li').length; i++) {
  console.log(document.getElementsByTagName('li')[i].textContent);
}
console.log('');
console.log('● Indica cantos elementos <li> hai.');
console.log(document.getElementsByTagName('li').length);
