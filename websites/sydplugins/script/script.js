// Parallax
function parallax() {
    var scrollpos = $(this).scrollTop();
    var headheight = $('.header').outerHeight();
    $('.restof').css('top', ('-'+scrollpos*0.5)+'px');
    $('.restof').css('margin-top', headheight);
}


// Sticky Nav
function stickyNav() {
    var targetScrollpos = $('.content').offset().top;
    var scrollpos = $(this).scrollTop();
    if (scrollpos > targetScrollpos) {
        $('.con-nav').addClass('fixed-nav');
        $('.con1').css('padding-top', 125);
    } else {
        $('.con-nav').removeClass('fixed-nav');
        $('.con1').css('padding-top', 50);
    }
}


(function ($) {

    $(window).scroll(function () {
        stickyNav();
        parallax();
    });

    $(window).resize(function () {
        parallax();
    });

    parallax();
    stickyNav();

}(jQuery));
