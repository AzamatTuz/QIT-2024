const image = document.getElementById('image');
const btn = document.getElementById('downloadBtn');

btn.addEventListener('click', fetchData)

function fetchData() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const imageData = data.message
            console.log(imageData);

            image.src = imageData

        })

        .catch(error => console.error('Kate oryn aldy', error));
}


