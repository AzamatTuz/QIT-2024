const cont = document.getElementById('cont');
const apiKey = 'https://randomuser.me/api/'

async function fetchData() {
    try {
        const response = await fetch(apiKey);
        const data = await response.json();
        console.log(data);

        console.log(data.results[0].name);
        

        const name = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last
        
        cont.innerHTML = `
        <div id="cont">
            <h1> Name: ${name} </h1>
            <h3> Email: ${data.results[0].email} </h3>
            <h5> Gender: ${data.results[0].gender} </h5>
        </div>
        `

    } catch (error) {
        console.error('Kate ' + error)
    }
};

fetchData()