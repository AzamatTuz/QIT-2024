const box = document.getElementById('square');
const color = document.getElementById('color');
const resterColor = document.getElementById('resetColor');


color.addEventListener('click', () => {
    box.style.background = 'purple' 
});

resterColor.addEventListener('click', () => {
    box.style.background = '#006319'
});

box.addEventListener('mouseenter', () => {
    box.style.background = 'orange'
});

box.addEventListener('mouseleave', () => {
    box.style.background = '#006319'
});

box.addEventListener('dblclick', () => {
    box.textContent = 'Eki ret bsyldy'
}) 