let cities = ['Almaty', 'Atyrau', 'Aktau', 'Shymkent', 'Astana'];
let worldCities = ['London', 'Paris', 'Tokyo', 'Oslo', 'Dubai'];

let allcities = cities.concat(worldCities);
let string = allcities.join(', ')

let join = "Almaty, Astana, Shymkent";
let split = join.split("")

console.log(string);
console.log(split);

Task
let quest = prompt('Enter a city in the Kazakhstan');

if (cities.indexOf(quest) >= 0) {
    alert('Kala Bar');
} else {
    alert('Kala jok')
}
