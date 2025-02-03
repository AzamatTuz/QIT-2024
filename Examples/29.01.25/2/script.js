const colorInput = document.getElementById('colorInput');
const saveColor = document.getElementById('saveColor');
const clearColor = document.getElementById('clearColor');
let color;

saveColor.addEventListener('click', () => {
    sessionStorage.setItem('color', colorInput.value);
    color = sessionStorage.getItem('color');
    document.body.style.background = color;
})

color = sessionStorage.getItem('color');
document.body.style.background = color;



clearColor.addEventListener('click', () => {
    sessionStorage.clear();
    document.body.style.background = '#fff';
})