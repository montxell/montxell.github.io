
// elemento del menu
let menu = $("#mobile-display");
console.log(menu);

// no mostrar inicialmente el menu desplegable
menu.hide();

// elemento del botón
let button = $("#display-button");
console.log(button);

// función de mostrar y ocultar el menu desplegable con el botón
button.click(function() {
  menu.toggle();
});
