console.log(" 1. Dado o seguinte código HTML:");
<html>
<body>
<div>Users:</div>
<ul>
<li>John</li>
<li>Pete</li>
</ul>
</body>
</html>
console.log("Indica, polo menos, unha forma de acceder aos seguintes nodos:");
console.log(" o nodo <div>");
document.getElementsByTagName("div");
console.log(" o nodo <ul>");
document.getElementsByTagName("ul");
console.log(" o segundo <li>");
document.getElementsByTagName("li")[1];

console.log("2. Dado un elemento calquera dunha árbore DOM");
console.log("a. ¿É certo que elemento.lastChild.nextSibling é sempre null?");
console.log("No siempre, solo cuando es el ultimo hijo")

console.log("b. ¿É certo que elemento.children[0].previousSibling é sempre null?");
console.log("En este caso si ya que es el primer hijo.")

console.log("3. Escribe o código para pintar as celas diagonais dunha táboa de vermello.");
console.log("Investiga en internet como cambiar a cor de fondo dunha cela mediante JavaScript");
