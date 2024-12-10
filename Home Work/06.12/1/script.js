const people = [

];

function addPerson() {
    for (let i = 1; i <= 3; i++) {
        let addName = prompt('Adam atyn engiz');
        let addAge = +prompt('Adam jasyn engiz');

        people.push({ name: addName, age: addAge, });
    }

    for (let i = 0; i < people.length; i++) {
        alert(`Aty ${people[i].name} jasy ${people[i].age}`);
    }
}

addPerson()