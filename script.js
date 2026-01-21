const heart = document.getElementById('heartIcon');
const content = document.getElementById('content');
const timerDisplay = document.getElementById('timer');
const loveText = document.getElementById('loveText');

let isClicked = false;

heart.addEventListener('click', () => {
    if (!isClicked) {
        isClicked = true;
        
        // Aplica os efeitos visuais
        document.body.classList.add('bg-pink');
        heart.classList.add('active');
        
        setTimeout(() => {
            content.classList.add('show');
            loveText.classList.add('show');
        }, 500);

        startTimer();
    }
});

function startTimer() {
    const startDate = new Date('2025-02-25T00:00:00');

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
