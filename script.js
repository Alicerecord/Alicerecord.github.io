const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const navigation = document.querySelector(".site-nav");
if (navigation) {
  navigation.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => navigation.removeAttribute("open"));
  });
}

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const count = carousel.querySelector(".carousel-count");
  let activeIndex = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.hidden = !isActive;
      if (!isActive) slide.querySelectorAll("video").forEach((video) => video.pause());
      slide.setAttribute("aria-label", `${slideIndex + 1} of ${slides.length}: ${slide.dataset.slideLabel}`);
    });
    carousel.classList.toggle("is-video", slides[activeIndex].querySelector("video") !== null);
    const digits = Math.max(2, String(slides.length).length);
    count.textContent = `${String(activeIndex + 1).padStart(digits, "0")} / ${String(slides.length).padStart(digits, "0")}`;
  };

  showSlide(activeIndex);
  carousel.querySelector(".carousel-previous").addEventListener("click", () => {
    showSlide(activeIndex - 1);
  });
  carousel.querySelector(".carousel-next").addEventListener("click", () => {
    showSlide(activeIndex + 1);
  });
});
