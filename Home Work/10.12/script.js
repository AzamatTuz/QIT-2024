const mainText = document.getElementById('main-text');
const text = document.getElementById('text');
const cursiveText = document.getElementById('cursive-text');
const buttonText = document.getElementById('buttonText');

function translateText() {
    mainText.textContent = 'Добро пожаловать в мир DOM!';
    text.textContent = 'Вы знали? JavaScript может сделать веб-страницы интерактивными.Изучение DOM — ваш первый шаг к веб-волшебству!';
    cursiveText.textContent = 'Интересный факт: DOM означает объектную модель документа.';
    buttonText.textContent = 'My name is "Azamat"';
}
