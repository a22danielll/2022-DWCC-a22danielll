let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);
let num = prompt('Introduce un número:');
if (randomNum > num) {
  console.log('el número introducido que menor ');
} else if (randomNum < num) {
  console.log('el numero introducido es mayor');
} else {
  console.log('los numeros son iguales');
}
