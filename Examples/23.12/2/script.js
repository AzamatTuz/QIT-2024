const button = document.getElementById('theme');
const texts = document.querySelectorAll('.text');
const body = document.getElementById('body');

button.addEventListener('click', () => {
    texts.forEach((text) => {
        text.classList.toggle('darkText')
    })
    body.classList.toggle('darkTheme');
    button.classList.toggle('darkBtn');
})

