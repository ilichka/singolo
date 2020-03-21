let slides = document.querySelectorAll('.item');
let currentSlide = 0;

function nextSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].classList.add('active')
}

function next() {
    nextSlide(currentSlide+1);
}

function previous() {
    nextSlide(currentSlide-1)
}

document.querySelector('.LeftArrow').addEventListener('click', previous);
document.querySelector('.RightArrow').addEventListener('click', next);