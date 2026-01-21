const heartWrapper = document.getElementById('heartWrapper');
const loveMessage = document.getElementById('loveMessage');
const timerDisplay = document.getElementById('timer');

let hasClicked = false;
const startDate = new Date('2025-02-25T00:00:00');

heartWrapper.addEventListener('click', () => {
    if (!hasClicked) {
        hasClicked = true;
        
        document.body.classList.add('pink-mode');
        heartWrapper.classList.add('active');
        loveMessage.classList.add('show');

        startCountdown();
        explodeParticles();
    }
});

function startCountdown() {
    const update = () => {
        const now = new Date();
        const diff = now - startDate;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        timerDisplay.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    };
    update();
    setInterval(update, 1000);
}

function explodeParticles() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const p = document.createElement('div');
            p.className = 'small-heart';
            p.style.left = '50%';
            p.style.top = '50%';
            
            // Ângulos de explosão para formar um círculo
            const angle = Math.random() * Math.PI * 2;
            const velocity = 200 + Math.random() * 300;
            const tx = Math.cos(angle) * velocity + 'px';
            const ty = Math.sin(angle) * velocity + 'px';
            
            p.style.setProperty('--tx', tx);
            p.style.setProperty('--ty', ty);
            
            document.body.appendChild(p);
            setTimeout(() => p.remove(), 3000);
        }, i * 30);
    }
}
