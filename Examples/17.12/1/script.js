const errorMessage = document.getElementById('errorMessage');
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = document.getElementById('name').value;
    const surnameValue = document.getElementById('surname').value;
    const timeValue = document.getElementById('time').value;

    if (nameValue === "" || timeValue === "" || surnameValue === "") {
        errorMessage.style.transform = 'translateY(-40vh)'
        errorMessage.textContent = 'Все поля должны быть заполнены'
    } else {
        errorMessage.style.background = 'green';
        errorMessage.textContent = 'Успешно'
        errorMessage.style.transform = 'translateY(-40vh)'
    }
})

const arrow = document.getElementById('arrow');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        arrow.style.opacity = '1'
        arrow.style.display = 'flex'
    } else {
        arrow.style.opacity = '0'
    }
})