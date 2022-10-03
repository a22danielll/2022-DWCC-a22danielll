//Pide un número por teclado ao usuario. Calcula o factorial dese número e mostra a resultado por consola. (5! = 5*4*3*2*1).
let numero = prompt('numero a intriducir');
let res = 1;
for (i = 1; i <= numero; i++) {
  res = res * i;
}
console.log(res);
