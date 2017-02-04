
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

//número inicial de partida --> Se inicia en 1, porque la imagen actual sin click es images[0].
let x = 1;

                                        // (x+1) % n, devuelve el resto. Esto indicará el índice del array --> images[x]
//función cambio fondo imagen           // Así para 1 % 3 = 1; 2 % 3 = 2; 3 % 3 = 0; <-- Se vuelve al principio del array
button.onclick = function() {
    panel.style["background-image"] = "url('" + images[x] + "')";
    x = (x + 1) % n;
};


/*
// OPCIÓN ALTERNATIVA 1

//longitud del array
let n = images.length;

//número inicial de partida
let x = 1;

//función cambio fondo imagen
button.onclick = function() {
    let index = x % n;
    panel.style["background-image"] = "url('" + images[index] + "')";
    x++;
};



// OPCIÓN ALTERNATIVA 2

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
