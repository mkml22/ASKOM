let currentIndex = 0;

function showSlide(index) {
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;

  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  currentIndex = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 5000); // otomatis setiap 5 detik
