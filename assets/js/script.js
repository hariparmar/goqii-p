// AOS Animation
AOS.init();

const logoSlider = new Swiper(".logo-slider", {
  // Optional parameters
  slidesPerView: 6,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const productRangeThumbSlider = new Swiper(".product-range-slider__thumb", {
  slidesPerView: 3,
  spaceBetween: 34,
});
const productRangeMainSlider = new Swiper(".product-range-slider__main", {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1500,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productRangeThumbSlider,
  },
});

const appFeatureThumbSlider = new Swiper(".app-feature-slider__thumb", {
  slidesPerView: 5,
  spaceBetween: 34,
});
const appFeatureMainSlider = new Swiper(".app-feature-slider__main", {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1500,
  slidesPerView: 1,
  thumbs: {
    swiper: appFeatureThumbSlider,
  },
});
