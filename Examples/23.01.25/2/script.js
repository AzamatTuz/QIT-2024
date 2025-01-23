const cont = document.getElementById('cont');
const apiKey = 'https://jsonplaceholder.typicode.com/todos';

async function fetchData() {
    try {
        const response = await fetch(apiKey);
        const data = await response.json();
        

        data.forEach((toDo) => {
            const title = document.createElement('h1');
            const complete = document.createElement('div');
            const div = document.createElement('div');
            div.classList.add('cont')
            complete.classList.add('complete');

            if (toDo.completed) {
                complete.style.background = 'green';
            } else {
                complete.style.background = 'red';
            }

            title.textContent = toDo.title;

            div.appendChild(title);
            div.appendChild(complete);

            cont.appendChild(div)
        });
        

    } catch (error) {
        console.error('Kate: ' + error)
    }
}

fetchData()