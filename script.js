$(document).ready(function() {

    /* Navbar script */

    $('#buy').click(function() {
        $('#slideDownComprar').slideToggle();
        $('#slideDownVender').hide(600);
        $('#slideDownServiços').hide(600);
        $('#SlideDownNoticias').hide(600);
        $('#slideDownAjuda').hide(600);
    })

    $('#sell').click(function() {
        $('#slideDownVender').slideToggle();
        $('#slideDownComprar').hide(600);
        $('#slideDownServiços').hide(600);
        $('#SlideDownNoticias').hide(600);
        $('#slideDownAjuda').hide(600);
    })

    $('#services').click(function() {
        $('#slideDownServiços').slideToggle();
        $('#slideDownComprar').hide(600);
        $('#slideDownVender').hide(600);
        $('#SlideDownNoticias').hide(600);
        $('#slideDownAjuda').hide(600);
    })

    $('#news').click(function() {
        $('#SlideDownNoticias').slideToggle();
        $('#slideDownComprar').hide(600);
        $('#slideDownVender').hide(600);
        $('#slideDownServiços').hide(600);
        $('#slideDownAjuda').hide(600);
    })

    $('#help').click(function() {
        $('#slideDownAjuda').slideToggle();
        $('#slideDownComprar').hide(600);
        $('#slideDownVender').hide(600);
        $('#slideDownServiços').hide(600);
        $('#SlideDownNoticias').hide(600);
    })

    /* Carousel script */

    $('#carousel').slick({
        autoplay: true,
    });

    /* Input/search car model script */

    $('.search-car-model li').click(function() {
        $('.search-car-model li').removeClass('border-bottom-li');
        $(this).addClass('border-bottom-li');

        var placeholderText = $(this).data('placeholder');

        $('input[type="text"]').attr('placeholder', placeholderText);
    });

})