console.log(
  '2. Dada unha lista <ol> con varios elementos <li>, crea o código necesario para eliminar os <li> da lista.'
);
let listas = document.getElementsByTagName('ol').innerHTML;
var node = document.getElementsByTagName('li').innerHTML;
listas = function () {
  console.log(node.parentNode.removeChild(node).innerHTML);
};
console.log(listas);
console.log(node);
