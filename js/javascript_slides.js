var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var bolinhas = document.getElementsByClassName("bolinha_slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < bolinhas.length; i++) {
    bolinhas[i].className = bolinhas[i].className.replace(" bolinha_ativa", "");
  }
  slides[slideIndex - 1].style.display = "block";
  bolinhas[slideIndex - 1].className += " bolinha_ativa";
  setTimeout(showSlides, 2000); // Tempo para alteracao do slide
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function mudarCor(x) {

  var imagem = x.getAttribute("src");
  if (imagem == "img/coracao_vazio.png") {
    x.setAttribute("src", "img/coracao_cheio.png")
  } else {

    x.setAttribute("src", "img/coracao_vazio.png")
  }
}

function goBack() {
  window.history.back();
}
