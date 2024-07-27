document.querySelector(".lang-toggle").addEventListener("click", () => {
  document.getElementById("ln-pop-up").classList.toggle("visible");
});

document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("ln-pop-up").classList.remove("visible");
});

document.querySelector(".en").addEventListener("click", () => {
  document.getElementById("languege").src = "./assets/en.jpg";
  document.getElementById("ln-pop-up").classList.remove("visible");
  // document.querySelector(".rus").classList.remove("hidden");
  // document.querySelector(".en").classList.toggle("hidden");
});

document.querySelector(".sp").addEventListener("click", () => {
  document.getElementById("languege").src = "./assets/es.jpg";
  document.getElementById("ln-pop-up").classList.remove("visible");
});

// Slider

let slider = tns({
  container: ".my-slider",
  slideBy: 1,
  speed: 400,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".next",
  nav: false,
  responsive: {
    1440: {
      items: 4,
      gutter: 20,
    },
    1100: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});
// Slider End
