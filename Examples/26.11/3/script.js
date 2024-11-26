let arr = [23, 34, 45, 26, 96, 56, 10];
// let taq = [];
// let jup = [];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max) {
        max = arr[i];
    }
}

console.log('Min ' + max);


// console.log(jup);
// console.log(taq);

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));




