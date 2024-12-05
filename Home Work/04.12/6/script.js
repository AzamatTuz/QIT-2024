const students = [
    { id: 1, name: "A" },
    { id: 2, name: "A" },
    { id: 3, name: "A" },
    { id: 4, name: "A" },
    { id: 5, name: "A" },
];

let even = students.filter((student) => student.id % 2 == 0);
let odd = students.filter((student) => student.id % 2 != 0);

console.log(even);
console.log(odd);

