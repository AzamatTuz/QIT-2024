const formText = document.getElementById('textForm');
const text = document.getElementById('text');
const changeText = document.getElementById('changeText');
const submitText = document.getElementById('submitText');

text.addEventListener('input', () => {
    changeText.textContent = text.value;
})

formText.addEventListener('submit', (event) => {
    event.preventDefault()

    submitText.textContent = text.value;
    changeText.textContent = ""
})

