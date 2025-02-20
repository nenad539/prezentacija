let currentSlide = 0;
const slides = document.querySelectorAll(".slajd");
const totalSlides = slides.length;

function showSlide(index, direction) {
  slides[currentSlide].classList.remove("active", "slide-left", "slide-right");
  slides[index].classList.add("active");

  if (direction === "next") {
    slides[index].classList.add("slide-left");
  } else if (direction === "prev") {
    slides[index].classList.add("slide-right");
  }

  currentSlide = index;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % totalSlides;
  showSlide(nextIndex, "next");
}

function prevSlide() {
  const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(prevIndex, "prev");
}

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

showSlide(currentSlide);