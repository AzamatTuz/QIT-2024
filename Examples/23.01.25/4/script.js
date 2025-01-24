const cont = document.getElementById('cont');
const apikey = 'https://jsonplaceholder.typicode.com/users';
async function fetchData() {
    try {
        const response = await fetch(apikey);
        const data = await response.json();

        data.forEach((user) => {

            const div = document.createElement('div');
            div.innerHTML = `
            <h1> Name: ${user.name} </h1>
            <h3> Email: ${user.email} </h3>
            `

            cont.appendChild(div)
        });
    } catch (error) {
        console.error('Kate ' + error);
    }
}

fetchData()