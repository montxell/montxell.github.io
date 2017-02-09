
// Uso de data-attributes

// elemento de la imagen
let panel = document.getElementById("image-panel");

// elemento de todos los botones
let buttons = document.querySelectorAll("button");

// asignación de click a cada uno de los botones
for (let button of buttons) {
  button.onclick = displayImage;
}

// función cambio de imagen de fondo
function displayImage(event) {
  let clickedButton = event.target;
  let backgroundImage = clickedButton.dataset.backimage;  // También clickedButton.getAttribute("data-backimage");
  panel.style["background-image"] = "url('" + backgroundImage + "')";
}





// OPCIÓN SIN data-attributes

/*

// elemento de la imagen
let panel = document.getElementById("image-panel");
console.log(panel);

// elementos de los botones
let button1 = document.getElementById("option1");
console.log(button1);
let button2 = document.getElementById("option2");
console.log(button2);
let button3 = document.getElementById("option3");
console.log(button3);

// funciones de cambio de imagen con los diferentes botones
button1.onclick = function() {
  panel.style["background-image"] = "url('images/apples.jpg')";
}

button2.onclick = function() {
  panel.style["background-image"] = "url('images/lemons.jpg')";
}

button3.onclick = function() {
  panel.style["background-image"] = "url('images/oranges.jpg')";
}

*/
