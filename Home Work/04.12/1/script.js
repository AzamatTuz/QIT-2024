const school = [
    { name: 'Azamat', grade: [84, 65, 75] },
    { name: 'Beibarys', grade: [85, 90, 100] },
    { name: 'Erkebulan', grade: [85, 95, 75] },
    { name: 'Zeiin', grade: [90, 95, 100] },
];

function oddGrade() {
    return school[1].grade.reduce((total, grade) => total + grade, 0);
};

console.log(Math.round(oddGrade() / school[1].grade.length));

