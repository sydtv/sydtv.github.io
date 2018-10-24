(function ($) {
    $('.hamburger').click(function () {
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $('.grid6.fullflex nav').slideUp();
        } else {
            $(this).addClass('is-active');
            $('.grid6.fullflex nav').slideDown();
        }
    });
}(jQuery));