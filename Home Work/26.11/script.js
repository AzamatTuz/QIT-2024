let arr = [];

while (true) {
    let num = +prompt('San engiz');
    
    if (num % 2 == 0) {
        arr.push(num);
    } if (num % 2 != 0) {
        break;
    }
}

console.log(arr);
