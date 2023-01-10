("use strict");

console.log("1. Mostra o día da semana (en letra) do 25 de xullo de 2000.");

let dias = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "vienes",
  "sabado",
];
let fecha = new Date("2000-07-25");

let dSemana = dias[fecha.getDay()];
console.log(dSemana);

console.log("2. Mostra o día da semana (en letra) do 25 de xullo deste ano");
let fecha2 = new Date("2022-07-25");

dSemana = dias[fecha2.getDay()];
console.log(dSemana);

console.log(
  "3. Calcula o número de días que pasaron dende o 25 de xullo de 2000 ata hoxe."
);

let dInicial = new Date("2000-07-25");
let dActual = Date.now();
let dTotal = dActual - dInicial;
console.log(Math.floor(dTotal / (1000 * 60 * 60 * 24)));

console.log(
  "4. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes."
);
function totalDiasMes(mes, ano) {
  return new Date(ano, mes, 0).getDate();
}
console.log(totalDiasMes(2022, 2));

console.log(
  "5. Crea unha función á que se lle pase unha data e diga se é fin de semana."
);
let fecha5 = new Date("2022-12-17");
function finSemana() {
  if (fecha5.getDay() == 6 || fecha5.getDay() == 0) {
    console.log("es fin de semana");
  } else {
    console.log("no ers fin de semana");
  }
}

finSemana();

console.log(
  "6. Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano."
);

let inicioAño = new Date("2022-01-01");
let fechaCualquiera = new Date("2022-08-15");

function calcularDias(fechafinal, fechainicial) {
  let total = fechafinal - fechainicial;
  console.log(Math.floor(total / (1000 * 60 * 60 * 24)));
}
calcularDias(fechaCualquiera, inicioAño);

console.log(
  "1.Crea unha función á que se lle pase como parámero o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos."
);
function equivalencia(minuto) {
  let horas = minuto / 60;
  let rhoras = Math.floor(horas);
  let minutos = (horas - rhoras) * 60;
  console.log(
    "horas: " + Math.trunc(horas),
    " minutos: " + Math.trunc(minutos)
  );
}
equivalencia(185);
console.log(
  "1. Crea unha función á que se lle pase unha cadea e devolva unha cadea en sentido inverso."
);

function reverse(texto) {
  texto = texto.split("").reverse().join("");
  console.log(texto);
}

reverse("daniel lauroba ");

console.log(
  "2. Crea unha función á que se lle pase unha cadea e un array de caracteres e devolva a cadea orixinal eliminando os caracteres do array."
);

function remove(cadena, arr) {
  for (let i = 0; i < arr.length; i++) {
    cadena = cadena.replaceAll(arr[i], "");
  }
  console.log(cadena);
}
remove("daniel lauroba", ["a", "e", "i", "o", "u"]);

console.log(
  "3. Crea unha función á que se lle pase unha cadea e devolva o carácter máis repetido."
);

function caracteresRepetidos(texto) {
  let caracteres = "";
  let max = 0;
  for (let i = 0; i < texto.length; i++) {
    let contador = 0;
    for (let x = 0; x < texto.length; x++) {
      if (texto.charAt(i) == texto.charAt(x)) {
        contador++;
      }
    }
    if (contador > max) {
      caracteres = texto.charAt(i);
      max = contador;
    }
  }
  console.log(caracteres);
}

caracteresRepetidos("daniellaurobaloureiro,vivoenla");
console.log(
  "4. Crea unha función á que se lle pase unha cadea der números e devolva unha cadea  da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada."
);

function enmascarar(cadena) {
  let texto = "";
  for (let i = 0; i < cadena.length - 4; i++) {
    texto = texto + "*";
  }
  return texto + cadena.substring(cadena.length - 4);
}
console.log(enmascarar("1234123412347777"));

console.log(
  "4. Crea unha función á que se lle pase un texto e devolva o mesmo texto coa" +
    "primeira letra de cada palabra en maiúsculas e o resto en minúsculas."
);

function mayusculas(texto) {
  texto = texto.split(" ");
  let tFinal = "";
  for (let letra of texto) {
    letra = letra.charAt(0).toUpperCase() + letra.slice(1) + " ";
    tFinal += letra;
  }
  console.log(tFinal);
}
mayusculas("hola que tal");

console.log(
  "1.Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web:"
);
const players = [
  [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
  ],
  [
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
  ],
];
console.log(
  "Utilizando o contido aprendido sobre arrays, crea unha única sentencia para cada unha das seguintes instrucións:"
);
console.log("");
console.log(
  " a. Crea as variables players1, players2 que conteña un array cos xogadores de cada equipo."
);
/*
const players1 = [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
];

const players2 = [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
];*/
const [players1, players2] = players;
console.log(players1);
console.log(players2);
console.log("");
