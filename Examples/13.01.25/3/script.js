let timer = document.getElementById('timer');
let second = document.getElementById('secondInput');
let startBtn = document.getElementById('start');



startBtn.addEventListener('click', () => {
    if (second.value == "") {

    } else {
        let num = second.value;
        second.value = ""
        timer.textContent = num;
        const interval = setInterval(() => {
            num--;
            timer.textContent = num;

            if (num == 0) {
                timer.textContent = 'The End'
                clearInterval(interval);
            }
            num.value = ""
        }, 1000)
    }
})