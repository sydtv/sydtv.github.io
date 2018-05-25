function hideMobNav() {
    $('.mobilebar, .burgericon').removeClass('open-nav');
    $('.mobilebar').slideUp();
}
function showMobNav() {
    $('.mobilebar, .burgericon').addClass('open-nav');
    $('.mobilebar').slideDown();
}

(function($) {

    //HEIGHT MOBILE-NAV///////////////////////////////////

    var heightNav = $('.topnavbar').height();
    var heightWindow = $(window).height();
    var heightDropdown = heightWindow - heightNav;
    console.log(heightDropdown);

    $('.mobile-nav ul').css('height', heightDropdown);
    $('.bigImage').css('height', heightWindow);

    $( window ).resize(function() {
        var heightNav = $('.topnavbar').height();
        var heightWindow = $(window).height();
        var heightDropdown = heightWindow - heightNav;
        console.log(heightDropdown);

        $('.mobile-nav ul').css('height', heightDropdown);
        $('.bigImage').css('height', heightWindow);
    });

    ///////////////////////////////////////////////////



    $('.burgericon').click(function () {
        if($('.mobilebar').hasClass('open-nav')){
            hideMobNav();
        }else {
            showMobNav();
        }
    });

    $('.mobile-nav ul li').click(function () {
        hideMobNav();
    });

}(jQuery));