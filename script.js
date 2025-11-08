document.addEventListener("DOMContentLoaded", function () {
  const aumentaFonte = document.getElementById("fonte+");
  const diminuiFonte = document.getElementById("fonte-");
  const modoEscuro = document.getElementById("escuro");

  let fonteAtual = 1;

  aumentaFonte.addEventListener("click", function () {
    fonteAtual += 0.1;
    document.body.style.fontSize = `${fonteAtual}rem`;
  });

  diminuiFonte.addEventListener("click", function () {
    fonteAtual -= 0.1;
    document.body.style.fontSize = `${fonteAtual}rem`;
  });

  modoEscuro.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
  });
});

ScrollReveal().reveal("#inicio", { delay: 500 });
ScrollReveal().reveal("#politicas", { delay: 500 });
ScrollReveal().reveal("#sobre", { delay: 500 });
