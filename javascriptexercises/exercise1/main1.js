
// elemento del texto
let text = document.querySelector("main span");
console.log(text);

//elemento del botón
let button = document.querySelector("main button");
console.log(button);

// función cambio atributos de texto con botón
button.onclick = function() {
  text.style.color = "red";
  text.style.fontSize = "30px";
  text.textContent = "Botón pulsado!";
}


// OPCION ALTERNATIVA

// let text = document.getElementById("main-text"); //poner en html <span id="main-text">

// function changeMainText() {
//  text.style.color = "red";
//  text.style.size = "24px";
//  text.textContent = "Botón pulsado!";
// }

// let button = document.getElementById("main-button");
// button.onclick = changeMainText;
