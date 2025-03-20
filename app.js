const nav = document.querySelector(".nav");
const button = document.querySelector("button");

// button.onclick = () => {
button.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
});