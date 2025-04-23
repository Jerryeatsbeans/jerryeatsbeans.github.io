function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}




document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    const slideInterval = 4000;
    images[currentIndex].classList.add('active');
    setInterval(() => {


      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');


    }, slideInterval);
  })