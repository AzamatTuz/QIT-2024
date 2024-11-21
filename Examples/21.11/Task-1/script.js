function findNumber() {
    let number = 88;
    while (true) {
        let find = +prompt('Sandy tap 0 - 100');

        if (find == number) {
            return 'Durys';
        } else if (find > number) {
            alert('Senin sanyn ulken');
        } else if (find < number) {
            alert('Senin sanyn kishi');
        }
        
        if (number - find > 5) {
            alert('Sen alyssyn');
        } else if (number - find <= 5) {
            alert('Sen jakynsyn');
        } else {
            alert('Dyrys san engiz');
        }
    }
}

alert(findNumber())