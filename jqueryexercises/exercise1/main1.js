
// elemento del texto
let textLine = $("main span");
console.log(textLine);

//elemento del botón
let button = $("main button");
console.log(button);

// función cambio atributos de texto con botón
button.click(function() {
  textLine.css("color", "red");
  textLine.css("font-size", "30px");
  textLine.text("Botón pulsado!");
});

// OPCION ALTERNATIVA

// let textLine = $("#main-text"); //poner en html <span id="main-text">
// let button = $("#main-button"); // poner en html <button id="main-button">;

/*
button.on("click", function() {
  textLine.css("color", "red");
  textLine.css("font-size", "30px");
  textLine.text = "Botón pulsado!";
});
*/
