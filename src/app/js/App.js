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

    inputClearSearch.forEach(function eax(e, i,) {
        inputSearch.forEach(function eaxe(e, i) {
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

    let btn = document.querySelectorAll('a[href^="tel:"]');

    let resizeWindow = function (evt) {
        if (window.innerWidth <= 1100) {
            evt.stopPropagation();
        } else {
            evt.preventDefault();
        }
    };

    btn.forEach(function (item) {
        item.addEventListener('click', resizeWindow);
    });

    btn.forEach(function (item) {
        item.addEventListener('resize', resizeWindow);
    });


    let boxMore = document.querySelectorAll('.title-box');
    let btnMore = document.querySelectorAll('.button');

    btnMore.forEach((btn) => {
        btn.addEventListener('click', function (ev) {
            boxMore.forEach((box) => {
                if (box != this.parentElement) {
                    box.classList.remove('title-box-active');
                }
            });
            this.parentElement.classList.add('title-box-active');
        });
    });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


var boxMoretwo = document.querySelector('.desc-box');
var btnMoretwo = document.querySelector('.about-index__btn');

btnMoretwo.addEventListener('click', function (ev) {
    boxMoretwo.classList.toggle('desc-box-active');
});

