AOS.init();

(function () {
  const totalSlides = 11; // atualizar se mudar o número
  const intervalTime = 3000; // ms
  let counter = 1;
  let interval;

  function goTo(index) {
    const el = document.getElementById("radio" + index);
    if (el) el.checked = true;
    counter = index;
  }

  function nextSlide() {
    counter++;
    if (counter > totalSlides) counter = 1;
    goTo(counter);
  }

  function startAutoplay() {
    stopAutoplay();
    interval = setInterval(nextSlide, intervalTime);
  }

  function stopAutoplay() {
    if (interval) clearInterval(interval);
  }

  // Start
  startAutoplay();

  // Se usuário clicar manualmente, vai resetar o timer (melhora a UX)
  const manualBtns = document.querySelectorAll(".manual-navigation .manual-btn");
  manualBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      const index = idx + 1;
      goTo(index);
      startAutoplay(); // reinicia o autoplay
    });
  });

  // opcional: parar autoplay ao focar o slider (acessibilidade)
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);
  }
})();
