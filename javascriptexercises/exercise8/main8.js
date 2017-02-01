
// elemento del menu desplegable
let menu = document.getElementById("mobile-display");
console.log(menu);

// no mostrar inicialmente el menu desplegable
menu.style.display = "none";

// elemento del botón del menu desplegable
let button = document.getElementById("display-button");
console.log(button);

// función de mostrar el menu desplegable con el botón
button.onclick = function() {
  menu.style.display = "inline";
}


// elemento de imagen de fondo
let panel = document.getElementById("image-panel");
console.log(panel);

// elemento del botón de cambio imagen de fondo
let buttonBack = document.getElementById("button-back");
console.log(buttonBack);

// elemento del botón en móvil de cambio imagen de fondo
let buttonBackMobile = document.getElementById("button-backmobile");
console.log(buttonBackMobile);

// función de cambio de imagen de fondo y resaltar botón activo
buttonBack.onclick = function() {
  panel.style["background-image"] = "url('images/books.jpg')";
  buttonBack.classList.add("active");
}

// función de cambio en móvil de fondo y resaltar botón activo
buttonBackMobile.onclick = function() {
  panel.style["background-image"] = "url('images/books.jpg')";
  buttonBackMobile.classList.add("active");
}


// elemento del titulo de los párrafos
let title = document.getElementById("paragraphs-title");
console.log(title);

// elemento del botón de cambio del titulo
let buttonTitle = document.getElementById("button-title");
console.log(buttonTitle);

// elemento del botón en móvil de cambio de titulo de los párrafos
let buttonTitleMobile = document.getElementById("button-titlemobile");
console.log(buttonTitleMobile);

// función de cambio de título y resaltar botón activo
buttonTitle.onclick = function() {
  title.textContent = "Recomendación: Los Pilares de la Tierra (Follett)"
  buttonTitle.classList.add("active");
}

// función de cambio en móvil de título y resaltar botón activo
buttonTitleMobile.onclick = function() {
  title.textContent = "Recomendación: Los Pilares de la Tierra (Follett)"
  buttonTitleMobile.classList.add("active");
}


// elemento del párrafo 1
let firstParagraph = document.getElementById("first-paragraph");
console.log(firstParagraph);

// elemento del párrafo 2
let secondParagraph = document.getElementById("second-paragraph");
console.log(secondParagraph);

// elemento del botón de cambio de párrafos
let buttonParagraph = document.getElementById("button-paragraphs");
console.log(buttonParagraph);

// elemento del botón en móvil de cambio de párrafos
let buttonParagraphMobile = document.getElementById("button-paragraphsmobile");
console.log(buttonParagraphMobile);

// asignación variables a los párrafos para luego introducirlos en la función
let paragraphOne = "El gran maestro de la narrativa de acción y suspense nos transporta" +
" a la Edad Media, a un fascinante mundo de reyes, damas, caballeros, pugnas feudales," +
" castillos y ciudades amuralladas. El amor y la muerte se entrecruzan vibrantemente" +
" en este magistral tapiz cuyo centro es la construcción de una catedral gótica.";

let paragraphTwo = "La historia se inicia con el ahorcamiento público de un inocente y" +
" finaliza con la humillación de un rey. Los pilares de la Tierra es la obra maestra de Ken Follett y constituye" +
" una excepcional evocación de una epoca de violentas pasiones.";


// función de cambio de párrafos y resaltar botón activo
buttonParagraph.onclick = function() {
    firstParagraph.textContent = paragraphOne;
    secondParagraph.textContent = paragraphTwo;
    buttonParagraph.classList.add("active");
}

// función de cambio en móvil de párrafos y resaltar botón activo
buttonParagraphMobile.onclick = function() {
    firstParagraph.textContent = paragraphOne;
    secondParagraph.textContent = paragraphTwo;
    buttonParagraphMobile.classList.add("active");
}
