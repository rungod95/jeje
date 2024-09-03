document.addEventListener('DOMContentLoaded', function() {
    alert('¡Bienvenidos a nuestra historia!');
});
document.addEventListener('DOMContentLoaded', function() {
    const images = ['path_to_image1.jpg', 'path_to_image2.jpg', 'path_to_image3.jpg'];
    let currentIndex = 0;

    function changeImage() {
        const slider = document.getElementById('image-slider');
        slider.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(changeImage, 3000); // Cambia imagen cada 3 segundos
    }

    changeImage(); // Inicia la secuencia de imágenes
});
