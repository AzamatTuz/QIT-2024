function num() {
    let arr = [];
    
    while (true) {
        let number = +prompt('San engiz');

        if (number == 0) break;

        arr.push(number);
    }
    
    return arr;
}

let arr = num();

let min = arr.filter((element) => element < 0);
let plus = arr.filter((element) => element > 0);

console.log(`Teris sansar ${min}`);
console.log(`On sandar ${plus}`);

