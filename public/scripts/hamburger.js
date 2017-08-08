$(document).ready(function() {
    $('#nav-icon1').click(function() {
        $('.sidenav').animate({width: '250px'})
        // $(this).css({'display': 'none'})
        $('.navigation').css({'z-index': '0'})
    })

    $('.closebtn').click(function() {
        $('.sidenav').css({'width': '0'})
        // $('#nav-icon1').css({'display': 'flex', 'z-index': '0'})       
    })

    $('.closebtn a').click(function() {
        $('.sidenav').css({'width': '0'})
        $('.navigation').css({'z-index': '1'})        
        // $('#nav-icon1').css({'display': 'flex', 'z-index': '0'})       
    })

    $('.sidenav a').click(function() {
        $('.sidenav').css({'width': '0'})
    })

});

