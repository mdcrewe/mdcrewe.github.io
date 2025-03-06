// This file contains the JavaScript code that handles the functionality of the recipe slides.

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

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
});