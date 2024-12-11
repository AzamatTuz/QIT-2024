const number = document.getElementById('number');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
let i = 0;
number.textContent = i

minus.addEventListener('click',  () => {
    i--;
    number.textContent = i;
})

plus.addEventListener('click', function () {
    i++;
    number.textContent = i;
})

