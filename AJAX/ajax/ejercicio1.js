function escribirNumeros(desde, ata) {
  let rep = setInterval(() => {
    console.log(desde);
    if (desde == ata) {
      clearInterval(rep);
    } else {
      desde++;
    }
  }, 1000);
}

escribirNumeros(1, 4);

function escribirNumerosTimeOut(desde, ata) {
  let rep2 = setTimeout(() => {
    if (desde == ata) {
      clearTimeout(rep2);
    } else {
      console.log(desde);
      desde++;
      escribirNumerosTimeOut(desde, ata);
    }
  }, 1000);
}

escribirNumerosTimeOut(1, 4);
