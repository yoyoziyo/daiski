const mainHeart = document.getElementById('mainHeart');
const heartContent = document.getElementById('heartContent');
const timerDisplay = document.getElementById('timer');
const loveMessage = document.getElementById('loveMessage');
const backgroundStars = document.getElementById('backgroundStars');
const smallHeartsContainer = document.getElementById('smallHeartsContainer');

let isHeartClicked = false;
const startDate = new Date('2025-02-25T00:00:00');

mainHeart.addEventListener('click', () => {
    if (!isHeartClicked) {
        isHeartClicked = true;

        mainHeart.classList.add('active');
        mainHeart.style.pointerEvents = 'none';

        document.body.classList.add('pink-mode');
        backgroundStars.classList.add('blurred');

        setTimeout(() => {
            heartContent.classList.add('show');
            loveMessage.classList.add('show');
            startTimer();
        }, 800);

        createSmallHearts();
    }
});

function startTimer() {
    updateTimer();
    setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function createSmallHearts() {
    const numberOfHearts = 20;
    const containerRect = document.body.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    for (let i = 0; i < numberOfHearts; i++) {
        const smallHeart = document.createElement('div');
        smallHeart.classList.add('small-heart');

        smallHeart.style.left = `${centerX + (Math.random() - 0.5) * 50}px`;
        smallHeart.style.top = `${centerY + (Math.random() - 0.5) * 50}px`;
        
        smallHeart.style.setProperty('--random-x', `${(Math.random() - 0.5) * 400}px`);
        smallHeart.style.animationDelay = `${i * 0.1}s`; 
        
        smallHeartsContainer.appendChild(smallHeart);

        smallHeart.addEventListener('animationend', () => {
            smallHeart.remove();
        });
    }
}
