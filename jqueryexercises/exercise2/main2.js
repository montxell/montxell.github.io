
// elemento del texto
let textLine = $("main span");
console.log(textLine);

// no mostrar inicialmente el texto ---> Se incluye en el css (main span {display: none;})
//                                       en lugar de poner textLine.hide();

// elemento del botón
let button = $("main button");
console.log(button);

// función de mostrar texto con el botón
button.click (function() {
  textLine.show();
});
