console.log(
  '2. Descarga o código fonte 02-accesoNodos02.html e indica, polo menos, unha forma de acceder aos seguintes nodos:'
);
console.log('● O elemento con id “input2”.');
console.log(document.getElementById('input2'));
console.log('● A colección de parágrafos');
console.log(document.getElementsByTagName('p'));
console.log('● Todos os parágrafos dentro do div con id “lipsum”.');
console.log(document.getElementById('lipsum').getElementsByTagName('p'));
console.log('● O formulario');
console.log(document.getElementsByTagName('form'));
console.log('● Todos os inputs');
console.log(document.getElementsByTagName('input'));
console.log('● Só os inputs con nome “sexo”.');
console.log(document.getElementsByName('sexo'));
console.log('● Os items da lista con clase “important”.');
console.log(
  document.getElementsByTagName('ul')[0].getElementsByClassName('important')
);
console.log(document.querySelectorAll('ul .important'));
