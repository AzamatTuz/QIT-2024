const textSec = document.getElementById('text');
let text = "Animation Text" 
let textArray = text.split('');
let message = "";
let i = 0;
console.log(textArray);

const interval = setInterval(() => {
        message += textArray[i]
        textSec.textContent = message
        i++;
        if (i == textArray.length) {
            clearInterval(interval)
        }
}, 100);