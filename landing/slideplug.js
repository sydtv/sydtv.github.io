!function (a) {
    a.fn.fullClip = function (b) {
        var d, e, c = a.extend({current: 0, images: [], transitionTime: 1e3, wait: 3e3, static: !1}, b);
        for (d = 0, e = c.images.length; d < e; ++d) (new Image).src = c.images[d];
        return a(".fullBackground").css("background-image", "url(" + c.images[c.current] + ")").css("-webkit-transition", "background " + c.transitionTime + "s ease-in-out").css("-moz-transition", "background " + c.transitionTime + "ms ease-in-out").css("-ms-transition", "background " + c.transitionTime + "ms ease-in-out").css("-o-transition", "background " + c.transitionTime + "ms ease-in-out").css("transition", "background " + c.transitionTime + "ms ease-in-out"), c.static ? void a(this).css("background-image", "url(" + c.images[c.current] + ")") : void function b() {
            c.current = (c.current + 1) % c.images.length, a(".fullBackground").css("background-image", "url(" + c.images[c.current] + ")"), setTimeout(b, c.wait)
        }()
    }
}(jQuery);