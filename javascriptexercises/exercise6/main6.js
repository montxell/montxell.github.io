
//elemento de la imagen
let panel = document.getElementById("image-panel");
console.log(panel);

//array que contiene las imágenes a cambiar
let images = ["images/apples.jpg", "images/lemons.jpg", "images/oranges.jpg"];


//longitud del array
let n = images.length;

//número inicial de partida
let x = n;

//tiempo cambio imagen
let millisecondsChange = 2000;

//función cambio fondo imagen          // x % n, devuelve el resto. Esto indicará el índice del array --> images[index]
function changeBackgroundImage() {    // Así para 4 % 3 = 1; 5 % 3 = 2; 6 % 3 = 0; <-- Se vuelve al principio del array
    let index = x % n;
    panel.style["background-image"] = "url('" + images[index] + "')";
    x++;

    setTimeout(changeBackgroundImage, millisecondsChange);
};

changeBackgroundImage();



/*
//OPCIÓN ALTERNATIVA

//posición inicial de la imagen
let i = 0;

//tiempo cambio imagen
let millisecondsChange = 2000;

//función cambio fondo imagen continuo para introducir en setTimeout
function changeBackgroundImage() {

  panel.style["background-image"] = "url('" + images[i] + "')";

  if (i < (images.length - 1) ) {

    i++;

  } else {

    i = 0;

  }

  setTimeout(changeBackgroundImage, millisecondsChange);

};


changeBackgroundImage();

*/
