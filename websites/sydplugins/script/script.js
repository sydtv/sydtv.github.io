(function ($) {

    var targetScrollpos = $('.content').offset().top;

    function test() {
        $(window).scroll(function () {
            var scrollpos = $(this).scrollTop();
            if (scrollpos > targetScrollpos) {
                $('.main-nav').css('height', '100px');
                $('.main-nav').slideDown();
                console.log('Hello');
            } else {
                $('.main-nav').slideUp();
                console.log('Bye');

            }
        });
    }
    test();



}(jQuery));
