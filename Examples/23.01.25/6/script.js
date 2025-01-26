const apiKey = 'https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films';
const nameFilm = document.getElementById('nameFilm');
const textFilm = document.getElementById('textFilm');
const filmImage = document.getElementById('filmImage');
const searchFilm = document.getElementById('searchFilm');
const textFilmName = document.getElementById('textFilmName');

async function fetchData() {
    try {
        const response = await fetch(apiKey);
        const data = await response.json();
        console.log(data);
        

        searchFilm.addEventListener('click', () => {
            for(let i = 0; i < data.length; i++) {
                if (data[i].filmName == nameFilm.value) {
                    nameFilm.value = '';
                    filmImage.src = data[i].image
                    textFilm.textContent = `Жанры: ${data[i].Genre}`;
                    textFilmName.textContent = data[i].filmName;
                }
            }
        })

    } catch (error) {
        console.error('Kate: ' + error);
        
    }

}

fetchData()