const buttons = document.querySelectorAll('button');
const calcInput = document.getElementById('calcInput');
let operators = ["+", "-", "*", "/", "%"];

let output = "";
let sliced = "";

function calc(btnValue) {

    if (btnValue == '=' && output !== "") {
        output = eval(output);
    } else if (btnValue == 'C') {
        output = ""
    } else if (btnValue == '+/-') {
        output *= -1
    } else if (btnValue == 'DEL') {
        output = output.slice(0, -1);
    } else {
        if (operators.includes(btnValue) && operators.includes(output[output.length - 1])) {
            output = output.slice(0, -1) + btnValue
        } else {
            output += btnValue
        }
    }

    calcInput.value = output

}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        calc(e.target.dataset.value)
    })
})