const heart = document.getElementById('heartIcon');
const container = document.getElementById('mainContainer');
const content = document.getElementById('content');
const timerDisplay = document.getElementById('timer');

let clicked = false;

heart.addEventListener('click', function() {
    if (!clicked) {
        clicked = true;
        heart.classList.add('clicked-heart');
        document.body.classList.add('pink-bg');
        
        // Mostra o texto após a animação do coração
        setTimeout(() => {
            content.classList.remove('hidden');
            heart.appendChild(content); // Coloca o texto dentro do coração
        }, 300);

        iniciarContador();
    }
});

function iniciarContador() {
    const dataInicio = new Date('2025-02-25T00:00:00');

    setInterval(() => {
        const agora = new Date();
        const diferenca = agora - dataInicio;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / 1000 / 60) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        timerDisplay.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);
}
