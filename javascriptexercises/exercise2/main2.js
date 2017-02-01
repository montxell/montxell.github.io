
// elemento del texto
let text = document.querySelector("main span");
console.log(text);

// no mostrar inicialmente el texto
text.style.display = "none";

// elemento del botón
let button = document.querySelector("main button");
console.log(button);

// función de mostrar texto con el botón
button.onclick = function() {
  text.style.display = "inline";
}
