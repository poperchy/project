window.onload = function () {
    const navMenu = document.querySelector('.nav__menu');
    const burgerBtn = document.querySelector('.burger__btn');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

        burgerBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        burgerBtn.classList.toggle('burger__btn--active')
        navMenu.classList.toggle('nav__menu--active');
        body.classList.toggle('hidden');
        overlay.classList.toggle('overlay--active');
    })

    overlay.addEventListener('click', function(){
        burgerBtn.classList.remove('burger__btn--active')
        navMenu.classList.remove('nav__menu--active');
        body.classList.remove('hidden');
        overlay.classList.remove('overlay--active');
    })


    let inputSearch = document.querySelector('input[type="search"]');
    let inputClearSearch = document.querySelector('.search__clear');

    inputClearSearch.addEventListener('click', function (e) {
        e.preventDefault();
        inputSearch.value = '';
    })
}

