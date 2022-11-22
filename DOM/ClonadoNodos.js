console.log(
  '2. Dada unha lista <ol> con varios elementos <li>, crea o código necesario para eliminar os <li> da lista.'
);
let listas = document.getElementsByTagName('ol');
var node = document.getElementsByTagName('li');
listas.innerHTML = function () {
  console.log(node.parentNode.removeChild(node));
};
console.log(listas);

console.log(
  '3. Dado o seguinte código, ¿por que segue aparecendo o texto despois de borrar a táboa?'
);

let taboa = document.getElementById('taboa');
taboa.remove();
console.log(taboa);
console.log('No se borra porque ....');

console.log(
  '4. Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4 elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no navegador'
);
//ejercicio 4(html)
let newUl = document.createElement('ul');
let newContent1 = document.createElement('li');
let newContent2 = document.createElement('li');
let newContent3 = document.createElement('li');
let newContent4 = document.createElement('li');
newUl.append(newContent1);
newUl.append(newContent2);
newUl.append(newContent3);
newUl.append(newContent4);
newContent1.append('lista1');
newContent2.append('lista2');
newContent3.append('lista3');
newContent4.append('lista4');
document.body.append(newUl);
console.log(newUl);

//ejercicio 5
console.log(
  '5. Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li> seguintes:'
);
let newUl2 = document.getElementById('listaULExercicio5');
let newLiId = document.getElementById('one');
let newLiId2 = document.getElementById('two');
let newLi2 = document.createElement('li');
let newLi3 = document.createElement('li');
newLi2.append('2');
newLi3.append('3');
newLiId.append(newLi2);
newLiId.append(newLi3);
newUl2.append(newLiId);
newLi3.append(newLiId2);
document.body.append(newLiId);
console.log(document.getElementById('listaULExercicio5'));

console.log('6. Dado un obxecto como o seguinte:');
console.log(
  'Crea unha función createTree(data) que devolva unha lista ul/li coma a da imaxe da dereita, para os datos proporcionados.'
);
console.log(
  ' Para realizalo hai dúas posibilidades, aínda que sería bo que intentases as dúas opcións.'
);
console.log(' ● Crear o código código HTML');
console.log(' ● Crear os nodos da árbore.');
let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      'apple tree': {},
      magnolia: {},
    },
  },
};
function createTree(data) {
  let arr = arbore.entries();
}
console.log(createTree(data));
