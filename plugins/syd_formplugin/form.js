(function ($) {

    $("input").on("keyup", function () {
        syd_fill_val(this);
        if ($(this).attr("type") === "email") {
            syd_email_val(this);
        }
        if (syd_form_send()) {
            $("#syd_send").removeAttr("disabled");
            $("#syd_send").addClass('clickable');
        }
    });

    function syd_fill_val(SY_OBJEKT) {
        var SY_VALUE = $(SY_OBJEKT).val();
        if (SY_VALUE === null) {
            return false;
        } else {
            return true;
        }
    }

    function syd_email_val(SY_OBJEKT) {
        var SY_VALUE = $(SY_OBJEKT).val();
        var SY_FILTER = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (SY_FILTER.test(SY_VALUE)) {
            return true;
        } else {
            return false;
        }
    }

    function syd_form_send() {
        var SY_SEND = true;
        $("body input").each(function () {
            if ($(this).val() === "") {
                SY_SEND = false;
            }
            if ($(this).attr("type") === "email") {
                SY_SEND = syd_email_val(this);
            }
        });
        return SY_SEND;
    }

    $("form").on("submit", function () {
        alert("The formular has been sent!");
        $("input[type=text], input[type=email]").val("");
        $("#syd_send").removeClass('clickable');

    });

}(jQuery));