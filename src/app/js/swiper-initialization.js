var swiper = new Swiper('.swiper-main', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    loopPreventsSlide: false,

});

var swiper = new Swiper('.swiper-popular', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loopPreventsSlide: false,


    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
        },
        1024: {
            centerSlides: false,
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1025: {
            slidesPerView: 3,
        },
        1098: {
            slidesPerView: 4,
        },
        // when window width is >= 320px
        1454: {
            slidesPerView: 5,

        },

    }

});

