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
