// for ( let i = 1; i <= 5; i++) {
//     var quest = prompt('Дұрыс парольды енгіз');
//     if (quest == 'amjilt_the_best') {
//         alert('ok')
//         break;
//     }
// }


let i = 1;


while (i <= 5) {
    let password = prompt('Your password');
    if (password == 'amjilt_the_best') {
        alert('ok');
        break;
    }

    if (i == 5) {
        alert('Too many attempts');
        break;
    }

    i++;
}