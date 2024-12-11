const shenber = document.getElementById('shenber');
const scale = document.getElementById('scale');
const color = document.getElementById('color')

scale.addEventListener('click', () => {
    let num = +prompt('Olshemin jaz');

    shenber.style.width = num + "px";
    shenber.style.height = num + "px";
});

color.addEventListener('click', () => {
    let colorName = prompt('Tusti jaz eng');
    let colorName2 = prompt('Tusti jaz eng');

    shenber.style.background = colorName
    shenber.style.background = `linear-gradient(90deg, ${colorName} 0%, ${colorName2} 100%)`
})