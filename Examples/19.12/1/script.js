const todoList = document.getElementById('todoList');
const addButton = document.getElementById('addButton');
const searchButton = document.getElementById('searchButton');

addButton.addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');

    if (taskInput.value !== "") {
        const task = document.createElement('li');
        const span = document.createElement('span');
        const deleteButton = document.createElement('button');

        span.textContent = taskInput.value;
        taskInput.value = "";
        deleteButton.textContent = 'Delete'

        task.style.display = 'flex'
        task.style.justifyContent = 'space-between'
        task.style.background = '#cecece';
        task.style.padding = '20px';
        task.style.width = '300px'
        task.style.listStyle = 'none'
        task.style.border = '2px solid black'
        task.style.margin = '10px'

        task.appendChild(span);
        task.appendChild(deleteButton)
        todoList.appendChild(task)

        deleteButton.addEventListener('click', () => {
            task.remove()
        })

        task.addEventListener('dblclick', () => {
            const changeInput = document.createElement('input');
            changeInput.placeholder = 'Change';

            task.replaceChild(changeInput, span);

            changeInput.addEventListener('blur', () => {
                task.textContent = changeInput.value
                task.appendChild(deleteButton)
            })
        })
    }
})

searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput');

    const tasks = document.querySelectorAll('li');

    tasks.forEach((task) => {
        const text = task.querySelector('span');
        if (!text.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            task.style.display = 'none'
        } else {
            task.style.display = 'flex'
        }
    })
})