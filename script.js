document.addEventListener('DOMContentLoaded', () => {
    const images = [
        {
            url: 'IMG_1553.jpg', 
            description: "Boston Public Library: Boston, Massachusetts"
        },
        {
            url: 'IMG_0372.jpg', 
            description: "CN Tower: Toronto, Ontario"
        },
        {
            url: 'IMG_1555.jpg', 
            description: "Naples Beach: Naples, Florida"
        },
        {
            url: 'IMG_1556.jpg', 
            description: "The Paint Ladies: San Francisco, California"
        }
    ];
    let currentImageIndex = 0;
    const backgroundImage = document.querySelector('.background-image');
    const imageIndexDisplay = document.getElementById('imageIndex');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let interval;

    function updateBackground() {
        backgroundImage.style.backgroundImage = `url(${images[currentImageIndex].url})`;
        imageIndexDisplay.textContent = images[currentImageIndex].description;
        updateButtons();
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateBackground();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateBackground();
    }

    function startCarousel() {
        interval = setInterval(nextImage, 10000); // Change image every 10 seconds
    }

    function stopCarousel() {
        clearInterval(interval);
    }

    function updateButtons() {
        const buttons = document.querySelectorAll('.button-wrapper span');
        buttons.forEach((button, index) => {
            button.textContent = currentImageIndex + 1 === index + 1 ? index + 1 : "";
        });
    }

    prevBtn.addEventListener('click', () => {
        stopCarousel();
        prevImage();
        startCarousel();
    });

    nextBtn.addEventListener('click', () => {
        stopCarousel();
        nextImage();
        startCarousel();
    });

    updateBackground();
    startCarousel();
});
