const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        header.style.margin = '0';
        header.style.padding = '0';
        header.style.background = 'black'
        header.style.top = '0'
        header.style.borderRadius = '0'
    } else {
        header.style.margin = '10px';
        header.style.padding = '15px';
    }

})