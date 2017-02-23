

// elementos de los botones de opción
let buttonJQuery = document.getElementById("jquery-button");
console.log(buttonJQuery);

let buttonAngular = document.getElementById("angular-button");
console.log(buttonAngular);

// elementos de las quotes
let quoteJQuery = document.getElementById("jquery-quote");
console.log(quoteJQuery);

let quoteAngular = document.getElementById("angular-quote");
console.log(quoteAngular);


// funciones de mostrar y ocultar las quotes
buttonJQuery.onmouseover = function() {
  quoteJQuery.style.display = "inline";
};

buttonJQuery.onmouseout = function () {
  quoteJQuery.style.display = "none";
};

buttonAngular.onmouseover = function() {
  quoteAngular.style.display = "inline";
};

buttonAngular.onmouseout = function () {
  quoteAngular.style.display = "none";
};
