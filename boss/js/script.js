var important = "!important";

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

    $('.mobile-nav ul').css('height', heightDropdown);
    $('.bigImage').css('height', heightWindow);

    $(window).resize(function () {
        var heightNav = $('.topnavbar').height();
        var heightWindow = $(window).height();
        var heightDropdown = heightWindow - heightNav;

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

    //EINMITTEN/////////////////////////////////////////

    var widthCardimg = $('.titler').width();
    var mittler = widthCardimg /= 2;
    var calcer = "calc(50% - " + mittler + "px)";
    $('.titler').css('left', calcer);
    $('.cardimg').css('left', calcer);


    $(window).resize(function () {
        var widthCardimg = $('.titler').width();
        var mittler = widthCardimg /= 2;
        var calcer = "calc(50% - " + mittler + "px)";
        $('.titler').css('left', calcer);
        $('.cardimg').css('left', calcer);

    });
    ////////////////////////////////////////////////////

    //HEIGHT TEXT//////////////////////////////////

    var heightIMGtext = $('.company .wrap .cardimg img').height();
    var heightTEXT = heightIMGtext + 20;
    $('.company .cardimg .text').css('height', heightTEXT);

    $(window).resize(function () {
        var heightIMGtext = $('.company .wrap .cardimg img').height();
        $('.company .cardimg .text').css('height', heightIMGtext);

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

    $(".acord > li > span").click(function() {
        $(this).closest('li').siblings().find('span').removeClass('active').next('div').slideUp(250);
        $(this).toggleClass("active").next('div').slideToggle(250);
    });

    ///////////////////////////////////////////////////


}(jQuery));