var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        540: {
            slidesPerView: 2
        },
    }
});


var menuButton = document.querySelector('.ham');
var menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('hamRotate', 'ham1');
    menu.classList.toggle('header-active');
});