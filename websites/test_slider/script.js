$('.menu-toggle').click(function () {

    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
    $('body').toggleClass('noscroll');

});
$('.limob').click(function () {

    $('.site-nav').removeClass('site-nav--open', 200);
    $('.menu-toggle').removeClass('open', 750);

});
