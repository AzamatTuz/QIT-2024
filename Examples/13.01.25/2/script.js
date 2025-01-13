const users = [
    { id: 1, name: 'Azamat', age: 16 },
    { id: 1, name: 'Zeiin', age: 19 },
    { id: 1, name: 'Danial', age: 19 },
];

let i = 0;

function fatchData() {
    console.log('Derekterdi alu');
    const interval = setInterval(() => {
        console.log(users[i]);
        if (i == users.length - 1) {
            clearInterval(interval)
        }
        i++;
    }, 2000)
    // setTimeout(() => {
    //     console.log('Derekter alyndy');
    //     console.log(users);
    // }, 2000);
}

fatchData()