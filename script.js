$(document).ready(function(e) {

    // init fullpage
    $('#wrapper').fullpage({
        afterLoad: function (anchor, index) {
            if(index === 1){
                console.log('first...');
            }
        }
    });



    var s = $('#ud_slider').children('.ud_slider').first();

    ud_slider(s);

    function ud_slider(Objekt) {
        $(Objekt).slideDown(10000);
        $(Objekt).children('h2').animate({left: '80px'},800);
        $(Objekt).children('h3').animate({left: '90px'},1000);
        $(Objekt).children('h2').animate({left: '70px'},800);
        $(Objekt).children('h3').animate({left: '80px'},800);
    };

});