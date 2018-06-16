$(document).ready(function () {

    var targetScrollpos = $('.navbar').offset().top;
    console.log(targetScrollpos);


    $(window).scroll(function () {
        var scrollpos = $(this).scrollTop();
        if(scrollpos > targetScrollpos ){
            $('.navbar').addClass('fixed-nav');
            $('.content').addClass('margetopnav');
        }else{
            $('.navbar').removeClass('fixed-nav');
            $('.content').removeClass('margetopnav');
        }
    });

    var heightTop = $('.bigImage').outerHeight();

    $('.arrowup').click(function (e) {

        var linkHref = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $(linkHref).offset().top}, 1000);
        e.preventDefault();
    });

    var headheight = $('.navbar').height();

    $('.arrowdown').click(function (e) {

        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headheight + 1}, 1000);
        e.preventDefault();
    });

    var heightLoc = $('.leftimgtext').height();

    $('.locations').css('height', heightLoc);

    $(window).resize(function () {
        var heightLoc = $('.leftimgtext').height();

        $('.locations').css('height', heightLoc);
    });
    $("input").on("keyup", function() {
        syd_fill_val(this);
        if ($(this).attr("type") === "email") {
            syd_email_val(this);
        }
        if (syd_form_send()) {
            $("#syd_send").removeAttr("disabled");
        }
    });

    function syd_fill_val(SY_OBJEKT) {
        var SY_VALUE = $(SY_OBJEKT).val();
        if (SY_VALUE === null) {
            console.log("false");
            return false;
        } else {
            console.log("true");
            return true;
        }
    }

    function syd_email_val(SY_OBJEKT) {
        var SY_VALUE = $(SY_OBJEKT).val();
        var SY_FILTER = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (SY_FILTER.test(SY_VALUE)) {
            console.log("true E-Mail");
            return true;
        } else {
            console.log("false E-Mail");
            return false;
        }
    }

    function syd_form_send() {
        var SY_SEND = true;
        $("body input").each(function() {
            if ($(this).val() === "") {
                SY_SEND = false;
            }
            if ($(this).attr("type") === "email") {
                SY_SEND = syd_email_val(this);
            }
        });
        return SY_SEND;
    }

    $("form").on("submit", function() {
        alert("The formular has been sent!");
    });
});




