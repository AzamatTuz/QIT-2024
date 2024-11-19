function game() {
    while (true) {
        let answer = 56;
        let quest = +prompt('Sandy engiz');
        if (quest == answer) {
            break;
        } else if (quest > answer) {
            alert('Sanyndy azayt')
        } else if (quest < answer) {
            alert('Sanyndy kobeit')
        }
    }
    return 'Jaraisyn durys taptyn';
}

alert(game());