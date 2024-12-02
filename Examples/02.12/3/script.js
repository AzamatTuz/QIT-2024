const calc = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multi: function (a, b) {
        return a * b;
    },
}

function menu() {
    let num1 = +prompt('San 1');
    let num2 = +prompt('San 2');
    let test = prompt('minus/plus/multi');

    switch (test) {
        case 'minus':
            alert(calc.minus(num1, num2))
            break;
        case 'plus':
            alert(calc.plus(num1, num2))
            break;
        case 'multi':
            alert(calc.multi(num1, num2))
            break;
        default:
            break;
    }
}

menu();