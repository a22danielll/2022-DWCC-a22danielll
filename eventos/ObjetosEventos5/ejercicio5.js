let menu = document.getElementById('opciones');
let boton = document.getElementById('pulsar');

let ul = document.getElementsByTagName('ul');
let li = document.getElementsByTagName('li');

boton.addEventListener('click', function (e) {
  if (menu.hidden == true) {
    menu.hidden = false;
  } else if (menu.hidden == false) {
    menu.hidden = true;
  }
});
