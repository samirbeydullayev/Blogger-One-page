$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 3000,
        autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1500,
        dotsEach:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $(document).keydown(function (event) {
        if (event.keyCode == 39) {
            owl.trigger('next.owl.carousel');
        }
        if (event.keyCode == 37) {
            owl.trigger('prev.owl.carousel');
        }
    });

});