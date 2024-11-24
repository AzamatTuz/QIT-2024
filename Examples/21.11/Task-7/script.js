function all() {
    let all = 0;
    let cny = +prompt("Neshe CNY bar ?");
    let usd = +prompt('Neshe USD bar ?');
    let kzt = +prompt('Neshe KZT bar ?');

    dollar = cny * 0.14;
    all += dollar;
    dollar = kzt * 0.0020;
    all += dollar;
    all += usd;

    alert('Sizde ' + all + ' USD bar');

    while (true) {
        let order = prompt('Zakaz ber' + '\n' + '1)Pizza 20 USD' + '\n' + '2)Sushi 10 USD' + '\n' + '3)Coffee 5 USD' + '\n' + '4)Fri 1 USD');

        if (order == '1' && all >= 20) {
            all -= 20;
            alert('Sizde ' + Math.round(all) + ' USD kaldy');
        } else if (order == '1' && all < 20) {
            alert('Sizde karajat jetkiliksiz');
            break;
        } else if (order == '2' && all >= 10) {
            all -= 10;
            alert('Sizde ' + Math.round(all) + ' USD kaldy');
        } else if (order == '2' && all < 10) {
            alert('Sizde karajat jetkiliksiz');
            break;
        } else if (order == '3' && all >= 5) {
            all -= 5;
            alert('Sizde ' + Math.round(all) + ' USD kaldy');
        } else if (order == '3' && all < 5) {
            alert('Sizde karajat jetkiliksiz');
            break;
        } else if (order == '4' && all >= 1) {
            all -= 1;
            alert('Sizde ' + Math.round(all) + ' USD kaldy');
        } else if (order == '4' && all < 1) {
            alert('Sizde karajat jetkiliksiz');
            break;
        }
    }

}

all()