// const apiKey = 'https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films';
let filmLists = [];
const cont = document.querySelector('.cont');

// async function fetchData() {
//     try {
//         const response = await fetch(apiKey);
//         const data = await response.json()
//         console.log(data);

//         data.forEach(film => {
//             filmLists.push(film)
//         });
//         localStorage.setItem('films', JSON.stringify(filmLists));

//         displayData();
//     } catch (error) {
//         console.error('Error', error);

//     }
// }


function displayData() {

    if (filmLists) {

        filmLists.forEach((film) => {
            let div = document.createElement('div');
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove';
            div.classList.add('filmCard');

            div.innerHTML = `
                <img src="${film.image}" alt="">
                <h1>${film.filmName}</h1>
                <h3>${film.Genre}</h3>
            `
            div.appendChild(removeButton);
            cont.appendChild(div);

            localStorage.setItem('films', cont.innerHTML);

            filmLists = [];
            removeButton.addEventListener('click', () => {
                cont.removeChild(div);
                localStorage.setItem('films', cont.innerHTML);
            })
        })
    }
}

displayData();

const addFilmButton = document.getElementById('addFilmButton');
const forma = document.getElementById('form');
const clearFilmBtn = document.getElementById('clearFilmBtn');

addFilmButton.addEventListener('click', () => {
    forma.style.display = 'flex';
});

let addFilmName = document.getElementById('addFilmName');
let addFilmGenre = document.getElementById('addFilmGenre');
let addFilmImage = document.getElementById('addFilmImage');

forma.addEventListener('submit', () => {
    event.preventDefault();
    

    filmLists.push( { filmName: addFilmName.value, Genre: addFilmGenre.value, image: addFilmImage.value } );
    forma.style.display = 'none';
    displayData();
    addFilmName.value = '';
    addFilmGenre.value = '';
    addFilmImage.value = '';
});

clearFilmBtn.addEventListener('click', () => {
    localStorage.clear();
    filmLists = [];
    // fetchData();
    displayData();
});
cont.innerHTML = localStorage.getItem('films');

console.log(localStorage.getItem('films'));
