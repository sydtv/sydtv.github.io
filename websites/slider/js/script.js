$(document).ready(function () {

    var heightWindow = window.innerHeight;
    String(heightWindow) + "px";
    $(".slider").css("height", heightWindow);
    console.log(heightWindow);
    var aktuellePosition = 0;
    var slider = $('.slider');
    var AnzBilder = slider.length;
    var sliderContainerHeight = slider.height();
    $('#sliderWrapper').css('width', sliderContainerHeight * AnzBilder);
    setInterval(SlideImage, 2000);

    function SlideImage() {
        if (aktuellePosition == AnzBilder - 1) aktuellePosition = 0; else aktuellePosition++;
        $('#sliderWrapper').animate({'marginTop': sliderContainerHeight * (-aktuellePosition)});
    }
});