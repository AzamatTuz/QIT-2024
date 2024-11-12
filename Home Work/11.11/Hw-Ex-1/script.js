var a = Number(prompt('a - санын енгізіңіз'));
var b = Number(prompt('b - санын енгізіңіз'));
var c = Number(prompt('c - санын енгізіңіз'));

if (a + b > c || a + c > b || c + b > a) {
    alert('Үш бұрыш жасай алады')
} else {
    alert('Үш бұрыш жасай алмайды')
}