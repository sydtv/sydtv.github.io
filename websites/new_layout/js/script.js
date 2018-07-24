$('.menu-toggle').click(function () {
    $('.sitenav').toggleClass('sitenav--open', 500);
    $(this).toggleClass('open');
    $('body').toggleClass('noscroll');
});
$('.limob').click(function () {
    $('.sitenav').removeClass('sitenav--open', 500);
    $('.menu-toggle').removeClass('open');
});

