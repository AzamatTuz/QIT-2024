let a = Number(prompt("1-ші санды жаз"));
let plus = prompt('+, *, /, -');
let b = Number(prompt("2-ші санды жаз"));
let answer = "";

switch (plus) {
    case "+":
        answer += a + b;
        break;
    case "-":
        answer += a - b;
        break;
    case "*":
        answer += a * b;
        break;
    case "/":
        answer += a / b;
        break;
    default:
        break;
}
alert(answer)