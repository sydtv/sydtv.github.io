$(document).ready(function () {

    var targetScrollpos = $('.navbar').offset().top;
    console.log(targetScrollpos);


    $(window).scroll(function () {
        var scrollpos = $(this).scrollTop();
        if(scrollpos > targetScrollpos ){
            $('.navbar').addClass('fixed-nav');
            $('.content').addClass('margetopnav');
        }else{
            $('.navbar').removeClass('fixed-nav');
            $('.content').removeClass('margetopnav');
        }
    });

    var heightTop = $('.bigImage').outerHeight();

    $('.arrowup').click(function (e) {

        var linkHref = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $(linkHref).offset().top}, 1000);
        e.preventDefault();
    });

    var headheight = $('.navbar').height();

    $('.arrowdown').click(function (e) {

        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headheight + 1}, 1000);
        e.preventDefault();
    });

    var heightLoc = $('.leftimgtext').height();

    $('.locations').css('height', heightLoc);

    $(window).resize(function () {
        var heightLoc = $('.leftimgtext').height();

        $('.locations').css('height', heightLoc);
    })
});




