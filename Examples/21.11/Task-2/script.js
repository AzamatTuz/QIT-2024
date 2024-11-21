let num = +prompt('San engiz')

function findOdd(a) {
    if (a % 2 == 0) {
        return a + ' jup';
    } else if (a % 2 != 0) {
        return a + ' tag';
    }
}

alert(findOdd(num));