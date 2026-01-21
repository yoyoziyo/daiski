const mainHeart = document.getElementById('mainHeart');
const loveMessage = document.getElementById('loveMessage');
const timerDisplay = document.getElementById('timer');
const container = document.getElementById('smallHeartsContainer');

let clicked = false;
const startDate = new Date('2025-02-25T00:00:00');

mainHeart.addEventListener('click', () => {
    if (!clicked) {
        clicked = true;
        
        document.body.classList.add('pink-mode');
        mainHeart.classList.add('active');
        loveMessage.classList.add('show');

        startTimer();
        spawnHearts();
    }
});

function startTimer() {
    update();
    setInterval(update, 1000);
}

function update() {
    const now = new Date();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    timerDisplay.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}

function spawnHearts() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'small-heart';
            
            // Centraliza o nascimento dos corações no meio da tela
            heart.style.left = '50%';
            heart.style.top = '50%';
            
            // Direções aleatórias para a explosão
            const tx = (Math.random() - 0.5) * 600 + 'px';
            const ty = (Math.random() - 0.5) * 600 + 'px';
            heart.style.setProperty('--tx', tx);
            heart.style.setProperty('--ty', ty);
            
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 3000);
        }, i * 50);
    }
}
