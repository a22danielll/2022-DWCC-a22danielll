/*let rango = setInterval(escribirNumeros, 1000, 1, 10);*/
let numero = 0;

function escribirNumeros(desde, ata) {
  numero = desde;
  let rep = setInterval(() => {
    console.log(numero);
    if (numero == ata) {
      clearInterval(rep);
    } else {
      numero++;
    }
  }, 1000);
}

//escribirNumeros(1, 4);

//corregir
function escribirNumerosTimeOut(desde, ata) {
  let numero2 = desde;
  let rep2 = setTimeout(() => {
    console.log(numero2);
    if (numero2 == ata) {
      clearTimeout(rep2);
    } else {
      numero2++;
    }
  }, 1000);
}

escribirNumerosTimeOut(1, 4);
