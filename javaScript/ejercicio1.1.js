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

function promedio(...numero) {
  let media = 0;
  let suma = 0;
  for (const arg of numero) {
    suma += arg;
    media = suma / numero.length;
  }
  return media;
}

console.log(promedio(5, 5, 5));

//5. Fai unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e devolva se é correcto ou non.

('use strict');
let numero = /[0-9]{8}/;
let letraCondicion = /[A-Z]{1}/;
let num = 0;
let letra = '';
function validarDNI(num, letra) {
  if (numero.test(num) == true) {
    if (letraCondicion.test(letra) == true) {
      console.log('el dni es correcto');
    } else {
      console.log('incorrecto');
    }
  } else {
    console.log('incorrecto');
  }
}
console.log(validarDNI(44092112, 'P'));

//6. Crea unha función que reciba un array bidimensional de lonxitude variable que se corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1 nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un array bidimensional onde cada posición que non teña mina, debe ter a información do número de minas adxacentes (diagonal, horizontal e vertical).
('use strict');
arrEntrada = [
  [0, 0, -1, 0],
  [0, -1, -1, 0],
];

function calcularMinas(taboleiro) {
  const arraySalidas = [];
  for (fila = 0; fila < taboleiro.length; fila++) {
    arraySalidas[fila] = [];
    for (let columna = 0; columna < taboleiro[fila].length; columna++) {
      if (taboleiro[fila][columna] === -1) {
        arraySalidas[fila][columna] = -1;
      }
    }
  }
  return arraySalidas;
}
console.log(calcularMinas(arrEntrada));

//7. Crea unha función JavaScript que comprobe se é poxible axendar unha reunión dentro do horario laboral.
('use strict');
const inicioXornada = '07:30';
const finalXornada = '17:45';

function axendarReunion(horaInicioReunion, duracionEnMinutos) {
  const value = horaInicioReunion.split(':');
  const inicio = value[0] * 60;
  const inicio2 = value[1] * 60;
  const t = inicio + inicio2;
  const total = t + duracionEnMinutos;
  console.log(
    'inicio: ' + inicio,
    inicio2,
    ' inicio reunion: ' + t + ' ' + total
  );

  //split de horasinicioreunion
  //saca u array y el array se iguala a la posicion de horas y minutos se pasa a minutos y se hace la suma

  if (total < inicioXornada && total > finalXornada) {
    return flase;
  } else {
    return true;
  }
}
console.log(
  axendarReunion('7:00', 15) == false,
  'Fallo comprobando axendarReunión("7:00", 15) == false'
);
console.log(
  axendarReunion('7:15', 30) == false,
  'Fallo comprobando axendarReunión("7:15", 30) == false'
);
console.log(
  axendarReunion('7:30', 30) == true,
  'Fallo comprobando axendarReunión("7:30", 30) == false'
);
console.log(
  axendarReunion('11:30', 60) == true,
  'Fallo comprobando axendarReunión("17:45", 60) == false'
);
console.log(
  axendarReunion('17:00', 45) == true,
  'Fallo comprobando axendarReunión("11:30", 60) == false'
);
console.log(
  axendarReunion('17:30', 30) == false,
  'Fallo comprobando axendarReunión("17:30", 30) == false'
);

//8. Crea unha función chamada buscarPatron(texto, patron) que reciba como parámetros un texto e un patrón. A función debe devolver como resultado o número de veces que aparece o patrón no texto.

function buscarPatron(texto, patron) {
  let coincidente = 0;
  let indice = 0;
  let coindice = true;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === patron[indice]) {
      indice = i;
      coincide = true;
      for (let x = 0; x < patron.length; x++) {
        if (patron[x] !== texto[indice]) {
          coincide = false;
          break;
        }
      }
      indice++;
    }
    if (coindice) {
      coincidente++;
    }
  }
  return indice;
}
console.log(buscarPatron('000111101000ABCHO', '00'));
//9.  Crea unha función que reciba como parámetro unha cantidade enteira e faga o desglose do número de billetes e moedas necesarios para obtela. Debe usarse o número mínimo de billetes e moedas.
function cambio(cantidad) {
  let moneda1 = 1;
  let moneda2 = 2;
  let billete5 = 5;
  let billete10 = 10;
  let billete20 = 20;
  let billete50 = 50;
  let billete100 = 100;
  let billete200 = 200;
  let billete500 = 500;

  let resultado = '';
  if (cantidad / billete500 >= 1) {
    while (cantidad / billete500 >= 1) {
      return (resultado = cantidad / billete500);
    }
  } else if (cantidad / billete200 >= 1) {
    while (cantidad / billete200 >= 1) {
      return (resultado = cantidad / billete200);
    }
  } else if (cantidad / billete100 >= 1) {
    while (cantidad / billete100 >= 1) {
      return (resultado = cantidad / billete100);
    }
  } else if (cantidad / billete50 >= 1) {
    while (cantidad / billete50 >= 1) {
      return (resultado = cantidad / billete50);
    }
  } else if (cantidad / billete20 >= 1) {
    while (cantidad / billete20 >= 1) {
      return (resultado = cantidad / billete20);
    }
  } else if (cantidad / billete10 >= 1) {
    while (cantidad / billete10 >= 1) {
      return (resultado = cantidad / billete10);
    }
  } else if (cantidad / billete5 >= 1) {
    while (cantidad / billete5 >= 1) {
      return (resultado = cantidad / billete5);
      console.log('Devolveremos' + resultado + 'billetes de 5');
    }
  } else if (cantidad / moneda2 >= 1) {
    while (cantidad / moneda2 >= 1) {
      return (resultado = cantidad / moneda2);
      console.log('Devolveremos' + resultado + 'monedas de 2');
    }
  } else if (cantidad / moneda1 >= 1) {
    while (cantidad / moneda1 >= 1) {
      return (resultado = cantidad / moneda1);
      console.log('Devolveremos' + resultado + 'monedas de 1');
    }
  }
  return 'devuelve' + resultado;
}

console.log(cambio(35));
