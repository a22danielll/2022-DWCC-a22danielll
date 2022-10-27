console.log('1. Mostra o día da semana (en letra) do 25 de xullo de 2000.');
('use strict');
const fecha = new Date('2000-07-25');
const dias = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
];
const dia = dias[fecha.getDay()];

console.log(dia);

console.log('');
console.log('2. Mostra o día da semana (en letra) do 25 de xullo deste ano.');
const fecha2 = new Date('2022-07-25');
const dias2 = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
];
const dia2 = dias2[fecha2.getDay()];
console.log(dia2);
console.log('');
console.log(
  '3. Calcula o número de días que pasaron dende o 25 de xullo de 2000 ata hoxe.'
);
const fInicio = new Date('2000-07-25');
const fActual = Date.now();
const totalDias = fActual - fInicio;
console.log('Total dias: ' + Math.floor(totalDias / (1000 * 60 * 60 * 24)));

console.log('');
console.log(
  '4. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes.'
);
function totalDiasMes(mes, ano) {
  return new Date(ano, mes, 0).getDate();
}
console.log(totalDiasMes(2022, 2));

console.log('');
console.log(
  '5. Crea unha función á que se lle pase unha data e diga se é fin de semana.'
);

const fecha5 = new Date('2022-10-16');

function finSemana() {
  if (fecha5.getDay() == 6 || fecha5.getDay() == 0) {
    console.log('Es fin de semana');
  } else {
    console.log('No es fin de semana');
  }
}
finSemana();
console.log('');
console.log(
  '6. Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano.'
);
const inicioAno = new Date('2022-01-01');
fechaintroducir = new Date('2022-01-04');

diasDiferenciaAnual(fechaintroducir, inicioAno);

function diasDiferenciaAnual(fechaFinal, fechainicial) {
  const diasTotales = fechaFinal - fechainicial;

  console.log(diasTotales / Math.floor(1000 * 60 * 60 * 24) + ' dias');
}
console.log('');
console.log('------------------------------------------------');
console.log('');
console.log(
  '1.Crea unha función á que se lle pase como parámero o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos.'
);
function equivalencia(nMinutos) {
  const horas = nMinutos / 60;
  const rhour = Math.floor(horas);
  const min = (horas - rhour) * 60;
  console.log('Horas : ' + Math.trunc(horas), 'minutos: ' + Math.trunc(min));
}
equivalencia(70);
console.log(
  '2. Crea unha función que dado o radio dun círculo, devolva a súa área.E fai outra función que reciba o radio e devolva o perímetro do círculo.Mostra por consola o resultado das funcións usando dúas cifras decimais.'
);

//A = π r²
const radio = 0;
function circuloArea(radio) {
  console.log('Area circulo: ' + (area = Math.PI * (radio * radio)));
}
circuloArea(5);

// perimetro = 2.π x r
function perimetroCirculo(radio) {
  console.log('Perimetro circulo: ' + (perimetro = 2 * Math.PI * radio));
}
perimetroCirculo(5);
console.log('------------------------------------------------');
console.log(
  '1. Crea unha función á que se lle pase unha cadea e devolva unha cadea en sentido inverso.'
);
function reverseString(string) {
  string = string.split('').reverse().join('');
  console.log(string);
}
reverseString('I am a string');

// 2. Crea unha función á que se lle pase unha cadea e un array de caracteres e devolva a cadea orixinal eliminando os caracteres do array.

function removeCharacters(str, arr) {
  const text = '';
  for (i = 0; i < arr.length; i++) {
    str = str.replaceAll(arr[i], '');
  }

  return str;
}

console.log(removeCharacters('I am an example string', ['a', 'x']));
// I m n emple string

console.log(
  '3. Crea unha función á que se lle pase unha cadea e devolva o carácter máis repetido.'
);

function caracterMaisRepetido(texto) {
  let caracter = '';
  let max = 0;
  for (let i = 0; i < texto.length; i++) {
    let cant = 0;
    for (x = i; x < texto.length; x++) {
      if (texto.charAt(i) == texto.charAt(x)) {
        cant++;
      }
    }
    if (cant > max) {
      caracter = texto.charAt(i);
      max = cant;
    }
  }
  return caracter;
}

console.log(caracterMaisRepetido('abcddefg')); // d

console.log(
  '4. Crea unha función á que se lle pase unha cadea der números e devolva unha cadea  da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada.'
);

function enmascarar(cadena) {
  let texto = '';
  for (i = 0; i < cadena.length - 4; i++) {
    texto = texto + '*';
  }

  return texto + cadena.substring(cadena.length - 4);
}
console.log(enmascarar('1234123412347777')); // ************7777

console.log('');
console.log(
  '5. Escribe o código necesario para procesar unha cadea con información de voos como a do exemplo e mostrar a información por consola formateada como aparece na imaxe:'
);
const flightsInfo =
  '_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio09433847 22;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_ Departure;scq93766109;svq2323639855;12:30';

