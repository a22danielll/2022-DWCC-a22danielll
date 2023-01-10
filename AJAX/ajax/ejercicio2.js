"use strict";

let imagen = document.createElement("img");
imagen.src = "dragonball.jpg";
document.body.append(imagen);

imagen.addEventListener("load", (e) => {
  console.log("cargo.");
});
