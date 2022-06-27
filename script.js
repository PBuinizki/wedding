"use strict"

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
  });


  AOS.init({
    duration: 1500
  });