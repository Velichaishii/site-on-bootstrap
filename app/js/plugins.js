$(document).ready(function() {

    var doc = $(document);


    doc.click(function (e) {
        var target = $(e.target),
            popup = target.closest(".popup");
        popup_open = target.closest(".popup_open");

        if ((!popup.length > 0 ) && (!popup_open.length > 0 )) {
            $(".popup").removeClass("visible");
            $(".site-wrap__overlay").fadeOut(400);
        }

    });


    $(".owl-carousel").owlCarousel({

        nav: true,
        dots: true,
        items: 1

    });
});