document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imageIndexDisplay = document.getElementById('imageIndex');
    const descriptions = [
        "Image: CN Tower, Toronto Ontario",
        "Image: Amsterdam Castle Muiderslot",
        "Image: Isabella Stewart Garden Museum, Boston, MA"
    ];
    let currentImageIndex = 0;
    let interval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        imageIndexDisplay.textContent = `${index + 1}/${images.length} ${descriptions[index]}`;
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
