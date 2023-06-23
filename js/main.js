$(document).ready(function() {
    var swiper = new Swiper(".js-swiper-testimonials", {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-testimonial__button--next",
            prevEl: ".swiper-testimonial__button--prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
        },
    });
});
