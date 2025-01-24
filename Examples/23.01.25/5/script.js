const apiKey = 'https://api.exchangerate-api.com/v4/latest/USD';
const amount = document.getElementById('amount');
const toCurrency = document.getElementById('toCurrency');
const change = document.getElementById('change');
const text = document.getElementById('text');



async function fetchData() {
    try {
        const response = await fetch(apiKey);
        const data = await response.json()
        console.log(data.rates);
        
        change.addEventListener('click', () => {
            data.rates.forEach(element => {
                console.log(element.toCurrency.value);
            });
            
        })
    } catch (error) {
        console.error('Kate: ' + error);
        
    }
}

fetchData()
