function all() {
    let res = 0;
    let res2 = "";

    while (true) {
        let a = prompt('Tauar atauy');
        
        if (a == "F") {
            break;
        } else if (a != "F") {
            res2 += a + "\n"
        }
        
        let b = +prompt('Tauar bagasy');
        res += b;
    }
    return "All summa: " + res + "\n" + res2;
    
}

alert(all());