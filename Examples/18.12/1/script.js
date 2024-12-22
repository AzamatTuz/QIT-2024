const row = document.querySelector('.row');


const data = ['color', 'size', 'weight', 'type'];

data.forEach((item) => {
    const pill = document.createElement('span');
    pill.textContent = item;
    pill.style.background = 'gray';
    pill.style.padding = '10px';
    pill.style.color = 'white';
    pill.style.borderRadius = '20px';
    pill.style.margin = '10px'
    pill.style.transition = '0.5s all'

    row.appendChild(pill);

    const close = document.createElement('button');
    close.textContent = 'x';

    row.appendChild(close);

    close.addEventListener('click', () => {
        pill.remove()
        close.remove()
    })

    pill.addEventListener('dblclick', () => {
        const fix = document.createElement('input');

        row.replaceChild(fix, pill)
    })
});

const parent = document.getElementById('container');
const child = document.getElementById('first');
const button = document.getElementById('removeButton');

button.addEventListener('click', () => {
    parent.removeChild(child);
});


