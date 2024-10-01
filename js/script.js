// Script for the carousel functionality and any other dynamic actions
document.addEventListener('DOMContentLoaded', function() {
    // Example of carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Carousel navigation (optional if you want next/previous functionality)
    document.querySelector('#next-slide').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    document.querySelector('#prev-slide').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    // Show modal when buttons are clicked (for example, the "Réserver des billets" buttons)
    const reserveButtons = document.querySelectorAll('.showtime button');

    reserveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const movieTitle = this.closest('.showtime').querySelector('h3').textContent;
            showModal(movieTitle);
        });
    });

    // Function to show a modal (Bootstrap)
    function showModal(movieTitle) {
        const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
        document.getElementById('modalMovieTitle').textContent = movieTitle;
        modal.show();
    }
});

// Optional: Close modal automatically after successful booking (just an example)
document.getElementById('confirmBooking').addEventListener('click', function() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
    modal.hide();
    alert('Votre réservation a été effectuée avec succès.');
});

const movieModal = document.getElementById('movieModal');
        movieModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const title = button.getAttribute('data-title');
            const description = button.getAttribute('data-description');
            const actors = button.getAttribute('data-actors');
            const image = button.getAttribute('data-image');
            const link = button.getAttribute('data-link');

            const modalTitle = movieModal.querySelector('.modal-title');
            const modalDescription = movieModal.querySelector('#movieDescription');
            const modalActors = movieModal.querySelector('#movieActors');
            const modalImage = movieModal.querySelector('#movieImage');
            const modalLink = movieModal.querySelector('#moreDetailsLink');

            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalActors.textContent = actors;
            modalImage.src = image;
            modalLink.href = link;
        });
