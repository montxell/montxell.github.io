
//----- inicio ELEMENTOS MENÚ VERSIÓN MÓVIL -----//

// elemento del menu desplegable
let menuMobile = $("#mobile-display");
console.log(menuMobile);

// no mostrar inicialmente el menu desplegable
menuMobile.hide();

// elemento del botón del menu desplegable
let buttonDisplay = $("#display-button");
console.log(buttonDisplay);

/*
// función de mostrar y ocultar el menu desplegable con el botón  //--> Hecho más abajo en ANIMACIONES
buttonDisplay.click(function() {
  menuMobile.toggle();
});
*/

//----- fin ELEMENTOS MENÚ VERSIÓN MÓVIL -----//




//----- inicio ELEMENTOS A CAMBIAR: fondo, título y párrafos -----//

// elemento de imagen de fondo
let panel = $("#image-panel");
console.log(panel);

// elemento del titulo de los párrafos
let title = $("#paragraphs-title");
console.log(title);

// elemento del párrafo 1
let firstParagraph = $("#first-paragraph");
console.log(firstParagraph);

// elemento del párrafo 2
let secondParagraph = $("#second-paragraph");
console.log(secondParagraph);

//----- fin ELEMENTOS A CAMBIAR: fondo, título y párrafos -----//




//----- inicio ESPECIFICACIONES de las OPCIONES -----//

// OPCIÓN 1

// elemento del botón de la opción 1
let buttonOne = $("#button-one");
console.log(buttonOne);

// elemento del botón en móvil de la opción 1
let buttonOneMobile = $("#button-onemobile");
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
buttonOne.click(function() {
  panel.css("background-image", "url('images/onebook.jpg')");
  title.text("Los Pilares de la Tierra (Ken Follett)");
  firstParagraph.text(paragraphOneOption1);
  secondParagraph.text(paragraphTwoOption1);
  $(".menu button.active").removeClass("active");
  buttonOne.addClass("active");
});

// función de cambio en móvil de la página
buttonOneMobile.click(function() {
  panel.css("background-image", "url('images/onebook.jpg')");
  title.text("Los Pilares de la Tierra (Follett)");
  firstParagraph.text(paragraphOneOption1);
  secondParagraph.text(paragraphTwoOption1);
  $(".menu-display button.active").removeClass("active");
  buttonOneMobile.addClass("active");
  menuMobile.hide();
});



// OPCIÓN 2

// elemento del botón de la opción 2
let buttonTwo = $("#button-two");
console.log(buttonTwo);

// elemento del botón en móvil de la opción 2
let buttonTwoMobile = $("#button-twomobile");
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
buttonTwo.click(function() {
  panel.css("background-image", "url('images/twobook.jpg')");
  title.text("Harry Potter y El Legado Maldito (J.K. Rowling)");
  firstParagraph.text(paragraphOneOption2);
  secondParagraph.text(paragraphTwoOption2);
  $(".menu button.active").removeClass("active");
  buttonTwo.addClass("active");
});

// función de cambio en móvil de la página
buttonTwoMobile.click(function() {
  panel.css("background-image", "url('images/twobook.jpg')");
  title.text("Harry Potter y El Legado Maldito (J.K. Rowling)");
  firstParagraph.text(paragraphOneOption2);
  secondParagraph.text(paragraphTwoOption2);
  $(".menu-display button.active").removeClass("active");
  buttonTwoMobile.addClass("active");
  menuMobile.hide();
});



// OPCIÓN 3

// elemento del botón de la opción 3
let buttonThree = $("#button-three");
console.log(buttonThree);

// elemento del botón en móvil de la opción 3
let buttonThreeMobile = $("#button-threemobile");
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
buttonThree.click(function() {
  panel.css("background-image", "url('images/threebook.jpg')");
  title.text("El Cuaderno de Noah (Nicholas Sparks)");
  firstParagraph.text(paragraphOneOption3);
  secondParagraph.text(paragraphTwoOption3);
  $(".menu button.active").removeClass("active");
  buttonThree.addClass("active");
});

// función de cambio en móvil de la página
buttonThreeMobile.click(function() {
  panel.css("background-image", "url('images/threebook.jpg')");
  title.text("El Cuaderno de Noah (Nicholas Sparks)");
  firstParagraph.text(paragraphOneOption3);
  secondParagraph.text(paragraphTwoOption3);
  $(".menu-display button.active").removeClass("active");
  buttonThreeMobile.addClass("active");
  menuMobile.hide();
});


//----- fin ESPECIFICACIONES de las OPCIONES -----//




//----- inicio ANIMACIONES -----//

// elemento de todos los botones del menú principal y del menú móvil
let buttons = $(".menu button");
let buttonsMobile = $(".menu-display button");


// BOTONES

// animación botones opción 1, opción 2 y opción 3
function animateButtons() {

  buttons.mouseover(function(){
    $(this).animate({padding: "10px"});
  });

  buttons.mouseout(function(){
    $(this).animate({padding: "5px"});
  });
}

animateButtons();


// animación botones versión móvil opción 1, opción 2 y opción 3
function animateButtonsMobile() {

  buttonsMobile.mouseover(function(){
    $(this).animate({padding: "10px"});
  });

  buttonsMobile.mouseout(function(){
    $(this).animate({padding: "5px"});
  });
}

animateButtonsMobile();



// PÁRRAFOS

// La animación se realiza para que aparezca cada uno de los párrafos, pero se podría
// hacer que aparecieran a la vez, se debe asignar el elemento de todos los párrafos
//let paragraphs = $(".paragraphs > div");

// animación párrafos efecto 'fade in' con animate
function animateParagraphs() {
  buttons.click(function(){
    firstParagraph.css("opacity","0");
    secondParagraph.css("opacity", "0");
    firstParagraph.animate({opacity: 1}, 700, function() {
      secondParagraph.animate({opacity: 1}, 700);
    });
  });

  buttonsMobile.click(function(){
    firstParagraph.css("opacity","0");
    secondParagraph.css("opacity", "0");
    firstParagraph.animate({opacity: 1}, 700, function() {
      secondParagraph.animate({opacity: 1}, 700);
    });
  });
}

animateParagraphs();

/*
// animación párrafos efecto 'fade in' con método fadeIn()
function fadeInParagraphs() {
  buttons.click(function() {
    secondParagraph.hide();
    firstParagraph.hide().fadeIn(500, function() {
      secondParagraph.fadeIn("slow");
    });
  });

  buttonsMobile.click(function() {
    secondParagraph.hide();
    firstParagraph.hide().fadeIn(500, function() {
      secondParagraph.fadeIn("slow");
    });
  });
}

fadeInParagraphs();
*/


// MENÚ DESPLEGABLE MÓVIL

// animación despliegue menú móvil
buttonDisplay.click(function() {
  menuMobile.slideToggle("slow", "linear");
});


//----- fin ANIMACIONES -----//
