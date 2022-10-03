/*Pide un número por teclado ao usuario. Despois crea unha variable de tipo array e asígnalle a lista de números enteiros dende o 0 ao número tecleado polo usuario.
Ademais, fai a suma de todos os valores contidos no array e mostra por consola o resultado da suma.*/

let nUsuario = prompt('numero a intriducir');

let arr = new Array();

for (let i = 1; i < nUsuario; i++) {
  arr = array(nUsuario - i);
}
console.log(arr);
