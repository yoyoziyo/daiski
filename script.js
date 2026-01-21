const heartContainer = document.getElementById('heartContainer');
const loveMessage = document.getElementById('loveMessage');
const timerDisplay = document.getElementById('timer');
const explosionContainer = document.getElementById('explosionContainer');

let hasBeenClicked = false;
const targetDate = new Date('2025-02-25T00:00:00');

heartContainer.addEventListener('click', () => {
    if (!hasBeenClicked) {
        hasBeenClicked = true;

        // Ativa efeitos visuais
        document.body.classList.add('active-bg');
        heartContainer.classList.add('active');
        loveMessage.classList.add('show');

        startLiveTimer();
        launchExplosion();
    }
});

function startLiveTimer() {
    const update = () => {
        const now = new Date();
        const diff = now - targetDate;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        timerDisplay.innerHTML = `${d}D ${h}H ${m}M ${s}S`;
    };
    update();
    setInterval(update, 1000);
}

function launchExplosion() {
    const particles = 50;
    for (let i = 0; i < particles; i++) {
        setTimeout(() => {
            const p = document.createElement('div');
            p.className = 'particle-heart';
            
            // Posição inicial: Centro exato
            p.style.left = '50%';
            p.style.top = '50%';
            
            // Cálculo de trajetória circular aleatória
            const angle = Math.random() * Math.PI * 2;
            const distance = 250 + Math.random() * 350;
            const tx = Math.cos(angle) * distance + 'px';
            const ty = Math.sin(angle) * distance + 'px';
            
            p.style.setProperty('--tx', tx);
            p.style.setProperty('--ty', ty);
            
            explosionContainer.appendChild(p);
            
            // Remove para não pesar o site
            setTimeout(() => p.remove(), 3000);
        }, i * 30);
    }
}
