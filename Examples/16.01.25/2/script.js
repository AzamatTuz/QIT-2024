const image = document.getElementById('image');
const btn = document.getElementById('downloadBtn');

btn.addEventListener('click', fetchData)

async function fetchData() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error('Postartdy alu mumkin emes');
        }
        const data = await response.json();
        image.src = data.message
        
    } catch (error) {
        console.error('Kate', error);
    }
};