const navBtn = document.querySelector(".nav__button");
const navLinks = document.querySelector(".nav__links");
navBtn.addEventListener("click", () =>
  navLinks.classList.toggle("nav__links--is-open")
);
