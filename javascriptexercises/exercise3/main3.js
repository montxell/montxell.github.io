
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
