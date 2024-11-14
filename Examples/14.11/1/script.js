let result = 0;
let number = 1;
let students = +prompt('Студент санын енгіз');

while (number <= students ) {
    var q = +prompt('Baga');
    result += q
    number++

    if (q < 0 || q > 5) {
        q = +prompt('Baga++');
    } 
}

alert(Math.round(result / students));
