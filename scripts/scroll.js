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
            $(".navigation").find('img').css({ height: '75px' });
            $(".navigation").css({ height: '100px' });
            $(".navigation").addClass("white");
        } else {
            $(".navigation").removeClass("white");
            $(".navigation").find('img').css({
                height: '100px'
            });
            $(".navigation").css({
                height: '150px'
            });
        }
    });
});