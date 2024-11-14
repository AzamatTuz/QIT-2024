let result = 0;
let number = 1;

do {
    var q = +prompt('Baga');
    result += q
    number++
} while (number <= 12);

alert(Math.round(result / 12));
