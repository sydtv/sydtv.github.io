$(document).ready(function () {

    //Hier wird der Abstand nach oben der Navbar in die Variable targetScrollpos gespeichert
    var targetScrollpos = $('.navbar').offset().top;

    //Wenn gescrollt wird, wird diese Function ausgelöst
    $(window).scroll(function () {
        //Hier wird der Scroll-Abstand nach oben in der Variable scrollpos gespeichert
        var scrollpos = $(this).scrollTop();
        //Falls die Variable scrollpos grösser als die Variable targetScrollpos ist, wird diese Function ausgelöst
        if (scrollpos > targetScrollpos) {
            //Der Navbar wird die Class fixed-nav gegeben
            $('.navbar').addClass('fixed-nav');
            //Dem Content wird die Class margetopnav gegeben
            $('.content').addClass('margetopnav');
        } else {
            //Der Navbar wird die Class fixed-nav entfernt
            $('.navbar').removeClass('fixed-nav');
            //Dem Content wird die Class margetopnav entfernt
            $('.content').removeClass('margetopnav');
        }
    });

    //Bei einem click auf die class arrowup wird diese Funcion ausgelöst
    $('.arrowup').click(function (e) {

        //Hier wird die id mitgegeben, welche verlinkt wird
        var linkHref = $(this).attr('href');

        //Scroll zu der id, welche man voher mitgegeben hat, innerhalb 1000ms
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top}, 1000);
        //Verhindert das Standartverhalten
        e.preventDefault();
    });

    //Hier speichert man die Höhe der Navbar
    var headheight = $('.navbar').height();

    //Bei einem click auf die class arrowdown wird diese Funcion ausgelöst
    $('.arrowdown').click(function (e) {

        //Hier wird die id mitgegeben, welche verlinkt wird
        var linkHref = $(this).attr('href');

        //Scroll zu der id, welche man voher mitgegeben hat, innerhalb 1000ms
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headheight + 1}, 1000);
        //Verhindert das Standartverhalten
        e.preventDefault();
    });

    //Hier speichert man die Höhe der class leftimgtext
    var heightLoc = $('.leftimgtext').height();

    //Hier gibt man der class locations die Höhe der Variable heightLOC
    $('.locations').css('height', heightLoc);

    //Wenn das Fenster geändert wird, wird diese Function ausgelöst
    $(window).resize(function () {

        //Hier speichert man die Höhe der class leftimgtext
        var heightLoc = $('.leftimgtext').height();

        //Hier gibt man der class locations die Höhe der Variable heightLOC
        $('.locations').css('height', heightLoc);

    });

});




