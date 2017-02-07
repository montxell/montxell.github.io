
//elemento de la imagen
let panel = $("#image-panel");
console.log(panel);

//array que contiene las imágenes a cambiar
let images = ["images/apples.jpg", "images/lemons.jpg", "images/oranges.jpg"];


//longitud del array
let n = images.length;

//número inicial de partida
let x = 0;

//tiempo cambio imagen
let millisecondsChange = 2000;

                                        // (x+1) % n, devuelve el resto. Esto indicará el índice del array --> images[x]
//función cambio fondo imagen           // Así para 1 % 3 = 1; 2 % 3 = 2; 3 % 3 = 0; <-- Se vuelve al principio del array
function changeBackgroundImage(){

  panel.css("background-image", "url('" + images[x] + "')");
  x = (x + 1) % n;

  setTimeout(changeBackgroundImage, millisecondsChange);
};

changeBackgroundImage();




/*

//OPCIÓN ALTERNATIVA 1

//función cambio fondo imagen
function changeBackgroundImage(){
    let index = x % n;
    panel.css("background-image", "url('" + images[x] + "')");
    x++;

    setTimeout(changeBackgroundImage, millisecondsChange);
};

changeBackgroundImage();



//OPCIÓN ALTERNATIVA 2

//posición inicial de la imagen
let i = 0;

//tiempo cambio imagen
let millisecondsChange = 2000;

//función cambio fondo imagen continuo para introducir en setTimeout
function changeBackgroundImage(){

  panel.css("background-image", "url('" + images[x] + "')");

  if (i < (images.length - 1) ) {

    i++;

  } else {

    i = 0;

  }

  setTimeout(changeBackgroundImage, millisecondsChange);

};  

changeBackgroundImage();

*/
