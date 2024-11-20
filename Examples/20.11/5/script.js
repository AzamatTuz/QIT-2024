function eur() {
    let results = 0;
    let euro = 0;   

    while (true) {
        var money = prompt("Cash");
        var cash = Number(money.match(/\d+/g));
        var kurs = money.match(/[a-zA-Z]+/g);

        if (kurs == 'EUR') {
            results += cash;
        } else if (kurs == 'USD') {
            euro = cash / 1.06;
            results += euro;
        } else if (kurs == 'KZT') {
            euro = cash / 524;
            results += euro;
        } else if (cash == 0) {
            break;
        }
    }

    return 'Your euros: ' + Math.round(results);
}

alert(eur())