function formateoInfo(flightsInfo) {
  const getCode = str => str.slice(0, 3);
  for (const flight of flightsInfo.split('+')) {
    const [type, from, to, time] = flight.split(';');
    let tipo = type.replaceAll('_', ' ');
    let origen = getCode(from);
    let desde = getCode(to);
    let tiempo = time.replaceAll(':', 'h');

    const toString = tipo + ' ' + origen + ' ' + desde + ' ' + tiempo;
    console.log(toString.padStart(35));
  }
}

formateoInfo(flightsInfo);

console.log('------------------------------------------------');
console.log('');
console.log(
  ' 1. Garda nun array a lista de froitas: peras, mazás, kiwis, plátanos e mandarinas.Fai os seguintes apartados con splice.'
);
const arr = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];
console.log(' a.Elimina as mazás: ' + arr.splice(1, 1));
console.log(arr);
console.log(
  'b. Engade detrás dos plátanos, laranxas e sandía: ' +
    arr.splice(3, 0, 'laranxa', 'sandia')
);
console.log(arr);
console.log(
  'c. Quita os kiwis e pon no seu lugar cereixas e nésperas.' +
    arr.splice(2, 2, 'cereais', 'nesperas')
);
console.log(arr);
console.log(
  'Despois de realizar cada operación, mostra por pantalla o array coa lista de froitas, onde os elementos estean separados por unha coma e espazo. Por exemplo,inicialmente o array debe mostrarse como “peras, mazás, kiwis, plátanos,mandarinas.'
);
console.log(arr);

console.log('');
console.log(
  '2. Fai unha función que ordene as notas dun array pasado como parámetro. Por exemplo,<br> se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a función sort e pasarlle como parámetro unha función que ti definas que serva para realizar a comparación de elementos.'
);
let notas = [4, 8, 3, 10, 5];
function orderArr(notas) {
  notas = notas.sort((a, b) => {
    return a - b;
  });
  return notas;
}
console.log(
  'Array principal: ' + notas + ' = Array ordenado:' + orderArr(notas)
);
console.log(
  '3. Dado un array cos días da semana, indica se algún comeza por ‘s’. Comproba tamén se todos acaban en ‘s’'
);

let dSemana = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
];

function diasSemana() {
  for (let dia of dSemana) {
    if (dia.startsWith('s')) {
      return dia;
    }
  }
}

//funciones funcionales
console.log(dSemana.some(dia => dia.startsWith('s')));
console.log(dSemana.some(dia => dia.endsWith('s')));
//
console.log(diasSemana());

console.log(
  '4. Crea unha función á que se lle pase un texto e devolva o mesmo texto coa' +
    'primeira letra de cada palabra en maiúsculas e o resto en minúsculas.'
);
function mayusculas(texto) {
  texto = texto.split(' ');
  let tFinal = '';
  for (let letra of texto) {
    letra = letra.charAt(0).toUpperCase() + letra.slice(1) + ' ';
    tFinal += letra;
  }
  return tFinal;
}
console.log(mayusculas('hola que tal'));

// otra funcion
function mayusculas2(texto) {
  const palabra = text.slice(' ');
  console.log(palabra);
  let salida = 0;
  for (const palabras of palabra) {
    salida.push(palabras.replace(palabras[0], palabras[0].toUpperCase()));
    console.log(palabras);
  }
  return palabras.join();
}
console.log('------------------------------------------------');

console.log(
  '1. Dado un array cos días da semana, obtén un array cos días que empecen por “m”'
);
function diaSemana() {
  return dSemana.filter(a => a.charAt(0) == 'm');
}
console.log(diaSemana());
console.log(
  '2. Dado un array cos días da semana, obtén o primeiro día que empeza por “m”.'
);
function diaSemana2() {
  return dSemana.find(a => a.charAt(0) == 'm');
}
console.log(diaSemana2());

console.log(
  '3. Dado un array cos días da semana, obtén a posición no array do primeiro día que empeza por “m”.'
);
function diaSemana3() {
  return dSemana.findIndex(a => a.charAt(0) == 'm');
}
console.log(diaSemana3());

console.log(
  '4. Dado un array cos días da semana, devolve outro array cos días en maiúsculas.'
);

console.log((mayusculas = dSemana.map(a => a.toUpperCase())));

console.log(
  '5. Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para traballar con arrays).'
);

let numero = [6, 17, 8, 9, 10, 11, 12, 5, 1, 7, 18, 19];
console.log(numero.sort((a, b) => b - a));
//otra forma
console.log(numero.reduce((previous, current) => Math.max(previous, current)));
console.log('------------------------------------------------');

