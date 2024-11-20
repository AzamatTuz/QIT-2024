function metr() {
    let res = 0;

    while (true) {
        var all = prompt('kerekti olshemdi engiz',);
        var metr = 1;
        var number = Number(all.match(/\d+/g));
        var olshem = all.match(/[a-zA-Z]+/g);

        if (olshem == 'm') {
            res += number;
        } else if (olshem == 'km') {
            metr = number * 1000;
            res += metr;
        } else if (olshem == 'dm') {
            metr = number / 10;
            res += metr;
        } else if (olshem == 'cm') {
            metr = number / 100;
            res += metr;
        } else if (number == 0) {
            break;
        }
    }

    return 'Barlyg kosyndy ' + res;
}

alert(metr())