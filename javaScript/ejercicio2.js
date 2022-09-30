let num1, num2, num3;
num1 = prompt('introduce primer numero', '');
num2 = prompt('introduce segundo numero', '');
num3 = prompt('introduce tercero numero', '');

if (num1 > num2 && num1 > num3) {
  console.log(
    'el primer numero es mayor que el segundo numero y también que el tercer numero'
  );
} else if (num1 < num2 && num1 < num3) {
  console.log(
    'el primer numero es menor que el segundo mumero y también que el tercer numero'
  );
} else if (num2 > num1 && num2 > num3) {
  console.log(
    'el segundo numero es mayor que el primer numero y también que el tercer numero'
  );
} else if (num2 < num1 && num2 < num3) {
  console.log(
    'el segundo numero es menor que el primer numero y también que el tercer numero'
  );
} else if (num3 > num1 && num3 > num2) {
  console.log(
    'el tercer numero es mayor que el primer numero y también que el segundo numero'
  );
} else if (num3 < num1 && num3 < num2) {
  console.log('el tercer numero es menor que el primer y el segundo numero');
} else if (num1 == num2 && num1 != num3) {
  console.log(
    'el valor del primer numero es igual al segundo pero no del tercero'
  );
} else if (num1 != num2 && num1 == num3) {
  console.log(
    'el primer numero es difereente al segundo numero pero igual al tercer numero'
  );
} else {
  console.log('valor incorrecto');
}
