const heart = document.getElementById('heart');
const aura = document.getElementById('aura');
const timerDisplay = document.getElementById('timer');
const loveText = document.getElementById('loveText');
const bgOverlay = document.getElementById('bgOverlay');
const stars = document.getElementById('stars');

let clicked = false;
const startDate = new Date('2025-02-25T00:00:00');

heart.addEventListener('click', () => {
    if (!clicked) {
        clicked = true;

        // Ativar classes de animação
        heart.classList.add('active');
        loveText.style.opacity = '1';
        loveText.style.transform = 'translateY(0)';
        bgOverlay.classList.add('bg-active');
        stars.classList.add('blur-stars');
        document.getElementById('content').style.opacity = '1';

        startTimer();
        createParticles();
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

function createParticles() {
    for (let i = 0; i < 100; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        // Posição inicial (centro)
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        
        document.body.appendChild(p);
        
        // Movimento aleatório de explosão
        const destX = (Math.random() - 0.5) * 1000;
        const destY = (Math.random() - 0.5) * 1000;
        
        const animation = p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 2000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            delay: Math.random() * 200
        });

        animation.onfinish = () => p.remove();
    }
}
