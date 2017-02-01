
//elemento de la imagen
let panel = document.getElementById("image-panel");
console.log(panel);

//botón cambio imagen
let button = document.querySelector("main button");
console.log(button);

//array que contiene las imágenes a cambiar
let images = ["images/apples.jpg", "images/lemons.jpg", "images/oranges.jpg"];


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
