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

            if (toCurrency.value != '' && amount.value != '') {
                text.textContent = Number(amount.value) * data.rates[toCurrency.value] + ' ' + toCurrency.value;

                toCurrency.value = '';
                amount.value = '';
            }

        })
    } catch (error) {
        console.error('Kate: ' + error);

    }
}

fetchData()
