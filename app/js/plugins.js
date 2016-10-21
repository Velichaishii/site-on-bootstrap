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



    doc.on("click", ".slider-b__item", function(e){
        var index_el = $(this).data("slide");
        $(this).addClass("active");
        $(this).closest(".slider-b").find(".owl-dot:eq("+index_el+")").trigger("click");

    });

    doc.on('click', '.owl-next-imit', function(e){
        var active_el = doc.find(".slider-b__item.active"),
            active_el_parent = active_el.closest('.slider-b__list');

        setTimeout(function(){
            if (active_el.is(':last-child')) {
                active_el_parent.find(".slider-b__item").removeClass("active");
                active_el_parent.find(".slider-b__item").first().trigger("click");
            } else {
                active_el_parent.find(".slider-b__item").removeClass("active");
                active_el.next().trigger("click");
            }
        },50);
    });

    doc.on('click', '.owl-prev-imit', function(e){
        var active_el = doc.find(".slider-b__item.active"),
            active_el_parent = active_el.closest('.slider-b__list');

        setTimeout(function(){
            if (active_el.is(':first-child')) {
                active_el_parent.find(".slider-b__item").removeClass("active");
                active_el_parent.find(".slider-b__item").last().trigger("click");
            } else {
                active_el_parent.find(".slider-b__item").removeClass("active");
                active_el.prev().trigger("click");
            }
        },50);


    });

    $(".owl-carousel").owlCarousel({
        nav: true,
        dots: true,
        items: 1

    });
});