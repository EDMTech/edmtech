$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
        
        // Controle de visibilidade do botão de áudio
        var playButton = document.getElementById('play-audio');
        if ($('.navbar').hasClass('sticky')) {
            playButton.style.display = 'none'; // Esconde o botão
        } else {
            playButton.style.display = 'block'; // Mostra o botão
        }
    });

    // Fechar o menu mobile e rolar suavemente para a seção desejada ao clicar no link
    $('.menu li a').click(function() {
        // Fechar o menu mobile
        $('.menu').removeClass("active");
        $('.menu-btn i').removeClass("active");

        // Rolar suavemente para a seção correspondente
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);

        return false; // Evitar comportamento padrão de salto direto
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // toggle menu/navbar script/Menu Mobile
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

        // Garantir que a navbar esteja no topo quando o menu está ativo
        $('.navbar').toggleClass("sticky"); 
    });

    var typed = new Typed(".typing", {
        strings:["Desenvolvedor", "Criativo", "Curioso"],
        typeSpeed:200,
        backSpeed:10,
        loop:true
    });
});

// Debounce do Lodash
const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function (){
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Animação
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) /4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 10));
}

// Preloader
$(window).on('load', function (){
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
    $('body').delay(500).css({'overflow': 'visible'});
})

// Adicionar um evento ao clicar em qualquer link de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Rolar para a seção de destino de forma suave
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
