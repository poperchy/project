var swiper = new Swiper('.swiper-main', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop:true,
    loopPreventsSlide:false,

});

var swiper = new Swiper('.swiper-popular', {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loopPreventsSlide:false,

});

