// AOS Animation
AOS.init();

const offerSlider = new Swiper(".offer-slider", {
    // Optional parameters
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // If we need pagination
    pagination: {
        el: ".offer-slider__pagination.swiper-pagination",
        clickable: true
    },
});

const logoSlider = new Swiper(".logo-slider", {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 60,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const newProductSlider = new Swiper(".new-product-slider", {
    // Optional parameters
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true
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
        clickable: true
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
    speed: 0,
    slidesPerView: 1,
    thumbs: {
        swiper: appFeatureThumbSlider,
    },
    autoplay: {
        delay: 5000,
    },
});
const healthEcosystemThumbSlider = new Swiper(".health-ecosystem-slider__thumb", {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },
    slideToClickedSlide: true
});
const healthEcosystemMainSlider = new Swiper(".health-ecosystem-slider__main", {
    // Optional parameters
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true
    },
    speed: 0,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    onProgress: move,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: healthEcosystemThumbSlider,
    },
});

function move() {
    var elem = document.getElementById("progress");
    var width = 1;
    var autoplayTime = autoplay / 100;
    var id = setInterval(frame, autoplayTime);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
const blogTestimonialsSlider = new Swiper(".blog-testimonials-slider", {
    // Optional parameters
    slidesPerView: 2,
    centeredSlides: true,
    initialSlide: 1,
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    // speed: 1500,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});