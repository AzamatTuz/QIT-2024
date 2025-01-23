const apiKey = 'https://randomuser.me/api/'

async function fetchData() {
    try {
        const response = await fetch(apiKey);
        const data = await response.json();

        const name = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
        
        console.log('Name: ' + name);
        console.log('Email: ' + data.results[0].email);
        console.log('Gender: ' + data.results[0].gender);

    } catch (error) {
        console.error('Kate ' + error)
    }
};

fetchData()