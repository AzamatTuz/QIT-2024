const cards = document.querySelectorAll('.card');
const results = document.getElementById('results');
const start = document.getElementById('startBtn');
const reset = document.getElementById('resetBtn');
const timer = document.getElementById('timer');
let flippedCards = [];
let quessedCard = 0;
let isStart = false;
let timerInterval;
let second = 0;

reset.addEventListener('click', () => {
    flippedCards = [];
    quessedCard = 0;
    second = 0;
    isStart = false;
    suffleImage()

    cards.forEach((card) => {
        card.classList.remove('flip')
    });

    timer.innerHTML = `<div id="timer">Time: ${0} seconds</div>`
    results.innerHTML = `<div id="results">Result: ${0} second</div>`
}) 

start.addEventListener('click', () => {
    isStart = true;
    startTimer();
})

function startTimer() {
    timerInterval = setInterval (() => {
        second++;
        timer.innerHTML = `<div id="timer">Time: ${second} seconds</div>`
    }, 1000)
}

function stopTimer() {
    clearInterval(timerInterval);
    results.innerHTML = `<div id="results">Result: ${second} second</div>`
}

function suffleImage() {

    cards.forEach(card => {

        const num = [...Array(cards.length).keys()]
        const random = Math.floor(Math.random() * cards.length)

        card.style.order = num[random];
    })
};

suffleImage()

cards.forEach((card) => {
    card.addEventListener('click', (e) => {
        if (isStart == false) {
            return
        }

        if (flippedCards.length >= 2) {
            return;
        } else {
            card.classList.add('flip')
            flippedCards.push(card)
        }

        if (flippedCards.length == 2) {
            checkMatch()
        }
    })
})

function checkMatch() {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector('.back-view img').src;
    const img2 = card2.querySelector('.back-view img').src;

    if (img1 == img2) {
        flippedCards = [];
        quessedCard++;
    } else {
        setTimeout(() => {
            flippedCards = [];
            card1.classList.remove('flip');
            card2.classList.remove('flip');
        }, 1000);
    }

    if (quessedCard == 8) {
        stopTimer()
    }
}
