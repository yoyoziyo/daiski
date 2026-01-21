const mainHeart = document.getElementById('mainHeart');
const heartContent = document.getElementById('heartContent');
const timerDisplay = document.getElementById('timer');
const loveMessage = document.getElementById('loveMessage');
const backgroundStars = document.getElementById('backgroundStars');

let isHeartClicked = false;
const startDate = new Date('2025-02-25T00:00:00');

mainHeart.addEventListener('click', () => {
    if (!isHeartClicked) {
        isHeartClicked = true;

        mainHeart.classList.add('active');
        document.body.classList.add('pink-mode');
        
        setTimeout(() => {
            heartContent.style.opacity = '1';
            loveMessage.classList.add('show');
            startTimer();
        }, 600);

        createSmallHearts();
    }
});

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function startTimer() {
    updateTimer();
    setInterval(updateTimer, 1000);
}

function createSmallHearts() {
    const container = document.getElementById('smallHeartsContainer');
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.className = 'small-heart';
        
        // Estilização dinâmica via JS para os mini corações
        const size = Math.random() * 15 + 10;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = '50%';
        heart.style.top = '50%';
        
        const moveX = (Math.random() - 0.5) * 300;
        const moveY = (Math.random() - 0.5) * 300;
        
        heart.style.setProperty('--move-x', `${moveX}px`);
        heart.style.setProperty('--move-y', `${moveY}px`);
        heart.style.animationDelay = `${Math.random() * 0.5}s`;

        container.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}
