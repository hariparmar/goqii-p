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
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {

        640: {
            slidesPerView: 3,
            spaceBetween: 73
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 90
        },
        1800: {
            slidesPerView: 5,
            spaceBetween: 60
        }
    },
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
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },
    slideToClickedSlide: true,
    // draggable: true,
    breakpoints: {
        870: {
            slidesPerView: 4,

        }
    },

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

    // onProgress: move,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: healthEcosystemThumbSlider,
    },



});


// function move() {
//     var elem = document.getElementById("progress");
//     var width = 1;
//     var autoplayTime = autoplay / 100;
//     var id = setInterval(frame, autoplayTime);

//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + '%';
//         }
//     }
// }
const blogTestimonialsSlider = new Swiper(".blog-testimonials-slider", {
    // Optional parameters
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    // speed: 1500,
    spaceBetween: 4.5,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        767: {
            spaceBetween: 5
        }
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

// Magnific popup
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});





//  About Team slider
const aboutLeaderThumbSlider = new Swiper(".about-team-slider__inner__thumb--leadership", {
    slidesPerView: 2.5,
    spaceBetween: 10,

    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10
        },
    },

});
const aboutLeaderMainSlider = new Swiper(".about-team-slider__inner__main--leadership", {
    // Optional parameters
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500,
    slidesPerView: 1,


    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: aboutLeaderThumbSlider,
    },
});


const aboutDirectorsThumbSlider = new Swiper(".about-team-slider__inner__thumb--directors", {
    slidesPerView: 6,
    spaceBetween: 34,

    breakpoints: {
        768: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    },
});
const aboutDirectorsMainSlider = new Swiper(".about-team-slider__inner__main--directors", {
    // Optional parameters
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 500,
    slidesPerView: 1,


    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: aboutDirectorsThumbSlider,
    },
});

const aboutInvestorsSlider = new Swiper(".investors__inner__members__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 500,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// blog page banner slider
const blogBanenerSlider = new Swiper(".blog-banner__inner__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//  date picker - blog page
// $(function() {
//     $("#datepicker").datepicker({
//         autoclose: true,
//         todayHighlight: true
//     }).datepicker('update', new Date());
// });


// PLP

const plpProductSlider = new Swiper(".plp-product-slider", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});

const plpCoachingSlider = new Swiper(".plp-coaching-slider", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 15,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    },
});

const plpDiseaseConditionSlider = new Swiper(".plp-disease-condition-slider", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 3,
        }
    },
});

const plpComboSlider = new Swiper(".plp-combo-slider", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 3,
        }
    },
});

// Product specification


const smartVitalThumbSlider = new Swiper(".smart-vital-slider__thumb", {
    slidesPerView: 4,
    spaceBetween: 10,
});
const smartVitalMainSlider = new Swiper(".smart-vital-slider__main", {
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
        swiper: smartVitalThumbSlider,
    },
});


const productSpecsThumbSlider = new Swiper(".product-specs-slider__thumb", {
    slidesPerView: 6,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },
    slideToClickedSlide: true
});



const productSpecsSliderMain = new Swiper(".product-specs-slider__main", {
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
    // onProgress: move,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: productSpecsThumbSlider,
    },
});

const productSpecsSkipThumbSlider = new Swiper(".product-specsSkip-slider__thumb", {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },
    slideToClickedSlide: true
});

const productSpecsSkipSliderMain = new Swiper(".product-specsSkip-slider__main", {
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
    // onProgress: move,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: productSpecsSkipThumbSlider,
    },
});

// Careers page - Core value
setTimeout(function() {
    $(".careers-core-values__slider__single").outerHeight($(".careers-core-values__slider .swiper-slide").outerWidth());
}, 10);


const coreValuesSlider = new Swiper(".careers-core-values__slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 500,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        990: {
            spaceBetween: 50,
            slidesPerView: 3,
        }
    },
});


$(document).ready(function() {
    var screenWidht = $(window).width();

    // dropdown for content pages tabs in mobile devices
    if (screenWidht < 1281) {
        $(".content-page__inner__sidebar .nav-item").click(function() {
            $(this).closest(".content-page__inner__sidebar").toggleClass("active");
        })
    }

    if (screenWidht < 993) {

        $(".Mobile__Humburger").click(function() {
            $(this).toggleClass("Active");
            $(".header-wrapper__navigation").toggleClass("Mobile__Navigation--Active");
            $('html').toggleClass("Fixed--Body");
        })

        $(".header-wrapper__navigation__submenu").click(function() {
            $(this).toggleClass("header-wrapper__navigation__submenu--Active")
        })
    }
})