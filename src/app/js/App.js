window.onload = function () {
    $('[data-fancybox="reviews-photo"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close',
        ],
    });

    $('[data-fancybox="about-us-slider"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'close',
        ],
    });

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

    let btnTileRow = document.querySelector('.row');
    let btnTileTile = document.querySelector('.tile');
    let catalogList = document.querySelector('.catalog__items');
    let inStockA = document.querySelector('.in-stock--action');
    let inStock = document.querySelector('.in-stock');
    let cartProduct = document.querySelectorAll('.catalog__items .card-product');

    btnTileRow.addEventListener('click', function () {
        if (catalogList.classList.contains('tile-row--active')) {
            catalogList.classList.remove('tile-row--active');
            cartProduct.forEach(function item(e, i) {
                cartProduct[i].classList.add('card-product--active');
            })
            btnTileRow.classList.add('tile--active');
            btnTileTile.classList.remove('tile--active');

            inStockA.style.display="block";

        }
    });

    btnTileTile.addEventListener('click', function () {

        if (!catalogList.classList.contains('tile-row--active')) {
            catalogList.classList.add('tile-row--active');
            cartProduct.forEach(function item(e, i) {
                cartProduct[i].classList.remove('card-product--active');
            })
            btnTileRow.classList.remove('tile--active');
            btnTileTile.classList.add('tile--active');
            inStockA.style.display="none";
        }
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

var defaultOpen = document.getElementById("defaultOpen");
if (defaultOpen) {
    defaultOpen.click();
}


var boxMoretwo = document.querySelector('.desc-box');
var btnMoretwo = document.querySelector('.about-index__btn');
if (btnMoretwo) {
    btnMoretwo.addEventListener('click', function (ev) {
        boxMoretwo.classList.toggle('desc-box-active');
    });
}

$('select').each(function () {
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});



var twobombSlider  = (function(){
    var drag = false;
    var values = [];
var currency = 'руб.';

    $(".slider").each(function(i,e){
        updateView(e);
    });
    $(".slider>.bar>.lp,.slider>.bar>.rp").bind("mousedown",function(){
        drag = $(this);
    })
    $(document).bind("mousemove",function(e){
        if(!drag)
            return;
        var x = (e.pageX - $(drag).outerWidth()/2 - $(drag).parent().parent().offset().left)/$(drag).parent().parent().outerWidth();
        if(x < 0 ) x = 0;
        if(x > 1) x = 1;
        var rp = $(drag).parent().find(".rp");
        var lp = $(drag).parent().find(".lp");
        if($(drag).hasClass("lp") && x > $(rp).attr("data-pos") ){
            $(rp).attr("data-pos",x);
        }
        if($(drag).hasClass("rp") && x < $(lp).attr("data-pos") ){
            $(lp).attr("data-pos",x);
        }
        $(drag).attr("data-pos",x);
        updateView($(drag).parent().parent());
    });
    $(document).bind("mouseup",function(){
        drag = false;
    });
    function updateView(slider){
        var startVal = parseInt($(slider).find(".bar").data("start"));
        var endVal = parseInt($(slider).find(".bar").data("end"));
        if(startVal > endVal)
            endVal = startVal;
        startVal = startVal || 0;
        endVal = endVal || 100;
        var values = [];
        for(var i = startVal; i <= endVal;i++)
            values.push(i);
        var l  =$(slider).find(".lp").attr("data-pos");
        var r  =$(slider).find(".rp").attr("data-pos");
        var x = $(slider).outerWidth() * l;
        var w = (r - l)*$(slider).outerWidth();
        $(slider).find(".bar").css({left:x+"px",width:w+"px"});
        var index = Math.round(values.length*l);
        if(index >= values.length)
            index = values.length-1;
        $(slider).find(".lp").html("<span>"+values[index]+' '+currency+"</span>");
        index = Math.round(values.length*r);
        if(index >= values.length)
            index = values.length-1;
        $(slider).find(".rp").html("<span>"+values[index]+' '+currency+"</span>");
    }
})();