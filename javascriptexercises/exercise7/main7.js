
// elemento del menu
let menu = document.getElementById("mobile-display");
console.log(menu);

// no mostrar inicialmente el menu desplegable
menu.style.display = "none";

// elemento del botón
let button = document.getElementById("display-button");
console.log(button);

// función de mostrar y ocultar el menu desplegable con el botón
button.onclick = function() {
  if (menu.style.display == "none") {
    menu.style.display = "inline";
  } else {
    menu.style.display = "none";
  }
}
