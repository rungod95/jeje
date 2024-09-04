document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'assets/path_to_image1.jpg',
        'assets/path_to_image2.jpg',
        'assets/path_to_image3.jpg'
    ];
    const messages = [
        '¡Te amo!',
        '¡Eres increíble!',
        '¡Que todos tus deseos se hagan realidad!'
    ];
    
    let currentIndex = 0;
    let currentMessageIndex = 0;

    const slider = document.getElementById('image-slider');
    const congratsMessage = document.getElementById('congrats-message');
    const messageDisplay = document.getElementById('messages');
    const startButton = document.getElementById('start-button');

    startButton.addEventListener('click', function() {
        startButton.classList.add('hidden');
        slider.classList.remove('hidden');
        congratsMessage.classList.remove('hidden');
        messageDisplay.classList.remove('hidden');
        changeImage();
        showMessages();
    });

    function changeImage() {
        slider.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(changeImage, 3000); // Cambia imagen cada 3 segundos
    }

    function showMessages() {
        messageDisplay.textContent = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        setTimeout(showMessages, 4000); // Cambia mensaje cada 4 segundos
    }
});
