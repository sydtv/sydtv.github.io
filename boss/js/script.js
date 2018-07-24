(function ($) {

    //HEIGHT MOBILE//////////////////////////////////////

    //DER VARIABLE HEIGHTWINDOW WIRD DIE HÖHE DES FENSTERS MITGEGEBEN
    var heightWindow = $(window).innerHeight() + "px";

    //DER CLASS MOBILE WIRD DIE HÖHE DES FENSTERS GEGEBEN
    $('.mobile').css('height', heightWindow);

    //BEI VERÄNDERUNG DES FENSTERS WIRD DIESE FUNCTION AUSGELÖST
    $(window).resize(function () {

        //DER VARIABLE HEIGHTWINDOW WIRD DIE HÖHE DES FENSTERS MITGEGEBEN
        var heightWindow = $(window).innerHeight() + "px";

        //DER CLASS MOBILE WIRD DIE HÖHE DES FENSTERS GEGEBEN
        $('.mobile').css('height', heightWindow);

    });

    ///////////////////////////////////////////////////


    //HEIGHT Card IMG//////////////////////////////////

    //DER VARIABLE HEIGHTCARD WIRD DIE HÖHE DES IMG DER CLASS CARDIMG MITGEGEBEN
    var heightCard = $('.cardimg img').height();

    //DER CLASS TEXT WIRD DIE HÖHE DES IMG DER CLASS CARDIMGS GEGEBEN
    $('.cardimg .text').css('height', heightCard);

    //BEI VERÄNDERUNG DES FENSTERS WIRD DIESE FUNCTION AUSGELÖST
    $(window).resize(function () {
        //DER VARIABLE HEIGHTCARD WIRD DIE HÖHE DES IMG DER CLASS CARDIMG MITGEGEBEN
        var heightCard = $('.cardimg img').height();

        //DER CLASS TEXT WIRD DIE HÖHE DES IMG DER CLASS CARDIMGS GEGEBEN
        $('.cardimg .text').css('height', heightCard);
    });

    ///////////////////////////////////////////////////


    //HEIGHT TEXT//////////////////////////////////

    //DER VARIABLE HEIGHTIMGTEXT WIRD DIE HÖHE DES IMG DER CLASS CARDIMG ZUGEWIESEN
    var heightIMGtext = $('.company .wrap .cardimg img').height();

    //DIE CLASS HEIGHTIMGTEXT WIRD UM 20 ERHÖHT UND IN DER VARIABLE HEIGHTTEXT GESPEICHERT
    var heightTEXT = heightIMGtext + 20;

    //DER CLASS TEXT WIRD DIE HÖHE DER VARIABLE HEIGHTTEXT GEGEBEN
    $('.company .cardimg .text').css('height', heightTEXT);

    //BEI VERÄNDERUNG DES FENSTERS WIRD DIESE FUNCTION AUSGELÖST
    $(window).resize(function () {

        //DER VARIABLE HEIGHTIMGTEXT WIRD DIE HÖHE DES IMG DER CLASS CARDIMG ZUGEWIESEN
        var heightIMGtext = $('.company .wrap .cardimg img').height();

        //DIE CLASS HEIGHTIMGTEXT WIRD UM 20 ERHÖHT UND IN DER VARIABLE HEIGHTTEXT GESPEICHERT
        var heightTEXT = heightIMGtext + 20;

        //DER CLASS TEXT WIRD DIE HÖHE DER VARIABLE HEIGHTTEXT GEGEBEN
        $('.company .cardimg .text').css('height', heightTEXT);

    });

    ///////////////////////////////////////////////////

    //HEIGHT Accordions//////////////////////////////////

    //DER VARIABLE HEIGHTTITLER WIRD DIE HÖHE DER CLASS TITLER ZUGEWIESEN
    var heightTitler = $('.company .wrap .titler').height();

    //DER VARIABLE HEIGHTIMGCOMP WIRD DIE HÖHE DER CLASS CARDIMG ZUGEWIESEN
    var heightImgComp = $('.company .wrap .cardimg').height();

    //DER VARIABLE HEIGHTACC WIRD DIE SUMME DER VARIABLEN HEIGHTTITLER UND HEIGHTIMGCOMP ZUGEWIESEN
    var heightAcc = heightTitler + heightImgComp + 80;

    //DER CLASS ACORD WIRD DIE HÖHE DER VARIABLE HEIGHTACC GEGEBEN
    $('.company .acord').css('top', heightAcc);

    //BEI VERÄNDERUNG DES FENSTERS WIRD DIESE FUNCTION AUSGELÖST
    $(window).resize(function () {
        //DER VARIABLE HEIGHTTITLER WIRD DIE HÖHE DER CLASS TITLER ZUGEWIESEN
        var heightTitler = $('.company .wrap .titler').height();

        //DER VARIABLE HEIGHTIMGCOMP WIRD DIE HÖHE DER CLASS CARDIMG ZUGEWIESEN
        var heightImgComp = $('.company .wrap .cardimg').height();

        //DER VARIABLE HEIGHTACC WIRD DIE SUMME DER VARIABLEN HEIGHTTITLER UND HEIGHTIMGCOMP ZUGEWIESEN
        var heightAcc = heightTitler + heightImgComp + 80;

        //DER CLASS ACORD WIRD DIE HÖHE DER VARIABLE HEIGHTACC GEGEBEN
        $('.company .acord').css('top', heightAcc);

    });

    ///////////////////////////////////////////////////


    //Card IMG////////////////////////////////////////////

    //WENN DIE CLASS CARDIMG GEKLICKT WIRD, WIRD DIESE FUNCTION AUSGEFÜHRT
    $('.cardimg').click(function () {
        //DER CLASS TEXT WIRD DIE CLASS VISIBLE HINZUGEFÜGT/ENTFERNT
        $('.cardimg .text').toggleClass('visible');
        //DER IMG DER CLASS TEXT WIRD DIE CLASS VISIBLE HINZUGEFÜGT/ENTFERNT
        $('.cardimg img').toggleClass('visible');
    });


    //////////////////////////////////////////////////////

    // Accordion//////////////////////////////////////////
    //WENN DAS AKKORDEON GEKLICKT WIRD, WIRD DIESE FUNCTION AUSGEFÜHRT
    $(".acord > li > div").click(function () {
        //HIER WIRD ALLEN LI'S AUF DER GLEICHEN EBENE DIE CLASS ACTIVE ENTFERNT UND DER DIV UPGESLIDET
        $(this).closest('li').siblings().find('div').removeClass('active').next('div').slideUp(250);
        //HIER WIRD DIESEM ELEMENT DIE CLASS ACTIVE HINZUGEFÜGT/ENTFERNT UND DER DIV DOWNGESLIDET/UPGESLIDET
        $(this).toggleClass("active").next('div').slideToggle(250);
    });

    ///////////////////////////////////////////////////

    //Boards///////////////////////////////////////////
    function board1() {
        //FALLS DAS IMG DES 1. BOARDS DIE CLASS ACTIVEBOARD HAT, WERDEN FOLGENDE SACHEN AUSGEFÜHRT
        if ($('.b1 img').hasClass('activeboard')) {
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT HINZUGEFÜGT
            $('.bt1').addClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt2').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt3').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt4').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt5').removeClass('activetext');
        }
    }

    function board2() {
        //FALLS DAS IMG DES 2. BOARDS DIE CLASS ACTIVEBOARD HAT, WERDEN FOLGENDE SACHEN AUSGEFÜHRT
        if ($('.b2 img').hasClass('activeboard')) {
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT HINZUGEFÜGT
            $('.bt2').addClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt1').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt3').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt4').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt5').removeClass('activetext');
        }
    }

    function board3() {
        //FALLS DAS IMG DES 3. BOARDS DIE CLASS ACTIVEBOARD HAT, WERDEN FOLGENDE SACHEN AUSGEFÜHRT
        if ($('.b3 img').hasClass('activeboard')) {
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT HINZUGEFÜGT
            $('.bt3').addClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt2').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt1').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt4').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt5').removeClass('activetext');
        }
    }

    function board4() {
        //FALLS DAS IMG DES 4. BOARDS DIE CLASS ACTIVEBOARD HAT, WERDEN FOLGENDE SACHEN AUSGEFÜHRT
        if ($('.b4 img').hasClass('activeboard')) {
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT HINZUGEFÜGT
            $('.bt4').addClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt2').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt3').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt1').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt5').removeClass('activetext');
        }
    }

    function board5() {
        //FALLS DAS IMG DES 5. BOARDS DIE CLASS ACTIVEBOARD HAT, WERDEN FOLGENDE SACHEN AUSGEFÜHRT
        if ($('.b5 img').hasClass('activeboard')) {
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT HINZUGEFÜGT
            $('.bt5').addClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt2').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt3').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt4').removeClass('activetext');
            //DIESEM ELEMENT WIRD DIE CLASS ACTIVETEXT ENTFERNT
            $('.bt1').removeClass('activetext');
        }
    }

    //WENN DIESES ELEMENT GEHOVERT WIRD, WIRD DIESE FUNCTION AUSGELÖST
    $(".boards > li > div > img").hover(function () {
        //ES WIRD NACH DEM NÄCHSTEN LI GESUCHT UND DIESEN DANN DIE CLASS ACTIVEBOARD ENTFERNT
        $(this).closest('li').siblings().find('img').removeClass('activeboard');
        //ES WIRD DEM ELEMENT DIE CLASS ACTIVEBOARD HINZUGEFÜGT
        $(this).addClass("activeboard");
        board1();
        board2();
        board3();
        board4();
        board5();
    });


    ///////////////////////////////////////////////////


}(jQuery));
