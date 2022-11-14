console.log(' 1. Dado o seguinte código HTML:');

console.log('Indica, polo menos, unha forma de acceder aos seguintes nodos:');
console.log(' o nodo <div>');
//console.log(document.getElementsByTagName('div'));
console.log(document.body.children[0]);
console.log(' o nodo <ul>');
console.log(document.body.childNodes[3]);
console.log(' o segundo <li>');
console.log(
  document.body.firstElementChild.nextElementSibling.lastElementChild
);

console.log('2. Dado un elemento calquera dunha árbore DOM');
console.log('a. ¿É certo que elemento.lastChild.nextSibling é sempre null?');
console.log('Si, porque el elemento lastChild siempre es el ultimo');

console.log(
  'b. ¿É certo que elemento.children[0].previousSibling é sempre null?'
);
console.log('No tiene porque ser siempre nulo');

console.log(
  '3. Escribe o código para pintar as celas diagonais dunha táboa de vermello.'
);
console.log(
  'Investiga en internet como cambiar a cor de fondo dunha cela mediante JavaScript'
);
