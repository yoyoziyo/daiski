const heartWrapper = document.getElementById('heartWrapper');
const loveMessage = document.getElementById('loveMessage');
const timerDisplay = document.getElementById('timer');
const container = document.getElementById('smallHeartsContainer');

let clicked = false;
const startDate = new Date('2025-02-25T00:00:00');

heartWrapper.addEventListener('click', () => {
    if (!clicked) {
        clicked = true;
        
        document.body.classList.add('pink-mode');
        heartWrapper.classList.add('active');
        loveMessage.classList.add('show');

        startTimer();
        spawnHearts();
    }
});

function startTimer() {
    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        timerDisplay.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }, 1000);
}

function spawnHearts() {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'small-heart';
            heart.style.left = '50%';
            heart.style.top = '50%';
            
            const tx = (Math.random() - 0.5) * 800 + 'px';
            const ty = (Math.random() - 0.5) * 800 + 'px';
            heart.style.setProperty('--tx', tx);
            heart.style.setProperty('--ty', ty);
            
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }, i * 40);
    }
}
