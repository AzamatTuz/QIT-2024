let arr = [];

while (true) {
    let num = +prompt('San engiz');
    
    if (num < arr[arr.length - 1] ) {
        break;
    }

    arr.push(num);
}

console.log(arr);

