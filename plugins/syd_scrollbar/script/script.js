function scrollProzentBreit() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollProzentZahl = (scrollTop) / (docHeight - winHeight);
    var scrollProzentRounded = scrollProzentZahl * 100 + "vw";
    var scrollProzentMinus = 100 - scrollProzentZahl * 100 + "vw";

    $('.scrollbalken').css('width', scrollProzentRounded);
    $('.scrollbalkenbg').css('width', scrollProzentMinus);
}

function scrollProzentHoch() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollProzentZahl = (scrollTop) / (docHeight - winHeight);
    var scrollProzentRounded = scrollProzentZahl * 100 + "vw";
    var scrollProzentMinus = 100 - scrollProzentZahl * 100 + "vw";

    $('.scrollbalken').css('height', scrollProzentRounded);
    $('.scrollbalkenbg').css('height', scrollProzentMinus);
}

(function ($) {

    $(window).scroll(function () {
        scrollProzentBreit();
    });

    $(window).resize(function () {
        scrollProzentBreit();
    });

    scrollProzentBreit();

}(jQuery));
