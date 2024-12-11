const box = document.querySelector('#box');

box.style.height = '200px'
box.style.width = '200px'
box.style.background = 'white'
box.style.border = '5px solid black'

box.addEventListener('mouseenter', function () {
    box.style.background = 'blue'
})

box.addEventListener('mouseleave', function () {
    box.style.background = 'white'
})