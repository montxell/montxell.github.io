
// elemento del menu desplegable
let menuMobile = document.getElementById("mobile-display");
console.log(menuMobile);

// no mostrar inicialmente el menu desplegable --> Se incluye en el css (.menu-display {display: none;})
//                                                 en lugar de poner menuMobile.style.display = "none";

// elemento del botón del menu desplegable
let buttonDisplay = document.getElementById("display-button");
console.log(buttonDisplay);

// función de mostrar y ocultar el menu desplegable con el botón
buttonDisplay.onclick = function() {
  if (menuMobile.style.display == "none") {
    menuMobile.style.display = "inline";
  } else {
    menuMobile.style.display = "none";
  }
}


// elemento de imagen de fondo
let panel = document.getElementById("image-panel");
console.log(panel);

// elemento del titulo de los párrafos
let title = document.getElementById("paragraphs-title");
console.log(title);

// elemento del párrafo 1
let firstParagraph = document.getElementById("first-paragraph");
console.log(firstParagraph);

// elemento del párrafo 2
let secondParagraph = document.getElementById("second-paragraph");
console.log(secondParagraph);



// OPCIÓN 1

// elemento del botón de la opción 1
let buttonOne = document.getElementById("button-one");
console.log(buttonOne);

// elemento del botón en móvil de la opción 1
let buttonOneMobile = document.getElementById("button-onemobile");
console.log(buttonOneMobile);


// asignación variables a los párrafos para luego introducirlos en la función
let paragraphOneOption1 = "El gran maestro de la narrativa de acción y suspense nos transporta" +
" a la Edad Media, a un fascinante mundo de reyes, damas, caballeros, pugnas feudales," +
" castillos y ciudades amuralladas. El amor y la muerte se entrecruzan vibrantemente" +
" en este magistral tapiz cuyo centro es la construcción de una catedral gótica.";

let paragraphTwoOption1 = "La historia se inicia con el ahorcamiento público de un inocente y" +
" finaliza con la humillación de un rey. Los pilares de la Tierra es la obra maestra de Ken Follett y constituye" +
" una excepcional evocación de una epoca de violentas pasiones.";


// función de cambio de la página
buttonOne.onclick = function() {
  panel.style["background-image"] = "url('images/onebook.jpg')";
  title.textContent = "Los Pilares de la Tierra (Ken Follett)";
  firstParagraph.textContent = paragraphOneOption1;
  secondParagraph.textContent = paragraphTwoOption1;
  document.querySelector(".menu button.active").classList.remove("active");
  buttonOne.classList.add("active");
}

// función de cambio en móvil de la página
buttonOneMobile.onclick = function() {
  panel.style["background-image"] = "url('images/onebook.jpg')";
  title.textContent = "Los Pilares de la Tierra (Follett)";
  firstParagraph.textContent = paragraphOneOption1;
  secondParagraph.textContent = paragraphTwoOption1;
  document.querySelector(".menu-display button.active").classList.remove("active");
  buttonOneMobile.classList.add("active");
  menuMobile.style.display = "none";
}



// OPCIÓN 2

// elemento del botón de la opción 2
let buttonTwo = document.getElementById("button-two");
console.log(buttonTwo);

// elemento del botón en móvil de la opción 2
let buttonTwoMobile = document.getElementById("button-twomobile");
console.log(buttonTwoMobile);


// asignación variables a los párrafos para luego introducirlos en la función
let paragraphOneOption2 = "Han pasado 19 años, ser Harry Potter nunca ha sido tarea fácil, menos aún" +
" desde que se ha convertido en un ocupadísimo empleado del Ministerio de Magia, un hombre" +
" casado y padre de tres hijos. Mientras Harry planta cara a un pasado que se resiste a quedar atrás su hijo" +
" menor, Albus, ha de luchar contra el peso de una herencia familiar de la que él nunca quiso saber nada.";

let paragraphTwoOption2 = "Cuando el destino conecte el pasado con el presente, padre e hijo deberán" +
" afrontar una verdad muy incómoda: a veces, la oscuridad surge de los lugares más insospechados." +
" Este libro es una edición de la obra teatral de Jack Thorne basada en una historia original" +
" de J. K. Rowling, John Tiffany y Jack Thorne. Es la octava historia de la saga y la primera que se" +
" representa oficialmente en los escenarios.";


// función de cambio de la página
buttonTwo.onclick = function() {
  panel.style["background-image"] = "url('images/twobook.jpg')";
  title.textContent = "Harry Potter y El Legado Maldito (J.K. Rowling)";
  firstParagraph.textContent = paragraphOneOption2;
  secondParagraph.textContent = paragraphTwoOption2;
  document.querySelector(".menu button.active").classList.remove("active");
  buttonTwo.classList.add("active");
}

// función de cambio en móvil de la página
buttonTwoMobile.onclick = function() {
  panel.style["background-image"] = "url('images/twobook.jpg')";
  title.textContent = "Harry Potter y El Legado Maldito (J.K. Rowling)";
  firstParagraph.textContent = paragraphOneOption2;
  secondParagraph.textContent = paragraphTwoOption2;
  document.querySelector(".menu-display button.active").classList.remove("active");
  buttonTwoMobile.classList.add("active");
  menuMobile.style.display = "none";
}



// OPCIÓN 3

// elemento del botón de la opción 3
let buttonThree = document.getElementById("button-three");
console.log(buttonThree);

// elemento del botón en móvil de la opción 3
let buttonThreeMobile = document.getElementById("button-threemobile");
console.log(buttonThreeMobile);


// asignación variables a los párrafos para luego introducirlos en la función
let paragraphOneOption3 = "Primero fueron catorce años de distancia, las cartas robadas," +
" los impedimentos sociales, la guerra. Más tarde un compromiso inoportuno, la pasión arrebatadora," +
" el amor improbable. Ahora, aunque el abismo que les separa es mucho más profundo," +
" Noah no pierde la esperanza de reencontrarse con la única mujer a la que ha amado.";

let paragraphTwoOption3 = "Y cada mañana, tras colocarse las gafas, abre el diario de su vida y lee," +
" lee todo lo que ha hecho de sus días un camino pleno de momentos de felicidad. Así, a través" +
" de las páginas de ese misterioso cuaderno, descubrimos la historia de un amor que logró superar" +
" todas las barreras imaginables y que hoy, quizás, pueda superar también el muro del olvido.";


// función de cambio de la página
buttonThree.onclick = function() {
  panel.style["background-image"] = "url('images/threebook.jpg')";
  title.textContent = "El Cuaderno de Noah (Nicholas Sparks)";
  firstParagraph.textContent = paragraphOneOption3;
  secondParagraph.textContent = paragraphTwoOption3;
  document.querySelector(".menu button.active").classList.remove("active");
  buttonThree.classList.add("active");
}

// función de cambio en móvil de la página
buttonThreeMobile.onclick = function() {
  panel.style["background-image"] = "url('images/threebook.jpg')";
  title.textContent = "El Cuaderno de Noah (Nicholas Sparks)";
  firstParagraph.textContent = paragraphOneOption3;
  secondParagraph.textContent = paragraphTwoOption3;
  document.querySelector(".menu-display button.active").classList.remove("active");
  buttonThreeMobile.classList.add("active");
  menuMobile.style.display = "none";
}
