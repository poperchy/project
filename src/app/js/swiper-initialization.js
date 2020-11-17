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
    slidesPerView: 5,
    spaceBetween: 10,
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
        1350:{
            slidesPerView: 5,
        },
        // when window width is >= 320px
        1454: {
            slidesPerView: 5,

        },

    }

});

var swiper = new Swiper('.swiper-brands', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loopPreventsSlide: 0,
    breakpoints: {
        320:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        490:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        767:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1025: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        1300:{
            slidesPerGroup: 1,
            slidesPerView: 5,
        },
    },
});