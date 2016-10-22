$(document).ready(function() {

    var doc = $(document);

    doc.on("click", ".slider-b__item", function(e){
        var index_el = $(this).data("slide");
        doc.find(".slider-b__item").removeClass("active");
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
        autoHeight: true,
        items: 1,
        responsive : {
            320 : {
                mouseDrag: true
            },
            768 : {
                mouseDrag: false
            }
        }
    });

    $('.fancybox').fancybox();
});