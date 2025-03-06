// This file contains the JavaScript code that handles the functionality of the recipe slides.

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Enable swiping
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    // Enable keyboard control
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    // Add coverflow effect
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});