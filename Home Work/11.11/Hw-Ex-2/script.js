var n = Number(prompt('Сан енгізіңіз'));
var total = 0;

if (n > 0) {
    var total = n * (n - 1);
    alert(total)
} else {
    alert('Оң ссан енгізіңіз')
}