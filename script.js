document.addEventListener('DOMContentLoaded', () => {
    const backgroundImageDiv = document.querySelector('.background-image');
    const images = [
        'image-1', 
        'image-2', 
        'image-3', 
        'image-4', 
        'image-5', 
        'image-6', 
        'image-7'
    ]; // Add your image classes here
    let currentIndex = 0;

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        backgroundImageDiv.className = 'background-image ' + images[currentIndex];
    }

    setInterval(changeBackgroundImage, 10000); // Change image every 10 seconds
});
