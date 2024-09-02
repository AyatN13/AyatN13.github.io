document.addEventListener('DOMContentLoaded', () => {
    const backgroundImageDiv = document.querySelector('.background-image');
    const images = [
        'IMG_1572.jpg',  // Corresponds to image-1
        'IMG_3565.jpg',  // Corresponds to image-2
        'IMG_3561.PNG',  // Corresponds to image-3
        'IMG_3558.jpg',  // Corresponds to image-4
    ];
    const descriptions = [
        'Boston Public Library - Boston, MA',
        'CN Tower - Toronto, ON',
        'Ellicott City, MD',
        'Point Reyes National Seashore - Point Reyes Station, CA'
    ];
    let currentIndex = 0;
    const totalImages = images.length;

    // Preload images
    const preloadedImages = [];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
        preloadedImages.push(img);
    });

    function updateBackgroundImage() {
        backgroundImageDiv.style.backgroundImage = `url('${images[currentIndex]}')`;
        document.querySelector('.image-number').textContent = `${currentIndex + 1} / ${totalImages}`;
        document.querySelector('.image-description').textContent = descriptions[currentIndex];
    }

    function changeBackgroundImageAutomatically() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateBackgroundImage();
    }

    function changeBackgroundImageManually(direction) {
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        updateBackgroundImage();
    }

    setInterval(changeBackgroundImageAutomatically, 8000); // Change image every 8 seconds

    // Add event listeners to the navigation buttons
    document.querySelector('.prev').addEventListener('click', () => changeBackgroundImageManually(-1));
    document.querySelector('.next').addEventListener('click', () => changeBackgroundImageManually(1));

    // Initial update
    updateBackgroundImage();
});
