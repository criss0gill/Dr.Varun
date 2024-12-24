document.addEventListener("DOMContentLoaded", function () {
    /* ==========================
       Mobile Menu Functionality
       ========================== */
    const menuIconContainer = document.querySelector('.menu-icon-container');
    const navLinks = document.querySelector('.nav-links');
    const menuLinks = document.querySelectorAll('.nav-links a'); // Get all menu links

    // Toggle the Menu
    function toggleMenu() {
        navLinks.classList.toggle('active');
    }

    // Close the Menu when clicking outside
    function closeMenu(event) {
        if (
            navLinks.classList.contains('active') &&
            !navLinks.contains(event.target) &&
            !menuIconContainer.contains(event.target)
        ) {
            navLinks.classList.remove('active');
        }
    }

    // Event Listeners for Menu
    menuIconContainer.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);

    // Close the menu when any link is clicked (in mobile view)
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active'); // Close the menu
            }
        });
    });

    /* ==========================
       Auto-Sliding Images
       ========================== */
    const images = document.querySelectorAll('.slider-image');
    let currentImageIndex = 0;

    function changeImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    setInterval(changeImage, 3400);

    /* ==========================
       Rotating Text Animation
       ========================== */
    const rotatingWords = ["Health", "Days", "Lives"];
    let currentWordIndex = 0;
    const rotatingTextElement = document.getElementById("rotating-text");

    function changeRotatingText() {
        rotatingTextElement.style.opacity = "0";
        setTimeout(() => {
            currentWordIndex = (currentWordIndex + 1) % rotatingWords.length;
            rotatingTextElement.textContent = rotatingWords[currentWordIndex];
            rotatingTextElement.style.opacity = "1";
        }, 1000);
    }

    setInterval(changeRotatingText, 3400);

    /* ==========================
       Testimonial Slider
       ========================== */
    const slides = document.querySelectorAll('.testimonial-slide');
    const slider = document.querySelector('.testimonial-slider');
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slides[0].clientWidth;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    leftArrow.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    rightArrow.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    setInterval(autoSlide, 7000);

    showSlide(currentIndex);
});
