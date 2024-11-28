// let cities = ['Almaty', 'Atyrau', 'Aktau', 'Shymkent', 'Astana'];
// // cities.push('Kyzylorda', 'Semei');
// // cities.unshift('London');

// // console.log(cities);

// // let a = cities.pop();
// // console.log(cities);

// // let b = cities.shift();
// // console.log(cities);

// // console.log(cities[2]);

// cities[3] = 'Kokshetau';
// cities[cities.length - 1] = 'Oral'

// let arr = cities;
// arr[2] = 'London'

// console.log(cities);
// console.log(arr);

let numbers = [1, 22, 67, 5, 3, 9, 8]
// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);
// numbers.reverse();

// numbers.slice();
// numbers.slice(2);
// let numbers1 = numbers.slice(2, 4);

// numbers.splice(2, 0, 5, 99, 25);


let a = +prompt('Enter a number')

if (numbers.includes(a)) {
    console.log('Found in the array');
} else {
    console.log('Not in the array');
}




console.log(numbers);