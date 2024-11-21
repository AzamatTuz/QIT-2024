let num = +prompt('Factorial');

function fact(a) {
    let res = 1;

    for (let i = 1;i <= a; i++ ) {
        res *= i;
    }

    return res;
}

alert('Factorial ' + fact(num));