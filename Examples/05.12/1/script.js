const students = [
    { name: 'Ali',     age: 15, score: 86 },
    { name: 'Rakhat',  age: 18, score: 65 },
    { name: 'Erbolat', age: 17, score: 95 },
    { name: 'Merei',   age: 24, score: 75 },
    { name: 'Miras',   age: 25, score: 93 },
    { name: 'Nurai',   age: 21, score: 86 },
];

function namesOfStudents() {
    students.forEach(function (names) {
        console.log(names.name);
    })
};

function findAge() {
    return students.filter((student) => student.age > 20);
};

function upTen() {
    return students.map((upai) => (upai.score * 0.1) + upai.score);
};

function allScore() {
    return students.reduce((total, upai) => total + upai.score, 0);
};

function bigScore() {
    return students.sort((a, b) => b.score - a.score)[0];
}

console.log(findAge());
namesOfStudents();
console.log(upTen());
console.log(allScore());
console.log(bigScore());


