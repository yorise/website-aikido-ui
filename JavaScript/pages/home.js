const readMoreBtn = document.querySelector(
  "section.about .content span.read-more-btn"
);
const text = document.querySelector("section.about .content p span.read-more");

readMoreBtn.addEventListener("click", () => {
  if (text.classList.contains("active")) {
    readMoreBtn.textContent = "Read More...";
    text.classList.remove("active");
  } else {
    readMoreBtn.textContent = "Read Less...";
    text.classList.add("active");
  }
});
