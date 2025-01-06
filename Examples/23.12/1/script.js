const searchInput = document.getElementById('searchInput');
const btn = document.getElementById('myButton');
let i = 1;

btn.addEventListener('click', () => {   
    searchInput.classList.toggle('apear')
})

btn.addEventListener('dblclick', () => {
    searchInput.classList.toggle('shadow')
})


const showBtn = document.getElementById('showBtn');
const text = document.getElementById('text');

showBtn.addEventListener('click', () => {
    text.classList.toggle('showText')
})