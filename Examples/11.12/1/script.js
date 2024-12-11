const myButton = document.getElementById('button');

myButton.addEventListener('click', function () {
    myButton.style.border = '2px solid grey';
    myButton.style.background = '#cecece';
    myButton.style.fontSize = '20px';
    myButton.style.fontFamily = 'sans-serif';
});

myButton.addEventListener('mouseenter', function () {
    myButton.style.padding = '20px 50px';

});

myButton.addEventListener('mouseleave', function () {
    myButton.style.padding = '5px 10px'
});

const text = document.querySelector('#text');

text.addEventListener('click', function () {
    text.style.fontSize = '50px';
});

text.addEventListener('dblclick', function () {
    text.style.color = 'purple'
});





















