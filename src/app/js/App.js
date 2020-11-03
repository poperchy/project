window.onload = function () {
    const navMenu = document.querySelector('.nav__menu');
    const burgerBtn = document.querySelector('.burger__btn');
    const body = document.querySelector('body');

    burgerBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        burgerBtn.classList.toggle('burger__btn--active')
        navMenu.classList.toggle('nav__menu--active');
        body.classList.toggle('hidden');
    })
}