console.log(
  '1.Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web:'
);
const players = [
  [
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
  ],
  [
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
  ],
];
console.log(
  'Utilizando o contido aprendido sobre arrays, crea unha única sentencia para cada unha das seguintes instrucións:'
);
console.log('');
console.log(
  ' a. Crea as variables players1, players2 que conteña un array cos xogadores de cada equipo.'
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
console.log('');
console.log(
  'b. O primeiro xogador do array é o porteiro e o resto son xogadores de campo. Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e unha variable de tipo array chamada fieldPlayers que conteña o resto de xogadores do equipo.'
);
/*
let gk = players1[0];
console.log('Portero: ' + gk);
console.log('');
let fieldPlayers = Array(...players1);
fieldPlayers = fieldPlayers.splice(1);

console.log('jugadores: ' + fieldPlayers);
*/
// otra manera
const [gk, ...fieldPlayers] = players1;
console.log(fieldPlayers);

console.log('');
console.log(
  ' c. Crea un array allPlayers que conteña os xogadores dos dous equipos.'
);
let allPlayers = Array('[ ' + players1 + ' ] , [ ' + players2 + ' ]');
console.log('Todos los jugadores: ' + allPlayers);
console.log('');
console.log(
  "d. O primeiro equipo substituiu os xogadores iniciais por 'Thiago', 'Coutinho', 'Periscic'. Crea unha nova varible de tipo array chamada players1Final que conteña os xogadores iniciais e tamén os 4 novos."
);

let players1Final = Array(...players1.concat('Thiago', 'Coutinho', 'Periscic'));

console.log(players1Final);
console.log('');
console.log(
  '2. Dado un array con nomes de variables formados por dúas palabras separadas por “_”, mostra por consola os nomes das variables en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “ last_NAME”], deberase mostrar por consola “firtsName” e “lastName”.'
);

let entrada = ['first_name', ' last_NAME'];

let camelCase = ('' + entrada).replaceAll('_', ' ').toLowerCase().split(' ');
let camelCase2 =
  camelCase[0] +
  (' ' + camelCase[1]).charAt(1).toUpperCase() +
  camelCase[1].slice(1) +
  ' ' +
  camelCase[2] +
  (' ' + camelCase[1]).charAt(1).toUpperCase() +
  camelCase[1].slice(1);
console.log(camelCase2);

//otra manera

for (const variable of entrada) {
  const [first, second] = variable.toLowerCase().split('_');
  let saida = first + second.replaceAll(second[0], second[0].toUpperCase());
  console.log(saida);
}
console.log('------------------------------------------------');

console.log(
  '1. Crea un obxecto chamado televisión coas propiedades marca, categoría (televisores), unidades (4), prezo (354.99) e un método chamado importe que devolva o prezo total das unidades (unidades x prezo).'
);

const television = {
  marca: '',
  categoria: 'televisores',
  unidades: 4,
  prezo: 354.99,
  prezoTotalUnidades: function () {
    let total = this.unidades * this.prezo;
    return total;
  },
};
console.log(television.prezoTotalUnidades());
console.log('');
console.log(
  '2. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor:'
);
const game = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
console.log(
  'Utilizando a desestruturación de obxectos crea unha variable para cada unha das propiedades do obxecto odds. Estas variables deben levar os nomes “team1”, “draw” e “team2”.'
);

const { team1, x: draw, team2 } = game.odds;
console.log('Team1: ' + team1 + '\ndraw: ' + draw + '\nteam2: ' + team2);

console.log('');
console.log('3. Dado o seguinte obxecto:');

const game2 = {
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};
console.log(
  'a. Recorre o array game.scored e mostra por pantalla información do xogador que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”.'
);
const mumGoles = 0;
game2.scored.forEach((jugador, numGoles) =>
  console.log('Gol ' + numGoles + ':' + jugador)
);

console.log('');
console.log(
  'b. Crea un novo obxecto chamado scorers que conteña o nome dos xogadores que marcaron e o número de goles que marcaron como valor. Neste exemplo sería algo así: {Lewandowski: 2, Gnarby: 1, Hummels: 1}'
);
const mumGoles2 = 0;
game2.scored.forEach((numGoles2, jugador) =>
  console.log(numGoles2 + ':' + jugador)
);

console.log('');

console.log('4. Dada a seguinte información:');
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];
console.log(
  'a. Filtra o array de inventores e crea un array só cos inventores que naceron no século XVI.'
);
console.log(
  'b. Crea un array co nome completo dos inventores. Por exemplo: ["Albert Einstein", "Isaac Newton", ...]'
);
console.log(
  'c. Unha vez obtido o array co nome completo dos inventores do exercicio anterior, ordénao alfabeticamente polo apelido'
);
console.log('d. Ordena o array de inventores alfabeticamente polo apelido');
console.log('e. Ordena o array de inventores pola data de nacemento');
console.log('f. Calcula a suma dos anos que viviron todos os inventores.');
console.log(
  'g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo'
);

console.log(
  '5. Dada a seguinte información, obtén un obxecto con unha propiedade para cada medio de transporte, indicando o número de veces que se repite no array. É dicir, o resultado debería ser {car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1}'
);
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'pogostick',
];
