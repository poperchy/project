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

    overlay.addEventListener('click', function () {
        burgerBtn.classList.remove('burger__btn--active')
        navMenu.classList.remove('nav__menu--active');
        body.classList.remove('hidden');
        overlay.classList.remove('overlay--active');
    })

    let inputSearch = document.querySelectorAll('input[type="search"]');
    let inputClearSearch = document.querySelectorAll('.search__clear');

    inputClearSearch.forEach(function eax (e, i,) {
        inputSearch.forEach(function eaxe ( e, i) {
            inputSearch[i].addEventListener('click', function () {
                inputClearSearch[i].classList.add('search__clear--active');
            })
            inputClearSearch[i].addEventListener('click', function () {
                inputSearch[i].value = '';
                inputClearSearch[i].classList.remove('search__clear--active');

            })
        })



        window.addEventListener('mouseup', e => {
            if (inputClearSearch[i].classList.contains('search__clear--active') && e.target != inputSearch) {
                inputClearSearch[i].classList.remove('search__clear--active');
            }
        });
    });


// const formControl = document.querySelector('.form-control');
// const headerLogo = document.querySelector('.header__logo');
//  if(formControl.focus){
//      headerLogo.style.display='none';
// }

    // for (let i = 0; i < inputClearSearch.length; i++) {
    //     let btn = inputClearSearch[i];
    //     inputSearch.addEventListener('click', function (e) {
    //         btn.classList.add('search__clear--active');
    //     })
    //     btn.addEventListener('click', function () {
    //         inputSearch.value = '';
    //         btn.classList.remove('search__clear--active');
    //
    //     })
    //
    //     window.addEventListener('mouseup', e => {
    //         if (btn.classList.contains('search__clear--active') && e.target != inputSearch) {
    //             btn.classList.remove('search__clear--active');
    //         }
    //     });
    // }

}








