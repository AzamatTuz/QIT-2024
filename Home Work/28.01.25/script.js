const areaText = document.getElementById('areaText');
const saveData = document.getElementById('saveData');
const clearData = document.getElementById('clearData');

saveData.addEventListener('click', save);
clearData.addEventListener('click', clear);

function save() {
    localStorage.setItem('data', areaText.value);
    areaText.value = "";
};

function clear() {
    localStorage.clear();
    areaText.value = "";
};


const area = localStorage.getItem('data');
areaText.value = area;