function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then(response => response.json())
    .then(data => {
        const title = data.title;
        const postBody = data.body;

        document.body.innerHTML = `
        <h2>Загаловок поста:${title}</h2>
        <p> Содержания:${postBody} </p>
        `
    })
    .catch(error => console.error('Kate oryn aldy', error));
}

fetchData()