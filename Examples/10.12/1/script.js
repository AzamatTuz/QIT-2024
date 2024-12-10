const heading = document.getElementById('heading');
console.log(heading.textContent);

const boxes = document.getElementsByClassName('box');
console.log(boxes[0].textContent);

const firstBox = document.querySelector('.box');
console.log(firstBox.textContent);

const allBoxes = document.querySelectorAll('.box');
allBoxes.forEach((box) => console.log(box.textContent));

firstBox.innerHTML = '<b>Hello World!</b>'

boxes[1].innerHTML = '<i>Good bye!</i>'

heading.textContent = 'Kazakhstan'


