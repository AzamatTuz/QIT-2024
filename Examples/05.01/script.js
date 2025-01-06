const calcInput = document.getElementById('calcInput');
const reset = document.getElementById('reset');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multi = document.getElementById('multi');
const separation = document.getElementById('separation');
const calculated = document.getElementById('calculated');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const dote = document.getElementById('dote');
const precent = document.getElementById('precent')

calcInput.value = "";
let firstNumber;
let calc;
let variable;

precent.addEventListener('click', () => {
    calcInput.value = Number(calcInput.value) / 100 
})

plus.addEventListener('click', () => {
    firstNumber = calcInput.value
    calcInput.value = ""
    variable = '+'
});

minus.addEventListener('click', () => {
    firstNumber = calcInput.value
    calcInput.value = ""
    variable = '-'
});

multi.addEventListener('click', () => {
    firstNumber = calcInput.value
    calcInput.value = ""
    variable = '*'
});

separation.addEventListener('click', () => {
    firstNumber = calcInput.value
    calcInput.value = ""
    variable = '/'
});

one.addEventListener('click', () => {
    calcInput.value += '1'
});

two.addEventListener('click', () => {
    calcInput.value += '2'
});

three.addEventListener('click', () => {
    calcInput.value += '3'
});

four.addEventListener('click', () => {
    calcInput.value += '4'
});

five.addEventListener('click', () => {
    calcInput.value += '5'
});

six.addEventListener('click', () => {
    calcInput.value += '6'
});

seven.addEventListener('click', () => {
    calcInput.value += '7'
});

eight.addEventListener('click', () => {
    calcInput.value += '8'
});

nine.addEventListener('click', () => {
    calcInput.value += '9'
});

zero.addEventListener('click', () => {
    calcInput.value += '0'
});

reset.addEventListener('click', () => {
    calcInput.value = "";
});

dote.addEventListener('click', () => {
    calcInput.value += '.';
})

calculated.addEventListener('click', () => {
    if (variable == '+') {
        calc = Number(firstNumber) + Number(calcInput.value)
        calcInput.value = calc
    } else if (variable == '-') {
        calc = Number(firstNumber) - Number(calcInput.value)
        calcInput.value = calc
    } else if (variable == '*') {
        calc = Number(firstNumber) * Number(calcInput.value)
        calcInput.value = calc
    } else if (variable == '/') {
        calc = Number(firstNumber) / Number(calcInput.value)
        calcInput.value = calc
    }
});