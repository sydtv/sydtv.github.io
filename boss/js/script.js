var heightWindow = $(window).innerHeight() + "px";

(function ($) {

    //HEIGHT MOBILE//////////////////////////////////////

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

    $(".acord > li > div").click(function () {
        $(this).closest('li').siblings().find('div').removeClass('active').next('div').slideUp(250);
        $(this).toggleClass("active").next('div').slideToggle(250);
    });

    ///////////////////////////////////////////////////

    //Boards///////////////////////////////////////////
    function board1 () {
        if ($('.b1 img').hasClass('activeboard')) {
            $('.bt1').addClass('activetext');
            $('.bt2').removeClass('activetext');
            $('.bt3').removeClass('activetext');
            $('.bt4').removeClass('activetext');
            $('.bt5').removeClass('activetext');
        }
    }

    function board2 () {
        if ($('.b2 img').hasClass('activeboard')) {
            $('.bt2').addClass('activetext');
            $('.bt1').removeClass('activetext');
            $('.bt3').removeClass('activetext');
            $('.bt4').removeClass('activetext');
            $('.bt5').removeClass('activetext');
        }
    }

    function board3 () {
        if ($('.b3 img').hasClass('activeboard')) {
            $('.bt3').addClass('activetext');
            $('.bt2').removeClass('activetext');
            $('.bt1').removeClass('activetext');
            $('.bt4').removeClass('activetext');
            $('.bt5').removeClass('activetext');
        }
    }

    function board4 () {
        if ($('.b4 img').hasClass('activeboard')) {
            $('.bt4').addClass('activetext');
            $('.bt2').removeClass('activetext');
            $('.bt3').removeClass('activetext');
            $('.bt1').removeClass('activetext');
            $('.bt5').removeClass('activetext');
        }
    }

    function board5 () {
        if ($('.b5 img').hasClass('activeboard')) {
            $('.bt5').addClass('activetext');
            $('.bt2').removeClass('activetext');
            $('.bt3').removeClass('activetext');
            $('.bt4').removeClass('activetext');
            $('.bt1').removeClass('activetext');
        }
    }
    $(".boards > li > div > img").hover(function () {
        $(this).closest('li').siblings().find('img').removeClass('activeboard');
        $(this).addClass("activeboard");
        board1();
        board2();
        board3();
        board4();
        board5();
    });



    ///////////////////////////////////////////////////
    //FORM/////////////////////////////////////////////

    $('#submit').click(function () {
       $('.formdiv').css('display', 'none')
       $('.textsubmit').addClass('activesub');
    });

    ///////////////////////////////////////////////////



}(jQuery));
