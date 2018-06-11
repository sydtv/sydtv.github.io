$(document).ready(function () {

    var targetScrollpos = $('.navbar').offset().top;
    console.log(targetScrollpos);


    $(window).scroll(function () {
        var scrollpos = $(this).scrollTop();
        if(scrollpos > targetScrollpos ){
            $('.navbar').addClass('fixed-nav');
        }else{
            $('.navbar').removeClass('fixed-nav');
        }
    })


});