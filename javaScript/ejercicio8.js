/*
a. Almacena en variables o peso e altura de dúas persoas.
b. Calcula o IMC das dúas persoas.
c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da primeira persoa é maior que o da segunda persoa (22.5)!'

*/
let personaAltura1 = prompt('altura primera persona');
let personaPeso1 = prompt('peso primera persona');

let personaAltura2 = prompt('altura segunda persona');
let personaPeso2 = prompt('pero segunda persona');

let imc1 = personaPeso1 / (personaAltura1 * personaAltura1);
imc1 = imc1.toFixed(2);
console.log(imc1);

let imc2 = personaPeso2 / (personaAltura2 * personaAltura2);
imc2 = imc2.toFixed(2);
console.log(imc2);

if (imc1 > imc2) {
  console.log(
    'la primera persona tiene mas indice de masa corporal [' +
      imc1 +
      '] que la segundo persona [' +
      imc2 +
      ']'
  );
} else if (imc1 < imc2) {
  console.log(
    'la primera persona tiene menos indice de masa corporal [' +
      imc1 +
      '] que la segundo persona [' +
      imc2 +
      ']'
  );
} else {
  console.log('Las dos personas tienen el mismo indice corporal');
}
