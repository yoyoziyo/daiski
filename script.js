const mainHeart = document.getElementById('mainHeart');
const loveMessage = document.getElementById('loveMessage');
const timerDisplay = document.getElementById('timer');
const stars = document.getElementById('backgroundStars');
const container = document.getElementById('smallHeartsContainer');

let hasClicked = false;
const startDate = new Date('2025-02-25T00:00:00');

mainHeart.addEventListener('click', () => {
    if (!hasClicked) {
        hasClicked = true;

        // Ativação das animações
        mainHeart.classList.add('active');
        document.body.classList.add('pink-mode');
        stars.classList.add('blurred');
        loveMessage.classList.add('show');

        startTimer();
        createExplosion();
    }
});

function startTimer() {
    const update = () => {
        const now = new Date();
        const diff = now - startDate;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        timerDisplay.innerHTML = `${d}D ${h}H ${m}M ${s}S`;
    };
    update();
    setInterval(update, 1000);
}

function createExplosion() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'small-heart';
            h.style.left = '50%';
            h.style.top = '50%';
            
            // Explosão em 360 graus
            const angle = Math.random() * Math.PI * 2;
            const dist = 300 + Math.random() * 400;
            const tx = Math.cos(angle) * dist + 'px';
            const ty = Math.sin(angle) * dist + 'px';
            
            h.style.setProperty('--tx', tx);
            h.style.setProperty('--ty', ty);
            
            container.appendChild(h);
            setTimeout(() => h.remove(), 3000);
        }, i * 30);
    }
}
