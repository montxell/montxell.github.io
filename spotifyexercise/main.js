var buttonJQuery = document.getElementById("jquery-button");
console.log(buttonJQuery);
var buttonAngular = document.getElementById("angular-button");
console.log(buttonAngular);
var quoteJQuery = document.getElementById("jquery-quote");
console.log(quoteJQuery);
var quoteAngular = document.getElementById("angular-quote");
console.log(quoteAngular);
buttonJQuery.onmouseover = function () {
    quoteJQuery.style.display = "inline";
};
buttonJQuery.onmouseout = function () {
    quoteJQuery.style.display = "none";
};
buttonAngular.onmouseover = function () {
    quoteAngular.style.display = "inline";
};
buttonAngular.onmouseout = function () {
    quoteAngular.style.display = "none";
};
