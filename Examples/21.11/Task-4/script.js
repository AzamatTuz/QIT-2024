function all() {
    let num1 = +prompt('1 number');
    let num2 = +prompt('2 number');
    let num3 = +prompt('3 number');
    let num4 = +prompt('4 number');
    let num5 = +prompt('5 number');

    return (num1 + num2 + num3 + num4 + num5) / 5;
}

alert(all());