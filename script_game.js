let totalGames = 0;
let correctAnswers = 0;
let currentStreak = 0;
let perfectGames = 0;
let currentGameCorrect = 0;
let currentRound = 0;
const totalRoundsPerGame = 10;

function atualizarScoreModal() {
    const accuracy = totalGames > 0 ? ((correctAnswers / (totalGames * 10)) * 100).toFixed(1) : "0.0";

    document.getElementById("accuracy").textContent = `${accuracy}%`;
    document.getElementById("perfect-games").textContent = perfectGames;
    document.getElementById("total-games").textContent = totalGames;
    document.getElementById("streak").textContent = currentStreak;
}

function escolherImagem(index) {
    const cards = document.querySelectorAll(".food-card");

    const value0 = parseFloat(cards[0].getAttribute("data-value"));
    const value1 = parseFloat(cards[1].getAttribute("data-value"));

    const chosenValue = parseFloat(cards[index].getAttribute("data-value"));
    const otherValue = parseFloat(cards[1 - index].getAttribute("data-value"));

    const isCorrect = chosenValue >= otherValue;

    const dots = document.querySelectorAll("#score-dots .dot");
    if (isCorrect) {
        dots[currentRound].className = "dot green";
        correctAnswers++;
        currentGameCorrect++;
    } else {
        dots[currentRound].className = "dot red";
    }

    currentRound++;

    if (currentRound === dots.length) {
        totalGames++;

        if (currentGameCorrect === dots.length) {
            perfectGames++;
            currentStreak++;
        } else {
            currentStreak = 0;
        }

        // Mostrar modal final
        mostrarEndModal();

        // Reset para próximo jogo
        currentRound = 0;
        currentGameCorrect = 0;
    }

    atualizarScoreModal();
}

function mostrarEndModal() {
    const dots = document.querySelectorAll("#score-dots .dot");
    const finalDotsContainer = document.getElementById("final-dots");
    finalDotsContainer.innerHTML = "";

    // Clona os dots
    dots.forEach(dot => {
        const finalDot = document.createElement("span");
        finalDot.className = `dot ${dot.classList[1]}`;
        finalDotsContainer.appendChild(finalDot);
    });

    document.getElementById("final-score").textContent = `${currentGameCorrect}/10`;
    document.getElementById("final-accuracy").textContent = `${((correctAnswers / (totalGames * 10)) * 100).toFixed(1)}%`;
    document.getElementById("final-perfect").textContent = perfectGames;
    document.getElementById("final-total").textContent = totalGames;
    document.getElementById("final-streak").textContent = currentStreak;

    document.getElementById("endModal").style.display = "flex";
}

function fecharEndModal() {
    document.getElementById("endModal").style.display = "none";
    window.location.href = "index.html";
}


function openInfoModal() {
    document.getElementById('infoModal').style.display = 'flex';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}

function openScoreModal() {
    document.getElementById('scoreModal').style.display = 'flex';
}

function closeScoreModal() {
    document.getElementById('scoreModal').style.display = 'none';
}

window.onclick = function (event) {
    const infoModal = document.getElementById('infoModal');
    const scoreModal = document.getElementById('scoreModal');

    if (event.target === infoModal) {
        infoModal.style.display = 'none';
    }

    if (event.target === scoreModal) {
        scoreModal.style.display = 'none';
    }
};
