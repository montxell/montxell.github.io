
//elemento de la imagen
let panel = document.getElementById("image-panel");
console.log(panel);

//botón cambio imagen
let button = document.querySelector("main button");
console.log(button);

//array que contiene las imágenes a cambiar
let images = ["images/apples.jpg", "images/lemons.jpg", "images/oranges.jpg"];


//longitud del array
let n = images.length;

//número inicial de partida
let x = n + 1;

//función cambio fondo imagen           // x % n, devuelve el resto. Esto indicará el índice del array --> images[index]
button.onclick = function() {          // Así para 4 % 3 = 1; 5 % 3 = 2; 6 % 3 = 0; <-- Se vuelve al principio del array
    let index = x % n;
    panel.style["background-image"] = "url('" + images[index] + "')";
    x++;

};



/*
// OPCIÓN ALTERNATIVA

//posición inicial de la imagen
let i = 0;

//función cambio fondo imagen
function changeBackgroundImage() {

  if (i < (images.length - 1) ) {

    i++;

  } else {

    i = 0;

  }

  panel.style["background-image"] = "url('" + images[i] + "')";

};

button.onclick = changeBackgroundImage;

*/
