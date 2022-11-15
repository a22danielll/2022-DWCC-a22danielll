console.log('A táboa con id="age-table".');

console.log(document.getElementById('age-table'));
//otra manera
document.querySelectorAll('#age-table label');

console.log('Todos os elementos label dentro da táboa (debería haber 3).');
console.log(document.getElementById('age-table').getElementsByTagName('label'));

console.log(' O primeiro td da táboa.');

console.log(document.getElementById('age-table').getElementsByTagName('td')[0]);

console.log(' O form con name="search".');
console.log(document.getElementsByName('search')[0]);

console.log('O primeiro input do formulario anterior formulario.');
console.log(document.getElementsByTagName('input')[0]);

console.log(' O último input do formulario anterior formulario.');
let formulario = document.getElementsByTagName('input')[1];
console.log(formulario);
