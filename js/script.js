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

    /* Aplicação de máscara nos campos de texto */

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate( {

        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculo: {
                required: true
            },
            textarea: {
                required: false
            }
        },

        messages: {
            nome: 'Insira seu nome',
            email: 'Insira seu email',
            telefone: 'Insira seu número de telefone'
        },

        submitHandler: function(form) {
            console.log(form)

            $('#nome').val('');
            $('#email').val('');
            $('#telefone').val('');
            $('#nome-veiculo').val('');
            $('#mensagem').val('');

            alert('Mensagem enviada com sucesso !')
        },

        invalidHandler: function(evento, validador) {
            var camposInvalidos = validador.numberOfInvalids();
            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos inválidos`)
            }
        }
    })

    /*
        Quando clicar no botão 'TENHO INTERESSE' do anúncio,
        automaticamente as informações serão aplicadas aos campos de texto 
        do formulário de contato
     */

    $('article button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h4').text();
        const descricaoVeiculo = $(this).parent().find('p').text();

        $('#nome-veiculo').val(nomeVeiculo);
        $('#mensagem').val(`Olá, gostaria de saber mais sobre o veículo ${nomeVeiculo} !`)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    }) 
})