const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

//Forside pil//
window.addEventListener("scroll", function () {
  const pil = document.getElementById("pilScroll");
  if (window.scrollY > 100) {
    pil.style.display = "none";
  } else {
    pil.style.display = "block";
  }
});
