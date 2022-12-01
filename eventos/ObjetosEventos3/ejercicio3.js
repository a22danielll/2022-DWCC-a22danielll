let boton = document.getElementById('idAñadir');
function escribir() {
  let texto = document.getElementById('idTexto');
  let lista = document.getElementById('lista');
  let li = document.createElement('li');
  li.innerHTML = texto.value;
  lista.append(li);
}
boton.addEventListener('click', escribir);
