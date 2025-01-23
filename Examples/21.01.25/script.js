const timerText = document.getElementById('timerText');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let timer;
let time = 0;
let isRunning = false;

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
        startBtn.textContent = 'Пауза'
    } else {
        startBtn.textContent = 'Продолжить'
        stopTimer();
    }
});

function startTimer() {
    isRunning = true;
    timer = setInterval(() => {
        time++;
        displayTime();
    }, 1000);
};

resetBtn.addEventListener('click', resetTimer);

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
};

function resetTimer() {
    isRunning = false;
    time = 0;
    clearInterval(timer);
    startBtn.textContent = 'Старт';
    displayTime();
};

function displayTime() {
    const minute = Math.floor(time / 60);
    const second = time % 60;
    timerText.textContent = `${padZero(minute)} : ${padZero(second)}`;
};

function padZero(number) {
    return number < 10 ? `0${number}` : number;
}