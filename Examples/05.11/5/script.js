var score = 0;

var question1 = prompt("Какая страна самая большая?").toString();

if (question1 == "Россия" || question1 == "Russia") {
    score++
    alert("Durys +1")
} else {
    alert("Kate")
} 

var question2 = prompt("Сколько месяцев в году?").toString();

if (question2 == "12") {
    score++
    alert("Durys +1")
} else {
    alert("Kate")
} 

var question3 = prompt("2+2*2=?");

if (question3 == 6) {
    score++
    alert("Durys +1")
} else {
    alert("Kate")
} 

alert("Senin upaiyn " + score)