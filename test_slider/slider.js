//SLIDER
function slider() {
    var index = 0;

    $imageEls = $('.slider .slide'); // Get the images to be cycled.

    setInterval(function () {

        index = index + 1 < $imageEls.length ? index + 1 : 0;


        $imageEls.eq(index).addClass('show');


        $imageEls.eq(index - 1).removeClass('show');
    }, 5000);
}


$(function () {
    slider();
});