function scrollProzent() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollProzentZahl = (scrollTop) / (docHeight - winHeight);
    var scrollProzentRounded = scrollProzentZahl * 100 + "vw";
    var scrollProzentMinus = 100 - scrollProzentZahl * 100 + "vw";

    $('.scrollbalken').css('width', scrollProzentRounded);
    $('.scrollbalkenbg').css('width', scrollProzentMinus);
}

(function ($) {

    $(window).scroll(function () {
        scrollProzent();
    });

    $(window).resize(function () {
        scrollProzent();
    });

    scrollProzent();

}(jQuery));
