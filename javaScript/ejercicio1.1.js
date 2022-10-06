//1. Crea unha función frecha que devolva o cubo dun número pasado como parámetro.

num => num ** 3;

//2.Crea unha función á que se lle pase un array e devolva como resultado un array cos elementos impares do array de entrada.
const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50, 7, 6, 5];
let numeroImpares = [];
function arrayImpar(arrayEntrada) {
  for (let i = 1; i < arrayEntrada.length; i++) {
    if (arrayEntrada[i] % 2 != 0) {
      numeroImpares.push(arrayEntrada[i]);
    }
  }
  return numeroImpares;
}
console.log(arrayImpar(arrayEntrada));

//3. Crea unha función que sume todos os valores pasados como parámetros, sendo estes un número indeterminado.

function sumar(...num) {
  let suma = 0;
  for (const arg of num) {
    suma += arg;
  }
  return suma;
}

console.log(sumar(5, 7, 9));

//4. Crea unha función á que se lle pasen varios números como parámetros (un número indeterminado de parámetros). Debe devolver a media dos números pasados. Proba a realizala con diferentes bucles for (con contador, for…in e for…of).

//5. Fai unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e devolva se é correcto ou non.

//6. Crea unha función que reciba un array bidimensional de lonxitude variable que se corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1 nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un array bidimensional onde cada posición que non teña mina, debe ter a información do número de minas adxacentes (diagonal, horizontal e vertical).
//7. Crea unha función JavaScript que comprobe se é poxible axendar unha reunión dentro do horario laboral.
//8. Crea unha función chamada buscarPatron(texto, patron) que reciba como parámetros un texto e un patrón. A función debe devolver como resultado o número de veces que aparece o patrón no texto.
//9.  Crea unha función que reciba como parámetro unha cantidade enteira e faga o desglose do número de billetes e moedas necesarios para obtela. Debe usarse o número mínimo de billetes e moedas.
