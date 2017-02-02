
// elemento texto del párrafo
let paragraph = document.querySelector(".paragraph");
console.log(paragraph);

// botón de transparencia
let transparencyButton = document.getElementById("option1");
console.log(transparencyButton);

// botón de opacidad
let opacityButton = document.getElementById("option2");
console.log(opacityButton);


let alpha = 0.5;


transparencyButton.onclick = function() {

  if (alpha > 0) {

    alpha -= 0.05;

  } else {

    alpha = 0;

  }

  paragraph.style.color = "rgba(255, 255, 255, " + alpha + ")";

}


opacityButton.onclick = function() {

  if (alpha < 1) {

    alpha += 0.05;

  } else {

    alpha = 1;
  }

  paragraph.style.color = "rgba(255, 255, 255, " + alpha + ")";

}
