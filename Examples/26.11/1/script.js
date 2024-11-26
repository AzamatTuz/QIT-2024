let arr = [0, 1, 2, 3, 4, 5];

console.log(arr[2]);

let fruits = ['Alma', 'Banan', 'Shie']
let fruits1 = fruits;
fruits[1] = 'Mango'
fruits[0] = 'Orange'

console.log(fruits);
console.log(fruits1);

let page1 = arr.slice(0, 2);
let page2 = arr.slice(2, 4);
let page3 = arr.slice(4, 6);

console.log(`${page1}\n\n${page2}\n\n${page3}`);



