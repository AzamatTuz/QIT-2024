let resultEven = 0;
let resultOdd = 0;
let num1 = +prompt('1');
let num2 = +prompt('2');
let minNum;
let maxNum;

if (num1 > num2) {
    maxNum = num1
    minNum = num2
} else {
    minNum = num1
    maxNum = num2
}

for (let i = minNum; i <= maxNum; i++) {
    if (i % 2 == 0) {
        resultEven += i
    } else {
        resultOdd += i
    }
}

console.log(resultEven);
console.log(resultOdd);

