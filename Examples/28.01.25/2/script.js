const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const saveButton = document.getElementById('saveButton');
const getButton = document.getElementById('getButton');
const clearButton = document.getElementById('clearButton');

saveButton.addEventListener('click', () => {
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('age', ageInput.value);

    alert('Data is saved');
});

getButton.addEventListener('click', () => {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');

    if (name && age) {
        alert(`Name: ${name} age: ${age}`);
    } else {
        alert('Data is not find')
    }
    
});

clearButton.addEventListener('click', () => {
    localStorage.clear();

    alert('Clear');
});