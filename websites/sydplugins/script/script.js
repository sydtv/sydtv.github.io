// Parallax
function parallax() {
    var scrollpos = $(this).scrollTop();
    var headheight = $('.header').height();

    console.log(scrollpos);
    console.log(headheight);

    $('.restof').css('top', ('-'+scrollpos*0.7)+'px');
    $('.restof').css('margin-top', headheight);
}


// Sticky Nav
function stickyNav() {
    var targetScrollpos = $('.content').offset().top;
    var heightNav = $('.main-nav').height();
    var scrollpos = $(this).scrollTop();
    if (scrollpos > targetScrollpos*0.7) {
        $('.main-nav').addClass('fixedHead').slideDown();
    } else {
        $('.main-nav').slideUp();
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
