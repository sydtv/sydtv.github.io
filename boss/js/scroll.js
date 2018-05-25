// MAIN-NAV

var headHeight = $('.head').outerHeight();

var beispiel = $('.heightTest').height();

console.log(beispiel);

$('.main-nav ul li a').click(function (e) {

    var linkHref = $(this).attr('href');


    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headHeight
    }, 1000);

    e.preventDefault();
});


// MOBILE-NAV

$('.mobile-nav ul li a').click(function (e) {

    var linkHref = $(this).attr('href');


    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headHeight
    }, 1000);

    e.preventDefault();
});


// KLICK AUF LOGO

$('.logo-head a').click(function (e) {

    var linkHref = $(this).attr('href');


    $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headHeight
    }, 1000);

    e.preventDefault();
});