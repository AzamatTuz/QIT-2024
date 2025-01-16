const apiKey = 'fb2cff02b71168e9f0c68fd3f83d168a';
const weatherBtn = document.getElementById('weatherBtn');
const cont = document.getElementById('cont')

weatherBtn.addEventListener('click', fetchData)

function fetchData() {
    const city = document.getElementById('weatherInput').value.trim()
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;`
    city.value = ""
    fetch(api)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name
            const weather = data.main.temp
            const weatherDescription = data.weather[0].description
            const weatherText = document.createElement('h4');
            const cityNameText = document.createElement('h1');
            const weatherDescriptionText = document.createElement('h4');
            const div = document.createElement('div');
            div.classList.add('weather')

            cityNameText.textContent = cityName
            weatherText.textContent ='Temperature: ' + weather + ' K'
            weatherDescriptionText.textContent ='Weather: ' + weatherDescription

            div.appendChild(cityNameText)
            div.appendChild(weatherText)
            div.appendChild(weatherDescriptionText)

            cont.appendChild(div)
            
        })

        .catch(error => console.error('Kate oryn aldy', error));
}