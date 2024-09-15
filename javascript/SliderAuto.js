"use strict";

function carousel() {
  let carouselSlider = document.querySelector(".carousel-slider");
  let list = document.querySelector(".carousel-list");
  let items = document.querySelectorAll(".carousel-item");

  const speed = 1.5; // Velocidade do carrossel
  let x = 0; // Posição atual do carrossel

  function moveCarousel() {
    x -= speed; // Move para a esquerda
    list.style.transform = `translateX(${x}px)`; // Transforma a posição do carrossel

    // Quando o primeiro item sai da tela, mova-o para o final
    if (Math.abs(x) >= items[0].offsetWidth) {
      x = 0; // Reseta a posição
      list.appendChild(items[0]); // Move o primeiro item para o final
      items = document.querySelectorAll(".carousel-item"); // Atualiza a lista de itens
    }
  }

  // Animação suave sem "piscadas"
  let interval = setInterval(moveCarousel, 20); // Aproximadamente 60 frames por segundo ABAIXO DE 16 PODE PISCAR

  // Pausar o carrossel ao passar o mouse
  carouselSlider.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  // Retomar o carrossel quando o mouse sair
  carouselSlider.addEventListener("mouseleave", () => {
    interval = setInterval(moveCarousel, 20);
  });
}

carousel();
