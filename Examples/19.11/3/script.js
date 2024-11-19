let num1 = +prompt('1.Enter Number');
let num2 = +prompt('2.Enter Number');
let num3 = +prompt('3.Enter Number');

function findMax(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
}

alert('Max number ' + findMax(num1, num2, num3))