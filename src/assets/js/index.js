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

function showContent(e, content) {
  return (e.target.innerHTML = content);
}

function truncateReviews() {
  const reviews = document.querySelectorAll("#reviews-specialties .review");
  console.log(reviews);
  reviews.forEach((review) => {
    const reviewElem = review.querySelector(".review__content");
    const content = reviewElem.innerHTML;
    const updatedContent =
      content.substring(0, 300) +
      `...<strong class="clickable">Read More</strong>`;
    reviewElem.innerHTML = updatedContent;
    reviewElem.querySelector("strong").addEventListener("click", () => {
      reviewElem.innerHTML = content;
    });
  });
}

addNavToggle();
startTestimonialSlides();
truncateReviews();
