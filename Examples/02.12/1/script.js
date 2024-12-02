let numbers = [4, 5, 6, 7, 8, 9, 10];

function moreThan(num, array) {
    return array.filter((element) => element > num);
}

function sumOfelements(array) {
    return array.reduce((total, element) => total + element);
}

function average(array) {
    return sumOfelements(array) / numbers.length;
}

function addNumber(array) {
    let number = +prompt('san engiz');
    return array.push(number);
}

function menu() {
    while (true) {
        let choise = +prompt(
            numbers + 
                '\n1) Sandar kosyndysyn tabu\n2) Ortasha manin tabu\n3) Sandardy suzip alu\n4) Sandar qosu\n5) Shygu'
        )
    
        switch (choise) {
            case 1:
                alert(sumOfelements(numbers));
                break;
            case 2:
                alert(average(numbers));
                break;
            case 3:
                alert(moreThan(numbers));
                break;
            case 4:
                addNumber(numbers);
                break;
            case 5:
                return;
        }
    }
}

menu();