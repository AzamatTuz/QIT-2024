let money = +prompt('All money');
let kurs = prompt('Dollar or Tenge');

function conv(a, b) {
    switch (b) {
        case "Dollar":
            return a * 494.4 + " Tenge";
        case "Tenge":
            return a / 494.4 + " Dollar";
        default:
            return "Dyrys engiz"
    }
}

alert(conv(money, kurs))