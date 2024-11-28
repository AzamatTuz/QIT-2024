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