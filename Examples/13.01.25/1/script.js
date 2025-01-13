// setTimeout(() => {
//     console.log(2);
// }, 2000);

// let count = 0;
// const interval = setInterval(() => {
//     count++;
//     console.log(`Санау: ${count}`);
//     if (count === 5) {
//         clearInterval(interval);
//     }
// }, 1000);

function fatchData() {
    console.log("Деректерды алу ...");
    setTimeout(() => {
        console.log("Деректер алынды");
    }, 5000)
};

fatchData()