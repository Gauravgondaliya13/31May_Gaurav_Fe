let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideCount = slides.length;
// previous and next button 
function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}


// slide Zoom transform scale 
function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slideCount) % slideCount;
    slides[currentSlide].classList.add('active');

    // slide rotation 
    const offset = -((currentSlide - 2) * (33));
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

    // blur background 
    for (let i = 0; i < slides.length; i++) {
        if (i !== currentSlide) {
            slides[i].style.filter = 'blur(2px)';
        } else {
            slides[i].style.filter = 'none';
        }
    }
}