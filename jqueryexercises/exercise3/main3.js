
// elemento de la imagen
let panel = $("#image-panel");
console.log(panel);

// elementos de los botones
let button1 = $("#option1");
console.log(button1);
let button2 = $("#option2");
console.log(button2);
let button3 = $("#option3");
console.log(button3);

// funciones de cambio de imagen con los diferentes botones
button1.click(function() {
  panel.css("background-image", "url('images/apples.jpg')");
});

button2.click(function() {
  panel.css("background-image", "url('images/lemons.jpg')");
});

button3.click(function() {
  panel.css("background-image", "url('images/oranges.jpg')");
});
