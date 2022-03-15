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
  const slideSelector = ".carousel__slide";
  const isVisibleClassName = "carousel__slide--is-visible";
  const testimonialSection = document.querySelector("#testimonials");
  const slides = testimonialSection.querySelectorAll(slideSelector);
  function nextSlide(count = 0) {
    slides.forEach(slide => slide.classList.remove(isVisibleClassName))
    //const previousSlide = count > 0 ? (count - 1) : (slides.length - 1);
    const nextSlideIdx = count < slides.length - 1 ? count + 1 : 0;
    slides[count].classList.add(isVisibleClassName);
    setTimeout(() => nextSlide(nextSlideIdx), 10000);
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

function applyDisplayStateToggles() {
  function toggleDisplayState(element) {
    element.classList.toggle("details__body--is-open");
  }
  document
    .querySelectorAll(".details")
    .forEach((item) =>
      item
        .querySelector(".details__summary")
        .addEventListener("click", () =>
          toggleDisplayState(item.querySelector(".details__body"))
        )
    );
}

addNavToggle();
startTestimonialSlides();
truncateReviews();
applyDisplayStateToggles();
