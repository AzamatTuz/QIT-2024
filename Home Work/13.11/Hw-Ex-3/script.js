let a = +prompt('a');
let b = +prompt('b');
let res4 = 1;
let res7 = 1; 

while (a < b) {
    a++;
    
    if (a % 4 == 0) {
        res4 *= a;
    } else if (a % 7 == 0) {
        res7 *= a;
    }
    
}

console.log(res4);
console.log(res7);

