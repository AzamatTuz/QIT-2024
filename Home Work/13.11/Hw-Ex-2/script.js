let quest1 = +prompt('(100 * 50 * 20) / 50');
let score = 0;

if (quest1 == 2000) {
    score += 5;
} else {
    score -= 5;
}

let quest2 = +prompt('(20 * 10 * 40) / 20');

if (quest2 == 400) {
    score += 5;
} else {
    score -= 5;
}

let quest3 = +prompt('(50 * 70 * 80) / 10');

if (quest2 == 28000) {
    score += 5;
} else {
    score -= 5;
}

alert('Барлық ұпай саны ' + score)