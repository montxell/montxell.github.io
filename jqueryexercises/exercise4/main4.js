
// elemento texto del párrafo
let paragraph = $(".paragraph");
console.log(paragraph);

// botón de transparencia
let transparencyButton = $("#option1");
console.log(transparencyButton);

// botón de opacidad
let opacityButton = $("#option2");
console.log(opacityButton);


let alpha = 0.5;


transparencyButton.click(function() {

  if (alpha > 0) {

    alpha -= 0.05;

  } else {

    alpha = 0;

  }

  paragraph.css("color", "rgba(255, 255, 255, " + alpha + ")");

});


opacityButton.click(function() {

  if (alpha < 1) {

    alpha += 0.05;

  } else {

    alpha = 1;
  }

  paragraph.css("color", "rgba(255, 255, 255, " + alpha + ")");

});
