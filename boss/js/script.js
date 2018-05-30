function hideMobNav() {
    $('.mobilebar, .burgericon').removeClass('open-nav');
    $('.mobilebar').slideUp();
}

function showMobNav() {
    $('.mobilebar, .burgericon').addClass('open-nav');
    $('.mobilebar').slideDown();
}

(function ($) {

    //HEIGHT MOBILE-NAV///////////////////////////////////

    var heightNav = $('.topnavbar').height();
    var heightWindow = $(window).height();
    var heightDropdown = heightWindow - heightNav;
    console.log(heightDropdown);

    $('.mobile-nav ul').css('height', heightDropdown);
    $('.bigImage').css('height', heightWindow);

    $(window).resize(function () {
        var heightNav = $('.topnavbar').height();
        var heightWindow = $(window).height();
        var heightDropdown = heightWindow - heightNav;
        console.log(heightDropdown);

        $('.mobile-nav ul').css('height', heightDropdown);
        $('.bigImage').css('height', heightWindow);
    });

    ///////////////////////////////////////////////////

    //HEIGHT Card IMG//////////////////////////////////

    var heightCard = $('.cardimg img').height();

    $('.cardimg .text').css('height', heightCard);

    $(window).resize(function () {
        var heightCard = $('.cardimg img').height();

        $('.cardimg .text').css('height', heightCard);
    });

    ///////////////////////////////////////////////////

    //HEIGHT Accordions//////////////////////////////////

    var heightTitler = $('.company .wrap .titler').height();
    var heightImgComp = $('.company .wrap .cardimg').height();
    var heightAcc = heightTitler + heightImgComp + 80;

    $('.company .acord').css('top', heightAcc);

    $(window).resize(function () {
        var heightTitler = $('.company .wrap .titler').height();
        var heightImgComp = $('.company .wrap .cardimg').height();
        var heightAcc = heightTitler + heightImgComp + 80;
        $('.company .acord').css('top', heightAcc);

    });

    ///////////////////////////////////////////////////


    $('.burgericon').click(function () {
        if ($('.mobilebar').hasClass('open-nav')) {
            hideMobNav();
        } else {
            showMobNav();
        }
    });

    $('.mobile-nav ul li').click(function () {
        hideMobNav();
    });

    //Card IMG////////////////////////////////////////////

    $('.cardimg').click(function () {
       $('.cardimg .text').toggleClass('visible');
       $('.cardimg img').toggleClass('visible');
    });

    //////////////////////////////////////////////////////

    // Accordion//////////////////////////////////////////

    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            var setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'show', 'remove');

            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }

    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }

    ///////////////////////////////////////////////////


}(jQuery));