document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'assets/1.png',
        'assets/2.png',
        'assets/3.png',
        'assets/4.png',
        'assets/5.png',
        'assets/6.png',
        'assets/7.png' ,
    ];
    const messages = [
        '¡Te amo!',
        '¡Eres increíble!',
        '¡Que ganas de seguir compartiendo años contigo!'
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