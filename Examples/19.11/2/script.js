let num1 = +prompt('1.San engiz');
let num2 = +prompt('2.San engiz');
let tanba = prompt('Tanba engiz (*, /, +, -)');

function calc(a, b, c) {
    switch (c) {
        case '+':
            return a + b
            break;
        case '*':
            return a * b
            break;
        case '-':
            return a - b
            break;
        case '/':
            return a / b
            break;
        default:
            break;
    }
}

alert(calc(num1, num2, tanba))