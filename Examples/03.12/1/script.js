const user = {
    name: 'Alia',
    age: 28,
    hobbies: ['Drawing', 'Cooking', 'Playing'],
    listHobbies: function () {
        return this.hobbies.join('\n')
    },
}

function addHobies() {
    let newHobby = prompt('Enter a new hobby');
    user.hobbies.push(newHobby);
}

function listShortHobbies() {
    return user.hobbies.filter(hobby => hobby.length < 10);
}

addHobies()
console.log(listShortHobbies());
