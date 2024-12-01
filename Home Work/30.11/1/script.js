const fillArray = (name) => {
    let array = [];

    while (true) {
        let thing = prompt(`${name} engiz`);

        if (thing === 'stop') break;

        if (!isNaN(Number(thing))) {
            array.push(Number(thing));
        } else {
            array.push(thing);
        }
    }

    return array;
};

let numbers = fillArray('San').filter((element) => element >= 50);
let fiftyMulti = numbers.map((element) => element * 2);

console.log(fiftyMulti);
