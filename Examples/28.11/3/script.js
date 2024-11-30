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

// let nameList = fillArray('Tauar atyn');

// let search = prompt('Search...');

// let final = nameList.filter((element) => element.toLowerCase().includes(search));
// console.log(`Tauarlar ${final}`);
// console.log(`Tauarlar ${final.length}`);

let numbers = fillArray('San');

function sumOfNumbers(array) {
    let total = array.reduce((result, element) => result + element, 0);
    console.log(`Sandar gosyndysy ${total}`);
}

function multiplicathionOfNumbers(array) {
    let total = array.reduce((result, element) => result * element, 1);
    console.log(`Sandar kobeitindisi ${total}`);
}

sumOfNumbers(numbers);
multiplicathionOfNumbers(numbers);





