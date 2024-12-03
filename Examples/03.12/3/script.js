const user = {
    name: 'Alia',
    age: 28,
    hobbies: [
        { name: 'Atka minu', year: 2013 },
        { name: 'Kitap oku', year: 2010 },
        { name: 'Oiyndar',   year: 2009 },
        { name: 'Walking',   year: 2016 },
        { name: 'Drawing',   year: 2018 },
    ],
    hobbyLater: function () {
        return this.hobbies.filter((hobby) => hobby.year >= 2013);
    }
};

console.log(user.hobbyLater());

