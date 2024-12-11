const text = document.getElementById('text');
const changeText = document.getElementById('changeText');
const changeFone = document.getElementById('changeFone');
const hoverText = document.getElementById('hoverText');
const changeDate = document.getElementById('changeDate');
const resetDate = document.getElementById('resetDate');
const date = document.getElementById('date');
const body = document.getElementById('body');

changeText.addEventListener('click', () => {
    text.textContent = 'Matin ozgerdi'
});

changeFone.addEventListener('click', () => {
    body.style.background = 'blue'
});

changeFone.addEventListener('dblclick', () => {
    body.style.background = 'white'
});

hoverText.addEventListener('mouseenter', () => {
    hoverText.style.color = 'red'
});

hoverText.addEventListener('mouseleave', () => {
    hoverText.style.color = 'black'
});

changeDate.addEventListener('click', () => {
    // date.textContent = Date()
    date.textContent = 'Bugingi kun: 11.12.2024'
});

resetDate.addEventListener('click', () => {
    date.textContent = ""
})