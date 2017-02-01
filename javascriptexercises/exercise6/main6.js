
//elemento de la imagen
let panel = document.getElementById("image-panel");
console.log(panel);

//array que contiene las imágenes a cambiar
let images = ["images/apples.jpg", "images/lemons.jpg", "images/oranges.jpg"];

//posición inicial de la imagen
let i = 0;

//tiempo cambio imagen
let millisecondsChange = 2000;

//función cambio fondo imagen continuo para introducir en función con setTimeout
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
