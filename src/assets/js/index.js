function addNavToggle() {
  const body = document.querySelector("body");
  const navBtn = document.querySelector(".nav__button");
  const navLinks = document.querySelector(".nav__links");
  navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav__links--is-open");
    body.classList.toggle("no-scroll");
  });
}

function startTestimonialSlides() {
  const testimonialSection = document.querySelector("#testimonials");
  const slides = testimonialSection.querySelectorAll(".review");
  function hideSlides() {
    slides.forEach((slide) => (slide.style.display = "none"));
  }
  hideSlides();
  let count = 0;
  function nextSlide() {
    hideSlides();
    slides[count].style.display = "flex";
    count < slides.length - 1 ? count++ : (count = 0);
    setTimeout(nextSlide, 3000);
  }
  nextSlide();
}

addNavToggle();
startTestimonialSlides();
