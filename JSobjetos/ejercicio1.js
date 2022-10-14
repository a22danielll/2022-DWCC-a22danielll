console.log('1. Mostra o día da semana (en letra) do 25 de xullo de 2000.');
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
//const fecha5 = new Date('2022-10-17');
const fecha5 = new Date('2022-10-16');
console.log(finSemana());
function finSemana() {
  if (fecha5.getDay() == 6 || fecha5.getDay() == 0) {
    console.log('Es fin de semana');
  } else {
    console.log('No es fin de semana');
  }
}
console.log('');
console.log(
  '6. Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano.'
);
const inicioAno = new Date('2022-01-01');
fechaintroducir = new Date('2022-01-04');

console.log(diasDiferenciaAnual(fechaintroducir, inicioAno));

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
function equivalencia() {}
//2. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o resultado das funcións usando dúas cifras decimais.

console.log('------------------------------------------------');
//1. Crea unha función á que se lle pase unha cadea e devolva unha cadea en sentido inverso.

//console.log(reverseString("I am a string")) // gnirts a ma I

// 2. Crea unha función á que se lle pase unha cadea e un array de caracteres e devolva a cadea orixinal eliminando os caracteres do array.
// console.log(removeCharacters("I am an example string", ["a", "x"]));
// // I m n emple string

//3. Crea unha función á que se lle pase unha cadea e devolva o carácter máis repetido.
//console.log(caracterMaisRepetido("abcddefg")) // d

console.log('------------------------------------------------');
// 1. Garda nun array a lista de froitas: peras, mazás, kiwis, plátanos e mandarinas.Fai os seguintes apartados con splice:
//a. Elimina as mazás.
//b. Engade detrás dos plátanos, laranxas e sandía.
//c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
/*Despois de realizar cada operación, mostra por pantalla o array coa lista de froitas,
onde os elementos estean separados por unha coma e espazo. Por exemplo,
inicialmente o array debe mostrarse como “peras, mazás, kiwis, plátanos,
mandarinas”.*/

//2. Fai unha función que ordene as notas dun array pasado como parámetro. Por exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a función sort e pasarlle como parámetro unha función que ti definas que serva para realizar a comparación de elementos.

//3. Dado un array cos días da semana, indica se algún comeza por ‘s’. Comproba tamén se todos acaban en ‘s’

console.log('------------------------------------------------');

//1. Dado un array cos días da semana, obtén un array cos días que empecen por “m”.
//2. Dado un array cos días da semana, obtén o primeiro día que empeza por “m”.
//3. Dado un array cos días da semana, obtén a posición no array do primeiro día que empeza por “m”.
// 4. Dado un array cos días da semana, devolve outro array cos días en maiúsculas.
//5. Dado un array de números, obtén o valor máis alto. (Usa algunha das funcións para traballar con arrays).

console.log('------------------------------------------------');

//1. Crea un obxecto chamado televisión coas propiedades marca, categoría (televisores), unidades (4), prezo (354.99) e un método chamado importe que devolva o prezo total das unidades (unidades x prezo).

console.log('------------------------------------------------');

//1. Crea unha clase chamada Produtos coas propiedades marca, categoría, unidades, prezo e un método chamado importe que devolva o prezo total das unidades (unidades x prezo). Ademais terá un método getInfo que devolverá “Nome (categoría): unidades x prezo = importe”. Crea tamén tres produtos diferentes.
//2. Crea unha clase Televisor que herde de Produtos e teña unha nova propiedade chamada tamaño. O método getInfo mostrará o tamaño xunto ao nome.
//3. Crea 5 produtos e gárdaos nun array. Crea as seguintes funcións (todas reciben o array como parámetro):
//a. prodsSortBayName: devolve un array cos produtos ordenados alfabeticamente.
//b. prodsSortByPrice: devolve un array cos produtos ordenados por importe
//c. prodsTotalPrice: devolve o importe total dos produtos do array, con 2 decimais.
//d. prodsWithLowUnits: ademais do array, recibe como segundo paráme tro un nº e devolve un array con todos os produtos dos que quedan menos das unidades indicadas
//e. prodsList: devolve unha cadena que di ‘Listado de produtos:’ e en cada liña un guión e a información dun produto do array.
