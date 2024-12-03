const user = {
    name: 'Alia',
    age: 28,
    hobbies: [
        { name: 'Atka minu', year: 2013 },
        { name: 'Kitap oku', year: 2010 },
        { name: 'Oiyndar',   year: 2020 },
    ],
    addHobby: function (newHobby) {
        this.hobbies.push(newHobby)
    }
};

function addNewHobby() {
    let hobbyName = prompt('enter hobby name: ');
    let hobbyYear = +prompt('Enter Hobby start year: ');
    let newHobby = {
        name: hobbyName,
        year: hobbyYear,
    };

    user.addHobby(newHobby);
}

addNewHobby();

console.log(user.hobbies);
