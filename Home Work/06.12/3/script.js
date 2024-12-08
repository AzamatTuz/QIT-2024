const students = [
    { name: 'Darkhan', age: 16, grade: 87 },
    { name: 'Arman', age: 18, grade: 100 },
    { name: 'Maksat', age: 21, grade: 70 },
    { name: 'Diana', age: 19, grade: 50 },
    { name: 'Miras', age: 13, grade: 95 },
];

students.sort((a, b) => a.age - b.age);

alert(`En jas studenttin jasy ${students[0].age}, esimi ${students[0].name}, bagasy ${students[0].grade}`);
alert(`En ulken studenttin jasy ${students[students.length - 1].age}, esimi ${students[students.length - 1].name}, bagasy ${students[students.length - 1].grade}`);