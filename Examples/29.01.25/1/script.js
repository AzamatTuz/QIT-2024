const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');
const textArea = document.getElementById('textArea');
const getBtn = document.getElementById('getBtn');
const cont = document.getElementById('cont');
let i = 0;

saveBtn.addEventListener('click', saveData);
getBtn.addEventListener('click', getData);
clearBtn.addEventListener('click', clearData)

function saveData() {
    if (textArea.value != '') {
        sessionStorage.setItem('text', textArea.value);
        textArea.value = '';
    }

}

function getData() {
    const text = sessionStorage.getItem('text');
    if (text) {
        const area = document.createElement('li');
        area.textContent = text;

        cont.appendChild(area);
    }
}

function clearData() {
    sessionStorage.clear();
}
