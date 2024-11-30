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