let num1 = +prompt("Enter Number");
let num2 = +prompt("Enter Number");

const findMax = (a, b) => {
    if (a > b) {
        return 'Max ' + a;
    } else {
        return 'Max ' + b;
    }
}

const findMin = (a, b) => {
    if (a > b) {
        return 'Min ' + b;
    } else {
        return 'Min ' + a;
    }
}

alert(findMax(num1, num2));
alert(findMin(num1, num2));
