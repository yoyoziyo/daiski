const mainHeart = document.getElementById('mainHeart');
const loveMessage = document.getElementById('loveMessage');
const timerDisplay = document.getElementById('timer');
const backgroundStars = document.getElementById('backgroundStars');
const container = document.getElementById('smallHeartsContainer');

let isClicked = false;
const startDate = new Date('2025-02-25T00:00:00');

mainHeart.addEventListener('click', () => {
    if (!isClicked) {
        isClicked = true;

        // Efeitos visuais principais
        mainHeart.classList.add('active');
        document.body.classList.add('pink-mode');
        backgroundStars.classList.add('blurred');
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

        timerDisplay.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    };
    update();
    setInterval(update, 1000);
}

function createExplosion() {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'small-heart';
            
            // Centraliza o nascimento no meio da tela
            heart.style.left = '50%';
            heart.style.top = '50%';
            
            // Define direções aleatórias para a explosão
            const tx = (Math.random() - 0.5) * 800 + 'px';
            const ty = (Math.random() - 0.5) * 800 + 'px';
            heart.style.setProperty('--tx', tx);
            heart.style.setProperty('--ty', ty);
            
            container.appendChild(heart);
            
            // Limpa o elemento após a animação
            setTimeout(() => heart.remove(), 3000);
        }, i * 40);
    }
}
