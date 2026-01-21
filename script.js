const mainHeart = document.getElementById('mainHeart');
const heartContent = document.getElementById('heartContent');
const timerDisplay = document.getElementById('timer');
const loveMessage = document.getElementById('loveMessage');
const backgroundStars = document.getElementById('backgroundStars');
const smallHeartsContainer = document.getElementById('smallHeartsContainer');

let isHeartClicked = false;
const startDate = new Date('2025-02-25T00:00:00'); // Data de início

mainHeart.addEventListener('click', () => {
    if (!isHeartClicked) {
        isHeartClicked = true;

        // 1. Animação do coração principal
        mainHeart.classList.add('active');
        mainHeart.style.pointerEvents = 'none'; // Desabilita cliques futuros no coração principal

        // 2. Mudança de fundo e desfoque
        document.body.classList.add('pink-mode');
        backgroundStars.classList.add('blurred');

        // 3. Exibe o conteúdo do coração e a mensagem "Eu te amo"
        setTimeout(() => {
            heartContent.classList.add('show'); // A classe 'show' no CSS controla a opacidade
            loveMessage.classList.add('show');
            startTimer();
        }, 800); // Pequeno atraso para o coração principal se expandir

        // 4. Cria e anima os corações pequenos
        createSmallHearts();
    }
});

function startTimer() {
    // Garante que o contador comece imediatamente e atualize a cada segundo
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
    const numberOfHearts = 20; // Quantidade de corações pequenos
    for (let i = 0; i < numberOfHearts; i++) {
        const smallHeart = document.createElement('div');
        smallHeart.classList.add('small-heart');

        // Posição inicial aleatória perto do coração principal
        const mainHeartRect = mainHeart.getBoundingClientRect();
        const startX = mainHeartRect.left + mainHeartRect.width / 2;
        const startY = mainHeartRect.top + mainHeartRect.height / 2;

        smallHeart.style.left = `${startX + (Math.random() - 0.5) * 50}px`;
        smallHeart.style.top = `${startY + (Math.random() - 0.5) * 50}px`;
        
        // Define uma var CSS para a animação ter um X final aleatório
        smallHeart.style.setProperty('--random-x', `${(Math.random() - 0.5) * 400}px`);

        // Atraso para que os corações surjam em sequência
        smallHeart.style.animationDelay = `${i * 0.1}s`; 
        
        smallHeartsContainer.appendChild(smallHeart);

        // Remove o coração pequeno após a animação para limpar o DOM
        smallHeart.addEventListener('animationend', () => {
            smallHeart.remove();
        });
    }
}
