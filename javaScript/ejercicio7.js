/*Pide un número por teclado ao usuario. Despois crea unha variable de tipo array e asígnalle a lista de números enteiros dende o 0 ao número tecleado polo usuario.
Ademais, fai a suma de todos os valores contidos no array e mostra por consola o resultado da suma.*/
'use strict';
let nUsuario = prompt('numero a intriducir');

let arr = [];

for (let i = 0; i <= nUsuario; i++) {
  arr[nUsuario] = i;
  console.log(i);
}
let suma = 1;
for (const iterator of arr) {
  suma += iterator;
  console.log(suma);
}
