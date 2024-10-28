document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
    slides[currentSlide].style.display = "none"; // Hide the current slide
    currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide, looping back to the first
    slides[currentSlide].style.display = "block"; // Show the next slide
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds

// Get references to the dropdown elements
const dropdownButton = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle the dropdown visibility on button click
dropdownButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if clicking outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown')) {
        dropdownContent.style.display = 'none';
    }
});

document.querySelectorAll('.image-container').forEach(container => {
    const images = container.querySelectorAll('.activity-image');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 3000); // Change image every 3 seconds
});

