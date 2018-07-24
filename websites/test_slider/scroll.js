$(document).ready(function () {

    var headHeight = $('.balken').outerHeight();

    $('.amob').click(function (e) {

        var linkHref = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headHeight
        }, 1000);

        e.preventDefault();
    });
});