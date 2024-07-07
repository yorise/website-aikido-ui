const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
  slider.style.transform = `translateX(${-i * 29.3}rem)`;
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});
