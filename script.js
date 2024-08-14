document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imageIndexDisplay = document.getElementById('imageIndex');
    const descriptions = [
        "Boston Public Library: Boston, Massachusetts",
        "CN Tower: Toronto, Ontario",
        "Naples Beach: Naples, Florida",
        "The Paint Ladies: San Francisco, California",
    ];
    let currentImageIndex = 0;
    let interval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
        imageIndexDisplay.textContent = descriptions[index];
        updateButtons();
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    }

    function startCarousel() {
        interval = setInterval(nextImage, 10000); // 10 seconds
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

    showImage(currentImageIndex);
    startCarousel();
});
