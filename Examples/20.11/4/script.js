function eur() {
    let results = 0;
    let euro = 0;   

    while (true) {
        let cash = +prompt('Enter your cash!');

        if (cash == 0) {
            break
        }

        let kurs = prompt('EUR // USD // KZT');

        if (kurs == 'EUR') {
            results += cash;
        } else if (kurs == 'USD') {
            euro = cash / 1.06;
            results += euro;
        } else if (kurs == 'KZT') {
            euro = cash / 524;
            results += euro;
        }

    }

    return 'Your euros: ' + Math.round(results);
}

alert(eur());