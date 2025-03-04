// This file contains the JavaScript code that handles the functionality of the recipe slides.

const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Initialize the first slide
showSlide(currentSlide);