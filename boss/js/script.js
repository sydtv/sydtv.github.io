var heightWindow = $(window).innerHeight() + "px";

(function ($) {

     //HEIGHT Card IMG//////////////////////////////////

    $('.mobile').css('height', heightWindow);

    $(window).resize(function () {
        var heightWindow = $(window).innerHeight() + "px";

        $('.mobile').css('height', heightWindow);
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
