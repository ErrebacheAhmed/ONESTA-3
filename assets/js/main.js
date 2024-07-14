// mobile swiper features-section
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-custom',
        clickable: false,
      },
      autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          autoplay: true, 
        },
      },
    });
  });