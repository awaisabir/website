$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (scroll >= 350) {
            $(".navigation").addClass("white");
        } else {
            $(".navigation").removeClass("white");
        }
    });
});