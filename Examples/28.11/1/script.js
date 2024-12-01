// const fillArray = () => {
//     let array = [];

//     while (true) {
//         let thing = prompt('Zat engiz');

//         if (thing === 'stop') break;

//         if (!isNaN(Number(thing))) {
//             array.push(Number(thing));
//         } else {
//             array.push(thing);
//         }
//     }

//     return array;
// };

// console.log(fillArray());


let array = [1, 5, 6, 5, 4, 7, 8];

// for (let element of array) {
//     console.log(element);
// }

array.forEach(function(element) {
    console.log(element);  
})

// let doubled = array.map((element) => element * 2);
// let squared = array.map((element) => element * element);
// // 
// console.log(`Eki eselengen sandar ${doubled}`);
// console.log(`Kvadrat sandar ${squared}`);

// let array = [-3, 5, 4, -2, 9, 7];
// let evens = array.filter((element) => element % 2 === 0);
// let odd = array.filter((element) => element % 2 !== 0);
// let minus = array.filter((element) => element < 0);
// let plus = array.filter((element) => element > 0);

// console.log(`On sandar ${plus}`);
// console.log(`Teris sandar ${minus}`);


// console.log(`Jup sandar ${evens}`);
// console.log(`Tak sandar ${odd}`);

