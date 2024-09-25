// JavaScript pour le carrousel
document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showNextItem() {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }

    function showPreviousItem() {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }

    setInterval(showNextItem, 3000);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.style.position = 'absolute';
    nextButton.style.right = '10px';
    nextButton.style.bottom = '10px';
    nextButton.addEventListener('click', showNextItem);

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.style.position = 'absolute';
    prevButton.style.left = '10px';
    prevButton.style.bottom = '10px';
    prevButton.addEventListener('click', showPreviousItem);

    document.querySelector('.carousel').appendChild(nextButton);
    document.querySelector('.carousel').appendChild(prevButton);
});