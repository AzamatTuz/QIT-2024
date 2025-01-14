const container = document.getElementById('container');

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())

        .then(data => {

            data.forEach(user => {
                const userName = user.name
                const userEmail = user.email
                const emailText = document.createElement('h3');
                const nameText = document.createElement('h1');
                const userCont = document.createElement('div');

                emailText.classList.add('emailText')
                nameText.classList.add('nameText')
                userCont.classList.add('userCont')

                nameText.textContent = 'User name: ' + userName;
                emailText.textContent = 'User email: ' + userEmail;

                userCont.appendChild(nameText)
                userCont.appendChild(emailText)

                container.appendChild(userCont)
            });
        })

        .catch(error => console.error('Kate oryn aldy', error));
};

fetchData()